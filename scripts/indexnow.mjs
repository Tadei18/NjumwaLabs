// Ping IndexNow (Bing, Yandex, etc. — and indirectly ChatGPT search via Bing)
// with every URL in the built sitemap. Run AFTER `npm run build`, on deploy:
//   npm run build && npm run indexnow
// Requires the key file public/<KEY>.txt to be deployed at the site root.
import { readFile, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";

const KEY = "a3f9c1e84b7d4e2f9c6a1b8d5e3f7a20";
// Update if the production host differs from the configured site.
const HOST = process.env.SITE_HOST || "njumwalabs.com";
const ORIGIN = `https://${HOST}`;

async function collectUrls() {
  const dir = "dist";
  if (!existsSync(dir)) {
    console.error("dist/ not found — run `npm run build` first.");
    process.exit(1);
  }
  const files = (await readdir(dir)).filter((f) => f.startsWith("sitemap") && f.endsWith(".xml"));
  const urls = new Set();
  for (const f of files) {
    const xml = await readFile(`${dir}/${f}`, "utf8");
    for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      if (m[1].endsWith(".xml")) continue; // skip nested sitemap index entries
      urls.add(m[1]);
    }
  }
  return [...urls];
}

const urlList = await collectUrls();
if (urlList.length === 0) {
  console.error("No URLs found in sitemap.");
  process.exit(1);
}

const body = {
  host: HOST,
  key: KEY,
  keyLocation: `${ORIGIN}/${KEY}.txt`,
  urlList,
};

const res = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

console.log(`IndexNow: submitted ${urlList.length} URLs → HTTP ${res.status}`);
if (!res.ok && res.status !== 202) {
  console.error("IndexNow ping failed:", await res.text());
  process.exit(1);
}
