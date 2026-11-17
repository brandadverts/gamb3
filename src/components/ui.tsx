import type { ReactNode } from "react";
import { heroMedia, type HeroPage } from "../data";
import { fill, useT } from "../i18n";
import { Link, scrollToId } from "../router";
import { HeroVideo } from "./HeroVideo";
import { MorphIcon } from "./MorphIcon";

export function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      ↗
    </span>
  );
}

/** 1 → "01" */
export const pad = (index: number) => String(index + 1).padStart(2, "0");

export function SectionIntro({ title, copy, id }: { title: string; copy?: string; id?: string }) {
  return (
    <div className="section-intro">
      <h2 id={id}>{title}</h2>
      {copy && <p className="lead">{copy}</p>}
    </div>
  );
}

export function PageCta({ title, copy }: { title: string; copy: string }) {
  const t = useT();
  return (
    <section className="page-cta">
      <div className="wrap">
        <div className="cta-copy">
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
        <Link to="demo" className="btn btn-light">
          {t.nav.demo} <Arrow />
        </Link>
      </div>
    </section>
  );
}

export function Hero({ page, children }: { page: HeroPage; children?: ReactNode }) {
  const t = useT();
  const text = t.heroes[page];
  const media = heroMedia[page];
  const bullets = "bullets" in text ? text.bullets : undefined;
  return (
    <section className={`hero hero-${page} on-dark${media.video ? " has-video" : ""}`}>
      {media.video && <HeroVideo video={media.video} />}
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <h1>
            {text.title[0]}
            <br />
            {text.title[1]}
          </h1>
          <p>{fill(text.description)}</p>
          {page === "home" && (
            <div className="hero-actions">
              <Link to="products" className="btn btn-primary">
                {t.home.heroPrimary} <Arrow />
              </Link>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => scrollToId("hizmetler")}
              >
                {t.home.heroSecondary} <Arrow />
              </button>
            </div>
          )}
          {bullets && (
            <ul className="hero-bullets">
              {bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>
        <div className={`hero-visual${media.visual === "morph" ? " is-morph" : ""}`}>
          {media.visual === "morph" ? (
            <MorphIcon className="hero-morph" />
          ) : (
            <img
              className="hero-object float"
              src={media.image}
              alt=""
              width={960}
              height={717}
              decoding="async"
              fetchPriority="high"
            />
          )}
        </div>
        {page === "home" && (
          <dl className="stats">
            {t.home.stats.map((stat) => (
              <div key={stat.label}>
                <dt>{fill(stat.value)}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        )}
        {children}
      </div>
    </section>
  );
}
