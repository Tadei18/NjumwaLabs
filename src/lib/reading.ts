// Reading time from raw markdown/MDX body. ~200 words/minute, min 1.
export function readingTime(body: string | undefined): number {
  if (!body) return 1;
  // Strip frontmatter, code fences, markdown syntax for a fairer count.
  const text = body
    .replace(/^---[\s\S]*?---/, "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/[#>*_`~\-\[\]()!]/g, " ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
