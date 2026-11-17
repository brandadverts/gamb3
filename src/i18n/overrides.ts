import type { Dictionary } from "./locales/tr";

/**
 * Admin panelinde yapılan metin değişiklikleri.
 *
 * PROTOTİP: değişiklikler yalnızca bu tarayıcıda (localStorage) tutulur. Başka bir cihazda ya da
 * ziyaretçilerde görünmez. Kalıcı hale getirmek için admin panelindeki "Dışa aktar" çıktısı
 * dil dosyalarına işlenir ya da bir arka uç bağlanır.
 *
 * Biçim: { "en": { "home.servicesTitle": "…", "packages.faqs.0.answer": "…" } }
 */
export type Overrides = Record<string, Record<string, string>>;

const KEY = "gg.overrides.v1";
const listeners = new Set<() => void>();
let memory: Overrides | null = null;

function read(): Overrides {
  if (memory) return memory;
  memory = {};
  if (typeof window === "undefined") return memory;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) memory = JSON.parse(raw) as Overrides;
  } catch {
    // Depolama kapalıysa değişiklik yokmuş gibi devam et.
  }
  return memory;
}

function write(next: Overrides) {
  memory = next;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // Kaydedilemedi; değişiklik bu oturumda bellekte kalır.
  }
  listeners.forEach((listener) => listener());
}

export const getOverrides = () => read();
export const hasOverrides = () => Object.values(read()).some((o) => Object.keys(o).length > 0);

export function setOverride(locale: string, path: string, value: string | null) {
  const all = { ...read() };
  const forLocale = { ...all[locale] };
  if (value === null) delete forLocale[path];
  else forLocale[path] = value;
  all[locale] = forLocale;
  write(all);
}

export function replaceOverrides(next: Overrides) {
  write(next);
}

export function subscribeOverrides(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** "home.services.0.title" yolundaki değeri okur. */
export function readPath(source: unknown, path: string): unknown {
  return path
    .split(".")
    .reduce<unknown>(
      (node, key) =>
        node && typeof node === "object" ? (node as Record<string, unknown>)[key] : undefined,
      source,
    );
}

const applied = new WeakMap<Dictionary, Map<string, { stamp: Overrides; value: Dictionary }>>();

/** Değişiklikleri dil dosyasının bir kopyasına uygular; değişiklik yoksa dosyanın kendisini döndürür. */
/** Yol → metin haritasını sözlüğün bir kopyasına uygular (admin önizlemesindeki taslaklar için). */
export function applyMap(base: Dictionary, changes: Record<string, string>): Dictionary {
  if (Object.keys(changes).length === 0) return base;
  const copy = JSON.parse(JSON.stringify(base)) as Dictionary;
  for (const [path, value] of Object.entries(changes)) {
    const keys = path.split(".");
    const last = keys.pop() as string;
    const target = keys.length ? readPath(copy, keys.join(".")) : copy;
    if (target && typeof target === "object" && typeof (target as Record<string, unknown>)[last] === "string") {
      (target as Record<string, unknown>)[last] = value;
    }
  }
  return copy;
}

export function applyOverrides(base: Dictionary, locale: string): Dictionary {
  const all = read();
  const changes = all[locale];
  if (!changes || Object.keys(changes).length === 0) return base;

  const perBase = applied.get(base) ?? new Map<string, { stamp: Overrides; value: Dictionary }>();
  applied.set(base, perBase);
  const hit = perBase.get(locale);
  if (hit && hit.stamp === all) return hit.value;

  const copy = JSON.parse(JSON.stringify(base)) as Dictionary;
  for (const [path, value] of Object.entries(changes)) {
    const keys = path.split(".");
    const last = keys.pop() as string;
    const parent = readPath(copy, keys.join("."));
    const target = keys.length ? parent : copy;
    if (target && typeof target === "object" && typeof (target as Record<string, unknown>)[last] === "string") {
      (target as Record<string, unknown>)[last] = value;
    }
  }
  perBase.set(locale, { stamp: all, value: copy });
  return copy;
}
