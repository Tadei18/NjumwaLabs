// Render the branded OG card from SVG to a 1200x630 PNG.
// Usage: npm run og
import sharp from "sharp";

await sharp("public/og/default.svg")
  .resize(1200, 630)
  .png()
  .toFile("public/og/default.png");

console.log("✓ public/og/default.png regenerated (1200×630)");
