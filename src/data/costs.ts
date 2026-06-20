// Cost guide pages — answer-first ranges + what drives the price.
export type CostTier = { name: string; range: string; note: string };
export type CostGuide = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string; // answer-first with ranges
  takeaways: string[];
  tiers: CostTier[];
  drivers: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  related?: string; // pillar slug
  relatedLinks?: { label: string; href: string }[];
};

export const costs: CostGuide[] = [
  {
    slug: "mobile-app-cost",
    metaTitle: "How much does a mobile app cost? (2026 pricing guide)",
    metaDescription:
      "Realistic mobile app cost ranges for 2026 — MVPs from ~$1,500, mid-complexity $5,000–$20,000, complex apps $20,000+ — and exactly what drives the price.",
    h1: "How much does a mobile app cost?",
    intro:
      "In 2026, a simple mobile app (MVP) typically costs from around $1,500–$5,000, a mid-complexity app $5,000–$20,000, and a complex app with a custom backend, payments and real-time features $20,000 and up. The biggest cost drivers are feature complexity, backend needs, and whether you build cross-platform (cheaper) or two native apps.",
    takeaways: [
      "MVP: ~$1,500–$5,000 · Mid-complexity: $5,000–$20,000 · Complex: $20,000+.",
      "Cross-platform (Flutter / React Native) saves roughly 30–50% versus two native apps.",
      "Budget for ongoing costs too: store fees, backend hosting and maintenance.",
    ],
    tiers: [
      { name: "MVP / simple app", range: "$1,500 – $5,000", note: "One core action, a few screens, basic backend." },
      { name: "Mid-complexity", range: "$5,000 – $20,000", note: "Accounts, payments, integrations, admin dashboard." },
      { name: "Complex / platform", range: "$20,000+", note: "Real-time, marketplace/fintech, custom backend, scale." },
    ],
    drivers: [
      { title: "Features & complexity", text: "Each feature adds design, build and testing time. Real-time chat, maps, payments and offline sync cost more than lists and forms." },
      { title: "Backend & infrastructure", text: "An app with accounts, a database, notifications and an admin dashboard costs more than one that just displays content." },
      { title: "Cross-platform vs native", text: "Building once with Flutter or React Native for both platforms is typically 30–50% cheaper than two native apps — usually the single biggest saving." },
      { title: "Design polish", text: "A clean standard UI is affordable; heavily branded, animation-rich design costs more." },
      { title: "Integrations", text: "Payments (M-Pesa, Stripe), third-party APIs and existing-system connections each add scope." },
    ],
    faqs: [
      { q: "What's the cheapest way to build a mobile app?", a: "Start with a cross-platform MVP: build the one core action for both iOS and Android from a single codebase, validate with real users, then expand." },
      { q: "Why do quotes vary so much?", a: "Because scope does. The same 'app' can mean a simple MVP or a complex platform. An accurate number comes only from your actual requirements." },
      { q: "Are there ongoing costs?", a: "Yes — app-store fees, backend hosting and maintenance (OS updates, fixes). A maintenance retainer is usually cheaper than periodic rebuilds." },
    ],
    related: "mobile-apps",
    relatedLinks: [
      { label: "How much does a mobile app cost in 2026? (article)", href: "/blog/how-much-does-a-mobile-app-cost-2026/" },
      { label: "Flutter vs React Native", href: "/compare/flutter-vs-react-native/" },
    ],
  },
  {
    slug: "website-cost",
    metaTitle: "How much does a website cost? (2026 pricing guide)",
    metaDescription:
      "What a website costs in 2026 — landing pages from a few hundred dollars, marketing sites and web apps higher — and what actually drives the price.",
    h1: "How much does a website cost?",
    intro:
      "In 2026, a professional landing page or small marketing site typically costs from around $600–$2,500, a larger marketing site or CMS build $2,500–$8,000, and a custom web app or SaaS $8,000 and up. The price depends mostly on the number of pages and features, whether it needs a custom design and CMS, and the level of SEO and performance engineering.",
    takeaways: [
      "Landing/small site: ~$600–$2,500 · Marketing site/CMS: $2,500–$8,000 · Web app/SaaS: $8,000+.",
      "Custom design, a CMS, integrations and serious SEO/performance work raise the price.",
      "A fast, well-built site is cheaper to run and converts better — it pays for itself.",
    ],
    tiers: [
      { name: "Landing / small site", range: "$600 – $2,500", note: "Up to ~5 sections/pages, fast, SEO-ready, contact form." },
      { name: "Marketing site / CMS", range: "$2,500 – $8,000", note: "Many pages, custom design, editable CMS, blog." },
      { name: "Web app / SaaS", range: "$8,000+", note: "Accounts, dashboards, payments, custom logic, scale." },
    ],
    drivers: [
      { title: "Pages & features", text: "More pages, templates and interactive features mean more design and build time." },
      { title: "Design", text: "A template-based look is cheaper; a distinctive custom design and brand system costs more." },
      { title: "CMS & editability", text: "A headless or WordPress CMS so your team can edit content adds setup but saves you long-term." },
      { title: "SEO & performance engineering", text: "Technical SEO, schema, Core Web Vitals and migrations without losing rankings are real work — and real ROI." },
      { title: "Integrations", text: "Payments, CRMs, booking, email tools and any third-party APIs add scope." },
    ],
    faqs: [
      { q: "Why are some websites so cheap and others expensive?", a: "Cheap usually means a template with little customisation or SEO; expensive means custom design, a CMS, integrations and performance/SEO engineering. They're different products." },
      { q: "Is a cheap website worth it?", a: "Only if it's still fast, mobile-friendly and findable. A slow, invisible site quietly costs you traffic and leads — which is far more expensive than the build." },
      { q: "Do you offer local (Kenyan) pricing?", a: "Yes — prices are shown in USD for clarity, but local KES rates and flexible terms are available." },
    ],
    related: "web-development",
    relatedLinks: [
      { label: "Why your website is slow — and what it costs you", href: "/blog/why-your-website-is-slow/" },
      { label: "Headless CMS vs WordPress", href: "/compare/headless-vs-wordpress/" },
    ],
  },
  {
    slug: "d365-customization-cost",
    metaTitle: "How much does Dynamics 365 F&O customization cost?",
    metaDescription:
      "What D365 Finance & Operations customization and technical consulting costs — hourly and project ranges, and what drives the price for X++, integrations and reporting.",
    h1: "How much does Dynamics 365 F&O customization cost?",
    intro:
      "Dynamics 365 Finance & Operations technical work is usually priced hourly or by milestone. Independent technical consulting typically starts from around $45/hour, with small customizations running a few hundred to a few thousand dollars, and larger integrations, data migrations or reporting projects scaling from there. The price depends on the complexity of the customization, the number of integrations, and the data-migration and testing effort.",
    takeaways: [
      "Independent D365 F&O technical consulting from ~$45/hour; small customizations from a few hundred dollars.",
      "Integrations, DMF data migration and reporting projects scale with complexity and testing effort.",
      "An independent certified consultant delivers enterprise depth at a fraction of big-consultancy rates.",
    ],
    tiers: [
      { name: "Consulting / hourly", range: "from $45 / hour", note: "Advisory, reviews, small developments, incident response." },
      { name: "Customization / report", range: "$300 – $5,000+", note: "X++ customizations, SSRS/ER/Power BI reports, workflows." },
      { name: "Integration / migration", range: "Quoted", note: "APIs, data entities, DMF cutover, multi-module projects." },
    ],
    drivers: [
      { title: "Customization complexity", text: "A small form extension is quick; deep X++ logic across modules with the Chain of Command pattern takes more." },
      { title: "Integrations", text: "Each external system (CRM, bank, e-commerce) connected via data entities, OData or Azure adds scope." },
      { title: "Data migration", text: "Migrating master data and historical transactions via DMF — with validation and cutover — is its own effort." },
      { title: "Reporting", text: "SSRS, Electronic Reporting and Power BI each take design and testing time." },
      { title: "Testing & upgrade-safety", text: "Regression testing and upgrade-safe patterns protect you through one-version updates." },
    ],
    faqs: [
      { q: "Is hourly or fixed price better for D365 work?", a: "Hourly suits advisory, reviews and evolving scope; milestone/fixed suits well-defined developments. I'll recommend whichever protects you best for the work." },
      { q: "Why is independent consulting cheaper than a big partner?", a: "You pay for senior technical delivery without the overhead of a large consultancy — the same certified depth at a far more accessible rate." },
      { q: "Can you work alongside our existing Microsoft partner?", a: "Yes — often as the specialist technical resource on specific developments or as ongoing support." },
    ],
    related: "dynamics-365-finance-operations",
    relatedLinks: [
      { label: "What a D365 F&O technical consultant does", href: "/blog/what-d365-finance-operations-consultant-does/" },
      { label: "Power Apps vs custom app", href: "/compare/power-apps-vs-custom-app/" },
    ],
  },
];

export const costBySlug = (slug: string) => costs.find((c) => c.slug === slug);
