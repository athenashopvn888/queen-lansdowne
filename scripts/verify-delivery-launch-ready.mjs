import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";

const expectedBranch = "feature/qlc-delivery-launch-ready-20260728";
const expectedKeys = ["category", "description", "effects", "images", "name", "offers", "priceOptions", "publicProductId", "strain", "thc", "tier"].sort();
const previewOrigin = "https://qlc-delivery-launch-ready.vercel.app";
const sodStatus = "https://milestone-1-demo.vercel.app/api/web-chat/status";

const branch = execFileSync("git", ["branch", "--show-current"], { encoding: "utf8" }).trim();
assert.equal(branch, expectedBranch, "Launch acceptance must run from the staging feature branch");

const menu = JSON.parse(await readFile(new URL("../app/delivery/delivery-menu.json", import.meta.url), "utf8"));
const products = menu.products;
const serialized = JSON.stringify(menu);
assert.equal(products.length, 63);
assert.equal(products.filter((product) => product.description).length, 58);
assert.equal(products.filter((product) => product.images?.length).length, 63);
assert(products.every((product) => product.publicProductId && product.tier));
for (const product of products) assert.deepEqual(Object.keys(product).sort(), expectedKeys);
assert(!/"sku"|sourceProductId|sourceUrl|provenance|farmerslink/i.test(serialized));

const catalog = await readFile(new URL("../app/delivery/DeliveryCatalog.tsx", import.meta.url), "utf8");
const drawer = await readFile(new URL("../app/delivery/ProductDetailsDrawer.tsx", import.meta.url), "utf8");
const chat = await readFile(new URL("../app/delivery/IdVerificationChat.tsx", import.meta.url), "utf8");
const css = await readFile(new URL("../app/delivery/delivery-experience.css", import.meta.url), "utf8");
const page = await readFile(new URL("../app/delivery/page.tsx", import.meta.url), "utf8");
assert(catalog.includes("api/catalog?store=QLC") && catalog.includes("View details"));
assert(!catalog.includes("product.sku") && !catalog.includes("parseTierSku"));
assert(css.includes("@scope (.qlc-delivery-scope)") && css.includes(".qlc-list-grid { grid-template-columns: repeat(2, minmax(0, 1fr));"));
assert(drawer.includes('role="dialog"') && drawer.includes('aria-modal="true"') && drawer.includes('event.key==="Escape"') && drawer.includes('event.key!=="Tab"'));
assert(drawer.includes("document.body.style.overflow") && drawer.includes('alt={product.name}'));
assert(chat.includes('"NEW_CUSTOMER"') && chat.includes('"RETURNING_CUSTOMER"') && chat.includes("preparePhoto") && chat.includes("id-review"));
assert(page.includes("index: false") && page.includes("follow: false"));

for (const productionUrl of [
  "https://queenlansdownecannabis.ca/delivery",
  "https://www.queenlansdownecannabis.ca/delivery",
]) {
  const response = await fetch(productionUrl, { redirect: "follow" });
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /Delivery Coming Soon/i);
  assert.doesNotMatch(html, /View details/i);
}

for (const origin of [
  previewOrigin,
  "https://queenlansdownecannabis.ca",
  "https://www.queenlansdownecannabis.ca",
]) {
  const response = await fetch(sodStatus, { headers: { Origin: origin } });
  assert.equal(response.status, 200, `Expected Web Chat status for ${origin}`);
  assert.equal(response.headers.get("access-control-allow-origin"), origin);
}
const unrelated = await fetch(sodStatus, { headers: { Origin: "https://unrelated.example" } });
assert.equal(unrelated.status, 403);
assert.equal(unrelated.headers.get("access-control-allow-origin"), null);

const previewUrl = String(process.env.QLC_DELIVERY_PREVIEW_URL || "").replace(/\/$/, "");
if (previewUrl) {
  const response = await fetch(`${previewUrl}/delivery`);
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /View details/);
  assert.match(html, /noindex/);
  assert.doesNotMatch(html, /farmerslink|sourceProductId|sourceUrl|provenance/i);
}

console.log(JSON.stringify({
  branch,
  mode: "preview-only",
  products: products.length,
  descriptions: products.filter((product) => product.description).length,
  images: products.filter((product) => product.images?.length).length,
  productionWaitlistUnchanged: true,
  previewChecked: Boolean(previewUrl),
}, null, 2));
