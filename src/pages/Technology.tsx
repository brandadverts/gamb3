import { useId, useState, type KeyboardEvent } from "react";
import { Hero, PageCta, SectionIntro, pad } from "../components/ui";
import { apiSample } from "../data";
import { useT } from "../i18n";

function Layers() {
  const t = useT().technology;
  const layers = t.layers;
  const [active, setActive] = useState(2);
  const baseId = useId();
  const layer = layers[active];

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const delta = event.key === "ArrowDown" ? 1 : event.key === "ArrowUp" ? -1 : 0;
    if (!delta) return;
    event.preventDefault();
    const next = (active + delta + layers.length) % layers.length;
    setActive(next);
    document.getElementById(`${baseId}-tab-${next}`)?.focus();
  };

  return (
    <div className="layers">
      <div
        className="layer-tabs"
        role="tablist"
        aria-orientation="vertical"
        aria-label={t.layersLabel}
        onKeyDown={onKeyDown}
      >
        {layers.map((item, index) => (
          <button
            key={item.title}
            type="button"
            role="tab"
            id={`${baseId}-tab-${index}`}
            aria-selected={active === index}
            aria-controls={`${baseId}-panel`}
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
          >
            <span className="num">{pad(index)}</span>
            <strong>{item.title}</strong>
            <span className="summary">{item.summary}</span>
          </button>
        ))}
      </div>
      <div
        className="layer-panel on-dark"
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${active}`}
      >
        <h3>{layer.title}</h3>
        <p>{layer.detail}</p>
        <ul>
          {layer.parts.map((part) => (
            <li key={part}>{part}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function TechnologyPage() {
  const t = useT().technology;
  return (
    <main id="icerik" tabIndex={-1}>
      <Hero page="technology" />

      <div className="light-page">
        <section className="section" aria-labelledby="katman-baslik">
          <div className="wrap">
            <SectionIntro
              title={t.layersTitle}
              copy={t.layersCopy}
              id="katman-baslik"
            />
            <Layers />
            <p className="caption">{t.layersCaption}</p>
          </div>
        </section>

        <section className="section" aria-labelledby="ilke-baslik">
          <div className="wrap">
            <SectionIntro
              title={t.principlesTitle}
              copy={t.principlesCopy}
              id="ilke-baslik"
            />
            <div className="tile-grid cols-4">
              {t.principles.map((principle, index) => (
                <article className="tile" key={principle.title}>
                  <span className="num">{pad(index)}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section
        className="band band-black security-section on-dark"
        aria-labelledby="guvenlik-baslik"
      >
        <div className="wrap">
          <div className="band-copy">
            <h2 id="guvenlik-baslik">{t.securityTitle}</h2>
            <p>{t.securityCopy}</p>
          </div>
          <ul>
            {t.securityPoints.map((point, index) => (
              <li key={point}>
                <span className="num">{pad(index)}</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="light-page">
        <section className="section" aria-labelledby="api-baslik">
          <div className="wrap">
            <SectionIntro
              title={t.apiTitle}
              copy={t.apiCopy}
              id="api-baslik"
            />
            <div className="api-grid">
              <div className="code-stack">
                <figure className="code-card">
                  <header>
                    <span>{t.request}</span>
                    <span>{t.sample}</span>
                  </header>
                  <pre tabIndex={0} dir="ltr">
                    <code>{apiSample.request}</code>
                  </pre>
                </figure>
                <figure className="code-card">
                  <header>
                    <span>{t.response}</span>
                    <span>{t.sample}</span>
                  </header>
                  <pre tabIndex={0} dir="ltr">
                    <code>{apiSample.response}</code>
                  </pre>
                </figure>
              </div>
              <div className="api-notes">
                {t.apiNotes.map((note) => (
                  <article key={note.title}>
                    <h3>{note.title}</h3>
                    <p>{note.copy}</p>
                  </article>
                ))}
                <p className="caption">{t.apiCaption}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="adim-baslik">
          <div className="wrap">
            <SectionIntro title={t.stepsTitle} id="adim-baslik" />
            <ol className="tile-grid cols-4 mini-steps process-list">
              {t.integrationSteps.map((step, index) => (
                <li className="tile" key={step.title}>
                  <span className="num">{pad(index)}</span>
                  <strong>{step.title}</strong>
                  <small>{step.copy}</small>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>

      <PageCta title={t.ctaTitle} copy={t.ctaCopy} />
    </main>
  );
}
