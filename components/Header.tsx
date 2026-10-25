import Link from 'next/link';
import { withBase } from '@/lib/withBase';
import type { Settings } from '@/lib/content';

export default function Header({ settings }: { settings: Settings }) {
  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <Link href="/" className="site-header__logo">
          <img
            src={withBase('/images/logo-white.png')}
            alt={`${settings.siteName} home`}
            width={200}
            height={60}
          />
        </Link>
        <nav aria-label="Main" className="site-nav">
          <ul>
            {settings.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <Link href={settings.headerCta.href} className="button button--sage">
            {settings.headerCta.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
