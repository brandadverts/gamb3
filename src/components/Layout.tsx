import { useEffect, useRef, useState } from "react";
import { useCatalog, useT } from "../i18n";
import { Link, scrollToTop, type Page, type RouteState } from "../router";
import { LangList, LangSwitch } from "./LangSwitch";
import { Logo } from "./Logo";
import { Arrow, pad } from "./ui";

/** Üst menü (masaüstü ve mobil). Blog yalnızca alt bilgide listelenir. */
const NAV: Exclude<Page, "home" | "demo" | "blog">[] = ["products", "technology", "cases", "packages"];
/** Alt bilgideki "Keşfet" listesi. */
const FOOTER_NAV: Exclude<Page, "home" | "demo">[] = [...NAV, "blog"];

export function Header({ state }: { state: RouteState }) {
  const t = useT();
  const { route } = state;
  // Yazı sayfasındayken menüde "Blog" işaretli görünür.
  const active = route === "post" ? "blog" : route;
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const openButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  // Sayfa değişince menüyü kapat.
  useEffect(() => setOpen(false), [state]);

  // Kaydırıldığında başlığa gölge ver.
  useEffect(() => {
    const update = () => setStuck(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  // Menü açıkken: arka planı kilitle, Esc ile kapat, odağı menüye taşı.
  useEffect(() => {
    if (!open) return;
    const trigger = openButton.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [open]);

  // Geniş ekrana dönülürse menüyü kapat.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 761px)");
    const onChange = () => query.matches && setOpen(false);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <header className={`site-header on-dark${stuck ? " is-stuck" : ""}`}>
        <div className="wrap header-inner">
          <Logo animated />
          <nav className="desktop-nav" aria-label={t.nav.mainNav}>
            {NAV.map((page) => (
              <Link key={page} to={page} aria-current={active === page ? "page" : undefined}>
                {t.nav[page]}
              </Link>
            ))}
          </nav>
          <LangSwitch state={state} />
          <Link to="demo" className="btn btn-primary desktop-demo">
            {t.nav.demo} <Arrow />
          </Link>
          <button
            ref={openButton}
            type="button"
            className="btn menu-button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobil-menu"
          >
            {t.nav.menu} <span aria-hidden="true">+</span>
          </button>
        </div>
      </header>
      {open && (
        <div
          id="mobil-menu"
          className="menu-overlay on-dark"
          role="dialog"
          aria-modal="true"
          aria-label={t.nav.menu}
        >
          <div className="menu-top">
            <Logo onClick={() => setOpen(false)} />
            <button
              ref={closeButton}
              type="button"
              className="btn menu-button"
              onClick={() => setOpen(false)}
            >
              {t.nav.close} <span aria-hidden="true">−</span>
            </button>
          </div>
          <nav aria-label={t.nav.mobileNav}>
            {[...NAV, "demo" as const].map((page, index) => (
              <Link
                key={page}
                to={page}
                aria-current={active === page ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                <span className="num">{pad(index)}</span>
                {t.nav[page]}
                <Arrow />
              </Link>
            ))}
          </nav>
          <LangList state={state} className="menu-langs" onPick={() => setOpen(false)} />
          <p className="menu-note">
            {t.nav.menuNote[0]}
            <br />
            {t.nav.menuNote[1]}
          </p>
        </div>
      )}
    </>
  );
}

export function Footer({ state }: { state: RouteState }) {
  const t = useT();
  const groups = useCatalog();
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer on-dark">
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <h2>
              {t.footer.headline[0]}
              <br />
              {t.footer.headline[1]}
            </h2>
            <p>{t.footer.copy}</p>
            {/* Dil bağlantıları: ziyaretçi ve arama motorları diğer dillere buradan ulaşır. */}
            <LangList state={state} className="footer-langs" />
          </div>
          <nav className="footer-nav" aria-label={t.footer.pagesLabel}>
            <h3>{t.footer.explore}</h3>
            <Link to="home">{t.nav.home}</Link>
            {FOOTER_NAV.map((page) => (
              <Link key={page} to={page}>
                {t.nav[page]}
              </Link>
            ))}
            <Link to="demo">{t.nav.demo}</Link>
          </nav>
          <nav className="footer-nav" aria-label={t.footer.products}>
            <h3>{t.footer.products}</h3>
            {groups.map((group) => (
              <Link key={group.id} to="products" anchor={group.id}>
                {group.name}
              </Link>
            ))}
          </nav>
          <div className="footer-cta">
            {/* Kartın hemen üstünde, kart genişliğinde ve kartın zemin renginde marka yazısı. */}
            <Logo />
            <div className="footer-card">
              <strong>{t.footer.cardTitle}</strong>
              <p>{t.footer.cardCopy}</p>
              <Link to="demo" className="btn btn-primary">
                {t.nav.demo} <Arrow />
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-legal">
          <p>{t.footer.legal}</p>
        </div>
        <div className="footer-bottom">
          <p>
            © {year} {t.site.name}. {t.footer.rights}
          </p>
          <p className="mono" dir="ltr">
            iTECH LEADER+
          </p>
          <button type="button" onClick={scrollToTop}>
            {t.footer.top} <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
