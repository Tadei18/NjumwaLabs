// Industry / use-case pages — only with genuinely unique copy (no thin doorway pages).
export type UseCase = {
  slug: string;
  industry: string;
  pillarSlug: string; // for the illustration + related service
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string; // answer-first
  takeaways: string[];
  problems: string[]; // pain points specific to this industry
  solutions: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  relatedLinks?: { label: string; href: string }[];
};

export const usecases: UseCase[] = [
  {
    slug: "erp-for-insurance",
    industry: "Insurance",
    pillarSlug: "dynamics-365-finance-operations",
    metaTitle: "Dynamics 365 ERP for insurance — finance & operations done right",
    metaDescription:
      "Dynamics 365 Finance & Operations for insurance groups — upgrade-safe customizations, DMF data migration and KPI reporting for finance, claims and underwriting, delivered by a certified consultant who's done it at 200+ user scale.",
    h1: "Dynamics 365 ERP for insurance groups",
    intro:
      "Insurance groups need their ERP to mirror how finance, claims and underwriting actually operate — with reliable reporting and clean integrations, not manual workarounds. I deliver the technical side of Dynamics 365 Finance & Operations for insurers: upgrade-safe X++ customizations, DMF data migration during cutover, and SSRS/Power BI reporting — proven on a go-live serving 200+ users across six core finance and operations modules.",
    takeaways: [
      "Real delivery: technical components on a 200+ user insurance D365 F&O go-live across GL, AR, AP, Fixed Assets, Inventory and Procurement.",
      "Upgrade-safe customizations (X++, Chain of Command) that survive Microsoft's one-version updates.",
      "DMF migration of master data and historical transactions, plus KPI reporting for finance, claims and underwriting.",
    ],
    problems: [
      "Standard D365 doesn't match how the insurer's finance, claims and underwriting teams actually work.",
      "Legacy data must be migrated cleanly during cutover, with no loss and full validation.",
      "Finance, claims and underwriting need trustworthy, near real-time KPI reporting.",
      "Customizations must not break the upgrade path through continuous updates.",
    ],
    solutions: [
      { title: "Upgrade-safe customizations", text: "Custom AOT elements and extensions in X++ using the Chain of Command pattern — extending standard F&O without breaking upgrades." },
      { title: "Data migration (DMF)", text: "Data Management Framework projects to migrate master data and historical transactions from legacy systems during cutover, with staging and validation." },
      { title: "Reporting", text: "SSRS, Electronic Reporting and Power BI surfacing financial and operational KPIs for finance, claims and underwriting." },
      { title: "Integrations", text: "Connecting F&O to other systems via data entities, OData, custom APIs and Azure where needed." },
      { title: "Stabilization & performance", text: "Resolving post-go-live defects and tuning high-volume transactional workflows in production." },
    ],
    faqs: [
      { q: "Have you delivered D365 for insurance before?", a: "Yes — I delivered technical components on a large-scale D365 Finance & Operations implementation and go-live serving 200+ users at a leading East African insurance group, across six core modules." },
      { q: "Can you work alongside our implementation partner?", a: "Yes — typically as the specialist technical resource on specific developments, integrations or reporting, or as ongoing support." },
      { q: "Will customizations survive Microsoft's updates?", a: "Yes — I build with the Chain of Command and extension framework so customizations are upgrade-safe through one-version updates." },
    ],
    relatedLinks: [
      { label: "Dynamics 365 Finance & Operations service", href: "/services/dynamics-365-finance-operations/" },
      { label: "Insurance D365 go-live case study", href: "/portfolio/insurance-d365-go-live/" },
      { label: "D365 customization cost", href: "/cost/d365-customization-cost/" },
    ],
  },
  {
    slug: "ai-automation-for-real-estate",
    industry: "Real estate",
    pillarSlug: "ai-automation",
    metaTitle: "AI automation for real estate — capture and qualify every lead",
    metaDescription:
      "AI automation for real estate agencies — instant WhatsApp and website responses, lead qualification, viewing bookings and follow-up, so no enquiry slips through.",
    h1: "AI automation for real estate agencies",
    intro:
      "Real estate runs on speed of response — the agent who replies first usually wins the viewing. AI automation gives a real estate agency instant, 24/7 responses on its website and WhatsApp, qualifies buyers and tenants, books viewings into the calendar, and follows up automatically — so no enquiry is ever lost to a slow reply.",
    takeaways: [
      "Instant website + WhatsApp responses, day or night, so you win the leads competitors lose to slow follow-up.",
      "AI qualifies budget, location and timeline, then books viewings straight into the calendar.",
      "Automated follow-up keeps warm leads warm without manual chasing.",
    ],
    problems: [
      "Enquiries arrive at all hours and go cold before an agent can respond.",
      "Agents spend time answering the same questions and chasing unqualified leads.",
      "Viewings and follow-ups slip through the cracks during busy periods.",
    ],
    solutions: [
      { title: "Website & WhatsApp agent", text: "An AI agent trained on your listings and FAQs answers instantly, 24/7, and hands off to an agent when needed." },
      { title: "Lead qualification", text: "It captures budget, area, bedrooms and timeline, so agents spend time only on genuinely warm leads." },
      { title: "Viewing bookings", text: "Qualified leads are booked straight into the right agent's calendar — no back-and-forth." },
      { title: "Automated follow-up", text: "Timed, personalized follow-ups keep prospects engaged until they're ready to act." },
      { title: "Portal & CRM sync", text: "New listings and leads stay in sync across your portal, CRM and spreadsheets." },
    ],
    faqs: [
      { q: "Can the AI handle WhatsApp enquiries?", a: "Yes — WhatsApp is where most property enquiries happen. The agent answers there instantly, qualifies the lead and books viewings." },
      { q: "Will it sound robotic to clients?", a: "No — it's trained on your real listings and tone, answers from facts, and hands off to a human for anything sensitive." },
      { q: "Does it work with our CRM?", a: "Yes — it can sync leads and bookings with your CRM, portal and spreadsheets via standard integrations." },
    ],
    relatedLinks: [
      { label: "AI automation service", href: "/services/ai-automation/" },
      { label: "How AI automation cuts response time", href: "/blog/how-ai-automation-cuts-response-time/" },
      { label: "AI lead generation explained", href: "/blog/ai-lead-generation-for-small-businesses/" },
    ],
  },
];

export const usecaseBySlug = (slug: string) => usecases.find((u) => u.slug === slug);
