import { translationsOf, type PostMeta } from "./blog";
import { DEFAULT_LOCALE, LOCALE_CODES, localeInfo, type Dictionary, type Locale } from "./i18n";
import { MODE, pathFor, type Route, type RouteState } from "./router";

/**
 * Sayfa başlığı, açıklaması, kanonik adres, dil alternatifleri (hreflang), paylaşım kartları ve
 * yapısal veri (JSON-LD). Aynı hesap hem tarayıcıda (applyHead) hem statik HTML üretiminde
 * (headToHtml) kullanılır.
 */

/** Sitenin yayınlandığı adres. Derlemede SITE_URL ile verilir: SITE_URL=https://alanadiniz.com pnpm build */
export const SITE_URL = (import.meta.env.VITE_SITE_URL || "https://www.example.com").replace(
  /\/+$/,
  "",
);

export const absoluteUrl = (route: Route, locale: Locale, slug?: string) => {
  const path = pathFor(route, locale, slug);
  return path ? `${SITE_URL}/${path}` : `${SITE_URL}/`;
};

export type Head = {
  lang: Locale;
  dir: "ltr" | "rtl";
  title: string;
  description: string;
  canonical: string;
  alternates: { hreflang: string; href: string }[];
  ogType: "website" | "article";
  ogLocale: string;
  robots: string;
  jsonLd: Record<string, unknown>[];
};

const PAGE_META = ["home", "products", "technology", "cases", "packages", "demo", "blog"] as const;
type MetaKey = (typeof PAGE_META)[number] | "notfound";

export function buildHead(state: RouteState, t: Dictionary, post?: PostMeta): Head {
  const { locale, route } = state;
  const info = localeInfo(locale);
  const isPage = (PAGE_META as readonly string[]).includes(route);
  const metaKey: MetaKey = isPage ? (route as MetaKey) : "notfound";
  const hidden = route === "admin" || route === "panel" || route === "notfound" || (route === "post" && !post);

  let title = t.meta[metaKey].title;
  let description = t.meta[metaKey].description;
  if (route === "post" && post) {
    title = `${post.title} — ${t.site.name}`;
    description = post.description;
  } else if (route === "admin") {
    title = `Yönetim — ${t.site.name}`;
  } else if (route === "panel") {
    title = `gamb PANEL demo — ${t.site.name}`;
  }

  const canonical = absoluteUrl(route, locale, state.slug);
  const versions =
    route === "post" && post
      ? translationsOf(post.key).map((v) => ({ locale: v.locale, href: absoluteUrl("post", v.locale, v.slug) }))
      : hidden
        ? []
        : LOCALE_CODES.map((code) => ({ locale: code, href: absoluteUrl(route, code) }));
  const alternates = versions.map((v) => ({ hreflang: v.locale as string, href: v.href }));
  const fallback = versions.find((v) => v.locale === DEFAULT_LOCALE) ?? versions[0];
  if (fallback) alternates.push({ hreflang: "x-default", href: fallback.href });

  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: t.site.name,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/favicon.png`,
  };
  const jsonLd: Record<string, unknown>[] = [];
  if (route === "home") {
    jsonLd.push(
      { "@context": "https://schema.org", ...organization, description: t.meta.home.description },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: t.site.name,
        url: canonical,
        inLanguage: locale,
        publisher: { "@id": organization["@id"] },
      },
    );
  } else if (!hidden) {
    const crumbs = [{ name: t.nav.home, item: absoluteUrl("home", locale) }];
    if (route === "post" && post) {
      crumbs.push({ name: t.nav.blog, item: absoluteUrl("blog", locale) }, { name: post.title, item: canonical });
    } else {
      crumbs.push({ name: t.nav[route as Exclude<MetaKey, "notfound" | "home">], item: canonical });
    }
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: crumb.item,
      })),
    });
  }
  if (route === "packages") {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: locale,
      mainEntity: t.packages.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }
  if (route === "blog") {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "Blog",
      name: t.meta.blog.title,
      description: t.meta.blog.description,
      url: canonical,
      inLanguage: locale,
      publisher: organization,
    });
  }
  if (route === "post" && post) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.date,
      inLanguage: locale,
      keywords: post.tags.join(", "),
      mainEntityOfPage: canonical,
      author: organization,
      publisher: organization,
    });
  }

  return {
    lang: locale,
    dir: info.dir,
    title,
    description,
    canonical,
    alternates,
    ogType: route === "post" && post ? "article" : "website",
    ogLocale: info.og,
    robots: hidden ? "noindex, nofollow" : "index, follow",
    jsonLd,
  };
}

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Statik HTML üretimi için <head> içeriği. Etiketler data-seo ile işaretlenir; tarayıcı bunları günceller. */
export function headToHtml(head: Head): string {
  const tags = [
    `<title>${escapeHtml(head.title)}</title>`,
    `<meta data-seo name="description" content="${escapeHtml(head.description)}">`,
    `<meta data-seo name="robots" content="${head.robots}">`,
    `<link data-seo rel="canonical" href="${escapeHtml(head.canonical)}">`,
    ...head.alternates.map(
      (alt) => `<link data-seo rel="alternate" hreflang="${alt.hreflang}" href="${escapeHtml(alt.href)}">`,
    ),
    `<meta data-seo property="og:type" content="${head.ogType}">`,
    `<meta data-seo property="og:site_name" content="Gamb Gaming">`,
    `<meta data-seo property="og:title" content="${escapeHtml(head.title)}">`,
    `<meta data-seo property="og:description" content="${escapeHtml(head.description)}">`,
    `<meta data-seo property="og:url" content="${escapeHtml(head.canonical)}">`,
    `<meta data-seo property="og:locale" content="${head.ogLocale}">`,
    `<meta data-seo name="twitter:card" content="summary">`,
    ...head.jsonLd.map(
      (item) =>
        `<script data-seo type="application/ld+json">${JSON.stringify(item).replace(/</g, "\\u003c")}</script>`,
    ),
  ];
  return tags.join("\n    ");
}

/** Tarayıcıda sayfa değiştikçe <head> etiketlerini günceller. */
export function applyHead(head: Head) {
  document.title = head.title;
  document.documentElement.lang = head.lang;
  document.documentElement.dir = head.dir;
  // Önizleme (hash) modunda adresler gerçek olmadığı için kanonik ve hreflang etiketleri yazılmaz.
  if (MODE === "hash") return;
  document.head.querySelectorAll("[data-seo]").forEach((node) => node.remove());
  const holder = document.createElement("template");
  holder.innerHTML = headToHtml(head).replace(/<title>[\s\S]*?<\/title>/, "");
  document.head.append(holder.content);
}
