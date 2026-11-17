/**
 * Panel kullanıcıları ve işlem günlüğü.
 *
 * PROTOTİP: her şey bu tarayıcının localStorage alanında durur. Parolalar düz metindir ve
 * gerçek koruma sağlamaz. Arka uç bağlandığında bu dosya bir API istemcisiyle değiştirilir;
 * ekranlar aynı kalır.
 */
import { ACCOUNTS, type Account, type Role } from "./accounts";

export type User = Account & { active: boolean; createdAt: string };
export type LogEntry = { at: string; user: string; action: string; detail: string };

const USERS_KEY = "gg.admin.users.v1";
const LOG_KEY = "gg.admin.log.v1";
const LOG_LIMIT = 200;

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key: string, value: unknown) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Depolama kapalıysa değişiklik yalnızca bu oturumda kalır.
  }
}

let usersMemory: User[] | null = null;

/** Kayıtlı kullanıcılar; ilk açılışta örnek hesaplarla başlar. */
export function listUsers(): User[] {
  if (usersMemory) return usersMemory;
  const stored = readJson<User[] | null>(USERS_KEY, null);
  usersMemory =
    stored && stored.length
      ? stored
      : ACCOUNTS.map((account) => ({ ...account, active: true, createdAt: "2026-11-01" }));
  return usersMemory;
}

export function saveUsers(next: User[]) {
  usersMemory = next;
  writeJson(USERS_KEY, next);
}

export function findUser(user: string) {
  return listUsers().find((item) => item.user === user.trim().toLowerCase());
}

export function touchUser(user: string) {
  const stamp = new Intl.DateTimeFormat("tr", { dateStyle: "medium", timeStyle: "short" }).format(
    new Date(),
  );
  saveUsers(listUsers().map((item) => (item.user === user ? { ...item, lastSeen: stamp } : item)));
}

export const activeAdmins = (users: User[]) =>
  users.filter((item) => item.role === "admin" && item.active).length;

export function validateUser(
  draft: { user: string; password: string; name: string; role: Role },
  users: User[],
  editing?: string,
): string | null {
  const user = draft.user.trim().toLowerCase();
  if (!draft.name.trim()) return "Ad soyad boş olamaz.";
  if (!/^[a-z0-9._-]{3,32}$/.test(user))
    return "Kullanıcı adı 3–32 karakter olmalı; yalnızca küçük harf, rakam, nokta, tire ve alt çizgi.";
  if (users.some((item) => item.user === user && item.user !== editing))
    return "Bu kullanıcı adı zaten kullanılıyor.";
  if (!editing && draft.password.length < 8) return "Parola en az 8 karakter olmalı.";
  if (editing && draft.password && draft.password.length < 8)
    return "Yeni parola en az 8 karakter olmalı.";
  return null;
}

export function listLog(): LogEntry[] {
  return readJson<LogEntry[]>(LOG_KEY, []);
}

export function log(user: string, action: string, detail: string) {
  const next = [{ at: new Date().toISOString(), user, action, detail }, ...listLog()].slice(
    0,
    LOG_LIMIT,
  );
  writeJson(LOG_KEY, next);
}

export function clearLog() {
  writeJson(LOG_KEY, []);
}

export function formatStamp(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat("tr", { dateStyle: "medium", timeStyle: "short" }).format(date);
}
