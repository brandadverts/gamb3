import { useMemo, useState } from "react";
import { forgetBody, listPosts, loadBody, type PostMeta } from "../blog";
import { log } from "./store";
import { localPosts, saveLocalPosts, slugify, toMarkdown, type LocalPost } from "../blog/localPosts";
import { Markdown } from "../blog/markdown";
import { LOCALES, type Locale } from "../i18n";

const today = () => new Date().toISOString().slice(0, 10);

const emptyPost = (locale: Locale): LocalPost => ({
  locale,
  slug: "",
  key: "",
  title: "",
  description: "",
  date: today(),
  tags: [],
  body: "",
  status: "draft",
  author: "Gamb Gaming",
  updatedAt: new Date().toISOString(),
});

function download(name: string, text: string) {
  const blob = new Blob([text], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  link.click();
  URL.revokeObjectURL(url);
}

export function BlogEditor({
  locale,
  user,
  onChanged,
}: {
  locale: Locale;
  user: string;
  onChanged: () => void;
}) {
  const [editing, setEditing] = useState<LocalPost | null>(null);
  const [preview, setPreview] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [slugTouched, setSlugTouched] = useState(false);

  const posts = localPosts();
  const mine = useMemo(
    () => posts.filter((post) => post.locale === locale).sort((a, b) => (a.date < b.date ? 1 : -1)),
    [posts, locale],
  );
  // Dosyadan gelen yazılar panelden düzenlenmez; listede yalnızca görünür.
  const fromFiles = useMemo(
    () => listPosts(locale).filter((post) => !post.file.startsWith("local:")),
    [locale],
  );

  const save = (next: LocalPost) => {
    const slug = next.slug || slugify(next.title);
    if (!next.title.trim()) {
      setError("Başlık boş olamaz.");
      return;
    }
    if (!slug) {
      setError("Adres (slug) üretilemedi; elle yazın.");
      return;
    }
    const clash = posts.some(
      (post) => post.locale === next.locale && post.slug === slug && post !== editing,
    );
    const original = editing && posts.find((p) => p.locale === editing.locale && p.slug === editing.slug);
    if (clash && !(original && original.slug === slug)) {
      setError("Bu dilde aynı adrese sahip başka bir yazı var.");
      return;
    }
    const record: LocalPost = {
      ...next,
      slug,
      key: next.key.trim() || slug,
      updatedAt: new Date().toISOString(),
    };
    const rest = posts.filter(
      (post) => !(post.locale === record.locale && post.slug === (original?.slug ?? record.slug)),
    );
    saveLocalPosts([...rest, record]);
    forgetBody(`local:${record.locale}/${record.slug}`);
    log(user, "Blog yazısı kaydedildi", `${record.locale.toUpperCase()} · ${record.title} · ${record.status === "published" ? "yayında" : "taslak"}`);
    setEditing(null);
    setError(null);
    setSlugTouched(false);
    onChanged();
  };

  const remove = (post: LocalPost) => {
    if (!window.confirm(`"${post.title}" yazısı silinsin mi? Bu işlem geri alınamaz.`)) return;
    log(user, "Blog yazısı silindi", `${post.locale.toUpperCase()} · ${post.title}`);
    saveLocalPosts(posts.filter((item) => !(item.locale === post.locale && item.slug === post.slug)));
    forgetBody(`local:${post.locale}/${post.slug}`);
    if (editing && editing.slug === post.slug && editing.locale === post.locale) setEditing(null);
    onChanged();
  };

  /** Dosyadaki bir yazıyı panelde düzenlemek için kopyasını açar; kaydedince dosyadakinin yerine geçer. */
  const editFilePost = async (post: PostMeta) => {
    const body = await loadBody(post);
    setEditing({
      locale,
      slug: post.slug,
      key: post.key,
      title: post.title,
      description: post.description,
      date: post.date,
      tags: post.tags,
      body,
      status: "published",
      author: "Gamb Gaming",
      updatedAt: new Date().toISOString(),
    });
    setSlugTouched(true);
    setPreview(false);
    setError(null);
  };

  const toggleStatus = (post: LocalPost) => {
    log(user, post.status === "published" ? "Yazı yayından alındı" : "Yazı yayınlandı", `${post.locale.toUpperCase()} · ${post.title}`);
    saveLocalPosts(
      posts.map((item) =>
        item.locale === post.locale && item.slug === post.slug
          ? { ...item, status: item.status === "published" ? "draft" : "published" }
          : item,
      ),
    );
    onChanged();
  };

  if (editing) {
    const set = <K extends keyof LocalPost>(key: K, value: LocalPost[K]) =>
      setEditing({ ...editing, [key]: value });
    const slug = editing.slug || slugify(editing.title);
    const fileName = `${editing.date}-${slug || "yazi"}.md`;

    return (
      <section className="adm-section">
        <header className="adm-section-head">
          <div>
            <h2>{editing.title ? editing.title : "Yeni yazı"}</h2>
            <p>
              Dosya adı: <code>content/blog/{editing.locale}/{fileName}</code>
            </p>
          </div>
          <div className="adm-actions">
            <button type="button" className="adm-btn" onClick={() => setPreview(!preview)}>
              {preview ? "Düzenle" : "Önizle"}
            </button>
            <button type="button" className="adm-btn" onClick={() => { setEditing(null); setError(null); }}>
              Vazgeç
            </button>
            <button type="button" className="adm-btn is-primary" onClick={() => save(editing)}>
              Kaydet
            </button>
          </div>
        </header>

        {error && <p className="adm-error">{error}</p>}

        {preview ? (
          <article className="adm-preview">
            <h1>{editing.title}</h1>
            <p className="adm-preview-lead">{editing.description}</p>
            <Markdown source={editing.body} locale={editing.locale as Locale} />
          </article>
        ) : (
          <div className="adm-form">
            <label className="adm-input">
              Başlık
              <input
                type="text"
                value={editing.title}
                onChange={(event) => {
                  const title = event.target.value;
                  setEditing({
                    ...editing,
                    title,
                    slug: slugTouched ? editing.slug : slugify(title),
                  });
                }}
              />
            </label>
            <div className="adm-row">
              <label className="adm-input">
                Adres (slug)
                <input
                  type="text"
                  value={editing.slug}
                  onChange={(event) => {
                    setSlugTouched(true);
                    set("slug", slugify(event.target.value));
                  }}
                />
              </label>
              <label className="adm-input">
                Çeviri anahtarı
                <input
                  type="text"
                  value={editing.key}
                  placeholder={slug}
                  onChange={(event) => set("key", slugify(event.target.value))}
                />
                <small>Aynı yazının diğer dillerdeki sürümleri bu anahtarla eşleşir.</small>
              </label>
            </div>
            <div className="adm-row">
              <label className="adm-input">
                Tarih
                <input
                  type="date"
                  value={editing.date}
                  onChange={(event) => set("date", event.target.value)}
                />
              </label>
              <label className="adm-input">
                Etiketler
                <input
                  type="text"
                  value={editing.tags.join(", ")}
                  onChange={(event) =>
                    set(
                      "tags",
                      event.target.value
                        .split(",")
                        .map((tag) => tag.trim())
                        .filter(Boolean),
                    )
                  }
                />
                <small>Virgülle ayırın.</small>
              </label>
              <label className="adm-input">
                Durum
                <select
                  value={editing.status}
                  onChange={(event) => set("status", event.target.value as LocalPost["status"])}
                >
                  <option value="draft">Taslak</option>
                  <option value="published">Yayında</option>
                </select>
              </label>
            </div>
            <label className="adm-input">
              Özet (arama sonuçlarında görünür)
              <textarea
                rows={2}
                value={editing.description}
                onChange={(event) => set("description", event.target.value)}
              />
              <small>{editing.description.length} / 160 karakter</small>
            </label>
            <label className="adm-input">
              Gövde (Markdown)
              <textarea
                className="adm-body"
                rows={22}
                value={editing.body}
                onChange={(event) => set("body", event.target.value)}
              />
              <small>
                ## başlık · **kalın** · *italik* · - madde · &gt; alıntı · [metin](page:products)
              </small>
            </label>
          </div>
        )}
      </section>
    );
  }

  return (
    <section className="adm-section">
      <header className="adm-section-head">
        <div>
          <h2>Blog</h2>
          <p>
            {LOCALES.find((item) => item.code === locale)?.name} dilindeki yazılar. Panelde yazılanlar
            yalnızca bu tarayıcıda durur; kalıcı olması için Markdown olarak indirip{" "}
            <code>content/blog/{locale}/</code> klasörüne koyun.
          </p>
        </div>
        <div className="adm-actions">
          <button
            type="button"
            className="adm-btn is-primary"
            onClick={() => {
              setEditing(emptyPost(locale));
              setSlugTouched(false);
              setPreview(false);
            }}
          >
            Yeni yazı
          </button>
        </div>
      </header>

      {mine.length === 0 && <p className="adm-empty">Bu dilde panelden yazılmış yazı yok.</p>}

      {mine.length > 0 && (
        <table className="adm-table">
          <thead>
            <tr>
              <th>Başlık</th>
              <th>Tarih</th>
              <th>Durum</th>
              <th>İşlem</th>
            </tr>
          </thead>
          <tbody>
            {mine.map((post) => (
              <tr key={post.slug}>
                <td>
                  <strong>{post.title}</strong>
                  <code>{post.slug}</code>
                </td>
                <td>{post.date}</td>
                <td>
                  <span className={`adm-badge${post.status === "published" ? " is-live" : ""}`}>
                    {post.status === "published" ? "Yayında" : "Taslak"}
                  </span>
                </td>
                <td className="adm-cell-actions">
                  <button type="button" className="adm-link" onClick={() => { setEditing(post); setPreview(false); }}>
                    Düzenle
                  </button>
                  <button type="button" className="adm-link" onClick={() => toggleStatus(post)}>
                    {post.status === "published" ? "Yayından al" : "Yayınla"}
                  </button>
                  <button
                    type="button"
                    className="adm-link"
                    onClick={() => download(`${post.date}-${post.slug}.md`, toMarkdown(post))}
                  >
                    Markdown indir
                  </button>
                  <button type="button" className="adm-link is-danger" onClick={() => remove(post)}>
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h3 className="adm-subhead">Sitedeki yazılar</h3>
      <p className="adm-note">
        Bunlar <code>content/blog/{locale}/</code> klasöründen gelir. "Düzenle" ile açıp kaydettiğinizde
        panel sürümü sitedeki yazının yerine geçer ve yukarıdaki listede görünür.
      </p>
      {fromFiles.length === 0 ? (
        <p className="adm-empty">Bu dilde dosya yok.</p>
      ) : (
        <table className="adm-table">
          <thead>
            <tr>
              <th>Başlık</th>
              <th>Tarih</th>
              <th>Dosya</th>
              <th>İşlem</th>
            </tr>
          </thead>
          <tbody>
            {fromFiles.map((post) => (
              <tr key={post.slug}>
                <td>
                  <strong>{post.title}</strong>
                  <code>{post.slug}</code>
                </td>
                <td>{post.date}</td>
                <td>
                  <code>{post.file.replace("/content/blog/", "")}</code>
                </td>
                <td className="adm-cell-actions">
                  {mine.some((item) => item.slug === post.slug) ? (
                    <span className="adm-badge">Panelde düzenlendi</span>
                  ) : (
                    <button type="button" className="adm-link" onClick={() => void editFilePost(post)}>
                      Düzenle
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
