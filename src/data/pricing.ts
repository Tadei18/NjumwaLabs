// Pricing is presented as "from" anchors in USD. Local (KES) and custom quotes
// are always available — keep numbers globally affordable (well below US/EU agency
// rates) so local clients can afford them while SEO targets higher-revenue markets.

export type Tier = {
  name: string;
  price: string;
  cadence: string; // e.g. "project", "/month", "/hr"
  blurb: string;
  features: string[];
  featured?: boolean;
  cta?: string;
};

export type PricingGroup = {
  id: "project" | "retainer";
  label: string;
  note: string;
  tiers: Tier[];
};

export const pricing: PricingGroup[] = [
  {
    id: "project",
    label: "One-off projects",
    note: "Fixed scope, fixed price. Ideal for a website, an app, an automation, or a migration.",
    tiers: [
      {
        name: "Launch",
        price: "$600",
        cadence: "from / project",
        blurb: "Get a fast, professional presence or a focused automation live.",
        features: [
          "Marketing site or landing page (up to 5 sections)",
          "Or one automation / workflow build",
          "Mobile-first, SEO-ready, fast by default",
          "Contact form + analytics wired",
          "2 rounds of revisions",
          "Typical timeline: 1–2 weeks",
        ],
        cta: "Start a project",
      },
      {
        name: "Build",
        price: "$1,800",
        cadence: "from / project",
        blurb: "A real product: web app, mobile MVP, or multi-step automation system.",
        features: [
          "Full-stack web app or cross-platform mobile MVP",
          "Auth, payments (Stripe / M-Pesa), integrations",
          "Database design + admin dashboard",
          "AI features / chatbot where useful",
          "Staging + production deploy",
          "Typical timeline: 3–8 weeks",
        ],
        featured: true,
        cta: "Start a project",
      },
      {
        name: "Enterprise",
        price: "Custom",
        cadence: "quoted",
        blurb: "Complex systems, D365 F&O work, or multi-platform builds.",
        features: [
          "Dynamics 365 F&O development & integrations",
          "Multi-tenant SaaS or large web/mobile platforms",
          "Data migrations & warehousing",
          "Architecture, security & performance review",
          "Phased delivery with milestones",
          "Dedicated expert engineering",
        ],
        cta: "Request a quote",
      },
    ],
  },
  {
    id: "retainer",
    label: "Managed retainers",
    note: "Ongoing care — automations, databases and products need upkeep. Cancel anytime.",
    tiers: [
      {
        name: "Care",
        price: "$300",
        cadence: "/month",
        blurb: "Keep a site, app or set of automations healthy and updated.",
        features: [
          "Monitoring, backups & security updates",
          "Bug fixes & small changes",
          "Performance & uptime checks",
          "Up to ~5 hours/month",
          "Priority email/WhatsApp support",
        ],
        cta: "Get started",
      },
      {
        name: "Partner",
        price: "$750",
        cadence: "/month",
        blurb: "An ongoing technical partner shipping improvements every month.",
        features: [
          "Everything in Care",
          "New features & automations each month",
          "Managed DBA / database tuning",
          "Up to ~15 hours/month",
          "Monthly roadmap & reporting call",
        ],
        featured: true,
        cta: "Get started",
      },
      {
        name: "Consulting",
        price: "$45",
        cadence: "/hour",
        blurb: "Specialist advisory & technical work, including D365 F&O.",
        features: [
          "D365 F&O technical consulting",
          "Architecture & code reviews",
          "Performance & incident response",
          "Pay only for the hours you use",
          "Local (KES) rates available",
        ],
        cta: "Book a call",
      },
    ],
  },
];
