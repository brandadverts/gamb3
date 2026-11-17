import index from "virtual:blog-index";
import { LOCALE_CODES, type Locale } from "../i18n";
import { localPosts } from "./localPosts";

/**
 * Blog yazıları content/blog/<dil>/<tarih>-<ad>.md dosyalarıdır. Özet listesi derlemede çıkarılır
 * (virtual:blog-index); gövdeler yalnızca yazı açıldığında yüklenir.
 * Admin panelinde yazılan yazılar (prototip) tarayıcıda tutulur ve listeye eklenir.
 */
export type PostMeta = {
  slug: string;
  key: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  minutes: number;
  file: string;
};

const loaders = import.meta.glob("/content/blog/*/*.md", {
  query: "?raw",
  import: "default",
}) as Record<string, () => Promise<string>>;

const bodies = new Map<string, string>();
const stripFrontMatter = (raw: string) => raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "").trim();

/** Dosyadaki yazılar + bu tarayıcıda admin panelinden eklenenler, yeniden eskiye. */
export function listPosts(locale: Locale): PostMeta[] {
  const fromFiles = index[locale] ?? [];
  const local = localPosts()
    .filter((post) => post.locale === locale && post.status === "published")
    .map<PostMeta>((post) => ({
      slug: post.slug,
      key: post.key,
      title: post.title,
      description: post.description,
      date: post.date,
      tags: post.tags,
      minutes: Math.max(1, Math.round(post.body.split(/\s+/).length / 200)),
      file: `local:${post.locale}/${post.slug}`,
    }));
  if (!local.length) return fromFiles;
  const taken = new Set(local.map((post) => post.slug));
  return [...local, ...fromFiles.filter((post) => !taken.has(post.slug))].sort((a, b) =>
    a.date < b.date ? 1 : a.date > b.date ? -1 : 0,
  );
}

export const findPost = (locale: Locale, slug: string) =>
  listPosts(locale).find((post) => post.slug === slug);

/** Aynı yazının diğer dillerdeki sürümleri (hreflang ve dil seçici için). */
export function translationsOf(key: string): { locale: Locale; slug: string }[] {
  return LOCALE_CODES.flatMap((locale) => {
    const match = listPosts(locale).find((post) => post.key === key);
    return match ? [{ locale, slug: match.slug }] : [];
  });
}

export const cachedBody = (post: PostMeta) => bodies.get(post.file);

export async function loadBody(post: PostMeta): Promise<string> {
  const hit = bodies.get(post.file);
  if (hit !== undefined) return hit;
  let body = "";
  if (post.file.startsWith("local:")) {
    body = localPosts().find((p) => `local:${p.locale}/${p.slug}` === post.file)?.body ?? "";
  } else {
    const load = loaders[post.file];
    body = load ? stripFrontMatter(await load()) : "";
  }
  bodies.set(post.file, body);
  return body;
}

/** Yeni bir yerel yazı kaydedildiğinde eski gövdeyi unut. */
export const forgetBody = (file: string) => bodies.delete(file);

export function formatDate(date: string, locale: Locale) {
  const parsed = new Date(`${date}T12:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return date;
  return new Intl.DateTimeFormat(locale, { day: "numeric", month: "long", year: "numeric" }).format(
    parsed,
  );
}
