import type { Metadata } from 'next';
import '@fontsource/barlow/400.css';
import '@fontsource/barlow/500.css';
import '@fontsource/barlow/600.css';
import '@fontsource/barlow-condensed/600.css';
import '@fontsource/barlow-condensed/700.css';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getHome, getSettings } from '@/lib/content';
import { withBase } from '@/lib/withBase';

const home = getHome();
const isLive = process.env.NEXT_PUBLIC_SITE_ENV === 'production';

export const metadata: Metadata = {
  title: home.seo.title,
  description: home.seo.description,
  icons: { icon: withBase('/favicon.png'), apple: withBase('/favicon.png') },
  // The GitHub Pages demo stays out of search results; the production build is indexable.
  robots: isLive ? { index: true, follow: true } : { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const settings = getSettings();
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header settings={settings} />
        <main id="main">{children}</main>
        <Footer settings={settings} />
      </body>
    </html>
  );
}
