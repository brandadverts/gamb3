import { useId, useState, type KeyboardEvent } from "react";
import { panelBars } from "../data";
import { fill, useCatalog, useT } from "../i18n";
import { Link } from "../router";

type PanelGroupText = {
  kpis: { label: string; value: string; delta: string }[];
  chartLabel: string;
  stats: Record<string, string>;
};

/**
 * gamb PANEL: arka ofisin nasıl göründüğünü anlatan temsili ekran.
 * Soldaki menüde "Genel" ve yedi ürün başlığı vardır; her başlık kendi göstergelerini ve
 * modüllerini örnek değerlerle gösterir. Sayılar gerçek bir operasyona ait değildir.
 */
export function Console() {
  const t = useT();
  const groups = useCatalog();
  const [active, setActive] = useState(0);
  const baseId = useId();

  const tabs = [
    { id: "genel", label: t.panel.general },
    ...groups.map((group) => ({ id: group.id, label: group.name })),
  ];
  const tab = tabs[active];
  const group = groups.find((item) => item.id === tab.id);
  const groupText = group
    ? (t.panel.groups as Record<string, PanelGroupText>)[group.id]
    : undefined;
  const view = groupText ?? t.panel.overview;
  const bars = panelBars[tab.id] ?? panelBars.genel;
  const max = Math.max(...bars);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const forward = event.key === "ArrowDown" || event.key === "ArrowRight";
    const backward = event.key === "ArrowUp" || event.key === "ArrowLeft";
    if (!forward && !backward) return;
    event.preventDefault();
    const next = (active + (forward ? 1 : -1) + tabs.length) % tabs.length;
    setActive(next);
    document.getElementById(`${baseId}-tab-${next}`)?.focus();
  };

  return (
    <div className="console">
      <div className="console-bar">
        <span className="console-brand" dir="ltr">
          gamb<small>PANEL</small>
        </span>
        <span className="console-live">
          <i aria-hidden="true" /> {tab.label}
        </span>
      </div>
      <div className="console-main">
        <div
          className="console-tabs"
          role="tablist"
          aria-orientation="vertical"
          aria-label={t.panel.tabsLabel}
          onKeyDown={onKeyDown}
        >
          {tabs.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`${baseId}-tab-${index}`}
              aria-selected={active === index}
              aria-controls={`${baseId}-panel`}
              tabIndex={active === index ? 0 : -1}
              onClick={() => setActive(index)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div
          className="console-body"
          role="tabpanel"
          id={`${baseId}-panel`}
          aria-labelledby={`${baseId}-tab-${active}`}
        >
          <dl className="console-kpis">
            {view.kpis.map((kpi) => (
              <div key={kpi.label}>
                <dt>{kpi.label}</dt>
                <dd>
                  {kpi.value}
                  <span>{kpi.delta}</span>
                </dd>
              </div>
            ))}
          </dl>
          <figure className="console-chart">
            <figcaption>
              <span>{view.chartLabel}</span>
              <span>{t.panel.last12}</span>
            </figcaption>
            <div className="console-bars" aria-hidden="true" key={tab.id}>
              {bars.map((bar, index) => (
                <span
                  key={index}
                  style={{
                    height: `${Math.round((bar / max) * 100)}%`,
                    animationDelay: `${index * 28}ms`,
                  }}
                />
              ))}
            </div>
          </figure>
          {group && groupText ? (
            <ul
              className="console-modules"
              aria-label={fill(t.panel.modulesLabel, { group: group.name })}
            >
              {group.modules.map((module) => (
                <li key={module.id}>
                  <Link to="products" anchor={module.id}>
                    <span>{module.name}</span>
                    <b>{groupText.stats[module.id] ?? "—"}</b>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="console-rows">
              {t.panel.overview.rows.map((row) => (
                <li key={row.time + row.text}>
                  <time>{row.time}</time>
                  <span>{row.text}</span>
                  <em>{row.tag}</em>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <p className="console-note">
        {t.panel.note} <Link to="demo">{t.panel.noteLink}</Link>
      </p>
    </div>
  );
}
