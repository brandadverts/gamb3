import { createContext, useContext, useMemo } from "react";
import { GROUP_COUNT, MODULE_COUNT, catalogStructure } from "../data";
import en from "./locales/en";
import tr, { type Dictionary } from "./locales/tr";
import { applyOverrides } from "./overrides";

export type { Dictionary };

/** Sitenin dilleri. İlk sıradaki (en) ana dildir ve adreslerde önek almaz. */
export const LOCALES = [
  { code: "en", name: "English", dir: "ltr", og: "en_US" },
  { code: "tr", name: "Türkçe", dir: "ltr", og: "tr_TR" },
  { code: "de", name: "Deutsch", dir: "ltr", og: "de_DE" },
  { code: "fr", name: "Français", dir: "ltr", og: "fr_FR" },
  { code: "es", name: "Español", dir: "ltr", og: "es_ES" },
  { code: "pt", name: "Português", dir: "ltr", og: "pt_BR" },
  { code: "ru", name: "Русский", dir: "ltr", og: "ru_RU" },
  { code: "ar", name: "العربية", dir: "rtl", og: "ar_AR" },
] as const;

export type Locale = (typeof LOCALES)[number]["code"];
export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_CODES = LOCALES.map((l) => l.code) as Locale[];
export const isLocale = (value: string): value is Locale =>
  (LOCALE_CODES as string[]).includes(value);
export const localeInfo = (code: Locale) => LOCALES.find((l) => l.code === code) ?? LOCALES[0];

/* İngilizce (ana dil) ve Türkçe (metinlerin ölçüsü, admin referansı) her zaman pakettedir;
   diğer diller ihtiyaç olduğunda yüklenir. */
type Lazy = Exclude<Locale, "tr" | "en">;
const loaders: Record<Lazy, () => Promise<{ default: Dictionary }>> = {
  de: () => import("./locales/de"),
  fr: () => import("./locales/fr"),
  es: () => import("./locales/es"),
  pt: () => import("./locales/pt"),
  ru: () => import("./locales/ru"),
  ar: () => import("./locales/ar"),
};
const cache = new Map<Locale, Dictionary>([
  ["en", en],
  ["tr", tr],
]);

export async function loadLocale(locale: Locale): Promise<Dictionary> {
  const hit = cache.get(locale);
  if (hit) return hit;
  const loaded = (await loaders[locale as Lazy]()).default;
  cache.set(locale, loaded);
  return loaded;
}

/** Yüklenmiş dil dosyası (admin panelinden yapılan değişiklikler uygulanmadan). */
export const baseDictionary = (locale: Locale): Dictionary => cache.get(locale) ?? en;

/** Sitede gösterilen metinler: dil dosyası + admin panelinde kaydedilen değişiklikler. */
export const getDictionary = (locale: Locale): Dictionary =>
  applyOverrides(baseDictionary(locale), locale);

/** "{modules} modül" → "32 modül" */
export function fill(text: string, extra: Record<string, string | number> = {}) {
  const values: Record<string, string | number> = {
    modules: MODULE_COUNT,
    groups: GROUP_COUNT,
    ...extra,
  };
  return text.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}

type LocaleState = { locale: Locale; t: Dictionary };
const LocaleContext = createContext<LocaleState>({ locale: DEFAULT_LOCALE, t: en });
export const LocaleProvider = LocaleContext.Provider;

/** Geçerli dilin metinleri. */
export const useT = () => useContext(LocaleContext).t;
export const useLocale = () => useContext(LocaleContext).locale;

export type CatalogModule = {
  id: string;
  name: string;
  tag: string;
  description: string;
  items: string[];
};
export type CatalogGroup = { id: string; name: string; summary: string; modules: CatalogModule[] };

/** Kataloğun iskeletini (data.ts) verilen dilin metinleriyle birleştirir. */
export function buildCatalog(t: Dictionary): CatalogGroup[] {
  const groups = t.catalog.groups as Record<string, { name: string; summary: string }>;
  const modules = t.catalog.modules as Record<string, Omit<CatalogModule, "id">>;
  return catalogStructure.map((group) => ({
    id: group.id,
    ...groups[group.id],
    modules: group.modules.map((id) => ({ id, ...modules[id] })),
  }));
}

export function useCatalog(): CatalogGroup[] {
  const t = useT();
  return useMemo(() => buildCatalog(t), [t]);
}
