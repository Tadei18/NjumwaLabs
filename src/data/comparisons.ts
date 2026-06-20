// Evergreen comparison hub pages. Each has a real comparison table + a verdict.
export type Row = { feature: string; a: string; b: string };
export type Comparison = {
  slug: string;
  a: string;
  b: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string; // answer-first
  takeaways: string[];
  rows: Row[];
  verdict: string[];
  faqs: { q: string; a: string }[];
  related?: string; // pillar slug
  relatedPosts?: { label: string; href: string }[];
};

export const comparisons: Comparison[] = [
  {
    slug: "flutter-vs-react-native",
    a: "Flutter",
    b: "React Native",
    metaTitle: "Flutter vs React Native (2026): which to choose?",
    metaDescription:
      "A practical Flutter vs React Native comparison — performance, cost, team fit and a clear verdict on which cross-platform framework to choose for your app.",
    h1: "Flutter vs React Native: which should you choose?",
    intro:
      "Choose Flutter for polished, animation-heavy consumer apps that need an identical custom look on both platforms; choose React Native if your team already works in JavaScript/React or you're building business tools. Both ship iOS and Android from one codebase at roughly 30–50% less cost than two native apps, so the bigger decision is cross-platform vs native, not Flutter vs React Native.",
    takeaways: [
      "Flutter → branded, animation-rich consumer apps with an identical look on both platforms.",
      "React Native → JavaScript/React teams and standard business tools and dashboards.",
      "Both cut build and maintenance cost ~30–50% versus two native apps.",
    ],
    rows: [
      { feature: "Language", a: "Dart", b: "JavaScript / TypeScript" },
      { feature: "Rendering", a: "Own engine (pixel-perfect, identical UI)", b: "Native components" },
      { feature: "Best for", a: "Custom, animation-heavy consumer apps", b: "JS-stack teams, business tools" },
      { feature: "UI consistency", a: "Identical across platforms", b: "Closer to each platform's native feel" },
      { feature: "Team ramp-up", a: "New language (Dart) — easy to learn", b: "Familiar to web/React teams" },
      { feature: "Code sharing with web", a: "Possible (Flutter web)", b: "Strong (shares with React web)" },
      { feature: "App size", a: "Slightly larger", b: "Moderate" },
      { feature: "Maturity / ecosystem", a: "Mature, Google-backed", b: "Mature, Meta-backed" },
    ],
    verdict: [
      "If the app is brand-critical, visually rich or animation-heavy and you want it to look identical on iOS and Android, choose Flutter.",
      "If your team is already in the JavaScript/React ecosystem, or you're building dashboards and business tools, choose React Native.",
      "For most SMEs and startups the real win is simply going cross-platform — either framework saves roughly 30–50% versus two native apps. I'll recommend honestly based on your app, team and budget.",
    ],
    faqs: [
      { q: "Is Flutter or React Native faster?", a: "Both are fast enough for the vast majority of apps. Flutter's own rendering engine gives an edge for heavy custom animation; React Native renders with native components." },
      { q: "Which is cheaper to build?", a: "Both cost roughly the same and both are far cheaper than two native apps — the ~30–50% saving comes from sharing one codebase, not from the framework choice." },
      { q: "Can I reuse code with my website?", a: "React Native shares more naturally with a React web app; Flutter also offers web, though sharing is less common in practice." },
    ],
    related: "mobile-apps",
    relatedPosts: [
      { label: "Flutter vs React Native in 2026 (in depth)", href: "/blog/flutter-vs-react-native-2026/" },
      { label: "How much does a mobile app cost in 2026?", href: "/blog/how-much-does-a-mobile-app-cost-2026/" },
    ],
  },
  {
    slug: "postgresql-vs-mongodb",
    a: "PostgreSQL",
    b: "MongoDB",
    metaTitle: "PostgreSQL vs MongoDB: which database should you use?",
    metaDescription:
      "PostgreSQL vs MongoDB compared — data model, queries, transactions, scaling and a clear verdict on which database fits your application.",
    h1: "PostgreSQL vs MongoDB: which should you use?",
    intro:
      "Choose PostgreSQL when your data is relational, you need complex queries, joins and strong ACID transactions, or you want one engine that also handles JSON. Choose MongoDB when your data is genuinely document-shaped, schema flexibility matters during fast iteration, and you're mostly reading and writing whole documents. Many teams end up on PostgreSQL because its jsonb support means they don't have to choose.",
    takeaways: [
      "PostgreSQL → relational data, complex queries/joins, strong transactions (and it does JSON too).",
      "MongoDB → flexible, document-shaped data and rapid early iteration.",
      "PostgreSQL's jsonb often removes the need to choose between relational and document.",
    ],
    rows: [
      { feature: "Data model", a: "Relational (tables) + JSON (jsonb)", b: "Document (BSON/JSON)" },
      { feature: "Schema", a: "Structured, enforced", b: "Flexible, per-document" },
      { feature: "Queries & joins", a: "Powerful SQL, joins, window functions", b: "Aggregation pipeline; joins limited" },
      { feature: "Transactions", a: "Strong multi-row ACID", b: "Multi-document ACID (newer, more limited)" },
      { feature: "Best for", a: "Complex, related data & reporting", b: "Document-centric, evolving schemas" },
      { feature: "Licensing / cost", a: "Open-source, no licensing fees", b: "SSPL; managed Atlas pricing" },
      { feature: "Scaling", a: "Vertical + read replicas; sharding via extensions", b: "Built-in horizontal sharding" },
    ],
    verdict: [
      "For most business applications — anything with related entities, reporting needs, or money — PostgreSQL is the safer default, and its jsonb columns give you document flexibility where you need it.",
      "MongoDB shines when your data is truly document-shaped, you're iterating fast on schema, and your access pattern is reading and writing whole documents.",
      "If you've outgrown MongoDB and find yourself joining collections in application code, a careful migration to PostgreSQL is often worth it.",
    ],
    faqs: [
      { q: "Is PostgreSQL or MongoDB better?", a: "Neither universally — PostgreSQL suits relational data and complex queries; MongoDB suits flexible, document-shaped data. Most business apps are better served by PostgreSQL." },
      { q: "Can PostgreSQL store JSON like MongoDB?", a: "Yes — PostgreSQL's jsonb type stores and indexes JSON efficiently, so you can mix relational and document data in one database." },
      { q: "Should I migrate from MongoDB to PostgreSQL?", a: "If your data is really relational and you need joins, transactions or complex reporting, often yes. See the migration guide for a safe, zero-data-loss approach." },
    ],
    related: "database-administration",
    relatedPosts: [
      { label: "MongoDB to PostgreSQL migration: when and how", href: "/blog/mongodb-to-postgresql-migration/" },
    ],
  },
  {
    slug: "headless-vs-wordpress",
    a: "Headless CMS",
    b: "WordPress",
    metaTitle: "Headless CMS vs WordPress: which is right for your site?",
    metaDescription:
      "Headless CMS vs WordPress compared — performance, flexibility, editing experience, security and a clear verdict for marketing sites and web apps.",
    h1: "Headless CMS vs WordPress: which is right for you?",
    intro:
      "Choose a headless CMS (like Sanity, Strapi or Contentful) with a modern frontend when you want maximum speed, security and flexibility and have developer support. Choose WordPress when you need a familiar, all-in-one editing experience, a huge plugin ecosystem, and lower upfront cost. For fast, SEO-critical marketing sites, headless paired with a static framework like Astro usually wins on Core Web Vitals.",
    takeaways: [
      "Headless → fastest, most secure and most flexible; best for SEO-critical sites and apps (needs developers).",
      "WordPress → familiar all-in-one editing, vast plugins, lower upfront cost.",
      "For speed and Core Web Vitals, headless + a static frontend usually wins.",
    ],
    rows: [
      { feature: "Architecture", a: "Content API + separate frontend", b: "Coupled CMS + theme" },
      { feature: "Performance", a: "Excellent (static/CDN, minimal JS)", b: "Good with effort (caching, plugins)" },
      { feature: "Security surface", a: "Small (no public admin on the site)", b: "Larger (plugins, admin, PHP)" },
      { feature: "Editing experience", a: "Clean, structured content", b: "Familiar, all-in-one, WYSIWYG" },
      { feature: "Ecosystem", a: "Growing, developer-oriented", b: "Massive plugin & theme ecosystem" },
      { feature: "Upfront cost", a: "Higher (custom frontend)", b: "Lower (themes, plugins)" },
      { feature: "Best for", a: "Fast marketing sites, web apps, scale", b: "Blogs, standard sites, quick launches" },
    ],
    verdict: [
      "For a marketing site where search visibility and speed are the whole point, a headless CMS with a static frontend (Astro) delivers the best Core Web Vitals and the smallest security surface.",
      "For teams that want to self-manage content with a familiar editor and a plugin for everything, WordPress remains a pragmatic, lower-cost choice.",
      "You can also get the best of both: WordPress as a headless backend feeding a fast modern frontend.",
    ],
    faqs: [
      { q: "Is headless better than WordPress for SEO?", a: "For Core Web Vitals and clean, crawlable HTML, a headless + static setup usually performs better. WordPress can rank well too, but needs careful performance work." },
      { q: "Is WordPress cheaper?", a: "Usually lower upfront, yes — but plugin sprawl, hosting and maintenance add ongoing cost. Headless costs more to build but can be cheaper to run and scale." },
      { q: "Can non-technical staff edit a headless site?", a: "Yes — headless CMSs like Sanity and Strapi give editors a clean interface; the frontend just reads their content via an API." },
    ],
    related: "web-development",
    relatedPosts: [
      { label: "Why your website is slow — and what it costs you", href: "/blog/why-your-website-is-slow/" },
    ],
  },
  {
    slug: "power-apps-vs-custom-app",
    a: "Power Apps",
    b: "Custom app",
    metaTitle: "Power Apps vs custom app: which should you build?",
    metaDescription:
      "Power Apps vs a custom-coded app compared — speed, cost, flexibility, scale and a clear verdict on when low-code beats custom development.",
    h1: "Power Apps vs a custom app: which should you build?",
    intro:
      "Choose Microsoft Power Apps for internal business tools you need quickly and cheaply — especially if you're already in the Microsoft 365/Dataverse ecosystem. Choose a custom-coded app when you need a polished consumer experience, specific performance or design, complex logic, or freedom from per-user licensing. A common, sensible path is to start in Power Apps to validate, then rebuild custom only the parts that outgrow it.",
    takeaways: [
      "Power Apps → fast, low-cost internal tools, especially within the Microsoft ecosystem.",
      "Custom app → consumer-grade UX, specific performance/design, complex logic, no per-user licensing.",
      "Start low-code to validate; go custom where you outgrow it.",
    ],
    rows: [
      { feature: "Build speed", a: "Very fast (low-code)", b: "Slower (full development)" },
      { feature: "Upfront cost", a: "Low", b: "Higher" },
      { feature: "Customisation", a: "Bounded by the platform", b: "Unlimited" },
      { feature: "UX polish", a: "Functional, business-style", b: "Fully custom, consumer-grade" },
      { feature: "Licensing", a: "Per-user / per-app subscription", b: "You own it; host where you like" },
      { feature: "Best for", a: "Internal tools, forms, approvals", b: "Customer-facing & complex products" },
      { feature: "Ecosystem fit", a: "Deep Microsoft 365 / Dataverse", b: "Any stack" },
    ],
    verdict: [
      "For internal tools — forms, approvals, dashboards over Dataverse or SharePoint — Power Apps gets you there in a fraction of the time and cost.",
      "For anything customer-facing, performance-sensitive or genuinely bespoke, a custom app pays off in experience and avoids per-user licensing.",
      "As someone certified in both the Power Platform and full custom development, I'll recommend the one that actually fits — and sometimes that's a hybrid.",
    ],
    faqs: [
      { q: "Is Power Apps cheaper than a custom app?", a: "Usually lower upfront and faster to build, but per-user licensing adds ongoing cost at scale. Custom apps cost more to build but you own them." },
      { q: "When should I avoid Power Apps?", a: "For customer-facing products, demanding performance or UX, very complex logic, or when per-user licensing becomes expensive at scale." },
      { q: "Can I start with Power Apps and move to custom later?", a: "Yes — a common path is to validate with Power Apps, then rebuild the parts that outgrow it as a custom app." },
    ],
    related: "ai-automation",
    relatedPosts: [],
  },
];

export const comparisonBySlug = (slug: string) => comparisons.find((c) => c.slug === slug);
