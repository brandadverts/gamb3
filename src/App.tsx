import { Suspense, lazy, useEffect, useState, useSyncExternalStore, type JSX } from "react";
import { findPost } from "./blog";
import { localPosts, subscribeLocalPosts } from "./blog/localPosts";
import { Footer, Header } from "./components/Layout";
import { LocaleProvider, getDictionary, loadLocale, localeInfo } from "./i18n";
import { getOverrides, subscribeOverrides } from "./i18n/overrides";
import { BlogPage, PostPage } from "./pages/Blog";
import { CasesPage } from "./pages/Cases";
import { DemoPage } from "./pages/Demo";
import { HomePage } from "./pages/Home";
import { NotFoundPage } from "./pages/NotFound";
import { PackagesPage } from "./pages/Packages";
import { ProductsPage } from "./pages/Products";
import { TechnologyPage } from "./pages/Technology";
import { useRoute, type Route, type RouteState } from "./router";
import { applyHead, buildHead } from "./seo";

// Yönetim paneli ve modül demosu ziyaretçilere yüklenmez; yalnızca açıldıklarında indirilir.
const AdminApp = lazy(() => import("./admin/AdminApp"));
const PanelApp = lazy(() => import("./panel/PanelApp"));

const pages: Record<Exclude<Route, "post" | "admin" | "panel">, () => JSX.Element> = {
  home: HomePage,
  products: ProductsPage,
  technology: TechnologyPage,
  cases: CasesPage,
  packages: PackagesPage,
  demo: DemoPage,
  blog: BlogPage,
  notfound: NotFoundPage,
};

export default function App() {
  const target = useRoute();
  // Dil dosyası yüklenene kadar önceki dilde kal; böylece yarım çevrilmiş bir sayfa görünmez.
  const [shown, setShown] = useState<RouteState>(target);
  useEffect(() => {
    let cancelled = false;
    void loadLocale(target.locale).then(() => {
      if (!cancelled) setShown(target);
    });
    return () => {
      cancelled = true;
    };
  }, [target]);

  // Admin panelinde kaydedilen değişiklikler ve yerel yazılar siteye anında yansır.
  useSyncExternalStore(subscribeOverrides, getOverrides, getOverrides);
  useSyncExternalStore(subscribeLocalPosts, localPosts, localPosts);

  const { locale, route, slug } = shown;
  const t = getDictionary(locale);
  const post = route === "post" && slug ? findPost(locale, slug) : undefined;

  useEffect(() => {
    applyHead(buildHead(shown, t, post));
  }, [shown, t, post]);

  const skipToContent = () => {
    const main = document.getElementById("icerik");
    main?.focus({ preventScroll: true });
    main?.scrollIntoView({ block: "start" });
  };

  if (route === "admin" || route === "panel") {
    const Tool = route === "admin" ? AdminApp : PanelApp;
    return (
      <LocaleProvider value={{ locale, t }}>
        <Suspense fallback={<div className="tool-loading">Yükleniyor…</div>}>
          <Tool />
        </Suspense>
      </LocaleProvider>
    );
  }

  const PageComponent = route === "post" ? null : pages[route];

  return (
    <LocaleProvider value={{ locale, t }}>
      <div className="app" lang={locale} dir={localeInfo(locale).dir}>
        <button type="button" className="skip-link" onClick={skipToContent}>
          {t.nav.skip}
        </button>
        <Header state={shown} />
        {PageComponent ? (
          <PageComponent key={`${locale}-${route}`} />
        ) : (
          <PostPage key={`${locale}-${slug}`} slug={slug ?? ""} />
        )}
        <Footer state={shown} />
      </div>
    </LocaleProvider>
  );
}
