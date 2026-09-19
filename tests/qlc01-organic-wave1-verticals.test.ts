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
  DELIVERY_LP_PATH,
  CIGARETTES_LP_PATH,
  VAPE_LP_PATH,
  faqPageJsonLd,
} from "../app/lib/gbp-location.ts";

const read = (path: string) => fs.readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const VERTICAL_PAGES = [
  {
    path: "app/cannabis-delivery-queen-west/page.tsx",
    href: DELIVERY_LP_PATH,
    h1: "Cannabis delivery from Queen West at 1472 Queen St W",
    title: "Cannabis Delivery Queen West | Queen Lansdowne Cannabis",
    faqs: DELIVERY_LP_FAQS,
  },
  {
    path: "app/native-cigarettes-queen-west/page.tsx",
    href: CIGARETTES_LP_PATH,
    h1: "Native cigarettes at Queen Lansdowne Cannabis on Queen West",
    title: "Native Cigarettes Queen West | Queen Lansdowne Cannabis",
    faqs: CIGARETTES_LP_FAQS,
  },
  {
    path: "app/nicotine-vape-queen-west/page.tsx",
    href: VAPE_LP_PATH,
    h1: "Nicotine vapes at the Parkdale edge of Queen West",
    title: "Nicotine Vape Queen West | Queen Lansdowne Cannabis",
    faqs: VAPE_LP_FAQS,
  },
] as const;

const MENU_SWIMLANE = [
  "app/lib/flowers.json",
  "app/lib/items.json",
  "scripts/prebuild-stock.js",
];

test("Big Three neighbourhood LPs have unique H1, title, and FAQ schema", () => {
  const headings = new Set<string>();
  const titles = new Set<string>();
  const questions = new Set<string>([
    ...HOME_FAQS.map((faq) => faq.q),
    ...VISIT_FAQS.map((faq) => faq.q),
    ...HOURS_LP_FAQS.map((faq) => faq.q),
  ]);

  for (const page of VERTICAL_PAGES) {
    const source = read(page.path);
    assert.match(source, new RegExp(page.h1.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.match(source, new RegExp(page.title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.match(source, /canonical: PAGE_URL/);
    assert.match(source, /19\+/);
    assert.equal(headings.has(page.h1), false, `duplicate H1: ${page.h1}`);
    assert.equal(titles.has(page.title), false, `duplicate title: ${page.title}`);
    headings.add(page.h1);
    titles.add(page.title);

    const json = faqPageJsonLd(page.faqs, `https://www.queenlansdownecannabis.ca${page.href}`);
    assert.equal(json["@type"], "FAQPage");
    assert.equal(json.mainEntity.length, page.faqs.length);
    for (const faq of page.faqs) {
      assert.equal(questions.has(faq.q), false, `duplicate FAQ: ${faq.q}`);
      questions.add(faq.q);
      assert.ok(source.includes("faqPageJsonLd"));
    }
  }
});

test("city delivery catalog meshes to the Queen West delivery owner", () => {
  const catalog = read("app/delivery/DeliveryCatalog.tsx");
  const cityPage = read("app/delivery/page.tsx");
  assert.match(catalog, /<h1 id="delivery-seo-title">Weed Delivery in Toronto<\/h1>/);
  assert.match(catalog, /href="\/cannabis-delivery-queen-west"/);
  assert.match(cityPage, /queenlansdownecannabis\.ca\/weed-delivery-toronto/);
  assert.match(read("app/cannabis-delivery-queen-west/page.tsx"), /href="\/weed-delivery-toronto"/);
  assert.match(read("app/cannabis-delivery-queen-west/page.tsx"), /\$60 product minimum/);
  assert.match(read("app/cannabis-delivery-queen-west/page.tsx"), /\$10 delivery fee/);
  assert.match(read("app/cannabis-delivery-queen-west/page.tsx"), /10:00 a\.m\. to 10:00 p\.m\./);
  assert.doesNotMatch(read("app/cannabis-delivery-queen-west/page.tsx"), /Etobicoke|Mississauga|Vaughan|Brampton|50 km/);
});

test("cigarette and nicotine vape LPs point at live categories, not invented SKUs", () => {
  const cigarettes = read("app/native-cigarettes-queen-west/page.tsx");
  const vapes = read("app/nicotine-vape-queen-west/page.tsx");
  const category = read("app/items/[category]/page.tsx");
  assert.match(cigarettes, /href="\/items\/cigarettes"/);
  assert.match(vapes, /href="\/items\/vapes"/);
  assert.match(vapes, /href="\/items\/vape-disposables"/);
  assert.match(vapes, /Nicotine is addictive/);
  assert.doesNotMatch(cigarettes, /Geek Promax|OVNS|NEXA PIX|SKU \d{3,}/);
  assert.doesNotMatch(vapes, /Geek Promax|OVNS|NEXA PIX|SKU \d{3,}/);
  assert.match(category, /href="\/native-cigarettes-queen-west"/);
  assert.match(category, /href="\/nicotine-vape-queen-west"/);
  assert.match(read("app/lib/products.ts"), /Native Cigarettes on Queen West/);
  assert.match(read("app/lib/products.ts"), /Nicotine Vapes on Queen West/);
});

test("24h LP stays the open-now owner and does not add a second city 24h page", () => {
  const hours = read("app/24-hour-queen-west-dispensary/page.tsx");
  const loc = read("app/lib/gbp-location.ts");
  assert.match(hours, /24-hour dispensary on Queen West at 1472 Queen St W — open now/);
  assert.match(hours, /24-Hour Dispensary Open Now on Queen West/);
  assert.match(hours, /24-hour dispensary near me/);
  assert.match(hours, /open now near Queen Street West, Parkdale, or\s+Lansdowne/);
  assert.match(hours, /first-class overnight/);
  assert.match(loc, /Is Queen Lansdowne Cannabis open now near Queen West and Parkdale\?/);
  assert.match(loc, /Is there a 24-hour dispensary near me on the Lansdowne corridor\?/);
  assert.doesNotMatch(read("app/sitemap.ts"), /24-hour-toronto-dispensary|24-hour-parkdale-dispensary/);
  assert.equal(fs.existsSync(new URL("../app/24-hour-toronto-dispensary/page.tsx", import.meta.url)), false);
});

test("Wave 1 verticals stay 19+ retail voice and skip the menu swimlane", () => {
  const publicCopy = [
    "app/cannabis-delivery-queen-west/page.tsx",
    "app/native-cigarettes-queen-west/page.tsx",
    "app/nicotine-vape-queen-west/page.tsx",
    "app/24-hour-queen-west-dispensary/page.tsx",
    "app/lib/gbp-location.ts",
    "app/lib/tierSeoContent.ts",
    "app/lib/products.ts",
  ].map(read).join("\n");
  assert.doesNotMatch(publicCopy, /sister stores|our other locations|Jane Finch|Planets 59|Athena|the fleet|chain of|Ottawa|Gatineau|ByWard|Dalhousie/i);
  assert.doesNotMatch(publicCopy, /medical marijuana|treats |cures |#1|best dispensary|best weed/i);
  for (const path of MENU_SWIMLANE) {
    assert.match(read(path), /./);
  }
  assert.doesNotMatch(read("scripts/prebuild-stock.js").slice(0, 40), /organic wave 1 verticals/i);
});
