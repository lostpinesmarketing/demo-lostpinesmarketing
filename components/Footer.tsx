import Link from 'next/link';
import { withBase } from '@/lib/withBase';
import type { Settings } from '@/lib/content';

export default function Footer({ settings }: { settings: Settings }) {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <div className="site-footer__brand">
          <img src={withBase('/images/logo-white.png')} alt={settings.siteName} width={200} height={60} loading="lazy" />
          <p>{settings.location}</p>
        </div>
        <nav aria-label="Footer">
          <ul>
            {settings.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="site-footer__copy">
          Copyright © {year} {settings.copyright}
        </p>
      </div>
      <p className="demo-notice">{settings.demoNotice}</p>
    </footer>
  );
}
