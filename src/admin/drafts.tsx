import { useCallback, useEffect, useState } from "react";
import { baseDictionary, type Locale } from "../i18n";
import tr from "../i18n/locales/tr";
import { getOverrides, readPath, setOverride } from "../i18n/overrides";
import { log } from "./store";

/**
 * Taslak düzenleme: alanlarda yazılanlar önce taslakta tutulur, "Kaydet" ile siteye işlenir.
 * Kaydedilmemiş değişiklik varken sayfadan çıkmak uyarı verir.
 */

/** Bir alanın o dildeki hâli: dosyadaki metin + varsa panelden kaydedilmiş değişiklik. */
export function valueOf(locale: Locale, path: string) {
  const base = readPath(baseDictionary(locale), path);
  const override = getOverrides()[locale]?.[path];
  return {
    base: typeof base === "string" ? base : "",
    override: typeof override === "string" ? override : undefined,
  };
}

export type Drafts = {
  values: Record<string, string>;
  count: number;
  set: (path: string, value: string) => void;
  discard: () => void;
  save: (where: string) => number;
};

export function useDrafts(locale: Locale, user: string, onSaved: () => void): Drafts {
  const [values, setValues] = useState<Record<string, string>>({});

  const set = useCallback(
    (path: string, value: string) => {
      setValues((current) => {
        const { base, override } = valueOf(locale, path);
        const saved = override ?? base;
        const next = { ...current };
        if (value === saved) delete next[path];
        else next[path] = value;
        return next;
      });
    },
    [locale],
  );

  const discard = useCallback(() => setValues({}), []);

  const save = useCallback(
    (where: string) => {
      const entries = Object.entries(values);
      for (const [path, value] of entries) {
        const { base } = valueOf(locale, path);
        setOverride(locale, path, value === base ? null : value);
      }
      if (entries.length) {
        log(user, "Metin kaydedildi", `${where} · ${locale.toUpperCase()} · ${entries.length} alan`);
      }
      setValues({});
      onSaved();
      return entries.length;
    },
    [values, locale, user, onSaved],
  );

  const count = Object.keys(values).length;

  // Kaydedilmemiş değişiklik varken sekmeyi kapatmaya çalışınca uyar.
  useEffect(() => {
    if (!count) return;
    const warn = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [count]);

  return { values, count, set, discard, save };
}

const SEO_LIMITS: Record<string, number> = { title: 60, description: 160 };

export function FieldInput({
  path,
  label,
  multiline,
  locale,
  drafts,
  onFocusText,
  onReverted,
}: {
  path: string;
  label: string;
  multiline: boolean;
  locale: Locale;
  drafts: Drafts;
  /** Önizlemede ilgili metni bulmak için alanın kaydedilmiş hâli gönderilir. */
  onFocusText?: (text: string) => void;
  onReverted: () => void;
}) {
  const { base, override } = valueOf(locale, path);
  const saved = override ?? base;
  const draft = drafts.values[path];
  const value = draft ?? saved;
  const dirty = draft !== undefined;
  const changed = override !== undefined;
  const reference = locale === "tr" ? undefined : readPath(tr, path);
  const limitKey = path.startsWith("meta.") ? (path.split(".").pop() ?? "") : "";
  const limit = SEO_LIMITS[limitKey];
  const id = `f-${locale}-${path.replace(/[^a-z0-9]/gi, "-")}`;

  return (
    <div className={`adm-field${changed ? " is-changed" : ""}${dirty ? " is-dirty" : ""}`}>
      <div className="adm-field-head">
        <label htmlFor={id}>{label}</label>
        {dirty && <em className="adm-dirty">kaydedilmedi</em>}
        {!dirty && changed && <em className="adm-saved">panelde değiştirildi</em>}
        <span className="adm-field-tools">
          {dirty && (
            <button type="button" className="adm-link" onClick={() => drafts.set(path, saved)}>
              Geri al
            </button>
          )}
          {changed && !dirty && (
            <button
              type="button"
              className="adm-link"
              onClick={() => {
                setOverride(locale, path, null);
                onReverted();
              }}
            >
              Özgün metne dön
            </button>
          )}
        </span>
      </div>
      {typeof reference === "string" && reference !== value && (
        <p className="adm-reference" lang="tr" dir="ltr">
          <span>TR</span>
          {reference}
        </p>
      )}
      {multiline ? (
        <textarea
          id={id}
          rows={Math.min(10, Math.max(3, Math.ceil(value.length / 70)))}
          value={value}
          onFocus={() => onFocusText?.(saved)}
          onChange={(event) => drafts.set(path, event.target.value)}
        />
      ) : (
        <input
          id={id}
          type="text"
          value={value}
          onFocus={() => onFocusText?.(saved)}
          onChange={(event) => drafts.set(path, event.target.value)}
        />
      )}
      <div className="adm-field-foot">
        <code>{path}</code>
        {limit && (
          <span className={`adm-count${value.length > limit ? " is-over" : ""}`}>
            {value.length} / {limit} karakter
          </span>
        )}
      </div>
    </div>
  );
}

/** Ekranın altına yapışan kaydetme çubuğu. Ctrl/Cmd + S ile de kaydeder. */
export function SaveBar({ drafts, where }: { drafts: Drafts; where: string }) {
  const [flash, setFlash] = useState<string | null>(null);

  const save = useCallback(() => {
    const saved = drafts.save(where);
    if (saved)
      setFlash(
        `${saved} alan kaydedildi. Bu tarayıcıda sitede hemen görünür; yayına almak için "Yedek ve veri" ekranından dışa aktarın.`,
      );
  }, [drafts, where]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "s") {
        event.preventDefault();
        if (drafts.count) save();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drafts.count, save]);

  useEffect(() => {
    if (!flash) return;
    const timer = window.setTimeout(() => setFlash(null), 3500);
    return () => window.clearTimeout(timer);
  }, [flash]);

  if (!drafts.count && !flash) return null;
  return (
    <div className={`adm-savebar${drafts.count ? " is-dirty" : ""}`} role="status">
      <span>
        {drafts.count
          ? `${drafts.count} kaydedilmemiş değişiklik`
          : flash}
      </span>
      {drafts.count > 0 && (
        <span className="adm-savebar-actions">
          <button type="button" className="adm-btn" onClick={drafts.discard}>
            Vazgeç
          </button>
          <button type="button" className="adm-btn is-primary" onClick={save}>
            Kaydet <kbd>⌘S</kbd>
          </button>
        </span>
      )}
    </div>
  );
}

/** Kaydedilmemiş değişiklik varken başka ekrana geçmeden önce sorar. */
export function confirmLeave(count: number) {
  return !count || window.confirm(`${count} kaydedilmemiş değişiklik var. Kaydetmeden çıkılsın mı?`);
}
