import type { ReactNode } from "react";
import type { Locale } from "../i18n";
import { hrefFor, type Page } from "../router";

/**
 * Blog yazıları için küçük bir Markdown çevirici (dış bağımlılık yok, HTML enjekte etmez).
 * Desteklenenler: ## ve ### başlık, paragraf, - ve 1. listeler, > alıntı, ``` kod bloğu,
 * **kalın**, *italik*, `kod`, [bağlantı](https://…) ve site içi bağlantı: [metin](page:products)
 * (page: home, products, technology, cases, packages, demo, blog).
 */

const PAGES = ["home", "products", "technology", "cases", "packages", "demo", "blog"];

function inline(text: string, locale: Locale, keyBase: string): ReactNode[] {
  const out: ReactNode[] = [];
  const pattern = /\*\*(.+?)\*\*|\*(.+?)\*|`([^`]+)`|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let n = 0;
  while ((match = pattern.exec(text))) {
    if (match.index > last) out.push(text.slice(last, match.index));
    const key = `${keyBase}-${n++}`;
    if (match[1] !== undefined) out.push(<strong key={key}>{match[1]}</strong>);
    else if (match[2] !== undefined) out.push(<em key={key}>{match[2]}</em>);
    else if (match[3] !== undefined) out.push(<code key={key}>{match[3]}</code>);
    else {
      const target = match[5];
      const page = target.startsWith("page:") ? target.slice(5) : "";
      if (PAGES.includes(page)) {
        out.push(
          <a key={key} href={hrefFor(page as Page, locale)}>
            {match[4]}
          </a>,
        );
      } else if (/^https?:\/\//.test(target)) {
        out.push(
          <a key={key} href={target} rel="noopener noreferrer" target="_blank">
            {match[4]}
          </a>,
        );
      } else {
        out.push(match[4]);
      }
    }
    last = pattern.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function Markdown({ source, locale }: { source: string; locale: Locale }) {
  const lines = source.replace(/\r/g, "").split("\n");
  const blocks: ReactNode[] = [];
  let i = 0;
  const key = () => `b${blocks.length}`;

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
      continue;
    }
    if (line.startsWith("```")) {
      const code: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) code.push(lines[i++]);
      i++;
      blocks.push(
        <pre key={key()} tabIndex={0} dir="ltr">
          <code>{code.join("\n")}</code>
        </pre>,
      );
      continue;
    }
    const heading = /^(#{2,3})\s+(.*)$/.exec(line);
    if (heading) {
      const Tag = heading[1].length === 2 ? "h2" : "h3";
      blocks.push(<Tag key={key()}>{inline(heading[2], locale, key())}</Tag>);
      i++;
      continue;
    }
    if (/^>\s?/.test(line)) {
      const quote: string[] = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) quote.push(lines[i++].replace(/^>\s?/, ""));
      blocks.push(<blockquote key={key()}>{inline(quote.join(" "), locale, key())}</blockquote>);
      continue;
    }
    const bullet = /^[-*]\s+/;
    const numbered = /^\d+[.)]\s+/;
    if (bullet.test(line) || numbered.test(line)) {
      const marker = bullet.test(line) ? bullet : numbered;
      const items: string[] = [];
      while (i < lines.length && marker.test(lines[i])) items.push(lines[i++].replace(marker, ""));
      const List = marker === bullet ? "ul" : "ol";
      const base = key();
      blocks.push(
        <List key={base}>
          {items.map((item, n) => (
            <li key={n}>{inline(item, locale, `${base}-${n}`)}</li>
          ))}
        </List>,
      );
      continue;
    }
    const paragraph: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{2,3}\s|>\s?|```|[-*]\s+|\d+[.)]\s+)/.test(lines[i])
    ) {
      paragraph.push(lines[i++].trim());
    }
    blocks.push(<p key={key()}>{inline(paragraph.join(" "), locale, key())}</p>);
  }
  return <>{blocks}</>;
}
