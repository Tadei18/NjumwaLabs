# Njumwa Labs

SEO-first portfolio & services marketing site for **Crispus Njumwa** — software, AI automation, mobile, database and Dynamics 365 F&O services.

Built with **Astro** (static output) for the best Core Web Vitals, fully crawlable HTML, and minimal JavaScript. SEO/GEO is treated as a first-class requirement on every page.

- **Tagline:** Automation and efficiency brought closer
- **Location:** Nairobi, Kenya (serving clients worldwide)

---

## Tech stack

| Concern | Choice |
|---|---|
| Framework | [Astro](https://astro.build) (SSG, zero-JS by default) |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) + CSS design tokens |
| Content | Astro Content Collections + MDX (blog, portfolio) |
| Icons | `astro-icon` (Lucide) |
| Fonts | Self-hosted via `@fontsource` (Space Grotesk, Inter, JetBrains Mono) |
| Forms | [Web3Forms](https://web3forms.com) (progressive enhancement) |
| Booking | Calendly (embedded) |
| SEO | `@astrojs/sitemap`, JSON-LD, robots.txt, llms.txt, OG meta |
| Feed | `@astrojs/rss` |
| Analytics | GA4 + Plausible (optional, env-gated, DNT-respecting) |

---

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # type-check (astro check) + production build to /dist
npm run preview    # preview the production build
npm run format     # Prettier
```

Requires **Node 20+** (built with Node 22).

---

## Environment variables

Copy `.env.example` to `.env` and fill in what you need. Everything is optional — the
site builds and runs without any of it; features just stay dormant until configured.

| Variable | Purpose |
|---|---|
| `PUBLIC_WEB3FORMS_KEY` | Contact form delivery (get a free key at web3forms.com) |
| `PUBLIC_CALENDLY_URL` | Booking embed + links (default: calendly.com/crispusnjumwa) |
| `PUBLIC_GA4_ID` | Google Analytics 4 (e.g. `G-XXXXXXXXXX`) |
| `PUBLIC_PLAUSIBLE_DOMAIN` | Plausible analytics domain |
| `PUBLIC_GSC_VERIFICATION` | Google Search Console verification token |
| `PUBLIC_BING_VERIFICATION` | Bing Webmaster verification token |

Never commit `.env`. On Netlify/Cloudflare/Vercel, set these in the dashboard.

---

## Before launch checklist

1. **Buy the domain**, then update the URL in **two** places:
   - `astro.config.mjs` → `site`
   - `src/data/site.ts` → `site.url`
   (Also update the `Sitemap:` line in `public/robots.txt` and the URLs in `public/llms.txt`.)
2. **Set environment variables** (at minimum `PUBLIC_WEB3FORMS_KEY`).
3. **OG image:** a branded 1200×630 PNG (`public/og/default.png`) is already rendered
   from `public/og/default.svg`. To refresh it after editing the SVG, run `npm run og`.
4. **Add a favicon.ico / apple-touch-icon** if you want broader device coverage
   (an SVG favicon + maskable icon are already wired up).
5. **Replace placeholder content:**
   - Testimonials in `src/data/testimonials.ts` (set `placeholder: false` once real).
   - **`insurance-d365-go-live.mdx` is a REAL case study but anonymized — confirm with the
     owner whether the client can be named, and that it's cleared for publication (NDA).**
   - The other case studies in `src/content/portfolio/` are realistic placeholders.
   - **Review the AI-drafted blog posts** in `src/content/blog/` for accuracy/voice.
6. **Credentials:** add a verification link (Credly / Microsoft Learn) in
   `src/data/credentials.ts` → `verificationUrl` (leave empty to omit — never fake it).
7. **Review legal pages** (`/privacy`, `/terms`) with appropriate advice — they're templates.
8. **Verify** Google Search Console + Bing Webmaster and submit `sitemap-index.xml`.
9. **Set up a Google Business Profile** (off-site) for local SEO.
10. Run Lighthouse (mobile) and confirm ≥95 across the board; validate JSON-LD with
    Google's Rich Results Test.

---

## How to add content

### A blog post
Create `src/content/blog/my-post.mdx`:

```mdx
---
title: "Post title"
description: "One-sentence summary for SEO and cards."
pubDate: 2026-06-15
category: "ai-automation"   # a pillar slug, or "general"
tags: ["tag one", "tag two"]
# cover: ./my-cover.png      # optional, colocated image
# draft: true               # hide from build while writing
---

Write answer-first: lead with the direct answer, then the detail.
```

### A case study
Create `src/content/portfolio/my-project.mdx`:

```mdx
---
title: "What was achieved"
description: "Short summary."
client: "Client name"
industry: "Industry"
pillar: "web-development"     # one of the 5 pillar slugs
pubDate: 2026-06-15
stack: ["Astro", "PostgreSQL"]
metrics:
  - value: "62%"
    label: "faster load"
featured: true               # show on home page
---

## The problem
## The approach
## The stack
## The result
```

### A service offering
Edit `src/data/pillarContent.ts` — add to the relevant pillar's `offerings`,
`benefits`, or `faqs` arrays. To add a whole new pillar, also update
`src/data/services.ts` and `src/data/pricing.ts`.

---

## Project structure

```
public/            static assets (robots.txt, llms.txt, favicon, _headers, og/)
src/
  components/      reusable UI (Header, Footer, Hero, SystemsMap, cards, FAQ, forms…)
  content/         MDX content collections (blog/, portfolio/)
  data/            site config, services, pricing, testimonials, pillar content
  layouts/         BaseLayout
  lib/             JSON-LD schema builders, helpers
  pages/           routes (file-based)
  styles/          global.css (design tokens + base + components)
content.config.ts  collection schemas (Zod)
```

---

## Deployment

Static output → deploy anywhere. Git-based CI recommended.

**Cloudflare Pages (recommended free static host)**
- Build command: `npm run build`
- Output directory: `dist`
- Node version: `22`

**Netlify** — `netlify.toml` is included (build + headers). Just connect the repo.

**Vercel** — import the repo; framework preset "Astro" is auto-detected.

After the first deploy, set the env vars in the host dashboard and add your custom domain
(automatic HTTPS). Security headers ship via `public/_headers` (portable) and `netlify.toml`.

---

## Design system

"Engineered & human" — deep indigo ink anchor, electric-cyan signature accent, warm
amber secondary, on a cool off-white surface. Display **Space Grotesk**, body **Inter**,
mono **JetBrains Mono** for technical texture. Tokens live in `src/styles/global.css`
(`@theme` block) — change them there to re-skin the whole site. The signature element is
the interactive, animated **SystemsMap** node-graph in the hero (`src/components/SystemsMap.astro`).

### Motion & the dark-section system (Phase 2)

The page alternates light and **dark "peak" sections** for rhythm. Any section becomes a
cinematic dark band by adding the `section-dark` class (deep indigo + accent glows + light
text, defined in `global.css`). Helper utilities also live there:

- `text-gradient` — cyan→amber accent on **one** key word per heading.
- `glow` + `glow-cyan` / `glow-amber` — soft radial light blobs.
- `grain-overlay` — global fine-grain texture (one element in `BaseLayout`).
- `marquee` / `marquee-track` — auto-scrolling logo strip (pauses on hover).
- `reveal-line` + `load-fade` — hero entrance animations.
- `[data-reveal]` (+ optional `[data-delay="1..5"]`) — scroll-in reveals via a single
  IntersectionObserver in `BaseLayout`.
- `[data-count]` (+ `data-suffix` / `data-prefix`) — count-up numbers on scroll-in.
- `.btn-primary` has a built-in hover fill-sweep.

**Astro View Transitions** are enabled (`<ClientRouter />` in `BaseLayout`) for smooth
cross-page fades. Because of this, interactive component scripts re-init on the
`astro:page-load` event — follow that pattern when adding new client JS.

**Every motion has a `prefers-reduced-motion` fallback** (content appears in its final
state). Test with the OS reduced-motion setting before shipping motion changes.

### Credentials

`src/components/CredentialsBand.astro` renders the verified Microsoft certifications
(data in `src/data/credentials.ts`), used on the home page (dark band), the About page,
and the D365 pillar page. The same data feeds the extended **Person** JSON-LD
(`hasCredential`, `alumniOf`, `worksFor`, `knowsAbout`) in `src/lib/schema.ts`. Positioning
is **credential-led** — lead with verifiable proof, not "senior" self-labels.
