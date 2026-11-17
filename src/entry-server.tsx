import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import { findPost, listPosts, loadBody } from "./blog";
import { LOCALE_CODES, getDictionary, loadLocale, type Locale } from "./i18n";
import { SLUGS, currentRoute, pathFor, setServerPath, type Page } from "./router";
import { SITE_URL, absoluteUrl, buildHead, headToHtml } from "./seo";

/**
 * Statik HTML üretimi (scripts/prerender.mjs) için sunucu tarafı giriş noktası.
 * Her dil ve sayfa için uygulamayı bir kez çizer; <head> etiketlerini de hazırlar.
 */

const PAGES = Object.keys(SLUGS.tr) as Page[];

export type PrerenderRoute = {
  path: string;
  locale: Locale;
  kind: "page" | "post";
  url: string;
  lastmod?: string;
  alternates: { hreflang: string; href: string }[];
};

export async function routes(): Promise<PrerenderRoute[]> {
  const out: PrerenderRoute[] = [];
  for (const locale of LOCALE_CODES) {
    const t = await loadLocale(locale);
    for (const page of PAGES) {
      const head = buildHead({ locale, route: page }, t);
      out.push({
        path: pathFor(page, locale),
        locale,
        kind: "page",
        url: absoluteUrl(page, locale),
        alternates: head.alternates,
      });
    }
    for (const post of listPosts(locale)) {
      const head = buildHead({ locale, route: "post", slug: post.slug }, t, post);
      out.push({
        path: pathFor("post", locale, post.slug),
        locale,
        kind: "post",
        url: absoluteUrl("post", locale, post.slug),
        lastmod: post.date,
        alternates: head.alternates,
      });
    }
  }
  return out;
}

export async function render(path: string) {
  setServerPath(path);
  const state = currentRoute();
  await loadLocale(state.locale);
  const t = getDictionary(state.locale);
  const post = state.route === "post" && state.slug ? findPost(state.locale, state.slug) : undefined;
  if (post) await loadBody(post);
  const html = renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
  const head = buildHead(state, t, post);
  setServerPath(null);
  return { html, head: headToHtml(head), lang: head.lang, dir: head.dir };
}

/** Dil başına RSS akışı için yazı listesi. */
export async function feeds() {
  const out = [];
  for (const locale of LOCALE_CODES) {
    const t = await loadLocale(locale);
    out.push({
      locale,
      path: `${pathFor("blog", locale)}/rss.xml`,
      title: t.meta.blog.title,
      description: t.meta.blog.description,
      link: absoluteUrl("blog", locale),
      items: listPosts(locale)
        .slice(0, 30)
        .map((post) => ({
          title: post.title,
          description: post.description,
          date: post.date,
          link: absoluteUrl("post", locale, post.slug),
        })),
    });
  }
  return out;
}

export { SITE_URL };
