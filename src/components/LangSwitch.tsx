import { useEffect, useRef, useState } from "react";
import { findPost, translationsOf } from "../blog";
import { LOCALES, useT, type Locale } from "../i18n";
import { Link, type Route, type RouteState } from "../router";

/** Bulunulan sayfanın başka bir dildeki karşılığı. Yazının çevirisi yoksa o dilin blog listesine gider. */
export function localizedTarget(state: RouteState, locale: Locale): { to: Route; slug?: string } {
  if (state.route !== "post") return { to: state.route === "notfound" ? "home" : state.route };
  const post = state.slug ? findPost(state.locale, state.slug) : undefined;
  const match = post ? translationsOf(post.key).find((v) => v.locale === locale) : undefined;
  return match ? { to: "post", slug: match.slug } : { to: "blog" };
}

/** Başlıktaki dil seçici: geçerli dilin kodu ve açılan dil listesi. */
export function LangSwitch({ state }: { state: RouteState }) {
  const t = useT();
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => setOpen(false), [state]);
  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!box.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lang-switch" ref={box}>
      <button
        type="button"
        className="lang-button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`${t.nav.language}: ${state.locale.toUpperCase()}`}
        onClick={() => setOpen((value) => !value)}
      >
        {state.locale.toUpperCase()}
        <span aria-hidden="true">▾</span>
      </button>
      {open && <LangList state={state} className="lang-menu" />}
    </div>
  );
}

/** Dil bağlantıları: gerçek <a> etiketleri, arama motorları da izleyebilir. */
export function LangList({
  state,
  className,
  onPick,
}: {
  state: RouteState;
  className?: string;
  onPick?: () => void;
}) {
  const t = useT();
  return (
    <ul className={className} aria-label={t.nav.language}>
      {LOCALES.map((item) => {
        const target = localizedTarget(state, item.code);
        return (
          <li key={item.code}>
            <Link
              to={target.to}
              slug={target.slug}
              locale={item.code}
              hrefLang={item.code}
              lang={item.code}
              dir={item.dir}
              aria-current={item.code === state.locale ? "true" : undefined}
              onClick={onPick}
            >
              <span className="lang-code">{item.code.toUpperCase()}</span>
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
