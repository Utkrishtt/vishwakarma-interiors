// Runs after `vite build`. For every post in client/src/data/blog-posts.json it
// writes dist/public/blog/<slug>/index.html with real <title>, meta description,
// canonical, Open Graph, JSON-LD and the article body, so crawlers see content
// without running JavaScript. It also writes dist/public/sitemap.xml.
// Failures are logged and never fail the site build.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist", "public");
const SITE = "https://www.thevishwakarmainteriors.com";
const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;

const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function inline(text) {
  let out = "";
  let last = 0;
  const re = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    out += esc(text.slice(last, m.index));
    if (m[1]) out += `<strong>${esc(m[1])}</strong>`;
    else if ((m[3].startsWith("/") && !m[3].startsWith("//")) || /^https?:\/\//.test(m[3]))
      out += `<a href="${esc(m[3])}">${esc(m[2])}</a>`;
    else out += esc(m[2]);
    last = m.index + m[0].length;
  }
  return out + esc(text.slice(last));
}

function markdownToHtml(md) {
  const out = [];
  let para = [];
  let list = null;
  const flushP = () => {
    if (para.length) out.push(`<p>${inline(para.join(" "))}</p>`);
    para = [];
  };
  const flushL = () => {
    if (list) {
      const tag = list.ordered ? "ol" : "ul";
      out.push(`<${tag}>${list.items.map((i) => `<li>${inline(i)}</li>`).join("")}</${tag}>`);
    }
    list = null;
  };
  for (const raw of String(md).replace(/\r\n/g, "\n").split("\n")) {
    const line = raw.trim();
    let m;
    if (!line) { flushP(); flushL(); }
    else if ((m = line.match(/^###\s+(.+)$/))) { flushP(); flushL(); out.push(`<h3>${inline(m[1])}</h3>`); }
    else if ((m = line.match(/^##\s+(.+)$/))) { flushP(); flushL(); out.push(`<h2>${inline(m[1])}</h2>`); }
    else if ((m = line.match(/^[-*]\s+(.+)$/))) {
      flushP();
      if (!list || list.ordered) { flushL(); list = { ordered: false, items: [] }; }
      list.items.push(m[1]);
    } else if ((m = line.match(/^\d+[.)]\s+(.+)$/))) {
      flushP();
      if (!list || !list.ordered) { flushL(); list = { ordered: true, items: [] }; }
      list.items.push(m[1]);
    } else { flushL(); para.push(line); }
  }
  flushP();
  flushL();
  return out.join("\n");
}

function main() {
  const templatePath = path.join(dist, "index.html");
  if (!fs.existsSync(templatePath)) {
    console.warn("[prerender-blog] dist/public/index.html not found, skipping");
    return;
  }
  const template = fs.readFileSync(templatePath, "utf8");
  const posts = JSON.parse(
    fs.readFileSync(path.join(root, "client", "src", "data", "blog-posts.json"), "utf8"),
  );
  const listed = [];

  for (const post of posts) {
    try {
      if (!post || !SLUG.test(String(post.slug))) {
        console.warn("[prerender-blog] skipping post with invalid slug:", post && post.slug);
        continue;
      }
      const url = `${SITE}/blog/${post.slug}`;
      const title = post.metaTitle || `${post.title} | Vishwakarma Interiors`;
      const image = post.image ? `${SITE}${post.image}` : "";
      const date = new Date(post.date);
      const iso = isNaN(date) ? undefined : date.toISOString();
      const jsonLd = [
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.metaDescription,
          datePublished: iso,
          dateModified: iso,
          image: image || undefined,
          keywords: (post.keywords || []).join(", "),
          mainEntityOfPage: url,
          author: { "@type": "Organization", name: "Vishwakarma Interiors & Decorators" },
          publisher: { "@type": "Organization", name: "Vishwakarma Interiors & Decorators", url: SITE },
        },
      ];
      if (Array.isArray(post.faqs) && post.faqs.length) {
        jsonLd.push({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        });
      }
      const headExtra = [
        `<link rel="canonical" href="${esc(url)}" />`,
        post.draft ? `<meta name="robots" content="noindex, nofollow" />` : "",
        `<meta property="og:type" content="article" />`,
        `<meta property="og:title" content="${esc(post.title)}" />`,
        `<meta property="og:description" content="${esc(post.metaDescription)}" />`,
        `<meta property="og:url" content="${esc(url)}" />`,
        image ? `<meta property="og:image" content="${esc(image)}" />` : "",
        `<meta name="twitter:card" content="summary_large_image" />`,
        ...jsonLd.map((j) => `<script type="application/ld+json">${JSON.stringify(j).replace(/</g, "\\u003c")}</script>`),
      ].filter(Boolean).join("\n    ");

      const body =
        `<article style="max-width:48rem;margin:0 auto;padding:6rem 1rem">` +
        (image ? `<img src="${esc(post.image)}" alt="${esc(post.imageAlt || post.title)}" style="max-width:100%" />` : "") +
        `<h1>${esc(post.title)}</h1>\n${markdownToHtml(post.content)}</article>`;

      let html = template
        .replace(/<title>[\s\S]*?<\/title>/i, `<title>${esc(title)}</title>`)
        .replace(
          /<meta\s+name="description"[^>]*>/i,
          `<meta name="description" content="${esc(post.metaDescription)}" />`,
        )
        .replace("</head>", `    ${headExtra}\n  </head>`)
        .replace('<div id="root"></div>', `<div id="root">${body}</div>`);

      const dir = path.join(dist, "blog", post.slug);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, "index.html"), html);
      if (!post.draft) listed.push({ url, lastmod: iso ? iso.slice(0, 10) : undefined });
      console.log("[prerender-blog] wrote", `/blog/${post.slug}`, post.draft ? "(draft, noindex)" : "");
    } catch (err) {
      console.warn("[prerender-blog] failed for post", post && post.slug, err && err.message);
    }
  }

  const core = ["/", "/about", "/services", "/portfolio", "/contact", "/blog"].map((p) => ({
    url: `${SITE}${p === "/" ? "" : p}`,
  }));
  const urls = [...core, ...listed]
    .map((u) => `  <url><loc>${esc(u.url)}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""}</url>`)
    .join("\n");
  fs.writeFileSync(
    path.join(dist, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  );
  console.log("[prerender-blog] sitemap.xml written with", core.length + listed.length, "urls");
}

try {
  main();
} catch (err) {
  console.warn("[prerender-blog] skipped due to error:", err && err.message);
}
