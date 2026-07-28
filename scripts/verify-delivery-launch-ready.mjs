import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";

const acceptedBranches = new Set(["feature/qlc-home-delivery-banner-20260728", "feature/qlc-24-hours-daily-20260729", "main"]);
const expectedKeys = ["category", "description", "effects", "images", "name", "offers", "priceOptions", "publicProductId", "strain", "thc", "tier"].sort();
const previewOrigin = "https://qlc-delivery-launch-ready.vercel.app";
const sodStatus = "https://milestone-1-demo.vercel.app/api/web-chat/status";

const branch = execFileSync("git", ["branch", "--show-current"], { encoding: "utf8" }).trim();
assert(acceptedBranches.has(branch), `Launch acceptance is not approved on branch ${branch}`);

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
const home = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
const navbar = await readFile(new URL("../app/components/Navbar.tsx", import.meta.url), "utf8");
const navbarCss = await readFile(new URL("../app/components/Navbar.module.css", import.meta.url), "utf8");
const footer = await readFile(new URL("../app/components/Footer.tsx", import.meta.url), "utf8");
const faq = await readFile(new URL("../app/faq/page.tsx", import.meta.url), "utf8");
assert(catalog.includes("api/catalog?store=QLC") && catalog.includes("View details"));
assert(catalog.includes("DELIVERY HOURS 10:00 a.m.–10:00 p.m."));
assert(!catalog.includes("product.sku") && !catalog.includes("parseTierSku"));
assert(css.includes("@scope (.qlc-delivery-scope)") && css.includes(".qlc-list-grid { grid-template-columns: repeat(2, minmax(0, 1fr));"));
assert(css.includes("@keyframes qlc-live-order-pulse") && css.includes("@media (prefers-reduced-motion:reduce)"));
assert(css.includes('background:#b42318;color:#fff') && css.includes('.sod-chat-launcher[aria-expanded="false"] { animation:qlc-live-order-pulse'));
assert(css.includes('.sod-chat-launcher[aria-expanded="true"] { background:#fff;color:#8f1d14'));
assert(css.includes(".sod-web-chat:not(.open) { position:fixed;") && css.includes("inset:auto max(10px,env(safe-area-inset-right))"));
assert(css.includes(".sod-chat-panel { position:fixed; inset:0; width:100%; max-width:100vw; height:100dvh; max-height:100dvh;"));
assert(css.includes("html:has(.qlc-delivery-scope),body:has(.qlc-delivery-scope) { max-width:100%;overflow-x:clip;"));
assert(css.includes("width: 100%;\n    max-width: 100vw;"));
const liveOrderKeyframes = css.slice(css.indexOf("@keyframes qlc-live-order-pulse"), css.indexOf("@scope (.qlc-delivery-scope)", css.indexOf("@keyframes qlc-live-order-pulse")));
assert(!liveOrderKeyframes.includes("transform:"));
assert(drawer.includes('role="dialog"') && drawer.includes('aria-modal="true"') && drawer.includes('event.key==="Escape"') && drawer.includes('event.key!=="Tab"'));
assert(drawer.includes("document.body.style.overflow") && drawer.includes('alt={product.name}'));
assert(chat.includes('"NEW_CUSTOMER"') && chat.includes('"RETURNING_CUSTOMER"') && chat.includes("preparePhoto") && chat.includes("id-review"));
assert(chat.includes('"Close chat" : "LIVE ORDER"'));
assert(catalog.includes('href="/" aria-label="Queen and Lansdowne Cannabis homepage"'));
assert(catalog.includes('href="#how-to-order"') && catalog.includes('id="how-to-order" tabIndex={-1}') && catalog.includes("LIVE ORDER connects you with the QLC dispatcher"));
assert(css.includes(".qlc-order-steps") && css.includes("scroll-margin-top: 140px") && css.includes(".qlc-order-steps:focus-visible"));
assert(page.includes("Cannabis Delivery Menu") && !page.includes("index: false") && !page.includes("Launch Preview"));
assert(!home.includes("NEW DELIVERY MENU — ORDER NOW"));
assert(navbar.includes('pathname === "/"') && navbar.includes("NEW DELIVERY MENU — ORDER NOW") && navbar.includes('href="/delivery"'));
assert(navbarCss.includes("@keyframes deliveryMenuPulse") && navbarCss.includes("background: #c5161d") && navbarCss.includes("@media (prefers-reduced-motion: reduce)"));
assert(home.includes('href="/delivery"') && home.includes('src="/qlc-home-delivery-banner.webp"') && home.includes("priority"));
assert(footer.includes('<Link href="/delivery">Delivery Menu</Link>') && !footer.includes("Coming Soon"));
assert(faq.includes("use LIVE ORDER to start your order") && faq.includes("Delivery ordering is available daily"));
assert(!faq.includes("sign up for email notifications") && !faq.includes("in-store shopping experience only"));

for (const productionUrl of [
  "https://queenlansdownecannabis.ca/delivery",
  "https://www.queenlansdownecannabis.ca/delivery",
]) {
  const response = await fetch(productionUrl, { redirect: "follow" });
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /View details/i);
  assert.match(html, /LIVE ORDER/);
  assert.doesNotMatch(html, /noindex/i);
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
  assert.doesNotMatch(html, /farmerslink|sourceProductId|sourceUrl|provenance/i);
}

console.log(JSON.stringify({
  branch,
  mode: "production-live",
  products: products.length,
  descriptions: products.filter((product) => product.description).length,
  images: products.filter((product) => product.images?.length).length,
  productionLiveChecked: true,
  previewChecked: Boolean(previewUrl),
}, null, 2));
