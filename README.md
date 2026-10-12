# Uhuru Journeys

Marketing site for **Uhuru Journeys**: tailor-made Tanzania safaris, Kilimanjaro climbs and Zanzibar escapes.

Built with Next.js 16 (App Router, Cache Components), TypeScript, Tailwind CSS v4, Framer Motion and Lenis.

**Live:** https://uhuru-journeys.vercel.app (Vercel project `uhuru-journeys`; every push to the production branch redeploys automatically)

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (prerenders every page)
npm run lint
```

## Where things live

| Path | What it holds |
| --- | --- |
| `config/site.ts` | Brand name, colours, **contact details**, **currencies and exchange rates**, navigation, socials, membership badges |
| `data/*.ts` | All content, typed in `data/types.ts`: `destinations`, `experiences`, `safaris`, `climbs`, `stays`, `testimonials`, `faqs`, `posts`, plus page copy (`home`, `kilimanjaro`, `zanzibar`, `pages`, `legal`, `planner`, `seasons`) |
| `data/images.ts` | **Every image URL on the site.** Swap placeholder photography here |
| `content/blog/*.mdx` | Blog article bodies (post metadata is in `data/posts.ts`) |
| `lib/content.ts` | Data-access helpers used by pages. Re-implement these to move content to a CMS |
| `app/` | Routes: `/`, `/destinations/[slug]`, `/safaris/[slug]`, `/kilimanjaro/[route]`, `/zanzibar`, `/experiences/[slug]`, `/stays/[slug]`, `/about`, `/conservation`, `/testimonials`, `/faq`, `/contact`, `/blog/[slug]`, `/plan-your-journey`, `/legal/[slug]` |
| `app/api/plan`, `app/api/contact`, `app/api/newsletter` | Form endpoints. They validate and log the payload; each has a `TODO` for email/CRM integration |
| `components/` | `layout/` (header, footer, menu), `home/` (homepage sections), `sections/` (shared page sections), `cards/`, `planner/` (trip planner), `ui/` (buttons, motion primitives) |

## Before launch: placeholders to replace

- **Contact details:** `[EMAIL]`, `[PHONE]`, `[NUMBER]` (WhatsApp, digits only) and `[WHATSAPP]` in `config/site.ts`. Also the social handles there.
- **Exchange rates:** the rates in `config/site.ts` are static approximations. Connect a live FX feed.
- **Testimonials:** all testimonials in `data/testimonials.ts` are fictional (`placeholder: true`) and are labelled as such on the site.
- **Stays:** the properties in `data/stays.ts` are fictional placeholders.
- **Facts to verify:**
  - FAQ answers marked `verify: true` (visa/eVisa, vaccinations, insurance and others) show a "verify" note on the site. Check them against official sources.
  - The trust figures in `data/home.ts` (years, partner camps).
  - KPAP and TATO membership status.
- **Legal pages:** `data/legal.ts` holds placeholder text.
- **Images:** placeholder photography from Unsplash, defined in `data/images.ts`. If a remote image fails to load, branded artwork from `public/placeholders/` appears instead.
- **Domain:** set `NEXT_PUBLIC_SITE_URL` (used for canonical URLs, the sitemap and Open Graph tags) once the real domain is live.
- **Integrations:** email/CRM for the form endpoints, plus spam protection (Turnstile or honeypot) and rate limiting.

## Notes

- **Prices:** stored in base USD; the header currency switcher (USD, EUR, GBP, AUD, CAD, TZS) converts every displayed price. The choice is saved in `localStorage`.
- **Trip planner:** works as a page (`/plan-your-journey`) and as a modal from any "Start planning" button. It saves progress to `localStorage`.
- **Images:** Unsplash images are served through a custom `next/image` loader (`lib/image-loader.ts`) that requests correctly sized images from Unsplash's CDN.
- **Motion:** all animation respects `prefers-reduced-motion`.
