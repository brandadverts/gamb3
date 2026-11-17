import { Hero, PageCta, SectionIntro, pad } from "../components/ui";
import { useT } from "../i18n";

export function CasesPage() {
  const t = useT().cases;
  return (
    <main id="icerik" tabIndex={-1}>
      <Hero page="cases" />

      <div className="light-page">
        <section className="section" aria-label={t.listLabel}>
          <div className="wrap cases">
            {t.caseStudies.map((item, index) => (
              <article className="case-card" key={item.title}>
                <strong className="case-number" aria-hidden="true">
                  {pad(index)}
                </strong>
                <div className="case-title">
                  <h2>{item.title}</h2>
                </div>
                <div className="case-block">
                  <span className="eyebrow">{t.need}</span>
                  <p>{item.need}</p>
                </div>
                <div className="case-block">
                  <span className="eyebrow">{t.approach}</span>
                  <p>{item.approach}</p>
                </div>
                <div className="case-block">
                  <span className="eyebrow">{t.result}</span>
                  <p>{item.result}</p>
                </div>
                <ol className="case-phases" aria-label={t.phasesLabel}>
                  {item.phases.map((phase) => (
                    <li key={phase}>
                      <span>{phase}</span>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
            <p className="caption">{t.caption}</p>
          </div>
        </section>

        <section className="section" aria-labelledby="model-baslik">
          <div className="wrap">
            <SectionIntro
              title={t.methodTitle}
              copy={t.methodCopy}
              id="model-baslik"
            />
            <div className="tile-grid cols-2 question-grid">
              {t.methodQuestions.map((question, index) => (
                <article className="tile" key={question.title}>
                  <span className="num">{pad(index)}</span>
                  <h3>{question.title}</h3>
                  <p>{question.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="risk-baslik">
          <div className="wrap">
            <SectionIntro
              title={t.riskTitle}
              copy={t.riskCopy}
              id="risk-baslik"
            />
            <table className="data-table risk-table">
              <thead>
                <tr>
                  <th scope="col">{t.riskHead[0]}</th>
                  <th scope="col">{t.riskHead[1]}</th>
                </tr>
              </thead>
              <tbody>
                {t.riskTable.map((row) => (
                  <tr key={row.risk}>
                    <th scope="row">{row.risk}</th>
                    <td>{row.measure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <section className="band outcomes-band on-dark" aria-labelledby="cikti-baslik">
        <div className="wrap">
          <h2 id="cikti-baslik">{t.outcomesTitle}</h2>
          <ul className="outcomes">
            {t.outcomes.map((outcome) => (
              <li key={outcome.title}>
                <strong>{outcome.title}</strong>
                {outcome.copy}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PageCta title={t.ctaTitle} copy={t.ctaCopy} />
    </main>
  );
}
