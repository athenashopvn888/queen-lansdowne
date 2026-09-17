import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import {
  HOME_CORRIDOR_COPY,
  HOME_FAQS,
  VISIT_FAQS,
  THIN_CITY_INFO_SLUGS,
  cannabisStoreJsonLd,
  faqPageJsonLd,
} from "../app/lib/gbp-location.ts";

const read = (path: string) => fs.readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const PUBLIC_PAGES = [
  "app/page.tsx",
  "app/HomePage.tsx",
  "app/visit/page.tsx",
  "app/layout.tsx",
  "app/components/Footer.tsx",
  "app/components/Navbar.tsx",
  "app/components/GBPLandingPage.tsx",
  "app/weed-dispensary-toronto/page.tsx",
  "app/lib/gbp-location.ts",
];

test("CannabisStore JSON-LD is homepage-rooted with live-GBP-first NAP", () => {
  const schema = cannabisStoreJsonLd();
  const store = schema["@graph"][0];
  assert.equal(store["@type"], "CannabisStore");
  assert.equal(store.url, "https://www.queenlansdownecannabis.ca/");
  assert.equal(store["@id"], "https://www.queenlansdownecannabis.ca/#store");
  assert.equal(store.telephone, "+14372938580");
  assert.equal(store.address.streetAddress, "1472 Queen St W");
  assert.equal(store.address.postalCode, "M6K 1M4");
  assert.equal(store.openingHoursSpecification[0].opens, "00:00");
  assert.equal(store.openingHoursSpecification[0].closes, "23:59");
  assert.match(read("app/layout.tsx"), /cannabisStoreJsonLd/);
  assert.doesNotMatch(read("app/layout.tsx"), /"@type": "Store"/);
});

test("homepage FAQPage matches visible Queen West FAQs", () => {
  const homepage = read("app/HomePage.tsx");
  const page = read("app/page.tsx");
  assert.match(page, /faqPageJsonLd\(HOME_FAQS/);
  assert.match(homepage, /HOME_FAQS/);
  for (const faq of HOME_FAQS) {
    assert.ok(homepage.includes(faq.q) || read("app/lib/gbp-location.ts").includes(faq.q));
    assert.ok(read("app/lib/gbp-location.ts").includes(faq.a));
  }
  const json = faqPageJsonLd(HOME_FAQS, "https://www.queenlansdownecannabis.ca/");
  assert.equal(json["@type"], "FAQPage");
  assert.equal(json.mainEntity.length, HOME_FAQS.length);
  assert.equal(json.mainEntity[0].name, HOME_FAQS[0].q);
});

test("/visit is a unique Queen West arrival page, not a city clone", () => {
  const visit = `${read("app/visit/page.tsx")}\n${read("app/lib/gbp-location.ts")}`;
  assert.match(visit, /canonical: `\$\{STORE_ORIGIN\}\/visit`/);
  assert.match(visit, /1472 Queen St W/);
  assert.match(visit, /501 Queen/);
  assert.match(visit, /Queen Street West at Lansdowne/);
  assert.match(visit, /301 Queen Blue Night/);
  assert.match(visit, /Carpark 158/);
  assert.match(visit, /19\+/);
  assert.match(visit, /faqPageJsonLd\(VISIT_FAQS/);
  const homeQuestions = new Set(HOME_FAQS.map((faq) => faq.q));
  for (const faq of VISIT_FAQS) {
    assert.equal(homeQuestions.has(faq.q), false, `visit FAQ duplicates homepage: ${faq.q}`);
    assert.ok(visit.includes(faq.q) || read("app/lib/gbp-location.ts").includes(faq.q));
  }
});

test("homepage is the NAP hub and GBP Website target stays the root", () => {
  const home = read("app/HomePage.tsx");
  const page = read("app/page.tsx");
  assert.match(page, /canonical: STORE_ORIGIN/);
  assert.match(home, /Homepage NAP hub/);
  assert.match(home, /tel:\$\{gbpLocation\.phoneIntl\}/);
  assert.match(home, /href="\/visit"/);
  assert.match(read("app/components/Footer.tsx"), /\+1 \(437\) 293-8580/);
  assert.match(read("app/components/Footer.tsx"), /href="\/visit">Visit Queen West</);
  assert.doesNotMatch(read("app/layout.tsx"), /canonical: .*\/visit/);
});

test("thin city pages are demoted; redirected info slugs leave the sitemap", () => {
  const city = read("app/weed-dispensary-toronto/page.tsx");
  const sitemap = read("app/sitemap.ts");
  assert.match(city, /index:\s*false/);
  assert.match(city, /canonical:\s*STORE_ORIGIN/);
  assert.doesNotMatch(city, /DeliveryCoverage/);
  assert.match(sitemap, /\$\{BASE\}\/visit/);
  assert.match(sitemap, /priority: 0.2/);
  assert.match(sitemap, /THIN_CITY_INFO_SLUGS/);
  for (const slug of THIN_CITY_INFO_SLUGS) {
    assert.equal(slug.includes("toronto"), true);
  }
});

test("corridor copy is unique, 220–350 words, and standalone", () => {
  const words = HOME_CORRIDOR_COPY.join(" ").trim().split(/\s+/).length;
  assert.ok(words >= 220 && words <= 350, `expected 220–350 words, got ${words}`);
  const publicCopy = PUBLIC_PAGES.map(read).join("\n");
  assert.doesNotMatch(publicCopy, /sister stores|our other locations|Jane Finch|Planets 59|Athena|the fleet|chain of/i);
  assert.doesNotMatch(publicCopy, /medical marijuana|treats |cures /i);
});
