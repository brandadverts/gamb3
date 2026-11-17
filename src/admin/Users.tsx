import { useState, type FormEvent } from "react";
import { ROLE_LABEL, ROLE_SCOPE, type Role, type Session } from "./accounts";
import { activeAdmins, listUsers, log, saveUsers, validateUser, type User } from "./store";

type Draft = { name: string; title: string; user: string; password: string; role: Role };
const EMPTY: Draft = { name: "", title: "", user: "", password: "", role: "moderator" };

/** Okunabilir, rastgele bir parola önerir. */
function suggestPassword() {
  const alphabet = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = new Uint32Array(12);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (n) => alphabet[n % alphabet.length]).join("");
}

function UserForm({
  initial,
  editing,
  users,
  onSave,
  onCancel,
}: {
  initial: Draft;
  editing?: User;
  users: User[];
  onSave: (draft: Draft) => void;
  onCancel: () => void;
}) {
  const [draft, setDraft] = useState<Draft>(initial);
  const [error, setError] = useState<string | null>(null);
  const [show, setShow] = useState(!editing);
  const set = <K extends keyof Draft>(key: K, value: Draft[K]) => {
    setDraft({ ...draft, [key]: value });
    setError(null);
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const problem = validateUser(draft, users, editing?.user);
    if (problem) return setError(problem);
    // Son etkin yönetici rolünü kaybedemez.
    if (editing?.role === "admin" && draft.role !== "admin" && activeAdmins(users) <= 1) {
      return setError("Sistemde en az bir etkin yönetici kalmalı.");
    }
    onSave(draft);
  };

  return (
    <form className="adm-userform" onSubmit={submit}>
      <h3>{editing ? `${editing.name} — düzenle` : "Yeni kullanıcı"}</h3>
      <div className="adm-row">
        <label className="adm-input">
          Ad soyad
          <input value={draft.name} onChange={(e) => set("name", e.target.value)} autoFocus />
        </label>
        <label className="adm-input">
          Görev
          <input
            value={draft.title}
            placeholder="Örn. İçerik editörü"
            onChange={(e) => set("title", e.target.value)}
          />
        </label>
      </div>
      <div className="adm-row">
        <label className="adm-input">
          Kullanıcı adı
          <input
            value={draft.user}
            autoComplete="off"
            onChange={(e) => set("user", e.target.value.toLowerCase())}
          />
          <small>Küçük harf, rakam, nokta, tire ve alt çizgi.</small>
        </label>
        <label className="adm-input">
          {editing ? "Yeni parola (boş bırakırsanız değişmez)" : "Parola"}
          <span className="adm-inline">
            <input
              type={show ? "text" : "password"}
              value={draft.password}
              autoComplete="new-password"
              onChange={(e) => set("password", e.target.value)}
            />
            <button type="button" className="adm-link" onClick={() => setShow(!show)}>
              {show ? "Gizle" : "Göster"}
            </button>
            <button
              type="button"
              className="adm-link"
              onClick={() => {
                set("password", suggestPassword());
                setShow(true);
              }}
            >
              Öner
            </button>
          </span>
          <small>En az 8 karakter.</small>
        </label>
      </div>
      <fieldset className="adm-roles">
        <legend>Rol</legend>
        {(["admin", "moderator"] as Role[]).map((role) => (
          <label key={role} className={`adm-role${draft.role === role ? " is-on" : ""}`}>
            <input
              type="radio"
              name="role"
              checked={draft.role === role}
              onChange={() => set("role", role)}
            />
            <strong>{ROLE_LABEL[role]}</strong>
            <span>{ROLE_SCOPE[role]}</span>
          </label>
        ))}
      </fieldset>
      {error && <p className="adm-error">{error}</p>}
      <div className="adm-actions">
        <button type="submit" className="adm-btn is-primary">
          {editing ? "Değişiklikleri kaydet" : "Kullanıcıyı ekle"}
        </button>
        <button type="button" className="adm-btn" onClick={onCancel}>
          Vazgeç
        </button>
      </div>
    </form>
  );
}

export function Users({ session }: { session: Session }) {
  const [users, setUsers] = useState<User[]>(() => listUsers());
  const [mode, setMode] = useState<{ kind: "add" } | { kind: "edit"; user: string } | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const commit = (next: User[], note: string, action: string, detail: string) => {
    saveUsers(next);
    setUsers(next);
    setMessage(note);
    log(session.user, action, detail);
  };

  const add = (draft: Draft) => {
    const user = draft.user.trim().toLowerCase();
    const record: User = {
      user,
      password: draft.password,
      role: draft.role,
      name: draft.name.trim(),
      title: draft.title.trim() || ROLE_LABEL[draft.role],
      lastSeen: "Henüz giriş yapmadı",
      active: true,
      createdAt: new Date().toISOString().slice(0, 10),
    };
    commit([...users, record], `${record.name} eklendi. Giriş bilgilerini kendisine iletin.`, "Kullanıcı eklendi", `${record.user} · ${ROLE_LABEL[record.role]}`);
    setMode(null);
  };

  const update = (target: User, draft: Draft) => {
    const next = users.map((item) =>
      item.user === target.user
        ? {
            ...item,
            user: draft.user.trim().toLowerCase(),
            name: draft.name.trim(),
            title: draft.title.trim(),
            role: draft.role,
            password: draft.password ? draft.password : item.password,
          }
        : item,
    );
    commit(next, `${draft.name} güncellendi.`, "Kullanıcı güncellendi", `${draft.user}${draft.password ? " · parola değişti" : ""}`);
    setMode(null);
  };

  const toggle = (target: User) => {
    if (target.user === session.user) return setMessage("Kendi hesabınızı pasifleştiremezsiniz.");
    if (target.active && target.role === "admin" && activeAdmins(users) <= 1)
      return setMessage("Sistemde en az bir etkin yönetici kalmalı.");
    commit(
      users.map((item) => (item.user === target.user ? { ...item, active: !item.active } : item)),
      `${target.name} ${target.active ? "pasifleştirildi; giriş yapamaz" : "yeniden etkinleştirildi"}.`,
      target.active ? "Kullanıcı pasifleştirildi" : "Kullanıcı etkinleştirildi",
      target.user,
    );
  };

  const remove = (target: User) => {
    if (target.user === session.user) return setMessage("Kendi hesabınızı silemezsiniz.");
    if (target.role === "admin" && target.active && activeAdmins(users) <= 1)
      return setMessage("Sistemde en az bir etkin yönetici kalmalı.");
    if (!window.confirm(`${target.name} (${target.user}) silinsin mi? Bu işlem geri alınamaz.`)) return;
    commit(users.filter((item) => item.user !== target.user), `${target.name} silindi.`, "Kullanıcı silindi", target.user);
  };

  const editing = mode?.kind === "edit" ? users.find((item) => item.user === mode.user) : undefined;

  return (
    <section className="adm-section">
      <header className="adm-section-head">
        <div>
          <h2>Kullanıcılar</h2>
          <p>
            Yöneticiler her şeyi, moderatörler yalnızca sayfa metinlerini ve blogu düzenler. Prototipte
            kullanıcılar bu tarayıcıda saklanır.
          </p>
        </div>
        {!mode && (
          <div className="adm-actions">
            <button type="button" className="adm-btn is-primary" onClick={() => setMode({ kind: "add" })}>
              + Yeni kullanıcı
            </button>
          </div>
        )}
      </header>

      {message && <p className="adm-note adm-flash">{message}</p>}

      {mode?.kind === "add" && (
        <UserForm initial={EMPTY} users={users} onSave={add} onCancel={() => setMode(null)} />
      )}
      {editing && (
        <UserForm
          key={editing.user}
          initial={{ name: editing.name, title: editing.title, user: editing.user, password: "", role: editing.role }}
          editing={editing}
          users={users}
          onSave={(draft) => update(editing, draft)}
          onCancel={() => setMode(null)}
        />
      )}

      <table className="adm-table">
        <thead>
          <tr>
            <th>Ad</th>
            <th>Kullanıcı adı</th>
            <th>Rol</th>
            <th>Durum</th>
            <th>Son giriş</th>
            <th>İşlem</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.user} className={item.active ? undefined : "is-off"}>
              <td>
                <strong>
                  {item.name}
                  {item.user === session.user && <span className="adm-you"> (siz)</span>}
                </strong>
                <code>{item.title}</code>
              </td>
              <td>
                <code>{item.user}</code>
              </td>
              <td>
                <span className={`adm-badge${item.role === "admin" ? " is-live" : ""}`}>
                  {ROLE_LABEL[item.role]}
                </span>
              </td>
              <td>{item.active ? "Etkin" : "Pasif"}</td>
              <td>{item.lastSeen}</td>
              <td className="adm-cell-actions">
                <button type="button" className="adm-link" onClick={() => setMode({ kind: "edit", user: item.user })}>
                  Düzenle
                </button>
                <button type="button" className="adm-link" onClick={() => toggle(item)}>
                  {item.active ? "Pasifleştir" : "Etkinleştir"}
                </button>
                <button type="button" className="adm-link is-danger" onClick={() => remove(item)}>
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
