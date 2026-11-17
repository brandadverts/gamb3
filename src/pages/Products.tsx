import { Arrow, Hero, PageCta, SectionIntro, pad } from "../components/ui";
import { fill, useCatalog, useT } from "../i18n";
import { Link, scrollToId } from "../router";

export function ProductsPage() {
  const t = useT().products;
  const productGroups = useCatalog();
  return (
    <main id="icerik" tabIndex={-1}>
      <Hero page="products" />

      <div className="light-page">
        <nav className="product-index" aria-label={t.indexLabel}>
          <div className="wrap">
            <ul>
              {productGroups.map((group, index) => (
                <li key={group.id}>
                  <button type="button" onClick={() => scrollToId(group.id)}>
                    <span className="num">{pad(index)}</span>
                    {group.name}
                    <span className="count">{group.modules.length}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {productGroups.map((group, index) => (
          <section
            className="section product-group"
            key={group.id}
            id={group.id}
            aria-labelledby={`${group.id}-baslik`}
          >
            <div className="wrap">
              <header className="group-head">
                <strong className="group-number" aria-hidden="true">
                  {pad(index)}
                </strong>
                <div className="group-title">
                  <h2 id={`${group.id}-baslik`}>{group.name}</h2>
                  <p className="lead">{group.summary}</p>
                </div>
              </header>
              <div className="tile-grid cols-3 module-grid">
                {group.modules.map((module) => (
                  <article className="tile module-card" key={module.id} id={module.id}>
                    <div className="module-head">
                      <h3>{module.name}</h3>
                      {module.tag && <span className="module-tag">{module.tag}</span>}
                    </div>
                    <p>{module.description}</p>
                    <ul>
                      {module.items.map((item) => (
                        <li key={item}>
                          <Arrow /> {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="section flow-section on-dark" aria-labelledby="akis-baslik">
          <div className="wrap">
            <SectionIntro
              title={fill(t.flowTitle)}
              copy={t.flowCopy}
              id="akis-baslik"
            />
            <ol className="tile-grid cols-5 flow">
              {t.playerFlow.map((item, index) => (
                <li key={item.step}>
                  <span className="num">{pad(index)}</span>
                  <strong>{item.step}</strong>
                  <span className="eyebrow">{item.module}</span>
                  <p>{item.copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="ortak-yetenekler" aria-labelledby="yetenek-baslik">
          <div className="wrap">
            <SectionIntro
              title={t.capsTitle}
              copy={t.capsCopy}
              id="yetenek-baslik"
            />
            <div className="tile-grid cols-3 capability-grid">
              {t.capabilities.map((capability) => (
                <article className="tile" key={capability.title}>
                  <span className="tile-icon">
                    <Arrow />
                  </span>
                  <h3>{capability.title}</h3>
                  <p>{capability.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="band integration-band on-dark" aria-labelledby="entegrasyon-baslik">
        <div className="wrap">
          <div className="band-copy">
            <h2 id="entegrasyon-baslik">{t.integrationTitle}</h2>
            <p>{t.integrationCopy}</p>
            <Link to="technology" className="btn btn-outline">
              {t.integrationCta} <Arrow />
            </Link>
          </div>
          <ul className="chip-grid" aria-label={t.integrationLabel}>
            {t.integrationTypes.map((type, index) => (
              <li key={type}>
                {type}
                <span className="num">{pad(index)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PageCta title={t.ctaTitle} copy={t.ctaCopy} />
    </main>
  );
}
