import type { ReactNode } from "react";
import { Link } from "wouter";

/**
 * Tiny, safe markdown renderer for automated blog posts.
 * Supports: ## / ### headings, paragraphs, - / 1. lists, **bold**, [text](url).
 * Output is React elements only (no innerHTML). Keep in sync with
 * scripts/prerender-blog.mjs, which renders the same subset to static HTML.
 */
function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let index = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const key = `${keyPrefix}-${index++}`;
    if (match[1]) {
      nodes.push(<strong key={key}>{match[1]}</strong>);
    } else {
      const label = match[2];
      const href = match[3];
      if (href.startsWith("/") && !href.startsWith("//")) {
        nodes.push(
          <Link key={key} href={href} className="text-accent underline">
            {label}
          </Link>,
        );
      } else if (/^https?:\/\//.test(href)) {
        nodes.push(
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline"
          >
            {label}
          </a>,
        );
      } else {
        nodes.push(label);
      }
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export function renderMarkdown(markdown: string): ReactNode[] {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let paragraph: string[] = [];
  let list: { ordered: boolean; items: string[] } | null = null;
  let n = 0;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    const key = `p${n++}`;
    blocks.push(
      <p key={key} className="text-gray-800 leading-7 mb-5">
        {renderInline(paragraph.join(" "), key)}
      </p>,
    );
    paragraph = [];
  };
  const flushList = () => {
    if (!list) return;
    const key = `l${n++}`;
    const items = list.items.map((item, i) => (
      <li key={`${key}-${i}`} className="mb-2">
        {renderInline(item, `${key}-${i}`)}
      </li>
    ));
    blocks.push(
      list.ordered ? (
        <ol key={key} className="list-decimal pl-6 mb-5 text-gray-800 leading-7">
          {items}
        </ol>
      ) : (
        <ul key={key} className="list-disc pl-6 mb-5 text-gray-800 leading-7">
          {items}
        </ul>
      ),
    );
    list = null;
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }
    let m: RegExpMatchArray | null;
    if ((m = line.match(/^###\s+(.+)$/))) {
      flushParagraph();
      flushList();
      const key = `h${n++}`;
      blocks.push(
        <h3 key={key} className="text-xl font-semibold text-gray-900 mt-6 mb-3">
          {renderInline(m[1], key)}
        </h3>,
      );
    } else if ((m = line.match(/^##\s+(.+)$/))) {
      flushParagraph();
      flushList();
      const key = `h${n++}`;
      blocks.push(
        <h2 key={key} className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          {renderInline(m[1], key)}
        </h2>,
      );
    } else if ((m = line.match(/^[-*]\s+(.+)$/))) {
      flushParagraph();
      if (!list || list.ordered) {
        flushList();
        list = { ordered: false, items: [] };
      }
      list.items.push(m[1]);
    } else if ((m = line.match(/^\d+[.)]\s+(.+)$/))) {
      flushParagraph();
      if (!list || !list.ordered) {
        flushList();
        list = { ordered: true, items: [] };
      }
      list.items.push(m[1]);
    } else {
      flushList();
      paragraph.push(line);
    }
  }
  flushParagraph();
  flushList();
  return blocks;
}
