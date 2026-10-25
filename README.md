# demo-lostpinesmarketing

Demo website for Lost Pines Marketing, built by Lost Pines Marketing to show what a redesigned site could look like. This is not the live website (https://lostpinesmarketing.com). All content comes from the public website.

Demo: https://lostpinesmarketing.github.io/demo-lostpinesmarketing/

## Stack
Next.js 15 (App Router, static export), deployed to GitHub Pages with GitHub Actions. Content is stored in Markdown and JSON files so it can later be connected to Tina CMS. Fonts (Barlow, Barlow Condensed) are self-hosted through `@fontsource`, so there are no external font requests.

## Structure
```
app/                 Pages and layouts (/, /contact/, 404)
components/          Header, Footer
content/             All editable content (Markdown/JSON), mapped to future Tina collections
lib/content.ts       Build-time loaders and types for /content
lib/withBase.ts      Prefixes asset paths with the GitHub Pages base path
public/              Images, logo, favicon, .nojekyll
docs/                Research brief, site plan, review package
.github/workflows/   Deploy workflow
```

## Content model
| File | Fields | Future Tina |
|---|---|---|
| `content/settings.json` | `siteName`, `location`, `email` (empty until a public address is chosen), `emailPlaceholder`, `nav[] {label, href}`, `headerCta {label, href}`, `copyright`, `demoNotice` | singleton `settings` |
| `content/pages/home.json` | `seo {title, description}`, `hero {heading, subheading, ctaLabel, ctaHref}`, `services {heading, groups[] {id, title, description}}`, `local {heading, body}`, `cta {heading, body, ctaLabel, ctaHref}` | singleton `home` |
| `content/pages/contact.json` | `seo`, `heading`, `intro`, `form {heading, note, fields[] {name, label, type, required, autocomplete}, submitLabel}`, `email {heading, body}` | singleton `contact` |
| `content/services/*.md` | frontmatter `title`, `group` (matches a `groups[].id` in home.json), `order`; body = description | collection `service` |

To add a service, add a Markdown file in `content/services/` with a `group` of `build` or `reach`.

## Run locally
```
npm install
npm run dev      # http://localhost:3000
npm run build    # static output in /out
```
In production builds the base path is `/demo-lostpinesmarketing` (set from the repo name by the workflow).

## Deploy
1. Push to `main` on `lostpinesmarketing/demo-lostpinesmarketing`.
2. In the repo, Settings > Pages > Source: GitHub Actions.
3. The workflow builds and publishes to the demo URL above.

## Images and placeholders
Images are the brand's own files from the public site's media library: logo (white and charcoal), heptagon pine badge (sage and charcoal), pine repeat pattern, favicon. No stock photography is used. The contact email is a labeled PLACEHOLDER, and the contact form is a non-functional demo (its submit button is disabled; nothing is sent or stored).

## Moving to Tina CMS later
Live editing requires Tina Cloud or a self-hosted backend, since GitHub Pages is static. Add the Tina schema using the content model above. Service descriptions are plain text today; switch the body to rich-text if formatting is needed.
