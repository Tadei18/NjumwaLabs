// PLACEHOLDER testimonials — structured for easy real-data drop-in + Review schema.
//
// These are NOT shown on the site. The home page shows a real client band
// instead (src/components/ClientBand.astro), because naming a client you
// genuinely worked for is verifiable while inventing what they said is not.
//
// To go live with testimonials:
//   1. Get the quote from the client, in writing, with permission to publish.
//   2. Replace `quote`, `name`, `role`, `company` with their real words.
//   3. Set `placeholder: false` — that is what enables Review/AggregateRating
//      schema output in src/lib/schema.ts.
//
// Do NOT put a real company's name on a quote they did not give. A fabricated
// review attributed to an identifiable business is a false endorsement, it is
// the kind of thing Google's review policies and consumer-protection rules
// exist to catch, and structured Review markup makes the claim machine-readable
// — which is exactly the wrong thing to be confidently wrong about.

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number; // 1–5
  pillar?: string;
  placeholder?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Crispus rebuilt our booking flow and connected it to WhatsApp. Inquiries that used to sit overnight now get answered in seconds — our conversion roughly doubled.",
    name: "Placeholder Name",
    role: "Founder",
    company: "Sample Services Co.",
    rating: 5,
    pillar: "ai-automation",
    placeholder: true,
  },
  {
    quote:
      "He took a slow, crash-prone database and made it quick and reliable. Reports that timed out now run in under a second. Calm, clear, and fast.",
    name: "Placeholder Name",
    role: "Operations Lead",
    company: "Sample Retail Group",
    rating: 5,
    pillar: "database-administration",
    placeholder: true,
  },
  {
    quote:
      "Enterprise-level D365 expertise without the enterprise overhead. Our integrations finally work the way the business actually operates.",
    name: "Placeholder Name",
    role: "Finance Director",
    company: "Sample Manufacturing Ltd",
    rating: 5,
    pillar: "dynamics-365-finance-operations",
    placeholder: true,
  },
  {
    quote:
      "Shipped our MVP in six weeks from one Flutter codebase. iOS and Android, payments included. Communication was excellent across time zones.",
    name: "Placeholder Name",
    role: "Co-founder",
    company: "Sample Startup",
    rating: 5,
    pillar: "mobile-apps",
    placeholder: true,
  },
];
