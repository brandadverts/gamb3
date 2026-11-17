import { useEffect, useMemo, useState, type FormEvent } from "react";
import { buildCatalog } from "../i18n";
import tr from "../i18n/locales/tr";
import { hrefFor } from "../router";
import { PANEL_PASSWORD, isUnlocked, lock, unlock } from "./access";
import { MODULE_DEMOS, type DemoLog, type DemoRow, type RowState } from "./demo-data";

/**
 * gamb PANEL demosu: yedi başlık, 32 modül.
 *
 * Ekranı tek bir çizici üretir; her modülün neyi gösterdiği src/panel/demo-data.ts içindedir.
 * Bütün sayılar, kayıtlar ve günlük satırları temsilidir. Arayüz Türkçedir.
 */

/* Katalog adları demo için her zaman Türkçedir; site başka bir dildeyken de değişmez. */
const CATALOG = buildCatalog(tr);
const ALL_MODULES = CATALOG.flatMap((group) =>
  group.modules.map((module) => ({ ...module, groupId: group.id, groupName: group.name })),
);

type ModuleState = { rows: Record<string, RowState>; log: DemoLog[] };

const clock = () =>
  new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" });

const STATE_LABEL: Record<RowState, string> = {
  pending: "Bekliyor",
  approved: "Onaylandı",
  rejected: "Reddedildi",
  on: "Açık",
  off: "Kapalı",
};

function Unlock({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (unlock(password)) onUnlock();
    else setError(true);
  };

  return (
    <div className="adm-login">
      <form onSubmit={submit}>
        <p className="adm-login-brand">
          gamb PANEL <span>demo</span>
        </p>
        <h1>Modül demosu</h1>
        <p className="adm-note">
          Yedi başlık ve 32 modülün nasıl çalıştığını gerçek ekran akışlarıyla gösteren kapalı demo.
        </p>
        <label className="adm-input">
          Parola
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setError(false);
            }}
          />
        </label>
        {error && <p className="adm-error">Parola hatalı.</p>}
        <button type="submit" className="adm-btn is-primary">
          Demoyu aç
        </button>
        <div className="adm-login-note">
          <strong>Bu bir demodur.</strong>
          <p>
            Parola tarayıcıya inen kodun içindedir ve gerçek koruma sağlamaz. Ekrandaki bütün
            sayılar, kayıtlar ve günlük satırları temsilidir; hiçbir gerçek veriye bağlı değildir.
          </p>
          <ul>
            <li>
              Parola: <code>{PANEL_PASSWORD}</code>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}

function Rows({
  rows,
  mode,
  states,
  onAction,
}: {
  rows: DemoRow[];
  mode: "approve" | "toggle";
  states: Record<string, RowState>;
  onAction: (row: DemoRow, next: RowState) => void;
}) {
  return (
    <tbody>
      {rows.map((row) => {
        const state = states[row.id] ?? row.state;
        const settled = mode === "approve" && state !== "pending";
        return (
          <tr key={row.id}>
            {row.cells.map((cell, index) => (
              <td key={index}>
                {index === 0 ? <strong>{cell}</strong> : cell}
                {index === 0 && row.note && <code>{row.note}</code>}
              </td>
            ))}
            <td>
              <span className={`pnl-state is-${state}`}>{STATE_LABEL[state]}</span>
            </td>
            <td className="adm-cell-actions">
              {mode === "approve" ? (
                settled ? (
                  <button type="button" className="adm-link" onClick={() => onAction(row, "pending")}>
                    Geri al
                  </button>
                ) : (
                  <>
                    <button type="button" className="adm-link" onClick={() => onAction(row, "approved")}>
                      Onayla
                    </button>
                    <button
                      type="button"
                      className="adm-link is-danger"
                      onClick={() => onAction(row, "rejected")}
                    >
                      Reddet
                    </button>
                  </>
                )
              ) : (
                <button
                  type="button"
                  className="adm-link"
                  onClick={() => onAction(row, state === "on" ? "off" : "on")}
                >
                  {state === "on" ? "Kapat" : "Aç"}
                </button>
              )}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default function PanelApp() {
  const [open, setOpen] = useState(() => isUnlocked());
  const [moduleId, setModuleId] = useState(ALL_MODULES[0].id);
  const [states, setStates] = useState<Record<string, ModuleState>>({});

  useEffect(() => {
    document.title = "gamb PANEL demo — Gamb Gaming";
  }, []);

  const module = useMemo(
    () => ALL_MODULES.find((item) => item.id === moduleId) ?? ALL_MODULES[0],
    [moduleId],
  );
  const demo = MODULE_DEMOS[module.id];
  const state = states[module.id];
  const rowStates = state?.rows ?? {};
  const log = state?.log ?? demo.log;

  const act = (row: DemoRow, next: RowState) => {
    const name = row.cells[0];
    const text =
      next === "pending"
        ? `${name} kararı geri alındı`
        : next === "approved"
          ? `${name} onaylandı`
          : next === "rejected"
            ? `${name} reddedildi`
            : next === "on"
              ? `${name} açıldı`
              : `${name} kapatıldı`;
    setStates((all) => {
      const current = all[module.id] ?? { rows: {}, log: demo.log };
      return {
        ...all,
        [module.id]: {
          rows: { ...current.rows, [row.id]: next },
          log: [{ time: clock(), text: `${text} · kullanıcı: demo.izleyici` }, ...current.log].slice(0, 12),
        },
      };
    });
  };

  const reset = () =>
    setStates((all) => {
      const next = { ...all };
      delete next[module.id];
      return next;
    });

  if (!open) return <Unlock onUnlock={() => setOpen(true)} />;

  return (
    <div className="adm pnl">
      <header className="adm-bar">
        <span className="adm-brand">
          gamb PANEL <span>demo</span>
        </span>
        <span className="adm-who">
          {CATALOG.length} başlık · {ALL_MODULES.length} modül
        </span>
        <a className="adm-link" href={hrefFor("home", "tr")}>
          Siteye dön
        </a>
        <button
          type="button"
          className="adm-link"
          onClick={() => {
            lock();
            setOpen(false);
          }}
        >
          Kilitle
        </button>
      </header>

      <div className="adm-body">
        <nav className="adm-nav pnl-nav" aria-label="Modüller">
          {CATALOG.map((group) => (
            <section key={group.id}>
              <h2>{group.name}</h2>
              {group.modules.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-current={item.id === module.id ? "page" : undefined}
                  onClick={() => setModuleId(item.id)}
                >
                  {item.name}
                </button>
              ))}
            </section>
          ))}
        </nav>

        <main className="adm-main">
          <header className="adm-section-head">
            <div>
              <p className="pnl-group">{module.groupName}</p>
              <h2>
                {module.name}
                {module.tag && <span className="adm-badge">{module.tag}</span>}
              </h2>
              <p>{module.description}</p>
            </div>
            <div className="adm-actions">
              <button type="button" className="adm-btn" onClick={reset}>
                Demoyu sıfırla
              </button>
            </div>
          </header>

          <p className="pnl-summary">{demo.summary}</p>

          <h3 className="adm-subhead">Nasıl çalışır</h3>
          <ol className="pnl-flow">
            {demo.flow.map((step, index) => (
              <li key={step}>
                <span className="pnl-step">{String(index + 1).padStart(2, "0")}</span>
                {step}
              </li>
            ))}
          </ol>

          <h3 className="adm-subhead">Göstergeler</h3>
          <div className="pnl-metrics">
            {demo.metrics.map((metric) => (
              <div key={metric.label}>
                <span className="pnl-metric-label">{metric.label}</span>
                <strong>{metric.value}</strong>
                <span className="pnl-metric-hint">{metric.hint}</span>
              </div>
            ))}
          </div>

          <h3 className="adm-subhead">{demo.table.title}</h3>
          <div className="pnl-table-wrap">
            <table className="adm-table">
              <thead>
                <tr>
                  {demo.table.head.map((head) => (
                    <th key={head}>{head}</th>
                  ))}
                  <th>Durum</th>
                  <th>İşlem</th>
                </tr>
              </thead>
              <Rows rows={demo.table.rows} mode={demo.table.mode} states={rowStates} onAction={act} />
            </table>
          </div>

          <div className="pnl-split">
            <section>
              <h3 className="adm-subhead">Kurallar</h3>
              <ul className="pnl-rules">
                {demo.rules.map((rule) => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
            </section>
            <section>
              <h3 className="adm-subhead">İşlem günlüğü</h3>
              <ul className="pnl-log">
                {log.map((entry, index) => (
                  <li key={`${entry.time}-${index}`}>
                    <time>{entry.time}</time>
                    {entry.text}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <p className="adm-note pnl-footnote">
            Bu ekranlar temsilidir. Sayılar, kayıtlar ve günlük satırları gerçek bir operasyona ait
            değildir; yaptığınız işlemler yalnızca bu oturumda görünür.
          </p>
        </main>
      </div>
    </div>
  );
}
