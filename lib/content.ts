// Build-time content loaders. Every editable string lives in /content so the
// files can later be registered as Tina CMS collections/singletons.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const root = path.join(process.cwd(), 'content');

function readJson<T>(rel: string): T {
  return JSON.parse(fs.readFileSync(path.join(root, rel), 'utf8')) as T;
}

export type Link = { label: string; href: string };
export type Seo = { title: string; description: string };

export type Settings = {
  siteName: string;
  location: string;
  email: string;
  emailPlaceholder: string;
  nav: Link[];
  headerCta: Link;
  copyright: string;
  demoNotice: string;
};

export type ServiceGroup = { id: string; title: string; description: string };

export type HomePage = {
  seo: Seo;
  hero: { heading: string; subheading: string; ctaLabel: string; ctaHref: string };
  services: { heading: string; groups: ServiceGroup[] };
  local: { heading: string; body: string };
  cta: { heading: string; body: string; ctaLabel: string; ctaHref: string };
};

export type FormField = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea';
  required: boolean;
  autocomplete: string;
};

export type ContactPage = {
  seo: Seo;
  heading: string;
  intro: string;
  form: { heading: string; note: string; fields: FormField[]; submitLabel: string };
  email: { heading: string; body: string };
};

export type Service = { slug: string; title: string; group: string; order: number; body: string };

export const getSettings = () => readJson<Settings>('settings.json');
export const getHome = () => readJson<HomePage>('pages/home.json');
export const getContact = () => readJson<ContactPage>('pages/contact.json');

export function getServices(): Service[] {
  const dir = path.join(root, 'services');
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((file) => {
      const { data, content } = matter(fs.readFileSync(path.join(dir, file), 'utf8'));
      return {
        slug: file.replace(/\.md$/, ''),
        title: String(data.title),
        group: String(data.group),
        order: Number(data.order ?? 0),
        body: content.trim(),
      };
    })
    .sort((a, b) => a.order - b.order);
}
