import { useEffect, useLayoutEffect, useMemo, useRef, useState, type JSX } from "react";
import { Footer, Header } from "../components/Layout";
import { LocaleProvider, getDictionary, useLocale, type Locale } from "../i18n";
import tr from "../i18n/locales/tr";
import { applyMap } from "../i18n/overrides";
import { BlogPage } from "../pages/Blog";
import { CasesPage } from "../pages/Cases";
import { DemoPage } from "../pages/Demo";
import { HomePage } from "../pages/Home";
import { NotFoundPage } from "../pages/NotFound";
import { PackagesPage } from "../pages/Packages";
import { ProductsPage } from "../pages/Products";
import { TechnologyPage } from "../pages/Technology";
import { FieldInput, SaveBar, confirmLeave, type Drafts } from "./drafts";
import { sectionGroups, type FieldGroup } from "./fields";

/**
 * Sayfa düzenleyici: soldaki listeden bir sayfa seçilir; o sayfanın bütün metinleri sırasıyla
 * açılır, sağda sayfanın kendisi canlı önizlenir. Önizlemede bir yazıya tıklamak ilgili alanı açar.
 */

type PageDef = {
  id: string;
  label: string;
  /** Dil dosyasındaki kökler ve grupların ayrıldığı derinlik. */
  roots: { root: string; depth: number; label?: string }[];
  render: () => JSX.Element;
};

function Chrome() {
  const locale = useLocale();
  return (
    <>
      <Header state={{ locale, route: "home" }} />
      <main className="adm-live-gap" />
      <Footer state={{ locale, route: "home" }} />
    </>
  );
}

export const PAGE_DEFS: PageDef[] = [
  {
    id: "home",
    label: "Ana sayfa",
    roots: [
      { root: "meta.home", depth: 2, label: "Arama motoru (SEO)" },
      { root: "heroes.home", depth: 2, label: "Üst bölüm" },
      { root: "home", depth: 2 },
      { root: "panel", depth: 2, label: "gamb panel" },
    ],
    render: () => <HomePage />,
  },
  {
    id: "products",
    label: "Ürünler",
    roots: [
      { root: "meta.products", depth: 2, label: "Arama motoru (SEO)" },
      { root: "heroes.products", depth: 2, label: "Üst bölüm" },
      { root: "catalog.groups", depth: 3 },
      { root: "catalog.modules", depth: 3 },
      { root: "products", depth: 2 },
    ],
    render: () => <ProductsPage />,
  },
  {
    id: "technology",
    label: "Teknoloji",
    roots: [
      { root: "meta.technology", depth: 2, label: "Arama motoru (SEO)" },
      { root: "heroes.technology", depth: 2, label: "Üst bölüm" },
      { root: "technology", depth: 2 },
    ],
    render: () => <TechnologyPage />,
  },
  {
    id: "cases",
    label: "Vaka çalışmaları",
    roots: [
      { root: "meta.cases", depth: 2, label: "Arama motoru (SEO)" },
      { root: "heroes.cases", depth: 2, label: "Üst bölüm" },
      { root: "cases", depth: 2 },
    ],
    render: () => <CasesPage />,
  },
  {
    id: "packages",
    label: "Paketler",
    roots: [
      { root: "meta.packages", depth: 2, label: "Arama motoru (SEO)" },
      { root: "heroes.packages", depth: 2, label: "Üst bölüm" },
      { root: "packages", depth: 2 },
    ],
    render: () => <PackagesPage />,
  },
  {
    id: "demo",
    label: "Demo planla",
    roots: [
      { root: "meta.demo", depth: 2, label: "Arama motoru (SEO)" },
      { root: "demo", depth: 2 },
    ],
    render: () => <DemoPage />,
  },
  {
    id: "blog",
    label: "Blog sayfası",
    roots: [
      { root: "meta.blog", depth: 2, label: "Arama motoru (SEO)" },
      { root: "blog", depth: 2 },
    ],
    render: () => <BlogPage />,
  },
  {
    id: "chrome",
    label: "Üst menü ve alt bilgi",
    roots: [
      { root: "site", depth: 1, label: "Site" },
      { root: "nav", depth: 1, label: "Menü" },
      { root: "footer", depth: 1, label: "Alt bilgi" },
    ],
    render: () => <Chrome />,
  },
  {
    id: "notfound",
    label: "Bulunamadı (404)",
    roots: [
      { root: "meta.notfound", depth: 2, label: "Arama motoru (SEO)" },
      { root: "notfound", depth: 1, label: "Sayfa" },
    ],
    render: () => <NotFoundPage />,
  },
];

export function pageGroups(page: PageDef): FieldGroup[] {
  return page.roots.flatMap(({ root, depth, label }) => {
    const groups = sectionGroups({ id: "pages", label: "", note: "", depth, roots: [root] }, tr);
    if (!label) return groups;
    // Tek gruplu köklerde verilen adı kullan.
    return groups.length === 1 ? [{ ...groups[0], label }] : groups;
  });
}

const DESIGN_WIDTH = 1280;
const norm = (text: string) => text.replace(/\s+/g, " ").trim();

/** Sayfayı tasarım genişliğinde çizer ve kutuya sığacak şekilde küçültür. */
function LivePreview({
  locale,
  drafts,
  page,
  focusText,
  onPick,
}: {
  locale: Locale;
  drafts: Drafts;
  page: PageDef;
  focusText: string | null;
  onPick: (text: string) => void;
}) {
  const pane = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);
  const [height, setHeight] = useState(0);
  const t = useMemo(
    () => applyMap(getDictionary(locale), drafts.values),
    [locale, drafts.values],
  );

  useLayoutEffect(() => {
    const outer = pane.current;
    const inner = canvas.current;
    if (!outer || !inner) return;
    const measure = () => {
      const next = Math.min(1, outer.clientWidth / DESIGN_WIDTH);
      setScale(next);
      setHeight(inner.scrollHeight * next);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(outer);
    observer.observe(inner);
    return () => observer.disconnect();
  }, [page.id]);

  // Odaklanan alanın metnini önizlemede bul, işaretle ve görünür yere kaydır.
  useEffect(() => {
    const root = canvas.current;
    const box = pane.current;
    if (!root || !box) return;
    root.querySelectorAll(".adm-hit").forEach((node) => node.classList.remove("adm-hit"));
    const needle = focusText ? norm(focusText).slice(0, 80) : "";
    if (needle.length < 2) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
    let best: HTMLElement | null = null;
    while (walker.nextNode()) {
      const element = walker.currentNode as HTMLElement;
      if (norm(element.textContent ?? "").includes(needle)) best = element;
    }
    if (!best) return;
    best.classList.add("adm-hit");
    const top = best.getBoundingClientRect().top - root.getBoundingClientRect().top;
    box.scrollTo({ top: Math.max(0, top - box.clientHeight / 3), behavior: "smooth" });
  }, [focusText, page.id]);

  return (
    <div className="adm-live">
      <div className="adm-live-bar">
        <span>Canlı önizleme · {locale.toUpperCase()}</span>
        <span>Bir yazıya tıklayın, ilgili alan açılsın</span>
      </div>
      <div className="adm-live-pane" ref={pane}>
        <div style={{ height }}>
          <div
            className="adm-live-canvas"
            ref={canvas}
            style={{ width: DESIGN_WIDTH, transform: `scale(${scale})` }}
            onClickCapture={(event) => {
              // Önizlemedeki bağlantılar ve düğmeler çalışmaz; tıklanan metnin alanı açılır.
              event.preventDefault();
              event.stopPropagation();
              const text = norm((event.target as HTMLElement).innerText ?? "");
              if (text) onPick(text);
            }}
          >
            <LocaleProvider value={{ locale, t }}>
              <div className="app" lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
                {page.render()}
              </div>
            </LocaleProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PageEditor({
  locale,
  drafts,
  onChanged,
  initialPage = "home",
}: {
  locale: Locale;
  drafts: Drafts;
  onChanged: () => void;
  initialPage?: string;
}) {
  const [pageId, setPageId] = useState(initialPage);
  const [query, setQuery] = useState("");
  const [focusText, setFocusText] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(true);
  const page = PAGE_DEFS.find((item) => item.id === pageId) ?? PAGE_DEFS[0];
  const groups = useMemo(() => pageGroups(page), [page]);
  const fieldsBox = useRef<HTMLDivElement>(null);

  const needle = query.trim().toLocaleLowerCase("tr");
  const current = (path: string) => {
    const draft = drafts.values[path];
    if (draft !== undefined) return draft;
    const value = getDictionary(locale);
    const parts = path.split(".");
    let node: unknown = value;
    for (const part of parts) node = (node as Record<string, unknown>)?.[part];
    return typeof node === "string" ? node : "";
  };

  const visible = needle
    ? groups
        .map((group) => ({
          ...group,
          fields: group.fields.filter(
            (field) =>
              field.label.toLocaleLowerCase("tr").includes(needle) ||
              current(field.path).toLocaleLowerCase("tr").includes(needle),
          ),
        }))
        .filter((group) => group.fields.length)
    : groups;

  /** Önizlemede tıklanan metne en iyi uyan alanı bulur ve açar. */
  const pick = (text: string) => {
    let match: { path: string; score: number } | null = null;
    for (const group of groups) {
      for (const field of group.fields) {
        const value = norm(current(field.path));
        if (!value) continue;
        const base = value === text ? 1000 + value.length : text.includes(value) ? value.length : 0;
        // Aynı metin SEO açıklamasında da geçebilir; sayfadaki alan öncelikli.
        const score = base && field.path.startsWith("meta.") ? base / 2 : base;
        if (score && (!match || score > match.score)) match = { path: field.path, score };
      }
    }
    if (!match) return;
    setQuery("");
    const id = `f-${locale}-${match.path.replace(/[^a-z0-9]/gi, "-")}`;
    window.setTimeout(() => {
      const input = document.getElementById(id) as HTMLInputElement | null;
      if (!input) return;
      input.scrollIntoView({ block: "center", behavior: "smooth" });
      input.focus({ preventScroll: true });
    }, 30);
  };

  const fieldCount = groups.reduce((sum, group) => sum + group.fields.length, 0);

  return (
    <section className="adm-section">
      <header className="adm-section-head">
        <div>
          <h2>Sayfalar</h2>
          <p>
            Bir sayfa seçin: bütün metinleri sırasıyla düzenleyin, sağda sayfanın kendisini canlı
            görün. Değişiklikler <strong>Kaydet</strong>'e basana kadar yalnızca önizlemededir.
          </p>
        </div>
        <div className="adm-actions">
          <input
            type="search"
            className="adm-search"
            placeholder="Bu sayfada ara"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Bu sayfanın alanlarında ara"
          />
          <button type="button" className="adm-btn" onClick={() => setShowPreview(!showPreview)}>
            {showPreview ? "Önizlemeyi gizle" : "Önizlemeyi göster"}
          </button>
        </div>
      </header>

      <nav className="adm-pagetabs" aria-label="Sayfalar">
        {PAGE_DEFS.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-current={item.id === page.id ? "page" : undefined}
            onClick={() => {
              if (item.id === page.id || !confirmLeave(drafts.count)) return;
              drafts.discard();
              setPageId(item.id);
              setQuery("");
              setFocusText(null);
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className={`adm-pageedit${showPreview ? "" : " no-preview"}`}>
        <div className="adm-pagefields" ref={fieldsBox}>
          <p className="adm-note">
            {page.label} · {groups.length} bölüm · {fieldCount} alan
          </p>
          {visible.length === 0 && <p className="adm-empty">Aramaya uyan alan yok.</p>}
          {visible.map((group) => (
            <article key={group.key} className="adm-block">
              <h3>{group.label}</h3>
              {group.fields.map((field) => (
                <FieldInput
                  key={field.path}
                  path={field.path}
                  label={field.label}
                  multiline={field.multiline}
                  locale={locale}
                  drafts={drafts}
                  onFocusText={setFocusText}
                  onReverted={onChanged}
                />
              ))}
            </article>
          ))}
        </div>
        {showPreview && (
          <LivePreview
            locale={locale}
            drafts={drafts}
            page={page}
            focusText={focusText}
            onPick={pick}
          />
        )}
      </div>

      <SaveBar drafts={drafts} where={page.label} />
    </section>
  );
}
