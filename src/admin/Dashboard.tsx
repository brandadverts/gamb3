import { listPosts } from "../blog";
import { localPosts } from "../blog/localPosts";
import { LOCALES } from "../i18n";
import { getOverrides } from "../i18n/overrides";
import { hrefFor } from "../router";
import { ROLE_LABEL, type Session } from "./accounts";
import { PAGE_DEFS } from "./PageEditor";
import { formatStamp, listLog, listUsers } from "./store";

/** Giriş sonrası ilk ekran: özet, hızlı bağlantılar ve son işlemler. */
export function Dashboard({
  session,
  onOpenPage,
  onOpen,
}: {
  session: Session;
  onOpenPage: (id: string) => void;
  onOpen: (tab: "blog" | "users" | "data") => void;
}) {
  const overrides = getOverrides();
  const changed = Object.values(overrides).reduce((n, map) => n + Object.keys(map).length, 0);
  const postCount = LOCALES.reduce((n, item) => n + listPosts(item.code).length, 0);
  const drafts = localPosts().filter((post) => post.status === "draft").length;
  const users = listUsers();
  const entries = listLog().slice(0, 12);
  const isAdmin = session.role === "admin";

  return (
    <section className="adm-section">
      <header className="adm-section-head">
        <div>
          <h2>Hoş geldiniz, {session.name.split(" ")[0]}</h2>
          <p>
            {ROLE_LABEL[session.role]} olarak giriş yaptınız. Bir sayfayı düzenlemek için aşağıdan
            seçin ya da soldaki menüyü kullanın.
          </p>
        </div>
        <div className="adm-actions">
          <a className="adm-btn" href={hrefFor("home", "tr")} target="_blank" rel="noreferrer">
            Siteyi yeni sekmede aç
          </a>
        </div>
      </header>

      <div className="adm-stats">
        <div>
          <strong>{LOCALES.length}</strong>
          <span>dil</span>
        </div>
        <div>
          <strong>{changed}</strong>
          <span>panelde değiştirilmiş metin</span>
        </div>
        <div>
          <button type="button" onClick={() => onOpen("blog")}>
            <strong>{postCount}</strong>
            <span>blog yazısı{drafts ? ` · ${drafts} taslak` : ""}</span>
          </button>
        </div>
        {isAdmin && (
          <div>
            <button type="button" onClick={() => onOpen("users")}>
              <strong>{users.filter((item) => item.active).length}</strong>
              <span>etkin kullanıcı</span>
            </button>
          </div>
        )}
      </div>

      <h3 className="adm-subhead">Sayfayı düzenle</h3>
      <div className="adm-tiles">
        {PAGE_DEFS.map((page) => (
          <button key={page.id} type="button" onClick={() => onOpenPage(page.id)}>
            <strong>{page.label}</strong>
            <span>Metinler ve canlı önizleme →</span>
          </button>
        ))}
      </div>

      <h3 className="adm-subhead">Son işlemler</h3>
      {entries.length === 0 ? (
        <p className="adm-empty">Henüz kayıt yok. Kaydettiğiniz değişiklikler burada listelenir.</p>
      ) : (
        <table className="adm-table">
          <thead>
            <tr>
              <th>Zaman</th>
              <th>Kullanıcı</th>
              <th>İşlem</th>
              <th>Ayrıntı</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={entry.at + index}>
                <td>{formatStamp(entry.at)}</td>
                <td>
                  <code>{entry.user}</code>
                </td>
                <td>{entry.action}</td>
                <td>{entry.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {isAdmin && (
        <p className="adm-note">
          Değişiklikleri yedeklemek ya da başka bir tarayıcıya taşımak için{" "}
          <button type="button" className="adm-link" onClick={() => onOpen("data")}>
            Veri
          </button>{" "}
          ekranını kullanın.
        </p>
      )}
    </section>
  );
}
