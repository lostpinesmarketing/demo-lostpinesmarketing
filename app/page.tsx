import type { Metadata } from 'next';
import Link from 'next/link';
import { getHome, getServices } from '@/lib/content';
import { withBase } from '@/lib/withBase';

export function generateMetadata(): Metadata {
  const { seo } = getHome();
  return { title: seo.title, description: seo.description };
}

export default function HomePage() {
  const home = getHome();
  const services = getServices();
  const pattern = { backgroundImage: `url(${withBase('/images/pine-pattern.png')})` };

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__copy">
          <h1 id="hero-title" className="hero__title">
            {home.hero.heading}
          </h1>
          <p className="hero__sub">{home.hero.subheading}</p>
          <Link href={home.hero.ctaHref} className="button button--charcoal">
            {home.hero.ctaLabel}
          </Link>
        </div>
        <div className="hero__panel" style={pattern}>
          <img
            src={withBase('/images/badge-sage.png')}
            alt=""
            width={750}
            height={750}
            className="hero__badge"
          />
        </div>
      </section>

      <section id="services" className="services" aria-labelledby="services-title">
        <div className="wrap">
          <h2 id="services-title" className="section-title">
            {home.services.heading}
          </h2>
          <div className="services__groups">
            {home.services.groups.map((group) => (
              <div key={group.id} className={`service-group service-group--${group.id}`}>
                <div className="service-group__head">
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
                <ul className="service-list">
                  {services
                    .filter((s) => s.group === group.id)
                    .map((s) => (
                      <li key={s.slug} id={s.slug}>
                        <h4>{s.title}</h4>
                        <p>{s.body}</p>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="local" style={pattern} aria-labelledby="local-title">
        <div className="wrap">
          <div className="local__card">
            <img src={withBase('/images/badge-charcoal.png')} alt="" width={750} height={750} loading="lazy" />
            <div>
              <h2 id="local-title">{home.local.heading}</h2>
              <p>{home.local.body}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="closing" aria-labelledby="closing-title">
        <div className="wrap closing__inner">
          <h2 id="closing-title" className="closing__title">
            {home.cta.heading}
          </h2>
          <div className="closing__body">
            <p>{home.cta.body}</p>
            <Link href={home.cta.ctaHref} className="button button--charcoal">
              {home.cta.ctaLabel}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
