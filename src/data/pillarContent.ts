// Full landing-page content for each service pillar. Keyed by slug.
import type { FaqItem } from "@components/FAQ.astro";
import type { Offering } from "@components/OfferingList.astro";

export type PillarContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  subtitle: string;
  serviceType: string;
  problem: { title: string; text: string };
  offerings: Offering[];
  benefits: { icon: string; title: string; text: string }[];
  tools: string[];
  scenarios?: { before: string; after: string }[];
  faqs: FaqItem[];
};

export const pillarContent: Record<string, PillarContent> = {
  "web-development": {
    slug: "web-development",
    metaTitle: "Web development services — fast, ranking, converting sites & apps",
    metaDescription:
      "Custom websites, web apps and SaaS built with React, Next.js, Astro and Node.js — fast, accessible, SEO-engineered and built to convert. Affordable, expert delivery.",
    eyebrow: "Service · Web development",
    h1: "Websites and web apps that load fast, rank well, and convert.",
    subtitle:
      "From marketing sites to full SaaS platforms — designed for speed, search visibility and conversions, and built on a stack you won't outgrow.",
    serviceType: "Web design and development",
    problem: {
      title: "Your website should be your hardest-working employee.",
      text: "Too many sites are slow, invisible in search, and built on code no one wants to touch. That quietly costs you traffic, leads and trust every single day. I build sites that are fast, easy to find, easy to change, and engineered to turn visitors into customers.",
    },
    offerings: [
      { title: "UI/UX design", text: "User research, information architecture, wireframes, interactive Figma prototypes, design systems and accessibility-first design." },
      { title: "Frontend development", text: "React, Next.js, Astro and Vue with Tailwind — responsive, accessible (WCAG) and smooth, with tasteful animation." },
      { title: "Backend development", text: "Node.js/NestJS and Python (Django/FastAPI). REST & GraphQL APIs, auth, payments (Stripe, Paystack, Flutterwave, M-Pesa/Daraja), webhooks and queues." },
      { title: "Full-stack web apps & SaaS", text: "Dashboards, portals, multi-tenant apps and real-time features — production-grade and ready to scale." },
      { title: "E-commerce", text: "Custom storefronts, Shopify and headless commerce with checkout and payment integration that fits your market." },
      { title: "Landing pages & marketing sites", text: "Conversion-optimized, fast, and built to rank from day one." },
      { title: "CMS", text: "Headless (Sanity, Strapi, Contentful) or WordPress — easy editing for non-technical teams." },
      { title: "SEO & performance engineering", text: "Technical SEO, Core Web Vitals, schema/structured data, GEO/AEO for AI search, and migrations without losing rankings." },
      { title: "Maintenance & support", text: "Updates, monitoring, security, performance tuning and bug fixes so your site keeps performing." },
      { title: "Integrations, PWAs & accessibility", text: "API integrations, automation hooks, progressive web apps, and accessibility audits and fixes." },
    ],
    benefits: [
      { icon: "search", title: "More visibility", text: "Technical SEO and clean, crawlable HTML mean more organic traffic from Google and AI answer engines." },
      { icon: "mouse-pointer-click", title: "Higher conversion", text: "Fast, clear, well-structured pages reduce bounce and turn more visitors into inquiries." },
      { icon: "trending-down", title: "Lower long-term cost", text: "Maintainable, well-documented code is cheaper to run and change as your business grows." },
    ],
    tools: ["React", "Next.js", "Astro", "Vue", "Node.js", "NestJS", "Python", "Tailwind", "PostgreSQL", "Stripe", "M-Pesa", "Vercel"],
    faqs: [
      { q: "How long does a website take?", a: "A focused marketing site is typically 1–2 weeks; a web app or SaaS build is usually 3–8 weeks depending on scope. You'll get a clear timeline in your proposal." },
      { q: "Will my site be good for SEO?", a: "Yes — SEO and Core Web Vitals are built in, not bolted on. That includes clean HTML, structured data, fast loads and an AI-search-friendly structure. See <a href='/services/web-development/'>web development</a>." },
      { q: "Can you redesign my existing site without losing rankings?", a: "Absolutely. I handle migrations carefully with redirect mapping and structure preservation so you keep (and usually improve) your search rankings." },
      { q: "Do you work with non-technical teams?", a: "Yes. I can set up a headless CMS or WordPress so your team can edit content easily, with no code required." },
      { q: "Can you integrate payments and other tools?", a: "Yes — Stripe, Paystack, Flutterwave and M-Pesa/Daraja, plus CRMs, email tools and any third-party APIs you rely on." },
    ],
  },

  "ai-automation": {
    slug: "ai-automation",
    metaTitle: "AI automation agency — chatbots, lead gen & workflow automation",
    metaDescription:
      "AI automation that cuts response time, generates qualified leads and removes manual work: chatbots, WhatsApp agents, lead generation, workflow automation, RAG copilots and more.",
    eyebrow: "Service · AI automation",
    h1: "Put your repetitive work on autopilot and turn more leads into customers.",
    subtitle:
      "AI agents, chatbots, lead generation and workflow automation that respond in seconds, never miss an inquiry, and free your team from busywork — measured in leads, hours and cost saved.",
    serviceType: "AI automation and workflow automation",
    problem: {
      title: "Your team is doing work software should be doing.",
      text: "Leads sit unanswered. The same data gets copied between apps. Support questions repeat all day. Every hour spent on this is an hour not spent growing. AI automation handles the repetitive work reliably and instantly — so your people focus on what actually needs a human.",
    },
    offerings: [
      { title: "AI-powered lead generation", text: "Targeted prospect lists, enriched with company, news, funding and tech-stack data (Apollo/Clay/LinkedIn), plus AI-personalized outreach at scale. Helps: a steady pipeline at a lower cost per lead." },
      { title: "AI chatbots & support agents", text: "Website, WhatsApp and social agents trained on your knowledge base (RAG) to answer accurately, qualify leads, book meetings and hand off to a human. Helps: 24/7 instant responses, fewer tickets." },
      { title: "AI marketing automation", text: "Email and nurture sequences, personalization, ad/landing copy and SEO content at scale. Helps: scale marketing output without scaling headcount." },
      { title: "AI content & social engines", text: "Consistent, on-brand LinkedIn/Instagram/X content. Helps: stay visible without the time drain." },
      { title: "Voice AI agents", text: "Inbound/outbound calls that answer FAQs, qualify and book demos. Helps: capture every call and book more meetings automatically." },
      { title: "Workflow & process automation", text: "Connect CRM, email, sheets, helpdesk and accounting with n8n / Make / Zapier or custom code. Helps: kill manual data entry and human error." },
      { title: "Document processing & data extraction", text: "OCR + LLMs to read invoices, receipts, contracts and forms and push structured data where it belongs. Helps: automate back-office data entry and approvals." },
      { title: "Custom AI assistants / copilots (RAG)", text: "Chat over your own documents, policies and data. Helps: instant answers for your team; less time hunting for information." },
      { title: "AI analytics & reporting", text: "Auto-built dashboards and plain-language insight summaries. Helps: faster, clearer decisions." },
      { title: "Finance & operations automation", text: "Reconciliation, reporting and approval flows — backed by real D365/finance experience. Helps: close faster with fewer errors." },
    ],
    benefits: [
      { icon: "timer", title: "Respond in seconds, not hours", text: "Instant replies on your site and WhatsApp mean you win the leads competitors lose to slow follow-up." },
      { icon: "users", title: "More qualified leads", text: "Automated outreach and qualification keep your pipeline full at a lower cost per lead." },
      { icon: "clock", title: "Hours back every week", text: "Manual data entry, reporting and handoffs run themselves — accurately and around the clock." },
    ],
    tools: ["OpenAI", "Claude", "n8n", "Make", "Zapier", "LangChain", "Pinecone", "Twilio", "WhatsApp API", "Apollo", "Clay", "Supabase"],
    scenarios: [
      { before: "Leads answered in 2 hours", after: "Answered in 2 seconds, 24/7" },
      { before: "10 hrs/week of manual data entry", after: "0 — fully automated" },
      { before: "Support repeating the same answers", after: "AI handles FAQs, humans handle the hard ones" },
    ],
    faqs: [
      { q: "What can I actually automate?", a: "Most repetitive, rules-based work: answering inquiries, qualifying and booking leads, moving data between apps, processing documents, generating reports and content, and customer support. If it follows a pattern, it can usually be automated." },
      { q: "Will an AI chatbot sound robotic or give wrong answers?", a: "No — I build retrieval-augmented (RAG) agents trained on your real content, with guardrails and human handoff. They answer from your knowledge base, not guesswork." },
      { q: "Do automations need ongoing maintenance?", a: "Yes. Apps change their APIs and your needs evolve, so automations need upkeep. I offer setup-only or a managed retainer that keeps everything running and improving. See <a href='/pricing/'>pricing</a>." },
      { q: "Can you connect to the tools I already use?", a: "Almost certainly. I integrate with CRMs, email, helpdesks, e-commerce, accounting and ERPs via n8n, Make, Zapier or custom code." },
      { q: "Is my data safe?", a: "Yes. I follow least-privilege access, keep secrets secure, and can keep sensitive data within your own infrastructure or chosen providers." },
    ],
  },

  "mobile-apps": {
    slug: "mobile-apps",
    metaTitle: "Mobile app development — Flutter & React Native iOS + Android",
    metaDescription:
      "iOS and Android apps from a single, cost-efficient codebase with Flutter or React Native. MVPs, fintech, marketplaces, payments (M-Pesa, Stripe), and app store launch.",
    eyebrow: "Service · Mobile apps",
    h1: "iOS and Android apps from a single, cost-efficient codebase.",
    subtitle:
      "Cross-platform apps that look and feel native, ship faster, and cost less to build and maintain — with the payments and integrations your market needs.",
    serviceType: "Mobile application development",
    problem: {
      title: "Two native apps cost twice as much to build and maintain.",
      text: "Most businesses don't need separate iOS and Android teams. A single modern codebase reaches both platforms, ships faster, and costs roughly 30–50% less to build and keep updated — without the clunky feel of older cross-platform tools.",
    },
    offerings: [
      { title: "Cross-platform development", text: "Flutter or React Native — one codebase, both iOS and Android, ~30–50% cheaper and faster than two native apps. Flutter for polished, animation-heavy apps; React Native for JS-stack business tools." },
      { title: "Native iOS & Android", text: "Swift/SwiftUI and Kotlin/Jetpack Compose when there's a real technical reason to go fully native." },
      { title: "Mobile UI/UX design", text: "Prototypes, design systems and platform-correct interactions that feel right on each OS." },
      { title: "Backends for mobile", text: "Supabase (Postgres + auth + realtime + storage), Firebase, or custom APIs built for mobile." },
      { title: "Integrations", text: "Payments (Stripe, M-Pesa Daraja, Flutterwave, Paystack), push notifications, maps/geolocation, biometric auth, analytics and in-app purchases." },
      { title: "App categories", text: "On-demand/marketplace, e-commerce, fintech/wallets, booking & services, social, health & fitness, and productivity/business tools." },
      { title: "MVP development for startups", text: "Ship the core action fast, scope ruthlessly, and get real user feedback sooner." },
      { title: "Launch + ASO + maintenance", text: "App Store and Play Store launch, app-store optimization, plus ongoing maintenance and OS-version updates." },
      { title: "PWA option", text: "A progressive web app when an app-store presence isn't essential — lower cost, instant updates." },
    ],
    benefits: [
      { icon: "smartphone", title: "Reach every customer", text: "One build covers iOS and Android, so you meet customers on whatever device they already use." },
      { icon: "piggy-bank", title: "Lower build & upkeep cost", text: "A single codebase means one team, one set of updates, and noticeably lower long-term cost." },
      { icon: "credit-card", title: "Payments that fit your market", text: "M-Pesa for Kenya and global gateways for international — your users pay the way they expect to." },
    ],
    tools: ["Flutter", "React Native", "Swift", "Kotlin", "Supabase", "Firebase", "Stripe", "M-Pesa", "Figma"],
    faqs: [
      { q: "Flutter or React Native — which should I choose?", a: "Flutter for polished, animation-rich consumer apps; React Native if you're already in the JavaScript ecosystem or building business tools. I'll recommend honestly based on your app, team and budget. See the <a href='/blog/flutter-vs-react-native-2026/'>full comparison</a>." },
      { q: "How much does a mobile app cost?", a: "An MVP typically starts from around $1,500–$3,000; more complex apps scale from there. I scope tightly so you pay for what moves the needle. See <a href='/pricing/'>pricing</a> and <a href='/blog/how-much-does-a-mobile-app-cost-2026/'>this guide</a>." },
      { q: "Can you integrate M-Pesa?", a: "Yes — M-Pesa Daraja (STK push, C2B/B2C) plus Stripe, Flutterwave and Paystack for international payments." },
      { q: "Do you handle App Store and Play Store submission?", a: "Yes, including store setup, compliance, app-store optimization (ASO) and the submission process end to end." },
      { q: "Will you maintain the app after launch?", a: "Yes — OS updates, new features and fixes via a managed retainer, so your app keeps working as iOS and Android evolve." },
    ],
  },

  "database-administration": {
    slug: "database-administration",
    metaTitle: "Database administration — performance tuning, migration & DBA",
    metaDescription:
      "Faster, safer, always-available databases. Query optimization, backups & disaster recovery, high availability, migrations and managed DBA for SQL Server, PostgreSQL, MySQL & MongoDB.",
    eyebrow: "Service · Database administration",
    h1: "Faster, safer, always-available databases.",
    subtitle:
      "Slow queries fixed, data protected, downtime eliminated and reporting made clean — on SQL Server, PostgreSQL, MySQL, MongoDB and more.",
    serviceType: "Database administration and optimization",
    problem: {
      title: "A struggling database slows your whole business down.",
      text: "When queries crawl, reports time out, or backups fail, everything built on top suffers — apps lag, teams wait, and a single outage can be very expensive. I make databases fast, reliable and safe, so the rest of your stack can be too.",
    },
    offerings: [
      { title: "Performance tuning & query optimization", text: "Fix slow queries, design the right indexes, analyze execution plans and optimize schemas for real workloads." },
      { title: "Backup, recovery & disaster recovery", text: "Reliable, tested backups and a DR plan you can actually count on when it matters." },
      { title: "High availability", text: "Replication, clustering and failover for zero or low-downtime operation." },
      { title: "Database migration", text: "On-prem → cloud, engine → engine (e.g. MongoDB → PostgreSQL) and version upgrades — with zero data loss." },
      { title: "Database design & data modeling", text: "Solid schema design and architecture for new builds and refactors, plus data-warehouse review." },
      { title: "Cloud databases", text: "AWS RDS/Aurora, Azure SQL, GCP Cloud SQL and managed MongoDB/DocumentDB, set up and tuned." },
      { title: "Monitoring & maintenance plans", text: "Proactive health checks, alerting and routine upkeep so issues are caught before users notice." },
      { title: "Security & compliance", text: "Access control, encryption, hardening and auditing to protect sensitive data." },
      { title: "Emergency / incident response", text: "\"Database down\" rapid support to get you back online fast." },
      { title: "Data warehousing, ETL/ELT & BI", text: "Pipelines plus Power BI, Tableau and Looker dashboards for clean, trustworthy reporting." },
    ],
    benefits: [
      { icon: "gauge", title: "Faster apps", text: "Tuned queries and indexes make everything built on the database noticeably quicker." },
      { icon: "shield-check", title: "No costly downtime", text: "High availability and tested backups protect you from outages and data loss." },
      { icon: "bar-chart-3", title: "Reporting you can trust", text: "Clean models and pipelines give you accurate numbers for confident decisions." },
    ],
    tools: ["SQL Server", "PostgreSQL", "MySQL", "MariaDB", "MongoDB", "Oracle", "Redis", "AWS RDS", "Azure SQL", "Power BI"],
    faqs: [
      { q: "My app is slow — can you help?", a: "Usually, yes. Slow apps often trace back to unindexed or poorly written queries. I diagnose with execution-plan analysis and fix the root cause, not just the symptom." },
      { q: "Can you migrate my database with zero downtime?", a: "In most cases, yes — using replication and careful cutover planning. I handle on-prem to cloud, engine changes (like MongoDB to PostgreSQL) and version upgrades safely. See <a href='/blog/mongodb-to-postgresql-migration/'>this migration guide</a>." },
      { q: "Do you offer ongoing database management?", a: "Yes — a managed DBA retainer covers monitoring, backups, tuning and updates for your production systems. See <a href='/pricing/'>pricing</a>." },
      { q: "Which databases do you work with?", a: "SQL Server, PostgreSQL, MySQL/MariaDB, MongoDB, Oracle, Redis and SQLite, across AWS, Azure and GCP." },
      { q: "It's an emergency — my database is down. Can you respond now?", a: "Yes. Reach out via <a href='/contact/'>WhatsApp or the contact form</a> and mark it urgent; I prioritize incident response." },
    ],
  },

  "dynamics-365-finance-operations": {
    slug: "dynamics-365-finance-operations",
    metaTitle: "Microsoft-certified Dynamics 365 Finance & Operations consultant (X++)",
    metaDescription:
      "Microsoft-certified D365 Finance & Operations technical consulting — Solution Architect Expert ×3, proven on a 200+ user enterprise go-live. X++, integrations, DMF migration, SSRS & Power BI, upgrades and Power Platform.",
    eyebrow: "Service · Enterprise · D365 F&O",
    h1: "Microsoft-certified Dynamics 365 Finance & Operations technical consulting.",
    subtitle:
      "Solution Architect Expert (×3), proven on a 200+ user enterprise ERP go-live. Upgrade-safe X++ development, integrations, data migration and reporting that make your ERP do exactly what your business needs.",
    serviceType: "Dynamics 365 Finance & Operations technical consulting",
    problem: {
      title: "Your ERP should fit your business — not the other way around.",
      text: "Standard D365 rarely matches how a business actually runs. The gap shows up as manual workarounds, brittle integrations and reports no one trusts. I bridge the functional and technical sides to make F&O work the way your operation really works.",
    },
    offerings: [
      { title: "Technical consulting & development", text: "X++ development, customizations, extensions and ISV solutions built to Microsoft's best practices." },
      { title: "Integrations", text: "Custom APIs & web services, OData, data entities, Azure Logic Apps, Service Bus and Power Platform connectors." },
      { title: "Data migration & DMF", text: "Imports/exports, data packages and cutover support via the Data Management Framework." },
      { title: "Reporting", text: "SSRS, Electronic Reporting (ER) and Power BI tailored to Finance & Operations." },
      { title: "Workflow development & configuration", text: "Approval and business-process workflows that match your real operations." },
      { title: "Performance optimization & troubleshooting", text: "Diagnose and resolve performance issues across F&O environments." },
      { title: "Version upgrades / one-version updates", text: "Smooth updates with regression management so nothing breaks." },
      { title: "Security", text: "Role-based access and Extensible Data Security (XDS) configured correctly." },
      { title: "Power Platform extensions", text: "Power Apps, Power Automate and Dataverse working alongside F&O." },
      { title: "Copilot / AI in D365", text: "Add AI capabilities to finance and operations workflows where they create real value." },
      { title: "Bridging functional & technical", text: "Translating business requirements into robust, maintainable technical solutions." },
    ],
    benefits: [
      { icon: "settings-2", title: "An ERP that fits", text: "Customizations and extensions make F&O match your processes — fewer manual workarounds." },
      { icon: "plug", title: "Clean integrations", text: "Reliable connections between F&O and your other systems, so data flows without re-keying." },
      { icon: "file-check", title: "Reporting you can trust", text: "Accurate SSRS, ER and Power BI reporting for finance and operations decisions." },
    ],
    tools: ["Dynamics 365 F&O", "X++", "Azure", "Logic Apps", "Service Bus", "Power Platform", "Dataverse", "SSRS", "Power BI", "OData"],
    faqs: [
      { q: "What does a D365 F&O technical consultant do?", a: "I handle the technical side of Dynamics 365 Finance & Operations — X++ development, integrations, data migration, reporting and upgrades — and translate business requirements into solutions. See <a href='/blog/what-d365-finance-operations-consultant-does/'>this explainer</a>." },
      { q: "Can you work alongside our existing Microsoft partner or team?", a: "Yes. I frequently work as the specialist technical resource alongside in-house teams or implementation partners, on specific developments or as ongoing support." },
      { q: "Do you handle integrations with other systems?", a: "Yes — via data entities, OData, custom APIs, Azure Logic Apps/Service Bus and Power Platform connectors, to CRMs, e-commerce, banks and more." },
      { q: "Can you help with one-version updates?", a: "Yes — I manage upgrades with regression testing so customizations keep working through Microsoft's continuous updates." },
      { q: "How is this priced?", a: "D365 F&O work is typically consulting/hourly or milestone-based. See <a href='/pricing/'>pricing</a> or request a custom quote." },
    ],
  },
};
