import { useEffect, useState, type FormEvent } from "react";
import { localPosts, saveLocalPosts, type LocalPost } from "../blog/localPosts";
import { LOCALES, loadLocale, type Locale } from "../i18n";
import { getOverrides, replaceOverrides, type Overrides } from "../i18n/overrides";
import { hrefFor } from "../router";
import { ACCOUNTS, ROLE_LABEL, currentSession, signIn, signOut, type Session } from "./accounts";
import { BlogEditor } from "./BlogEditor";
import { ContentEditor } from "./ContentEditor";
import { Dashboard } from "./Dashboard";
import { confirmLeave, useDrafts } from "./drafts";
import { SECTIONS, type SectionId } from "./fields";
import { PageEditor } from "./PageEditor";
import { log } from "./store";
import { Users } from "./Users";

type Tab = "home" | SectionId | "blog" | "users" | "data";

const TAB_LABELS: Record<Tab, string> = {
  home: "Genel bakış",
  pages: "Sayfalar",
  seo: "SEO (tüm sayfalar)",
  catalog: "Ürün kataloğu",
  panel: "Panel demosu",
  blog: "Blog",
  users: "Kullanıcılar",
  data: "Yedek ve veri",
};

const ADMIN_TABS: Tab[] = ["home", "pages", "blog", "seo", "catalog", "panel", "users", "data"];
const MODERATOR_TABS: Tab[] = ["home", "pages", "blog"];

const countOverrides = (all: Overrides) =>
  Object.values(all).reduce((sum, forLocale) => sum + Object.keys(forLocale).length, 0);

function Login({ onSignIn }: { onSignIn: (session: Session) => void }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const session = signIn(user, password);
    if (session) {
      log(session.user, "Giriş yaptı", ROLE_LABEL[session.role]);
      onSignIn(session);
    } else setError(true);
  };

  return (
    <div className="adm-login">
      <form onSubmit={submit}>
        <p className="adm-login-brand">
          gamb gaming <span>yönetim</span>
        </p>
        <h1>Giriş</h1>
        <label className="adm-input">
          Kullanıcı adı
          <input
            type="text"
            autoComplete="username"
            value={user}
            onChange={(event) => {
              setUser(event.target.value);
              setError(false);
            }}
          />
        </label>
        <label className="adm-input">
          Parola
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setError(false);
            }}
          />
        </label>
        {error && (
          <p className="adm-error">Kullanıcı adı ya da parola hatalı, ya da hesap pasif.</p>
        )}
        <button type="submit" className="adm-btn is-primary">
          Giriş yap
        </button>
        <div className="adm-login-note">
          <strong>Bu bir prototiptir.</strong>
          <p>
            Parolalar tarayıcıya inen kodun içindedir ve gerçek koruma sağlamaz. Panelde yapılan
            değişiklikler yalnızca bu tarayıcıda görünür; sunucuya hiçbir şey gönderilmez.
          </p>
          <p>Örnek hesaplar (yönetici panelinden yenileri eklenebilir):</p>
          <ul>
            {ACCOUNTS.map((account) => (
              <li key={account.user}>
                <code>{account.user}</code> / <code>{account.password}</code> —{" "}
                {ROLE_LABEL[account.role]}
              </li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
}

function DataTools({ onChanged }: { onChanged: () => void }) {
  const [message, setMessage] = useState<string | null>(null);
  const overrides = getOverrides();
  const posts = localPosts();

  const exportAll = () => {
    const payload = {
      exportedAt: new Date().toISOString(),
      overrides,
      posts,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `gamb-icerik-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
    setMessage("Dışa aktarıldı.");
  };

  const importFile = async (file: File) => {
    try {
      const parsed = JSON.parse(await file.text()) as {
        overrides?: Overrides;
        posts?: LocalPost[];
      };
      if (parsed.overrides) replaceOverrides(parsed.overrides);
      if (parsed.posts) saveLocalPosts(parsed.posts);
      onChanged();
      setMessage("İçe aktarıldı.");
    } catch {
      setMessage("Dosya okunamadı: geçerli bir JSON değil.");
    }
  };

  const reset = () => {
    if (!window.confirm("Bütün metin değişiklikleri ve panelden yazılan yazılar silinsin mi?")) return;
    replaceOverrides({});
    saveLocalPosts([]);
    onChanged();
    setMessage("Sıfırlandı.");
  };

  return (
    <section className="adm-section">
      <header className="adm-section-head">
        <div>
          <h2>Veri</h2>
          <p>
            Panelde yapılan her şey tarayıcının <code>localStorage</code> alanında durur. Başka bir
            tarayıcıya taşımak ya da yedeklemek için dışa aktarın.
          </p>
        </div>
      </header>

      <div className="adm-stats">
        <div>
          <strong>{countOverrides(overrides)}</strong>
          <span>değiştirilmiş metin</span>
        </div>
        <div>
          <strong>{posts.length}</strong>
          <span>panelde yazılmış yazı</span>
        </div>
        <div>
          <strong>{posts.filter((post) => post.status === "published").length}</strong>
          <span>yayındaki yazı</span>
        </div>
      </div>

      <div className="adm-actions">
        <button type="button" className="adm-btn is-primary" onClick={exportAll}>
          Dışa aktar (JSON)
        </button>
        <label className="adm-btn">
          İçe aktar
          <input
            type="file"
            accept="application/json"
            hidden
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) void importFile(file);
              event.target.value = "";
            }}
          />
        </label>
        <button type="button" className="adm-btn is-danger" onClick={reset}>
          Her şeyi sıfırla
        </button>
      </div>

      {message && <p className="adm-note">{message}</p>}

      <h3 className="adm-subhead">Değişiklikleri kalıcı hale getirmek</h3>
      <ol className="adm-steps">
        <li>Dışa aktarılan JSON dosyasını alın.</li>
        <li>
          <code>overrides</code> altındaki metinleri ilgili dil dosyasına (
          <code>src/i18n/locales/&lt;dil&gt;.ts</code>) işleyin.
        </li>
        <li>
          Blog yazılarını blog ekranından Markdown olarak indirip{" "}
          <code>content/blog/&lt;dil&gt;/</code> klasörüne koyun.
        </li>
        <li>
          <code>pnpm build</code> ile siteyi yeniden derleyin.
        </li>
      </ol>
    </section>
  );
}

export default function AdminApp() {
  const [session, setSession] = useState<Session | null>(() => currentSession());
  const [tab, setTab] = useState<Tab>("home");
  const [pageId, setPageId] = useState("home");
  const [locale, setLocale] = useState<Locale>("tr");
  const [ready, setReady] = useState(false);
  const [, setRefresh] = useState(0);
  const onChanged = () => setRefresh((value) => value + 1);
  const drafts = useDrafts(locale, session?.user ?? "?", onChanged);

  useEffect(() => {
    document.title = "Yönetim — Gamb Gaming";
  }, []);

  // Seçilen dilin metinleri yüklenmeden alanlar çizilmez.
  useEffect(() => {
    let cancelled = false;
    setReady(false);
    void loadLocale(locale).then(() => {
      if (!cancelled) setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, [locale]);

  if (!session) return <Login onSignIn={setSession} />;

  const tabs = session.role === "admin" ? ADMIN_TABS : MODERATOR_TABS;
  const active = tabs.includes(tab) ? tab : tabs[0];
  const section = active === "pages" ? undefined : SECTIONS.find((item) => item.id === active);
  const needsLocale = active === "pages" || Boolean(section) || active === "blog";

  /** Kaydedilmemiş değişiklik varsa sorup başka ekrana geçer. */
  const go = (next: Tab, page?: string) => {
    if (!confirmLeave(drafts.count)) return;
    drafts.discard();
    if (page) setPageId(page);
    setTab(next);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="adm">
      <header className="adm-bar">
        <span className="adm-brand">
          gamb gaming <span>yönetim</span>
        </span>
        <span className="adm-who">
          {session.name}
          <span className={`adm-badge${session.role === "admin" ? " is-live" : ""}`}>
            {ROLE_LABEL[session.role]}
          </span>
        </span>
        <a className="adm-link" href={hrefFor("home", locale)}>
          Siteye dön
        </a>
        <button
          type="button"
          className="adm-link"
          onClick={() => {
            if (!confirmLeave(drafts.count)) return;
            log(session.user, "Çıkış yaptı", "");
            signOut();
            setSession(null);
          }}
        >
          Çıkış
        </button>
      </header>

      <div className="adm-body">
        <nav className="adm-nav" aria-label="Yönetim bölümleri">
          {tabs.map((item) => (
            <button
              key={item}
              type="button"
              aria-current={item === active ? "page" : undefined}
              onClick={() => item !== active && go(item)}
            >
              {TAB_LABELS[item]}
            </button>
          ))}
          {session.role === "moderator" && (
            <p className="adm-nav-note">
              Moderatör yetkisi: sayfa metinleri ve blog. SEO, katalog, kullanıcılar ve veri işlemleri
              yöneticidedir.
            </p>
          )}
        </nav>

        <main className="adm-main">
          {needsLocale && (
            <div className="adm-locales" role="tablist" aria-label="Dil">
              {LOCALES.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  role="tab"
                  aria-selected={item.code === locale}
                  onClick={() => {
                    if (item.code === locale || !confirmLeave(drafts.count)) return;
                    drafts.discard();
                    setLocale(item.code);
                  }}
                >
                  {item.code.toUpperCase()}
                </button>
              ))}
              <span className="adm-locale-name">
                {LOCALES.find((item) => item.code === locale)?.name}
                {locale !== "tr" && " · Türkçe metin her alanın üstünde"}
              </span>
            </div>
          )}

          {needsLocale && !ready ? (
            <p className="adm-empty">Dil dosyası yükleniyor…</p>
          ) : active === "home" ? (
            <Dashboard
              session={session}
              onOpenPage={(id) => go("pages", id)}
              onOpen={(next) => go(next)}
            />
          ) : active === "pages" ? (
            <PageEditor
              key={`${pageId}-${locale}`}
              locale={locale}
              drafts={drafts}
              onChanged={onChanged}
              initialPage={pageId}
            />
          ) : section ? (
            <ContentEditor
              key={`${section.id}-${locale}`}
              section={section}
              locale={locale}
              drafts={drafts}
              onChanged={onChanged}
            />
          ) : active === "blog" ? (
            <BlogEditor key={locale} locale={locale} user={session.user} onChanged={onChanged} />
          ) : active === "users" ? (
            <Users session={session} />
          ) : (
            <DataTools onChanged={onChanged} />
          )}
        </main>
      </div>
    </div>
  );
}
