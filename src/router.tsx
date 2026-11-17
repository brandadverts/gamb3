import {
  useEffect,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";
import { DEFAULT_LOCALE, isLocale, useLocale, type Locale } from "./i18n";

/**
 * Küçük, bağımlılıksız yönlendirici.
 *
 * - "path" modu (varsayılan): /urunler, /en/products, /en/blog/yazi-adi … Yayın derlemesinde her adres
 *   için hazır bir HTML dosyası üretilir (scripts/prerender.mjs); bilinmeyen adresler index.html'e düşer.
 * - "hash" modu (önizleme derlemesi): #urunler, #en-products, #en-blog-yazi-adi … Hiçbir sunucu ayarı
 *   gerekmez; site herhangi bir klasörden açılabilir. Adreslerde yalnızca harf, rakam ve tire kullanılır.
 *
 * İngilizce ana dildir ve önek almaz; diğer diller iki harfli kodla başlar (Türkçe: /tr/urunler).
 */

export type Page = "home" | "products" | "technology" | "cases" | "packages" | "demo" | "blog";
export type Route = Page | "post" | "admin" | "panel" | "notfound";
export type RouteState = { locale: Locale; route: Route; slug?: string };

const PAGES: Page[] = ["home", "products", "technology", "cases", "packages", "demo", "blog"];

/** Sayfa adresleri, dile göre. */
export const SLUGS: Record<Locale, Record<Page, string>> = {
  tr: { home: "", products: "urunler", technology: "teknoloji", cases: "vaka-calismalari", packages: "paketler", demo: "demo", blog: "blog" },
  en: { home: "", products: "products", technology: "technology", cases: "case-studies", packages: "packages", demo: "demo", blog: "blog" },
  de: { home: "", products: "produkte", technology: "technologie", cases: "fallstudien", packages: "pakete", demo: "demo", blog: "blog" },
  fr: { home: "", products: "produits", technology: "technologie", cases: "etudes-de-cas", packages: "offres", demo: "demo", blog: "blog" },
  es: { home: "", products: "productos", technology: "tecnologia", cases: "casos", packages: "paquetes", demo: "demo", blog: "blog" },
  pt: { home: "", products: "produtos", technology: "tecnologia", cases: "casos", packages: "pacotes", demo: "demo", blog: "blog" },
  ru: { home: "", products: "produkty", technology: "tehnologii", cases: "kejsy", packages: "pakety", demo: "demo", blog: "blog" },
  ar: { home: "", products: "products", technology: "technology", cases: "case-studies", packages: "packages", demo: "demo", blog: "blog" },
};

export const MODE: "path" | "hash" = import.meta.env.VITE_ROUTER === "hash" ? "hash" : "path";

/** Path modunda sitenin kök adresi; her zaman "/" ile başlar ve biter. */
const BASE = (() => {
  const base = import.meta.env.BASE_URL;
  if (!base.startsWith("/")) return "/";
  return base.endsWith("/") ? base : `${base}/`;
})();

/** Sunucu tarafında (statik HTML üretimi) çizilen adres. */
let serverPath: string | null = null;
export function setServerPath(path: string | null) {
  serverPath = path;
}

/** Sayfa değiştikten sonra kaydırılacak bölümün id'si. */
let pendingAnchor: string | null = null;

/** Kök adrese göre yol: "en/products", "blog/yazi-adi", "" … (baştaki / olmadan) */
export function pathFor(route: Route, locale: Locale, slug?: string): string {
  if (route === "admin" || route === "panel") return route;
  const prefix = locale === DEFAULT_LOCALE ? [] : [locale];
  if (route === "post") return [...prefix, SLUGS[locale].blog, slug ?? ""].join("/");
  if (route === "notfound") return prefix.join("/");
  return [...prefix, SLUGS[locale][route]].filter(Boolean).join("/");
}

export function hrefFor(route: Route, locale: Locale = DEFAULT_LOCALE, slug?: string): string {
  const path = pathFor(route, locale, slug);
  return MODE === "hash" ? `#${path.replaceAll("/", "-")}` : `${BASE}${path}`;
}

function resolve(parts: string[]): RouteState {
  let locale: Locale = DEFAULT_LOCALE;
  if (parts[0] && parts[0] !== DEFAULT_LOCALE && isLocale(parts[0])) {
    locale = parts[0];
    parts = parts.slice(1);
  } else if (parts.length === 1 && (parts[0] === "admin" || parts[0] === "panel")) {
    return { locale, route: parts[0] };
  }
  if (parts.length === 0) return { locale, route: "home" };
  if (parts.length === 1) {
    const page = PAGES.find((p) => p !== "home" && SLUGS[locale][p] === parts[0]);
    return page ? { locale, route: page } : { locale, route: "notfound" };
  }
  if (parts.length === 2 && parts[0] === SLUGS[locale].blog) {
    return { locale, route: "post", slug: parts[1] };
  }
  return { locale, route: "notfound" };
}

/** "#en-case-studies", "#blog-yazi-adi" gibi tireli adresleri parçalarına ayırır. */
function splitHash(value: string): string[] {
  if (!value) return [];
  let rest = value;
  const parts: string[] = [];
  const head = rest.split("-")[0];
  if (head !== DEFAULT_LOCALE && isLocale(head)) {
    parts.push(head);
    rest = rest.slice(head.length + 1);
  }
  if (!rest) return parts;
  const locale = (parts[0] as Locale | undefined) ?? DEFAULT_LOCALE;
  const blog = SLUGS[locale].blog;
  if (rest.startsWith(`${blog}-`)) return [...parts, blog, rest.slice(blog.length + 1)];
  return [...parts, rest];
}

export function currentRoute(): RouteState {
  if (typeof window === "undefined") {
    return resolve((serverPath ?? "").split("/").filter(Boolean));
  }
  if (MODE === "hash") {
    const hash = decodeURIComponent(window.location.hash.replace(/^#\/?/, ""));
    const state = resolve(splitHash(hash));
    // Tanınmayan bir çapa sayfa içi bağlantı olabilir; ana sayfada kal.
    return state.route === "notfound" ? { locale: state.locale, route: "home" } : state;
  }
  const path = window.location.pathname;
  if (!path.startsWith(BASE) && `${path}/` !== BASE) return { locale: DEFAULT_LOCALE, route: "notfound" };
  const parts = decodeURIComponent(path.slice(BASE.length))
    .split("/")
    .filter((part) => part && part !== "index.html");
  return resolve(parts);
}

const pageKey = (state: RouteState) => `${state.route}/${state.slug ?? ""}`;

export function navigate(
  route: Route,
  options: { anchor?: string; locale?: Locale; slug?: string } = {},
) {
  const current = currentRoute();
  const locale = options.locale ?? current.locale;
  pendingAnchor = options.anchor ?? null;
  const target: RouteState = { locale, route, slug: options.slug };
  const same = pageKey(current) === pageKey(target) && current.locale === locale;

  if (!same) {
    const href = hrefFor(route, locale, options.slug);
    if (MODE === "hash") {
      window.location.hash = href.slice(1);
      // hashchange olayı sayfayı günceller.
    } else {
      window.history.pushState({}, "", href);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
    return;
  }
  settleScroll();
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Yeni sayfa çizildikten sonra: istenen bölüme ya da sayfanın başına git. */
function settleScroll() {
  const anchor = pendingAnchor;
  pendingAnchor = null;
  const target = anchor ? document.getElementById(anchor) : null;
  if (target) {
    target.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
  } else {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
}

export function scrollToId(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
}

export function useRoute(): RouteState {
  const [state, setState] = useState<RouteState>(currentRoute);

  useEffect(() => {
    const update = () => setState(currentRoute());
    window.addEventListener("popstate", update);
    window.addEventListener("hashchange", update);
    return () => {
      window.removeEventListener("popstate", update);
      window.removeEventListener("hashchange", update);
    };
  }, []);

  // Yalnızca sayfa gerçekten değiştiğinde kaydır; dil değişince bulunduğun yerde kal.
  const key = pageKey(state);
  const settled = useRef<string | null>(null);
  useEffect(() => {
    if (settled.current === key) return;
    settled.current = key;
    settleScroll();
  }, [key]);

  return state;
}

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: Route;
  /** Hedef sayfada kaydırılacak bölümün id'si. */
  anchor?: string;
  /** Blog yazısının adresi (to="post" ile). */
  slug?: string;
  /** Verilmezse geçerli dil kullanılır. */
  locale?: Locale;
  children: ReactNode;
};

/** Gerçek bir <a> üretir: yeni sekmede açma, kopyalama ve arama motorları çalışır. */
export function Link({ to, anchor, slug, locale, onClick, children, ...rest }: LinkProps) {
  const current = useLocale();
  const target = locale ?? current;
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }
    event.preventDefault();
    navigate(to, { anchor, slug, locale: target });
  };

  return (
    <a href={hrefFor(to, target, slug)} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
