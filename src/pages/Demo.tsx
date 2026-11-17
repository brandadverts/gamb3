import { useEffect, useRef, useState, type FormEvent } from "react";
import { Arrow, pad } from "../components/ui";
import { img } from "../data";
import { useCatalog, useT, type Dictionary } from "../i18n";

/** Formun gönderileceği adres. Tanımlı değilse form önizleme modunda çalışır. */
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT?.trim() || "";

type Status = "idle" | "sending" | "sent" | "error";
type Errors = Partial<Record<"name" | "email" | "company" | "consent", string>>;
type Submission = {
  name: string;
  role: string;
  email: string;
  company: string;
  stage: string;
  products: string[];
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function readForm(form: HTMLFormElement): Submission & { consent: boolean; trap: string } {
  const data = new FormData(form);
  const text = (key: string) => String(data.get(key) ?? "").trim();
  return {
    name: text("name"),
    role: text("role"),
    email: text("email"),
    company: text("company"),
    stage: text("stage"),
    products: data.getAll("products").map(String),
    message: text("message"),
    consent: data.get("consent") === "on",
    trap: text("website"),
  };
}

function validate(
  values: ReturnType<typeof readForm>,
  messages: Dictionary["demo"]["errors"],
): Errors {
  const errors: Errors = {};
  if (!values.name) errors.name = messages.name;
  if (!values.email) errors.email = messages.email;
  else if (!EMAIL_PATTERN.test(values.email)) errors.email = messages.emailFormat;
  if (!values.company) errors.company = messages.company;
  if (!values.consent) errors.consent = messages.consent;
  return errors;
}

export function DemoPage() {
  const t = useT().demo;
  const f = t.fields;
  const demoProducts = useCatalog().map((group) => group.name);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [submission, setSubmission] = useState<Submission | null>(null);
  const successHeading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (status === "sent") successHeading.current?.focus();
  }, [status]);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const { consent, trap, ...values } = readForm(form);

    const found = validate({ ...values, consent, trap }, t.errors);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    // Gizli alan doluysa gönderen bir bottur; sessizce başarılı say.
    if (trap) {
      setSubmission(values);
      setStatus("sent");
      return;
    }

    if (!ENDPOINT) {
      setSubmission(values);
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...values, consent: true, source: "demo-form" }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setSubmission(values);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setSubmission(null);
    setErrors({});
    setStatus("idle");
  };

  return (
    <main id="icerik" tabIndex={-1} className="demo-page on-dark">
      <div className="wrap demo-layout">
        <div className="demo-copy">
          <h1>
            {t.title[0]}
            <br />
            {t.title[1]}
          </h1>
          <p>{t.lead}</p>
          <ol className="demo-steps" aria-label={t.stepsLabel}>
            {t.steps.map((step, index) => (
              <li key={step.title}>
                <span className="num">{pad(index)}</span>
                <span>{step.title}</span>
                <span>{step.copy}</span>
              </li>
            ))}
          </ol>
          <p className="demo-fineprint">
            {t.fineprint[0]}
            <br />
            {t.fineprint[1]}
          </p>
          <img
            className="demo-object float"
            src={img("obj-casino")}
            alt=""
            width={960}
            height={717}
            decoding="async"
          />
        </div>

        {status === "sent" && submission ? (
          <section className="form-success" aria-live="polite">
            <h2 ref={successHeading} tabIndex={-1}>
              {t.thanks}
              {submission.name ? `, ${submission.name.split(" ")[0]}` : ""}.
            </h2>
            {ENDPOINT ? (
              <p>{t.sentCopy}</p>
            ) : (
              <p className="preview-flag">{t.previewFlag}</p>
            )}
            <dl>
              <div>
                <dt>{t.summary.company}</dt>
                <dd>{submission.company}</dd>
              </div>
              <div>
                <dt>{t.summary.email}</dt>
                <dd>{submission.email}</dd>
              </div>
              {submission.stage && (
                <div>
                  <dt>{t.summary.stage}</dt>
                  <dd>{submission.stage}</dd>
                </div>
              )}
              {submission.products.length > 0 && (
                <div>
                  <dt>{t.summary.products}</dt>
                  <dd>{submission.products.join(", ")}</dd>
                </div>
              )}
            </dl>
            <button type="button" className="btn btn-outline" onClick={reset}>
              {t.again}
            </button>
          </section>
        ) : (
          <form
            className="demo-form"
            onSubmit={submit}
            noValidate
            aria-labelledby="demo-form-baslik"
          >
            <h2 id="demo-form-baslik">{t.formTitle}</h2>
            <p className="form-hint">{t.required}</p>

            <div className="two-fields">
              <label className="field" htmlFor="demo-name">
                {f.name} *
                <input
                  id="demo-name"
                  name="name"
                  autoComplete="name"
                  placeholder={f.namePh}
                  aria-required="true"
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={errors.name ? "demo-name-hata" : undefined}
                />
                {errors.name && (
                  <span className="field-error" id="demo-name-hata">
                    {errors.name}
                  </span>
                )}
              </label>
              <label className="field" htmlFor="demo-role">
                {f.role}
                <input
                  id="demo-role"
                  name="role"
                  autoComplete="organization-title"
                  placeholder={f.rolePh}
                />
              </label>
            </div>

            <label className="field" htmlFor="demo-email">
              {f.email} *
              <input
                id="demo-email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder={f.emailPh}
                dir="ltr"
                aria-required="true"
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? "demo-email-hata" : undefined}
              />
              {errors.email && (
                <span className="field-error" id="demo-email-hata">
                  {errors.email}
                </span>
              )}
            </label>

            <label className="field" htmlFor="demo-company">
              {f.company} *
              <input
                id="demo-company"
                name="company"
                autoComplete="organization"
                placeholder={f.companyPh}
                aria-required="true"
                aria-invalid={errors.company ? true : undefined}
                aria-describedby={errors.company ? "demo-company-hata" : undefined}
              />
              {errors.company && (
                <span className="field-error" id="demo-company-hata">
                  {errors.company}
                </span>
              )}
            </label>

            <label className="field" htmlFor="demo-stage">
              {f.stage}
              <select id="demo-stage" name="stage" defaultValue="">
                <option value="">{f.stageChoose}</option>
                {t.stages.map((stage) => (
                  <option key={stage}>{stage}</option>
                ))}
              </select>
            </label>

            <fieldset>
              <legend>{f.products}</legend>
              <div className="check-row">
                {demoProducts.map((product, index) => (
                  <label className="check" key={product} htmlFor={`demo-product-${index}`}>
                    <input
                      id={`demo-product-${index}`}
                      type="checkbox"
                      name="products"
                      value={product}
                    />
                    {product}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="field" htmlFor="demo-message">
              {f.message}
              <textarea
                id="demo-message"
                name="message"
                rows={3}
                placeholder={f.messagePh}
              />
            </label>

            <div className="hp-field" aria-hidden="true">
              <label htmlFor="demo-website">{f.website}</label>
              <input id="demo-website" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="field">
              <label className="check consent" htmlFor="demo-consent">
                <input
                  id="demo-consent"
                  type="checkbox"
                  name="consent"
                  aria-required="true"
                  aria-invalid={errors.consent ? true : undefined}
                  aria-describedby={errors.consent ? "demo-consent-hata" : undefined}
                />
                <span>{f.consent} *</span>
              </label>
              {errors.consent && (
                <span className="field-error" id="demo-consent-hata">
                  {errors.consent}
                </span>
              )}
            </div>

            {status === "error" && (
              <p className="form-status" role="alert">
                {t.errors.send}
              </p>
            )}

            <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
              {status === "sending" ? t.sending : t.submit} <Arrow />
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
