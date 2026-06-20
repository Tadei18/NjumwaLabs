// JSON-LD builders. Keep output minimal and valid (Rich Results Test clean).
import { site } from "@data/site";
import { allCerts, verificationUrl } from "@data/credentials";

const abs = (path: string) => new URL(path, site.url).href;

export const organizationSchema = () => {
  const sameAs = [site.socials.linkedin, site.socials.github].filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: abs("/logo.svg"),
    image: abs(site.ogImage),
    description: site.description,
    email: site.email,
    telephone: `+${site.whatsapp}`,
    founder: { "@type": "Person", name: site.founder },
    areaServed: site.areaServed,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.email,
      telephone: `+${site.whatsapp}`,
      availableLanguage: ["English"],
    },
    sameAs,
  };
};

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  description: site.description,
  publisher: { "@id": `${site.url}/#organization` },
  inLanguage: "en",
});

export const personSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}/#person`,
  name: site.founder,
  jobTitle: "Dynamics 365 Finance & Operations Technical Consultant",
  worksFor: [
    { "@id": `${site.url}/#organization` },
    { "@type": "Organization", name: "Impax Business Solutions" },
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Egerton University",
  },
  knowsAbout: [
    "X++",
    "Dynamics 365 Finance & Operations",
    "Power Platform",
    "Microsoft Azure",
    "Power BI",
    "Microsoft Fabric",
    "SQL",
    "AI automation",
    "Machine Learning",
    "Web development",
    "Mobile app development",
    "Database administration",
  ],
  hasCredential: allCerts.map((c) => ({
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "certification",
    name: c.name,
    recognizedBy: { "@type": "Organization", name: c.by ?? "Microsoft" },
  })),
  url: `${site.url}/about/`,
  address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
  sameAs: [site.socials.linkedin, site.socials.github, verificationUrl].filter(Boolean),
});

export const serviceSchema = (opts: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: opts.name,
  description: opts.description,
  serviceType: opts.serviceType,
  url: abs(opts.url),
  provider: { "@id": `${site.url}/#organization` },
  areaServed: site.areaServed,
  audience: { "@type": "BusinessAudience", audienceType: "SMEs, startups and enterprises" },
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: abs(item.url),
  })),
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const blogPostingSchema = (opts: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  author: string;
  wordCount?: number;
  readingMinutes?: number;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: opts.title,
  description: opts.description,
  url: abs(opts.url),
  mainEntityOfPage: abs(opts.url),
  datePublished: opts.datePublished,
  dateModified: opts.dateModified ?? opts.datePublished,
  image: opts.image ? abs(opts.image) : abs(site.ogImage),
  author: { "@type": "Person", name: opts.author, url: `${site.url}/about/` },
  publisher: { "@id": `${site.url}/#organization` },
  ...(opts.wordCount ? { wordCount: opts.wordCount } : {}),
  // ISO-8601 duration, e.g. 5 minutes -> PT5M
  ...(opts.readingMinutes ? { timeRequired: `PT${opts.readingMinutes}M` } : {}),
});

export const caseStudySchema = (opts: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: opts.title,
  description: opts.description,
  url: abs(opts.url),
  datePublished: opts.datePublished,
  image: opts.image ? abs(opts.image) : abs(site.ogImage),
  creator: { "@id": `${site.url}/#organization` },
});
