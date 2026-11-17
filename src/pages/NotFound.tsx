import { Arrow } from "../components/ui";
import { useT } from "../i18n";
import { Link } from "../router";

export function NotFoundPage() {
  const t = useT().notfound;
  return (
    <main id="icerik" tabIndex={-1} className="notfound on-dark">
      <div className="wrap">
        <h1>
          {t.title[0]}
          <br />
          {t.title[1]}
        </h1>
        <p>{t.copy}</p>
        <Link to="home" className="btn btn-primary">
          {t.cta} <Arrow />
        </Link>
      </div>
    </main>
  );
}
