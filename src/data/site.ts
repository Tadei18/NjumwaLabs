// Single source of truth for brand, contact and navigation data.
// Editing values here updates them across the whole site (footer, schema, CTAs).

export const site = {
  name: "Njumwa Labs",
  legalName: "Njumwa Labs",
  founder: "Crispus Njumwa",
  tagline: "Automation and efficiency brought closer",
  // Update once the production domain is purchased (also update astro.config.mjs `site`).
  url: "https://njumwalabs.com",
  description:
    "Njumwa Labs builds software, AI automation, mobile apps, databases and Dynamics 365 systems that grow your business — enterprise-grade delivery at globally affordable prices.",
  email: "crispusnjumwa@gmail.com",
  phoneDisplay: "+254 745 278 006",
  // E.164 without the plus, for wa.me links.
  whatsapp: "254745278006",
  calendly: "https://calendly.com/crispusnjumwa",
  city: "Nairobi, Kenya",
  region: "Nairobi",
  country: "KE",
  areaServed: ["Kenya", "United States", "United Kingdom", "European Union", "Gulf / Middle East"],
  socials: {
    linkedin: "https://www.linkedin.com/in/crispus-njumwa-692741267",
    github: "", // optional — add later
  },
  // Placeholder OG image (SVG). Export a 1200×630 PNG before launch for full
  // social-platform support (some scrapers don't render SVG). See README.
  ogImage: "/og/default.svg",
} as const;

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hi Crispus, I found Njumwa Labs and I'd like to talk about a project."
)}`;

export const mailtoLink = `mailto:${site.email}`;

export const nav = [
  {
    label: "Services",
    href: "/services/",
    children: [
      { label: "Web development", href: "/services/web-development/" },
      { label: "AI automation", href: "/services/ai-automation/" },
      { label: "Mobile apps", href: "/services/mobile-apps/" },
      { label: "Database administration", href: "/services/database-administration/" },
      {
        label: "Dynamics 365 Finance & Operations",
        href: "/services/dynamics-365-finance-operations/",
      },
    ],
  },
  { label: "Portfolio", href: "/portfolio/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "About", href: "/about/" },
  { label: "Blog", href: "/blog/" },
] as const;

export const footerLegal = [
  { label: "Privacy", href: "/privacy/" },
  { label: "Terms", href: "/terms/" },
] as const;
