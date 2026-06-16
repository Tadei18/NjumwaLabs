// The five service pillars. Used by the SystemsMap, services hub, home cards,
// pillar pages and pricing. Keep `slug` in sync with /services/[slug] routes.

export type Pillar = {
  slug: string;
  title: string;
  short: string; // nav / card label
  icon: string; // lucide icon name (without the `lucide:` prefix)
  outcome: string; // one-line outcome for cards
  href: string;
  priceFrom: string; // USD "from" anchor
};

export const pillars: Pillar[] = [
  {
    slug: "web-development",
    title: "Web development",
    short: "Web development",
    icon: "code-2",
    outcome: "Websites and web apps that load fast, rank well, and convert.",
    href: "/services/web-development/",
    priceFrom: "$600",
  },
  {
    slug: "ai-automation",
    title: "AI automation",
    short: "AI automation",
    icon: "bot",
    outcome: "Put repetitive work on autopilot and turn more leads into customers.",
    href: "/services/ai-automation/",
    priceFrom: "$400",
  },
  {
    slug: "mobile-apps",
    title: "Mobile apps",
    short: "Mobile apps",
    icon: "smartphone",
    outcome: "iOS and Android apps from a single, cost-efficient codebase.",
    href: "/services/mobile-apps/",
    priceFrom: "$1,500",
  },
  {
    slug: "database-administration",
    title: "Database administration",
    short: "Database administration",
    icon: "database",
    outcome: "Faster, safer, always-available databases.",
    href: "/services/database-administration/",
    priceFrom: "$300",
  },
  {
    slug: "dynamics-365-finance-operations",
    title: "Dynamics 365 Finance & Operations",
    short: "Dynamics 365 F&O",
    icon: "building-2",
    outcome: "Senior D365 Finance & Operations technical consulting.",
    href: "/services/dynamics-365-finance-operations/",
    priceFrom: "$45/hr",
  },
];

export const pillarBySlug = (slug: string) => pillars.find((p) => p.slug === slug);
