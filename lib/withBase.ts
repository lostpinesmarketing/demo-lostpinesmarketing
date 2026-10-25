// Prefix root-relative asset paths (images, files) with the GitHub Pages base path.
// Next.js does not add basePath to plain <img src> or to next/image when
// images are unoptimized, so use this for anything under /public.
// Usage: <img src={withBase('/images/logo.svg')} alt="..." />
export function withBase(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (/^(https?:)?\/\//.test(path)) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
