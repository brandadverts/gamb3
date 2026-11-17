import { DataFlow, LoadBars } from "../components/DataFlow";
import { Console } from "../components/Console";
import { MorphIcon } from "../components/MorphIcon";
import { Arrow, Hero, PageCta, SectionIntro, pad } from "../components/ui";
import { awards, serviceAnchors } from "../data";
import { useT } from "../i18n";
import { Link } from "../router";

export function HomePage() {
  const t = useT().home;
  return (
    <main id="icerik" tabIndex={-1}>
      <Hero page="home" />

      <div className="light-page">
        <section className="section" id="hizmetler" aria-labelledby="hizmetler-baslik">
          <div className="wrap">
            <SectionIntro
              title={t.servicesTitle}
              copy={t.servicesCopy}
              id="hizmetler-baslik"
            />
            <div className="tile-grid cols-3 service-grid">
              {t.services.map((service, index) => (
                <Link
                  className="tile"
                  key={service.title}
                  to="products"
                  anchor={serviceAnchors[index]}
                >
                  <span className="tile-head">
                    <span className="num">{pad(index)}</span>
                    <Arrow />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                </Link>
              ))}
              <Link className="tile service-anim" to="products">
                <MorphIcon />
                <span className="service-anim-copy">
                  <h3>{t.tileSlogan}</h3>
                  <span className="service-anim-go">
                    {t.tileLink} <Arrow />
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <section className="band band-black console-section on-dark" aria-labelledby="konsol-baslik">
        <div className="wrap">
          <div className="console-copy">
            <h2 id="konsol-baslik">{t.consoleTitle}</h2>
            <p>{t.consoleCopy}</p>
            <ul>
              {t.consolePoints.map((point) => (
                <li key={point}>
                  <Arrow /> {point}
                </li>
              ))}
            </ul>
            <Link to="products" className="btn btn-outline">
              {t.consoleCta} <Arrow />
            </Link>
          </div>
          <Console />
        </div>
      </section>

      <div className="light-page">
        <section className="section" aria-labelledby="platform-baslik">
          <div className="wrap">
            <SectionIntro
              title={t.platformTitle}
              copy={t.platformCopy}
              id="platform-baslik"
            />
            <div className="tile-grid cols-3">
              {t.platformFeatures.map((feature, index) => (
                <article className="tile" key={feature.title}>
                  <span className="num">{pad(index)}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="kimler-baslik">
          <div className="wrap">
            <SectionIntro
              title={t.audienceTitle}
              copy={t.audienceCopy}
              id="kimler-baslik"
            />
            <div className="tile-grid cols-3 audience-grid">
              {t.audiences.map((audience) => (
                <article className="tile" key={audience.title}>
                  <h3>{audience.title}</h3>
                  <p>{audience.copy}</p>
                  <ul>
                    {audience.points.map((point) => (
                      <li key={point}>
                        <Arrow /> {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="band band-black tech-band on-dark" aria-labelledby="teknoloji-bant-baslik">
        <LoadBars />
        <div className="wrap">
          <div className="band-copy">
            <h2 id="teknoloji-bant-baslik">{t.bandTitle}</h2>
            <Link to="technology" className="btn btn-outline">
              {t.bandCta} <Arrow />
            </Link>
          </div>
          <DataFlow />
          <ul className="band-facts">
            {t.bandFacts.map((fact) => (
              <li key={fact.title}>
                <strong>{fact.title}</strong>
                <span>{fact.copy}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="light-page">
        <section className="section" aria-labelledby="surec-baslik">
          <div className="wrap">
            <SectionIntro
              title={t.processTitle}
              copy={t.processCopy}
              id="surec-baslik"
            />
            <ol className="tile-grid cols-4 process-list">
              {t.processSteps.map((step, index) => (
                <li className="tile" key={step.title}>
                  <span className="num">{pad(index)}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section awards-section" aria-labelledby="odul-baslik">
          <div className="wrap awards-intro">
            <h2 id="odul-baslik">{t.awardsTitle}</h2>
            <p className="lead">{t.awardsCopy}</p>
          </div>
          <AwardsTicker label={t.awardsLabel} />
        </section>
      </div>

      <PageCta title={t.ctaTitle} copy={t.ctaCopy} />
    </main>
  );
}

/**
 * Ödül şeridi: iki sıra ters yönlerde sürekli kayar (alt sıra ters sırada).
 * Her sıra iki kez yazılır; ikinci kopya ekran okuyucudan gizlenir ve -%50 kayınca döngü dikişsiz kapanır.
 * Üzerine gelince durur; "hareketi azalt" tercihinde kaymaz, logolar sarılıp düz liste olur.
 */
function AwardsTicker({ label }: { label: string }) {
  const rows = [awards, [...awards].reverse()];
  return (
    <div className="ticker" role="region" aria-label={label}>
      {rows.map((row, index) => (
        <div className={`ticker-row${index ? " is-reverse" : ""}`} key={index} aria-hidden={index ? true : undefined}>
          {[0, 1].map((copy) => (
            <ul className="ticker-track" key={copy} aria-hidden={copy ? true : undefined}>
              {row.map((award) => (
                <li key={award.src}>
                  <img
                    src={award.src}
                    alt={copy || index ? "" : award.alt}
                    width={award.width}
                    height={award.height}
                    decoding="async"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
}
