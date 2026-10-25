// Static export configured for GitHub Pages project sites.
// In CI, DEMO_SLUG is set to the repo name (demo-<customer-slug>) automatically.
// Locally (npm run dev) there is no base path.
const isProd = process.env.NODE_ENV === 'production';
const repo = process.env.DEMO_SLUG || 'demo-lostpinesmarketing';
const base = isProd ? `/${repo}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: base,
  assetPrefix: base ? `${base}/` : '',
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: base },
};

export default nextConfig;
