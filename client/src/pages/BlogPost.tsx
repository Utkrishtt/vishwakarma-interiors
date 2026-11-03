import { useEffect } from "react";
import { Link } from "wouter";
import posts from "@/data/blog-posts.json";
import { renderMarkdown } from "@/lib/blogMarkdown";
import NotFound from "@/pages/NotFound";

type BlogPostData = {
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription: string;
  date: string;
  category?: string;
  tags?: string[];
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  excerpt?: string;
  content: string;
  faqs?: { question: string; answer: string }[];
  draft?: boolean;
};

const SITE_URL = "https://www.thevishwakarmainteriors.com";

function setMeta(selector: string, attr: string, value: string, create: () => HTMLElement) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = (posts as unknown as BlogPostData[]).find(
    (p) => p.slug === params.slug,
  );

  useEffect(() => {
    if (!post) return;
    const previousTitle = document.title;
    const descriptionEl = document.head.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    const previousDescription = descriptionEl?.getAttribute("content") ?? "";

    document.title = post.metaTitle || `${post.title} | Vishwakarma Interiors`;
    setMeta('meta[name="description"]', "content", post.metaDescription, () => {
      const el = document.createElement("meta");
      el.setAttribute("name", "description");
      return el;
    });
    setMeta('link[rel="canonical"]', "href", `${SITE_URL}/blog/${post.slug}`, () => {
      const el = document.createElement("link");
      el.setAttribute("rel", "canonical");
      return el;
    });
    if (post.draft) {
      setMeta('meta[name="robots"]', "content", "noindex, nofollow", () => {
        const el = document.createElement("meta");
        el.setAttribute("name", "robots");
        return el;
      });
    }

    return () => {
      document.title = previousTitle;
      descriptionEl?.setAttribute("content", previousDescription);
      document.head.querySelector('link[rel="canonical"]')?.remove();
      document.head.querySelector('meta[name="robots"]')?.remove();
    };
  }, [post]);

  if (!post) return <NotFound />;

  const dateLabel = new Date(post.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow border border-border overflow-hidden">
        {post.image ? (
          <div className="h-[220px] md:h-[360px] w-full">
            <img
              src={post.image}
              alt={post.imageAlt || post.title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : null}
        <div className="p-6 md:p-10">
          <Link href="/blog" className="text-sm text-accent underline">
            &larr; All blogs
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-2">
            {post.title}
          </h1>
          <div className="text-xs text-accent mb-8">
            {dateLabel}
            {post.category ? ` | ${post.category}` : ""}
            {post.draft ? " | DRAFT PREVIEW" : ""}
          </div>
          {renderMarkdown(post.content)}
        </div>
      </div>
    </article>
  );
}
