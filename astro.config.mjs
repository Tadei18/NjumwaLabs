import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";
import { readdirSync, readFileSync } from "node:fs";

// Build a url -> lastmod map from content frontmatter (updatedDate || pubDate)
// so the sitemap emits accurate <lastmod>. Pages without a content date fall
// back to the build date.
function contentDates() {
  const map = {};
  const sources = [
    { dir: "src/content/blog", base: "/blog/" },
    { dir: "src/content/portfolio", base: "/portfolio/" },
  ];
  for (const { dir, base } of sources) {
    let files = [];
    try {
      files = readdirSync(dir);
    } catch {
      continue;
    }
    for (const file of files) {
      if (!/\.(md|mdx)$/.test(file)) continue;
      const slug = file.replace(/\.(md|mdx)$/, "");
      const raw = readFileSync(`${dir}/${file}`, "utf8");
      const fm = raw.match(/^---([\s\S]*?)---/);
      if (!fm) continue;
      const upd = fm[1].match(/updatedDate:\s*['"]?([0-9-]+)/);
      const pub = fm[1].match(/pubDate:\s*['"]?([0-9-]+)/);
      const date = (upd && upd[1]) || (pub && pub[1]);
      if (date) map[`${base}${slug}/`] = new Date(date).toISOString();
    }
  }
  return map;
}

const LASTMOD = contentDates();
const BUILD_DATE = new Date().toISOString();

// NOTE: update `site` once the production domain is purchased.
// This URL is used for canonical tags, sitemap and Open Graph absolute URLs.
export default defineConfig({
  site: "https://njumwalabs.com",
  trailingSlash: "always",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  integrations: [
    mdx(),
    icon(),
    sitemap({
      serialize(item) {
        const path = new URL(item.url).pathname;
        item.lastmod = LASTMOD[path] || BUILD_DATE;
        item.changefreq = path === "/" ? "weekly" : "monthly";
        item.priority = path === "/" ? 1.0 : 0.7;
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
