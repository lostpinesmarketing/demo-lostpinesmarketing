# Site Plan: Lost Pines Marketing

Repo: lostpinesmarketing/demo-lostpinesmarketing
Demo URL: https://lostpinesmarketing.github.io/demo-lostpinesmarketing/

## 1. Goals
Primary visitor action: book the free 30-minute consultation.
Secondary: find the service they need and confirm the business is local (Bastrop, TX).

## 2. Sitemap
| Page | Path | Purpose | Status |
|---|---|---|---|
| Home | `/` | Who it's for, the eight services, consultation CTA | Existing, restructured |
| Contact | `/contact/` | Book the consultation / send a message | Existing, rebuilt (live page has no working form) |

Navigation: Services (anchor on Home), Contact, plus a header button "Book a free consultation". Same two items as the live site; the header button is new because the only CTA on the live site sits at the bottom of the page.

Not carried over: "Sample Page", "Hello world!", "Tickets Checkout", "Order Completed" (WordPress defaults and plugin leftovers, not linked from the nav).

## 3. Content map (80/20)
| Section | Source | Kept / edited / new | Reason for change |
|---|---|---|---|
| Hero headline "Full Service Digital Marketing" | Home | Kept | |
| Hero question "Do you want your business or non-profit to have greater reach?" | Home | Kept | |
| Hero eyebrow "Digital marketing" | Home | Removed | Repeats the headline |
| Hero CTA | Home (bottom CTA) | Edited | Moved up so the first screen has a next step |
| "Our Services" heading | Home | Kept | |
| 8 service names + descriptions | Home | Kept verbatim (light punctuation fixes) | |
| Service grouping: "Build your presence" / "Reach the right people" | new | New | 8 equal tiles had no hierarchy; grouping by visitor goal |
| Local band: "Based in Bastrop, Texas" | Home footer (Bastrop, TX) | Edited | Promotes the one local fact to a section; differentiator vs. Austin agencies |
| "Get started / Let's build something great, together." | Home | Kept | |
| "Setup a Free Meeting" button | Home | Edited to "Set up a free meeting" | Verb fix, sentence case |
| Contact H1 + "What's on your mind? Drop us a line to schedule a free 30-minute consultation." | Contact | Kept | |
| "Send a Message" + form | Contact | Rebuilt, demo-only | Live form does not render |
| "Have a general question? We're just an email away." | Contact | Kept, email = PLACEHOLDER | No email is published |
| Footer: Bastrop, TX, copyright | Both | Kept | |
| Demo notice | new | New | Required on all demos |

Ratio: 16 content items. 11 kept or lightly edited (69%), plus 2 restructured from existing copy (moved CTA, local band) = 81% traceable to the live site. 3 new (grouping, rebuilt form, demo notice) = 19%.

## 4. Calls to action
- Primary: "Book a free consultation" (header) / "Set up a free meeting" (hero and closing section) → `/contact/`.
- On Contact: demo form "Send message" (disabled, labeled as demo) and email placeholder.

## 5. Brand and assets
- Logo: `lost-pines-marketing-w-retina.png` (white, for charcoal header/footer), `lost-pines-marketing-b-retina.png` (charcoal). From the live media library.
- Badge: `badge-g.png` (sage heptagon pine), `badge.png` (charcoal). Favicon: `favicon-1.png`.
- Pattern: `step-repeat-background.png` (sage pine repeat).
- Colours (sampled from the logo and badge files):
  - Charcoal `#202322`  - Off-white `#F9F9F9`  - Sage `#7C9077`
  - Light sage `#98AF91`  - Deep sage `#4E5A4D`  - Mist `#E9EDE6` (tint of sage, new, for section backgrounds)
- Dropped: the live site's purple gradient (`#352597`→`#8686FF`), coral and multicolour icon tiles. These are Divi layout-pack defaults, not the brand.
- Fonts: Barlow Condensed (display) + Barlow (body), self-hosted via @fontsource. The live site uses Open Sans/Roboto (theme defaults). Barlow Condensed is close to the logo's bold condensed wordmark and reads like park and trail signage, which fits the Lost Pines name.
- Images: no photography exists that belongs to the business; the media library's photos are theme demo stock and are not used. No placeholders are needed because the design is built on the logo, badge and pattern.

## 6. Design direction
- Concept: a trail-marker identity. The heptagon pine badge and the pine repeat pattern from the brand's own files do the visual work, on a charcoal and sage palette, so the site looks like the Lost Pines rather than a marketing template.
- Type: Barlow Condensed 700 for headings (sentence case, tight leading, large); Barlow 400/500 for body at 18px, 1.6 line-height, measure under 70ch.
- Layout choices that differ from a template:
  1. Hero is split: left-aligned headline on off-white, and a tall sage panel filled with the pine pattern holding the badge, bleeding to the right edge.
  2. Services sit in two grouped panels of unequal treatment (mist and charcoal), each a stacked list of name + description, not eight icon cards.
  3. A full-width pattern band for "Based in Bastrop, Texas" ties the business to the place.
  4. Contact pairs the copy column with a form on a sage-edged panel, form clearly marked as a demo.
- Avoid: gradients, wave dividers, icon tiles, emoji, numbered markers (services aren't a sequence), all-caps eyebrows, stock photos.
- Accessibility (contrast checked): charcoal on off-white 15.0:1; off-white on charcoal 15.0:1; deep sage on off-white 6.9:1 (links, small text); charcoal on sage 4.6:1 (large text and buttons only); charcoal on mist 13.9:1. Off-white on sage is 3.3:1, so it is used only for decorative pattern, not text.

## 7. CMS-ready content structure
| Content | File | Format | Future Tina | Fields |
|---|---|---|---|---|
| Site settings | `content/settings.json` | JSON | singleton `settings` | siteName, location, email, nav[{label, href}], headerCta{label, href}, footerNote, demoNotice |
| Home page | `content/pages/home.json` | JSON | singleton `home` | hero{heading, subheading, ctaLabel, ctaHref}, services{heading, intro, groups[{id, title, description}]}, local{heading, body}, cta{kicker, heading, body, ctaLabel, ctaHref} |
| Contact page | `content/pages/contact.json` | JSON | singleton `contact` | heading, intro, form{heading, note, fields[{name, label, type, required}], submitLabel}, email{heading, body} |
| Services | `content/services/*.md` | Markdown + frontmatter | collection `service` | title, group (ref to group id), order, body (description) |

## 8. Assumptions and open items
- Assumed the audience is local (Bastrop area) small businesses and non-profits; the site says "business or non-profit" and "Bastrop, TX" but no service area.
- Grouping of services is our editorial choice.
- Open: public email or booking link for the consultation; whether to show owner name/photo; whether any work samples or reviews can be published.
