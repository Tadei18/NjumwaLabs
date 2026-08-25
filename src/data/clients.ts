// Real, named clients whose sites are live and who are cleared to be shown by
// name. Order here is the order they appear in the client band.
//
// The brand name and industry are read from the matching portfolio case study,
// so the MDX file stays the single source of truth — to feature a client, add
// its case-study slug here.
//
// ---------------------------------------------------------------------------
// IMPORTANT: this is a "brands I've built for" band, NOT testimonials.
// Naming a client you genuinely worked for is a true statement. Attaching a
// QUOTE to one of these names is not, unless that client actually said it and
// cleared it for publication. Never write a quote on a real company's behalf —
// see src/data/testimonials.ts.
// ---------------------------------------------------------------------------
export const showcaseClientSlugs = [
  "mtalii-bush-camps",
  "gts-risk-advisory",
  "edge-tech-gurus",
  "essay-writing-edge",
  "elite-life-health",
] as const;
