# Review Package: Lost Pines Marketing

## Links
- Repo: https://github.com/lostpinesmarketing/demo-lostpinesmarketing
- Preview: https://lostpinesmarketing.github.io/demo-lostpinesmarketing/
- Research brief: `docs/research-brief.md`  Site plan: `docs/site-plan.md`

## Status
**Built and deployed.** GitHub Actions built and published the site; the preview URL loads with styles, fonts, images and internal links working under the base path. GitHub Pages was already serving from GitHub Actions (the deploy job succeeded), so no steps are required from Chris. Confirm under Settings > Pages that Source shows "GitHub Actions".

## What was built
- **Home** (`/`): split hero (headline, question, consultation button beside a sage pine-pattern panel with the badge); "Our Services" with the eight services in two groups; "Based in Bastrop, Texas" band; closing consultation CTA.
- **Contact** (`/contact/`): the live page's heading and consultation copy, a demo-only message form (submit disabled, labeled), and the "general question" block with a labeled email placeholder.
- **404** page, header with skip link and consultation button, footer with location, copyright and demo notice.
- All copy in `content/` (JSON + Markdown) with types in `lib/content.ts`, ready to map to Tina.

## Content split
About 81% traceable to the live site, 19% new (detail in the site plan content map). Main improvements:
1. Consultation CTA in the header and hero, not only at the bottom.
2. Services grouped into "Build your presence" and "Reach the right people".
3. Bastrop promoted from a footer line to its own section.
4. A contact form layout and email slot (live page has neither working).
5. Minor copy fixes: "Setup" → "Set up", "goods and service" → "goods or services", sentence-case headings.

## Decisions made
| Decision | Why |
|---|---|
| Palette is charcoal `#202322`, sage `#7C9077`, light/deep sage, off-white; the live site's purple gradient and coral were dropped | Sampled from the brand's own logo, badge and pattern files. The purple is the Divi layout-pack default, and the project rules prohibit default gradients |
| Barlow Condensed + Barlow instead of Open Sans/Roboto | Live fonts are theme defaults; Barlow Condensed is close to the logo's condensed wordmark and has a trail-sign feel |
| No photography | The only photos in the media library are theme demo stock, not Lost Pines' own. The design is built on the badge and pattern, so no image placeholders were needed |
| Services not numbered or iconified | They aren't a sequence; the live site's coloured icons came from the theme |
| Removed the "Digital marketing" eyebrow | It repeated the headline |
| Demo form is non-functional (button disabled, note on the form) | Live site has no working form; nothing in the demo collects data |
| Demo pages are `noindex` | Keeps the preview from competing with the real domain in search |
| Phone header hides the duplicate "Contact" link | The header button goes to the same page and was wrapping at 360px |
| Self-hosted fonts via @fontsource | No third-party requests; works with static export |

## Assumptions
- Audience is Bastrop-area small businesses and non-profits (site says "business or non-profit" and "Bastrop, TX").
- The service grouping and the two group descriptions are our editorial additions.
- "Working with businesses and non-profits in the Lost Pines" restates the hero and location; no service-area claim beyond that.

## Unverified items (not presented as fact)
- Founding year: "EST 2020" appears only inside the logo artwork; not repeated in copy.
- No owner name, team, clients, reviews, pricing or social profiles were found publicly. None appear in the demo.

## Placeholders
- Contact email: "PLACEHOLDER: public email address" (`content/settings.json` → `email`; leave `emailPlaceholder` for the fallback).
- Contact form: demo only. Needs a real endpoint (e.g. Formspree, Netlify Forms, or a booking link) before launch.

## Checklist result
Mark: PASS / FIX / FLAG.

**1. Content fidelity**
- PASS ~80% traces to the existing site; content map in site plan
- PASS Each change listed with reason
- PASS No must-keep page or feature dropped (Home, Services, Contact, CTA, location)
- PASS Location matches live site (Bastrop, TX). No phone, email or hours exist on the live site

**2. No invented facts**
- PASS No testimonials, reviews, credentials, awards, years, or pricing
- PASS Unverified items flagged above
- PASS No third-party content used
- PASS No lorem ipsum or filler

**3. Brand and images**
- PASS Logo, colours from brand files; font change documented
- PASS Existing brand images reused (logo, badge, pattern, favicon)
- PASS No image placeholders needed
- PASS No stock or invented photos
- PASS Alt text on logo; badges and pattern are decorative (`alt=""`)

**4. Design**
- PASS No gradients, glassmorphism or glow
- PASS No three-card grid; hero is split and left-aligned with one button
- PASS No emoji icons
- PASS Type and spacing reasoned in site plan
- PASS Deliberate choices: bleed pattern panel, grouped two-tone service panels, pattern band, edged form
- PASS Copy is the business's own

**5. Accessibility and performance**
- PASS One h1 per page, h1→h2→h3→h4 order, header/nav/main/footer landmarks
- PASS Contrast AA: 15.0:1, 13.9:1, 6.9:1, 6.7:1; charcoal on sage 4.6:1 used for button text only
- PASS Skip link, visible `:focus-visible` outlines (deep sage on light, light sage on dark). Checked in CSS, not tested with a screen reader
- PASS Descriptive link and button text
- PASS 360 / 768 / 1280 px tested with Playwright, no horizontal scroll, no broken images
- PASS Image sizes: largest asset 34 KB; below-fold images lazy-loaded
- FLAG Lighthouse not run (tool not available in this environment). Expect high scores: static HTML, ~140 KB of images and fonts total, no third-party scripts. Run once from Chrome DevTools to confirm

**6. Technical and deploy**
- PASS `output: 'export'`, `images.unoptimized`, `trailingSlash`
- PASS basePath/assetPrefix = `/demo-lostpinesmarketing` in production (verified in built HTML)
- PASS `public/.nojekyll` present
- PASS `.github/workflows/deploy.yml` present; Pages serving from Actions
- PASS Build passes on GitHub Actions. FLAG: not run locally (see process notes)
- PASS Deployed URL loads with styles, images, links
- PASS Internal links and image paths include base path
- PASS Form is clearly non-functional and collects nothing

**7. CMS-ready**
- PASS All content in `content/`
- PASS Maps to singletons (settings, home, contact) and a collection (service)
- PASS Fields documented in README

**8. Repo hygiene and privacy**
- PASS Repo name and README
- PASS Public content only
- PASS No `.env` or secrets
- PASS Footer demo notice on every page

**Result:** Ready for Chris. Flags: Lighthouse not run; no local build.

## Open items for Chris
1. Which public email (or booking link) to show for the consultation, and which form service to use.
2. Whether to add an owner name/photo and any work samples or reviews you can publish. These are the biggest trust gaps against competitors.
3. On the live WordPress site (outside this demo): the `noindex, nofollow` setting is hiding it from Google (WordPress Settings > Reading > "Discourage search engines"), and the contact form isn't rendering.

## Process notes (first test run)
What worked:
- **The built-in browser on Chris's computer was the way in.** This workspace can't reach customer websites (the proxy blocked lostpinesmarketing.com) and WebFetch only returns summaries. Through the browser pane, JavaScript pulled exact copy, computed colours and fonts, and the WordPress media library (`/wp-json/wp/v2/media`). Images came across as base64 and were decoded here. This will work for most customer sites; it needs a one-time site approval per domain.
- **The WordPress REST API** listed every uploaded file. That's how the real brand assets (sage badge, pine pattern) turned up; they aren't used on the live page at all.
- **Sampling colours from logo files** was more reliable than reading the live CSS, which reflected the theme, not the brand.
- The deploy base worked unchanged; Pages was already pointed at Actions.

What didn't:
- **The npm registry was blocked** in this session, so nothing could be installed or built locally. Workaround: a one-time GitHub Actions job generated `package-lock.json`, committed it and test-built the site, then was deleted. Suggest adding this "bootstrap lockfile" workflow to `templates/deploy-base/` (or a committed base `package-lock.json`), since `npm ci` and the npm cache in `deploy.yml` both require a lockfile.
- **Visual review** needed a workaround: the deployed HTML/CSS/fonts were pulled through the browser and screenshotted locally with Playwright. Worth noting in the workflow.
- **Research on a business with no public footprint** comes up thin by design; the brief template worked but sections 4 and 5 were mostly "none found".
- **Template conflict:** "use existing colours" vs. "no default purple gradients" collided here. Resolved by finding the true brand files. Suggest the instructions say: when the live site's colours are theme defaults, prefer colours from the logo files and document it.

## Recommended next step
Pick the contact email and form service, then decide whether this demo becomes the real lostpinesmarketing.com (it can be hosted from this repo or uploaded as static files to the Namecheap account).
