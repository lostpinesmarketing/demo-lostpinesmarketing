import type { Metadata } from 'next';
import { getContact, getSettings } from '@/lib/content';
import { withBase } from '@/lib/withBase';

export function generateMetadata(): Metadata {
  const { seo } = getContact();
  return { title: seo.title, description: seo.description };
}

export default function ContactPage() {
  const page = getContact();
  const settings = getSettings();

  return (
    <>
      <section className="page-head">
        <div className="wrap page-head__inner">
          <div>
            <h1 className="page-head__title">{page.heading}</h1>
            <p className="page-head__intro">{page.intro}</p>
          </div>
          <img
            src={withBase('/images/badge-sage.png')}
            alt=""
            width={750}
            height={750}
            className="page-head__badge"
          />
        </div>
      </section>

      <section className="contact" aria-label="Contact options">
        <div className="wrap contact__grid">
          <form className="contact-form" aria-labelledby="form-title" aria-describedby="form-note">
            <h2 id="form-title">{page.form.heading}</h2>
            <p id="form-note" className="contact-form__note">
              {page.form.note}
            </p>
            {page.form.fields.map((f) => (
              <div className="field" key={f.name}>
                <label htmlFor={`f-${f.name}`}>
                  {f.label}
                  {f.required ? null : <span className="field__optional"> (optional)</span>}
                </label>
                {f.type === 'textarea' ? (
                  <textarea id={`f-${f.name}`} name={f.name} rows={5} autoComplete={f.autocomplete} />
                ) : (
                  <input id={`f-${f.name}`} name={f.name} type={f.type} autoComplete={f.autocomplete} />
                )}
              </div>
            ))}
            <button type="button" className="button button--charcoal" disabled aria-describedby="form-note">
              {page.form.submitLabel}
            </button>
          </form>

          <aside className="contact-aside">
            <h2>{page.email.heading}</h2>
            <p>{page.email.body}</p>
            {settings.email ? (
              <p>
                <a href={`mailto:${settings.email}`}>{settings.email}</a>
              </p>
            ) : (
              <p className="placeholder">{settings.emailPlaceholder}</p>
            )}
            <p className="contact-aside__location">{settings.location}</p>
          </aside>
        </div>
      </section>
    </>
  );
}
