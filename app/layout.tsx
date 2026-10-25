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

export const metadata: Metadata = {
  title: home.seo.title,
  description: home.seo.description,
  icons: { icon: withBase('/favicon.png'), apple: withBase('/favicon.png') },
  // Demo previews stay out of search results so they never compete with the live site.
  robots: { index: false, follow: false },
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
