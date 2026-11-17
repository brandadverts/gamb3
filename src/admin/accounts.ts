/**
 * Prototip kullanıcıları ve oturum.
 *
 * UYARI: şifreler tarayıcıya inen kodun içindedir; bu bir güvenlik katmanı DEĞİLDİR.
 * Yalnızca panelin akışını göstermek içindir. Gerçek kurulumda giriş arka uçta doğrulanır.
 */
import { findUser, touchUser } from "./store";

export type Role = "admin" | "moderator";

export type Account = {
  user: string;
  password: string;
  role: Role;
  name: string;
  title: string;
  lastSeen: string;
};

export const ACCOUNTS: Account[] = [
  {
    user: "admin",
    password: "gamb-admin-2026",
    role: "admin",
    name: "Deniz Arslan",
    title: "Platform yöneticisi",
    lastSeen: "Bugün 09:12",
  },
  {
    user: "moderator",
    password: "gamb-moderator-2026",
    role: "moderator",
    name: "Elif Yücel",
    title: "İçerik editörü",
    lastSeen: "Dün 18:40",
  },
];

export const ROLE_LABEL: Record<Role, string> = {
  admin: "Yönetici",
  moderator: "Moderatör",
};

export const ROLE_SCOPE: Record<Role, string> = {
  admin: "Bütün bölümler, kullanıcılar ve veri işlemleri",
  moderator: "Yalnızca sayfa metinleri ve blog",
};

const KEY = "gg.admin.session.v1";

export type Session = { user: string; role: Role; name: string; title: string };

export function signIn(user: string, password: string): Session | null {
  // Panelden eklenen kullanıcılar da dahil, kayıtlı ve etkin hesaplar arasında arar.
  const found = findUser(user);
  if (!found || !found.active || found.password !== password) return null;
  touchUser(found.user);
  const session: Session = {
    user: found.user,
    role: found.role,
    name: found.name,
    title: found.title,
  };
  try {
    window.sessionStorage.setItem(KEY, JSON.stringify(session));
  } catch {
    // Depolama kapalıysa oturum yalnızca bu sayfa açık kaldığı sürece sürer.
  }
  return session;
}

export function currentSession(): Session | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Session) : null;
  } catch {
    return null;
  }
}

export function signOut() {
  try {
    window.sessionStorage.removeItem(KEY);
  } catch {
    // yoksay
  }
}
