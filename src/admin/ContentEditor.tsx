import { useMemo, useState } from "react";
import { type Locale } from "../i18n";
import tr from "../i18n/locales/tr";
import { getOverrides } from "../i18n/overrides";
import { FieldInput, SaveBar, valueOf, type Drafts } from "./drafts";
import { sectionGroups, type Section } from "./fields";

export function ContentEditor({
  section,
  locale,
  drafts,
  onChanged,
}: {
  section: Section;
  locale: Locale;
  drafts: Drafts;
  onChanged: () => void;
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<string | null>(null);
  const groups = useMemo(() => sectionGroups(section, tr), [section]);
  const needle = query.trim().toLocaleLowerCase("tr");

  const visible = useMemo(() => {
    if (!needle) return groups;
    return groups
      .map((group) => ({
        ...group,
        fields: group.fields.filter((field) => {
          const current = valueOf(locale, field.path);
          return (
            field.path.toLocaleLowerCase("tr").includes(needle) ||
            field.label.toLocaleLowerCase("tr").includes(needle) ||
            (current.override ?? current.base).toLocaleLowerCase("tr").includes(needle)
          );
        }),
      }))
      .filter((group) => group.fields.length > 0);
  }, [groups, needle, locale]);

  const changedIn = (paths: string[]) => {
    const forLocale = getOverrides()[locale] ?? {};
    return paths.filter((path) => forLocale[path] !== undefined || drafts.values[path] !== undefined)
      .length;
  };

  return (
    <section className="adm-section">
      <header className="adm-section-head">
        <div>
          <h2>{section.label}</h2>
          <p>{section.note}</p>
        </div>
        <input
          type="search"
          className="adm-search"
          placeholder="Alan, yol ya da metin ara"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Alanlarda ara"
        />
      </header>

      {visible.length === 0 && <p className="adm-empty">Aramaya uyan alan yok.</p>}

      {visible.map((group) => {
        const expanded = needle ? true : open === group.key;
        const changed = changedIn(group.fields.map((field) => field.path));
        return (
          <article key={group.key} className={`adm-group${expanded ? " is-open" : ""}`}>
            <button
              type="button"
              className="adm-group-head"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded && !needle ? null : group.key)}
            >
              <span className="adm-group-title">{group.label}</span>
              <span className="adm-group-meta">
                {changed > 0 && <em>{changed} değişik</em>}
                {group.fields.length} alan
                <span aria-hidden="true">{expanded ? "−" : "+"}</span>
              </span>
            </button>
            {expanded && (
              <div className="adm-group-body">
                {group.fields.map((field) => (
                  <FieldInput
                    key={field.path}
                    path={field.path}
                    label={field.label}
                    multiline={field.multiline}
                    locale={locale}
                    drafts={drafts}
                    onReverted={onChanged}
                  />
                ))}
              </div>
            )}
          </article>
        );
      })}
      <SaveBar drafts={drafts} where={section.label} />
    </section>
  );
}
