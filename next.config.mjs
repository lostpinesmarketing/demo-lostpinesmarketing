// Two build targets:
// - Demo (GitHub Pages): DEMO_SLUG is set to the repo name by deploy.yml,
//   so pages live under /demo-<customer-slug>.
// - Production (own domain, e.g. Namecheap): deploy-namecheap.yml sets
//   SITE_ENV=production and BASE_PATH="" so the site is served from the root.
// Locally (npm run dev) there is no base path.
const isProd = process.env.NODE_ENV === 'production';
const repo = process.env.DEMO_SLUG || 'demo-lostpinesmarketing';
const base = process.env.BASE_PATH ?? (isProd ? `/${repo}` : '');
const siteEnv = process.env.SITE_ENV || 'demo';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: base,
  assetPrefix: base ? `${base}/` : '',
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: base, NEXT_PUBLIC_SITE_ENV: siteEnv },
};

export default nextConfig;
