/**
 * Modül demosunun girişi.
 *
 * UYARI: parola tarayıcıya inen kodun içindedir; gerçek koruma DEĞİLDİR. Demo, müşteri
 * görüşmelerinde ekranları göstermek içindir ve hiçbir gerçek veriye bağlı değildir.
 */
export const PANEL_PASSWORD = "gamb-panel-2026";

const KEY = "gg.panel.session.v1";

export function unlock(password: string): boolean {
  if (password !== PANEL_PASSWORD) return false;
  try {
    window.sessionStorage.setItem(KEY, "1");
  } catch {
    // Depolama kapalıysa oturum yalnızca bu sayfa açık kaldığı sürece sürer.
  }
  return true;
}

export function isUnlocked(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.sessionStorage.getItem(KEY) === "1";
  } catch {
    return false;
  }
}

export function lock() {
  try {
    window.sessionStorage.removeItem(KEY);
  } catch {
    // yoksay
  }
}
