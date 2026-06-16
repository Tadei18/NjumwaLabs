import { pillarBySlug } from "@data/services";

// Human label for a blog category (a pillar slug or "general").
export const categoryLabel = (cat: string): string => {
  if (cat === "general") return "General";
  return pillarBySlug(cat)?.short ?? cat;
};
