import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

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
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
