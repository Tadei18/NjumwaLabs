import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const pillarSlugs = [
  "web-development",
  "ai-automation",
  "mobile-apps",
  "database-administration",
  "dynamics-365-finance-operations",
] as const;

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      category: z.enum(pillarSlugs).or(z.literal("general")),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      author: z.string().default("Crispus Martin Njumwa"),
      // Optional answer-first TL;DR bullets rendered under the H1 (GEO).
      takeaways: z.array(z.string()).optional(),
      // Optional FAQ block (emits FAQPage schema).
      faqs: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
      // Optional HowTo steps (emits HowTo schema) for step-by-step guides.
      howto: z
        .object({
          name: z.string(),
          totalTime: z.string().optional(),
          steps: z.array(z.object({ name: z.string(), text: z.string() })),
        })
        .optional(),
    }),
});

const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/portfolio" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      client: z.string(),
      industry: z.string(),
      pillar: z.enum(pillarSlugs),
      pubDate: z.coerce.date(),
      stack: z.array(z.string()).default([]),
      // headline result metrics, e.g. { value: "62%", label: "faster load" }
      metrics: z
        .array(z.object({ value: z.string(), label: z.string() }))
        .default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog, portfolio };
