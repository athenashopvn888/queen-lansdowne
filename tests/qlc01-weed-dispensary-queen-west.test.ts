import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import {
  HOME_FAQS,
  VISIT_FAQS,
  HOURS_LP_FAQS,
  DELIVERY_LP_FAQS,
  CIGARETTES_LP_FAQS,
  VAPE_LP_FAQS,
  WEED_LP_FAQS,
  WEED_LP_PATH,
  VERTICAL_MESH_LINKS,
  faqPageJsonLd,
} from "../app/lib/gbp-location.ts";

const read = (path: string) => fs.readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const H1 = "Weed dispensary on Queen West at the Parkdale–Lansdowne edge";
const TITLE = "Weed Dispensary Queen West | Queen Lansdowne Cannabis";

test("Queen West weed dispensary LP is the corridor owner with unique H1, title, and FAQ schema", () => {
  const page = read("app/weed-dispensary-queen-west/page.tsx");
  const loc = read("app/lib/gbp-location.ts");
  assert.equal(WEED_LP_PATH, "/weed-dispensary-queen-west");
  assert.match(page, /canonical: PAGE_URL/);
  assert.match(page, new RegExp(H1.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  assert.match(page, new RegExp(TITLE.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  assert.match(page, /faqPageJsonLd\(WEED_LP_FAQS/);
  assert.match(page, /19\+/);
  assert.match(page, /Parkdale/);
  assert.match(page, /Lansdowne/);
  assert.doesNotMatch(page, /medical marijuana|treats |cures |the fleet|sister stores/i);
  assert.doesNotMatch(page, /\$\d|in stock|available now|best weed|best dispensary/i);

  const siblingQuestions = new Set([
    ...HOME_FAQS,
    ...VISIT_FAQS,
    ...HOURS_LP_FAQS,
    ...DELIVERY_LP_FAQS,
    ...CIGARETTES_LP_FAQS,
    ...VAPE_LP_FAQS,
  ].map((faq) => faq.q));

  for (const faq of WEED_LP_FAQS) {
    assert.equal(siblingQuestions.has(faq.q), false, `weed LP FAQ duplicates sibling: ${faq.q}`);
    assert.ok(loc.includes(faq.q));
    assert.ok(loc.includes(faq.a));
    assert.match(page, /WEED_LP_FAQS\.map/);
  }

  const json = faqPageJsonLd(WEED_LP_FAQS, `https://www.queenlansdownecannabis.ca${WEED_LP_PATH}`);
  assert.equal(json["@type"], "FAQPage");
  assert.equal(json.mainEntity.length, WEED_LP_FAQS.length);
  assert.equal(json.mainEntity[0].name, WEED_LP_FAQS[0].q);
});

test("city weed page stays and canonicals to the Queen West owner", () => {
  const city = read("app/weed-dispensary-toronto/page.tsx");
  const gbp = read("app/components/GBPLandingPage.tsx");
  const sitemap = read("app/sitemap.ts");
  assert.match(city, /canonical:\s*`\$\{STORE_ORIGIN\}\$\{WEED_LP_PATH\}`/);
  assert.match(city, /index:\s*false/);
  assert.match(gbp, /href="\/weed-dispensary-queen-west"/);
  assert.match(sitemap, /\$\{BASE\}\/weed-dispensary-queen-west/);
  assert.match(sitemap, /\$\{BASE\}\/weed-dispensary-toronto/);
  assert.doesNotMatch(sitemap, /weed-dispensary-queen-west-toronto|weed-dispensary-parkdale/);
  assert.equal(fs.existsSync(new URL("../app/weed-dispensary-parkdale/page.tsx", import.meta.url)), false);
  assert.equal(fs.existsSync(new URL("../app/weed-dispensary-toronto-west/page.tsx", import.meta.url)), false);
});

test("weed LP meshes homepage, visit, 24h, Big Three, and flower tiers", () => {
  const home = read("app/HomePage.tsx");
  const visit = read("app/visit/page.tsx");
  const hours = read("app/24-hour-queen-west-dispensary/page.tsx");
  const delivery = read("app/cannabis-delivery-queen-west/page.tsx");
  const cigarettes = read("app/native-cigarettes-queen-west/page.tsx");
  const vapes = read("app/nicotine-vape-queen-west/page.tsx");
  const page = read("app/weed-dispensary-queen-west/page.tsx");
  const footer = read("app/components/Footer.tsx");
  const tiers = read("app/lib/tierSeoContent.ts");

  assert.match(home, /href="\/weed-dispensary-queen-west"/);
  assert.match(visit, /href="\/weed-dispensary-queen-west"/);
  assert.match(hours, /href="\/weed-dispensary-queen-west"/);
  assert.match(delivery, /href="\/weed-dispensary-queen-west"/);
  assert.match(cigarettes, /href="\/weed-dispensary-queen-west"/);
  assert.match(vapes, /href="\/weed-dispensary-queen-west"/);
  assert.match(footer, /href="\/weed-dispensary-queen-west"/);
  assert.match(tiers, /href: "\/weed-dispensary-queen-west"/);
  assert.match(page, /StoreMeshNav currentPath=\{WEED_LP_PATH\}/);
  assert.match(page, /href="\/visit"/);
  assert.match(page, /href="\/24-hour-queen-west-dispensary"/);
  assert.match(page, /href="\/cannabis-delivery-queen-west"/);
  assert.match(page, /href="\/exotic-weed"/);
  assert.equal(
    VERTICAL_MESH_LINKS.some((link) => link.href === WEED_LP_PATH),
    true,
  );
});

test("weed LP stays off the menu swimlane and Apps Script path", () => {
  const page = read("app/weed-dispensary-queen-west/page.tsx");
  const loc = read("app/lib/gbp-location.ts");
  assert.doesNotMatch(page, /flowers\.json|items\.json|adcInventory|prebuild-stock|Apps Script/i);
  assert.doesNotMatch(loc, /adcInventory|prebuild-stock/i);
  assert.match(read("app/lib/flowers.json"), /./);
  assert.match(read("app/lib/items.json"), /./);
});
