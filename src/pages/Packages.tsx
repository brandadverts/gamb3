import { Arrow, Hero, PageCta, SectionIntro } from "../components/ui";
import { FEATURED_PLAN, PLAN_NAMES } from "../data";
import { useT } from "../i18n";
import { Link } from "../router";

export function PackagesPage() {
  const t = useT().packages;

  const cellClass = (value: string, column: number) => {
    const classes = [];
    if (value === "—") classes.push("is-none");
    if (value === t.included) classes.push("is-included");
    if (column === FEATURED_PLAN) classes.push("col-featured");
    return classes.join(" ") || undefined;
  };

  return (
    <main id="icerik" tabIndex={-1}>
      <Hero page="packages" />

      <div className="light-page">
        <section className="section" aria-label={t.listLabel}>
          <div className="wrap plan-grid">
            {t.plans.map((plan, index) => (
              <article
                className={`plan-card${index === FEATURED_PLAN ? " featured on-dark" : ""}`}
                key={PLAN_NAMES[index]}
              >
                <h2 lang="en" dir="ltr">
                  {PLAN_NAMES[index]}
                </h2>
                <p className="plan-audience">{plan.audience}</p>
                <p className="plan-summary">{plan.summary}</p>
                <p className="plan-price">{t.price}</p>
                <ul>
                  {plan.items.map((item) => (
                    <li key={item}>
                      <span className="check" aria-hidden="true">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="demo"
                  className={`btn ${index === FEATURED_PLAN ? "btn-primary" : "btn-outline"}`}
                >
                  {t.planCta} <Arrow />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="dahil-baslik">
          <div className="wrap">
            <SectionIntro
              title={t.includedTitle}
              copy={t.includedCopy}
              id="dahil-baslik"
            />
            <div className="tile-grid cols-4">
              {t.includedInAll.map((item) => (
                <article className="tile" key={item.title}>
                  <span className="tile-icon" aria-hidden="true">
                    ✓
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="karsilastirma-baslik">
          <div className="wrap">
            <SectionIntro
              title={t.compareTitle}
              copy={t.compareCopy}
              id="karsilastirma-baslik"
            />
            <div
              className="table-scroll"
              tabIndex={0}
              role="region"
              aria-labelledby="karsilastirma-baslik"
            >
              <table className="data-table comparison">
                <thead>
                  <tr>
                    <th scope="col">{t.capability}</th>
                    {PLAN_NAMES.map((column, index) => (
                      <th
                        scope="col"
                        key={column}
                        lang="en"
                        className={index === FEATURED_PLAN ? "col-featured" : undefined}
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.comparison.map((row) => (
                    <tr key={row.label}>
                      <th scope="row">{row.label}</th>
                      {row.cells.map((cell, index) => (
                        <td key={PLAN_NAMES[index]} className={cellClass(cell, index)}>
                          {cell === "—" ? <span aria-label={t.notIncluded}>—</span> : cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="sss-baslik">
          <div className="wrap">
            <SectionIntro title={t.faqTitle} id="sss-baslik" />
            <div className="faq-grid">
              {t.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>

      <PageCta title={t.ctaTitle} copy={t.ctaCopy} />
    </main>
  );
}
