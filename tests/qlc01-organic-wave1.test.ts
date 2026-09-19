import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { TIER_SEO } from "../app/lib/tierSeoContent.ts";
import {
  HOME_FAQS,
  VISIT_FAQS,
  HOURS_LP_FAQS,
  HOURS_LP_PATH,
  DELIVERY_LP_PATH,
  CIGARETTES_LP_PATH,
  VAPE_LP_PATH,
  MESH_HUB_LINKS,
  TIER_MESH_LINKS,
  VERTICAL_MESH_LINKS,
  faqPageJsonLd,
} from "../app/lib/gbp-location.ts";

const read = (path: string) => fs.readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const PUBLIC_COPY_FILES = [
  "app/page.tsx",
  "app/HomePage.tsx",
  "app/visit/page.tsx",
  "app/24-hour-queen-west-dispensary/page.tsx",
  "app/cannabis-delivery-queen-west/page.tsx",
  "app/native-cigarettes-queen-west/page.tsx",
  "app/nicotine-vape-queen-west/page.tsx",
  "app/lib/gbp-location.ts",
  "app/lib/tierSeoContent.ts",
  "app/components/Footer.tsx",
  "app/components/Navbar.tsx",
  "app/components/GBPLandingPage.tsx",
  "app/components/StoreMeshNav.tsx",
];

test("dedicated 24h LP is Queen West-true and FAQ schema matches visible copy", () => {
  const page = read("app/24-hour-queen-west-dispensary/page.tsx");
  const loc = read("app/lib/gbp-location.ts");
  assert.equal(HOURS_LP_PATH, "/24-hour-queen-west-dispensary");
  assert.match(page, /canonical: PAGE_URL/);
  assert.match(page, /24-hour dispensary on Queen West at 1472 Queen St W/);
  assert.match(page, /faqPageJsonLd\(HOURS_LP_FAQS/);
  assert.match(page, /Homepage remains the name, address, phone, hours, and map hub/i);
  assert.match(page, /301 Queen Blue Night/);
  assert.match(page, /Delivery ordering from this store is a[\s\S]*10:00 a\.m\. to 10:00 p\.m\./);
  assert.doesNotMatch(page, /Ottawa|Gatineau|ByWard|Dalhousie/i);
  for (const faq of HOURS_LP_FAQS) {
    assert.ok(loc.includes(faq.q));
    assert.ok(loc.includes(faq.a));
    assert.match(page, /HOURS_LP_FAQS\.map/);
  }
  const json = faqPageJsonLd(HOURS_LP_FAQS, `https://www.queenlansdownecannabis.ca${HOURS_LP_PATH}`);
  assert.equal(json["@type"], "FAQPage");
  assert.equal(json.mainEntity.length, HOURS_LP_FAQS.length);
  assert.equal(json.mainEntity[0].name, HOURS_LP_FAQS[0].q);
});

test("24h FAQs do not clone homepage or visit questions", () => {
  const home = new Set(HOME_FAQS.map((faq) => faq.q));
  const visit = new Set(VISIT_FAQS.map((faq) => faq.q));
  for (const faq of HOURS_LP_FAQS) {
    assert.equal(home.has(faq.q), false, `24h FAQ duplicates homepage: ${faq.q}`);
    assert.equal(visit.has(faq.q), false, `24h FAQ duplicates visit: ${faq.q}`);
  }
});

test("internal mesh links homepage, visit, 24h LP, and five tiers", () => {
  const home = read("app/HomePage.tsx");
  const visit = read("app/visit/page.tsx");
  const hours = read("app/24-hour-queen-west-dispensary/page.tsx");
  const footer = read("app/components/Footer.tsx");
  const sitemap = read("app/sitemap.ts");
  const nav = read("app/components/Navbar.tsx");

  assert.match(home, /href="\/visit"/);
  assert.match(home, /href="\/24-hour-queen-west-dispensary"/);
  assert.match(home, /href="\/cannabis-delivery-queen-west"/);
  assert.match(home, /href="\/native-cigarettes-queen-west"/);
  assert.match(home, /href="\/nicotine-vape-queen-west"/);
  assert.match(home, /Homepage NAP hub/);
  assert.match(visit, /href="\/24-hour-queen-west-dispensary"/);
  assert.match(visit, /href="\/cannabis-delivery-queen-west"/);
  assert.match(visit, /StoreMeshNav currentPath="\/visit"/);
  assert.match(hours, /StoreMeshNav currentPath=\{HOURS_LP_PATH\}/);
  assert.match(hours, /href="\/"/);
  assert.match(hours, /href="\/visit"/);
  assert.match(hours, /href="\/cannabis-delivery-queen-west"/);
  assert.match(footer, /href="\/24-hour-queen-west-dispensary"/);
  assert.match(nav, /href: "\/24-hour-queen-west-dispensary"/);
  assert.match(sitemap, /\$\{BASE\}\/24-hour-queen-west-dispensary/);
  assert.match(sitemap, /\$\{BASE\}\/cannabis-delivery-queen-west/);
  assert.match(sitemap, /\$\{BASE\}\/native-cigarettes-queen-west/);
  assert.match(sitemap, /\$\{BASE\}\/nicotine-vape-queen-west/);

  assert.deepEqual(
    MESH_HUB_LINKS.map((link) => link.href),
    ["/", "/visit", HOURS_LP_PATH],
  );
  assert.deepEqual(
    VERTICAL_MESH_LINKS.map((link) => link.href),
    [DELIVERY_LP_PATH, CIGARETTES_LP_PATH, VAPE_LP_PATH],
  );
  assert.deepEqual(
    TIER_MESH_LINKS.map((link) => link.href),
    ["/exotic-weed", "/premium-weed", "/aaa-weed", "/aa-weed", "/budget-weed"],
  );

  for (const tier of Object.values(TIER_SEO)) {
    for (const href of ["/", "/visit", HOURS_LP_PATH, DELIVERY_LP_PATH, CIGARETTES_LP_PATH, VAPE_LP_PATH]) {
      assert.ok(tier.relatedLinks.some((link) => link.href === href), `missing ${href}`);
    }
    const siblingCount = TIER_MESH_LINKS.filter((link) =>
      tier.relatedLinks.some((related) => related.href === link.href),
    ).length;
    assert.equal(siblingCount, 4);
  }
});

test("cigarettes category and /cigarettes redirect stay; no pouches or grabba LPs", () => {
  const footer = read("app/components/Footer.tsx");
  const nav = read("app/components/Navbar.tsx");
  const redirects = read("next.config.ts");
  const seoPages = read("app/lib/seoPages.ts");
  assert.match(nav, /href: "\/items\/cigarettes"/);
  assert.match(footer, /href="\/items\/cigarettes"/);
  assert.match(footer, /href="\/native-cigarettes-queen-west"/);
  assert.match(redirects, /source: "\/cigarettes", destination: "\/items\/cigarettes"/);
  assert.doesNotMatch(seoPages, /nicotine-pouches-queen|grabba-queen/i);
  assert.doesNotMatch(read("app/sitemap.ts"), /24-hour-toronto-dispensary/);
});

test("Wave 1 public copy stays standalone Queen West retail voice", () => {
  const publicCopy = PUBLIC_COPY_FILES.map(read).join("\n");
  assert.doesNotMatch(publicCopy, /sister stores|our other locations|Jane Finch|Planets 59|Athena|the fleet|chain of|Ottawa|Gatineau|ByWard|Dalhousie/i);
  assert.doesNotMatch(publicCopy, /medical marijuana|treats |cures /i);
});
