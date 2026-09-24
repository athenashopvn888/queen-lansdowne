import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { TIER_SEO } from "../app/lib/tierSeoContent.ts";
import {
  CIGARETTES_LP_FAQS,
  CIGARETTES_LP_PATH,
  DOCUMENT_TITLE_BRAND,
  HOURS_LP_PATH,
  VAPE_LP_FAQS,
  VAPE_LP_PATH,
  WEED_LP_FAQS,
  WEED_LP_PATH,
  renderedDocumentTitle,
  storeClaimsOpen24Hours,
} from "../app/lib/gbp-location.ts";

const read = (relativePath: string) =>
  fs.readFileSync(new URL(`../${relativePath}`, import.meta.url), "utf8");

const CORRIDOR = /Queen West|Queen Street West|Lansdowne|Parkdale/;
const WEIGHT_FAIL = /(?<![0-9.])(?:3\.5|7)\s?g\b/i;

const GPC_SHARED_SENTENCE_DENYLIST = [
  "Open the cigarette menu or ask at the Parkdale counter before you travel for one specific pack.",
  "The counter is inside Green Pentagon Cannabis at 1267 Queen St W, Toronto, ON M6K 2J2, on Queen Street West between Dufferin and Brock.",
  "If you need a light, full, or menthol style, open the cigarette category and confirm it before you leave for Parkdale.",
  "The 501 Queen streetcar serves this stretch; Dufferin and Brock are the useful stops, and the visit page covers parking along Queen West.",
  "These cards are a limited evidence set, not a complete selection.",
  "The cards are not a complete selection or a claim about current stock, price, or availability.",
  "This page is limited to live-checked nicotine products from the VAPE PENS category.",
  "Own this stretch — Queen West, Parkdale Village, Queen & Dufferin, Brock — rather than a generic Toronto dispensary query.",
  "Use the Dufferin stop from the east or Brock from western Parkdale.",
  "Evening street parking on Queen West and nearby laterals (Close, Cowan, Dunn) is the usual pattern.",
];

function brandCount(title: string) {
  return title.split(DOCUMENT_TITLE_BRAND).length - 1;
}

test("G1 corridor tokens are in every flower tier title and H1", () => {
  for (const [key, tier] of Object.entries(TIER_SEO)) {
    assert.match(tier.seoTitle, CORRIDOR, `${key} title missing corridor token`);
    assert.match(tier.h1, CORRIDOR, `${key} H1 missing corridor token`);
    assert.doesNotMatch(tier.seoTitle, /\bToronto\b/, `${key} title uses Toronto as an owner`);
    assert.doesNotMatch(tier.h1, /\bToronto\b/, `${key} H1 uses Toronto as an owner`);
    assert.equal(brandCount(tier.seoTitle), 1, tier.seoTitle);
  }

  const cig = read("app/native-cigarettes-queen-west/page.tsx");
  const vape = read("app/nicotine-vape-queen-west/page.tsx");
  assert.match(cig, /Native Cigarettes Queen West \| Queen Lansdowne Cannabis/);
  assert.match(cig, /Native cigarettes at Queen Lansdowne Cannabis on Queen West/);
  assert.match(vape, /Nicotine Vape Queen West \| Queen Lansdowne Cannabis/);
  assert.match(vape, /Nicotine vapes at the Parkdale edge of Queen West/);
  assert.doesNotMatch(cig, /<h1[^>]*>\s*Native [Cc]igarettes\s*</);
  assert.doesNotMatch(vape, /<h1[^>]*>\s*Nicotine Vape\s*</);
});

test("G2 every tier route builds CollectionPage and a stocked ItemList plus FAQ", () => {
  const tierPage = read("app/[tier]/page.tsx");
  assert.match(tierPage, /"@type": "CollectionPage"/);
  assert.match(tierPage, /"@type": "ItemList"/);
  assert.match(tierPage, /itemListElement: flowers\.map/);
  assert.match(tierPage, /faqPageJsonLd\(seo\.faqs, pageUrl\)/);
  for (const tier of Object.values(TIER_SEO)) {
    assert.ok(tier.faqs.length >= 3, tier.h1);
  }
});

test("G3 homepage hub cards follow the site's own 24-hour claim", () => {
  const home = read("app/HomePage.tsx");
  const hoursPage = read("app/24-hour-queen-west-dispensary/page.tsx");
  assert.equal(storeClaimsOpen24Hours(), true);
  assert.match(home, /className=\{styles\.hubCard\}/);
  for (const href of [
    WEED_LP_PATH,
    HOURS_LP_PATH,
    "/cannabis-delivery-queen-west",
    CIGARETTES_LP_PATH,
    VAPE_LP_PATH,
    "/visit",
  ]) {
    assert.match(home, new RegExp(`href: "${href}"`));
  }
  assert.match(hoursPage, /if \(!storeClaimsOpen24Hours\(\)\) notFound\(\)/);
  assert.match(home, /onlyWhen24h: true/);
  assert.match(home, /storeClaimsOpen24Hours\(\)/);
});

test("G4 Queen West cig, vape, and geo copy does not reuse Green Pentagon sentences", () => {
  const corpus = [
    read("app/native-cigarettes-queen-west/page.tsx"),
    read("app/nicotine-vape-queen-west/page.tsx"),
    read("app/weed-dispensary-queen-west/page.tsx"),
    ...CIGARETTES_LP_FAQS.map((faq) => `${faq.q} ${faq.a}`),
    ...VAPE_LP_FAQS.map((faq) => `${faq.q} ${faq.a}`),
    ...WEED_LP_FAQS.map((faq) => `${faq.q} ${faq.a}`),
  ].join("\n");
  for (const sentence of GPC_SHARED_SENTENCE_DENYLIST) {
    assert.ok(sentence.length >= 60, sentence);
    assert.equal(corpus.includes(sentence), false, `shared with Green Pentagon: ${sentence}`);
  }
  assert.doesNotMatch(corpus, /Green Pentagon|1267 Queen/);
});

test("G5 document title guard keeps the brand to one occurrence", () => {
  const layout = read("app/layout.tsx");
  assert.match(layout, /template: "%s \| Queen Lansdowne Cannabis"/);
  assert.match(layout, /resolveDocumentTitle\(\)/);

  const samples = [
    "FAQ — Queen Lansdowne Cannabis | Toronto Dispensary Questions",
    "Contact Us — Queen Lansdowne Cannabis | 1472 Queen St W, Toronto",
    "Cannabis Flower | Queen Lansdowne Cannabis Toronto",
    "Pink Joker | Premium Weed | Queen Lansdowne Cannabis Toronto",
    "Native Cigarettes on Queen West | Queen Lansdowne Cannabis",
    "Foo | Queen Lansdowne Cannabis | Queen Lansdowne Cannabis",
    "Queen Lansdowne Cannabis | Queen Lansdowne Cannabis",
  ];
  for (const sample of samples) {
    const rendered = renderedDocumentTitle(sample);
    assert.equal(brandCount(rendered), 1, rendered);
  }
  assert.equal(
    renderedDocumentTitle("Application Review"),
    "Application Review | Queen Lansdowne Cannabis",
  );

  for (const file of [
    "app/faq/page.tsx",
    "app/contact/page.tsx",
    "app/flower/page.tsx",
    "app/flower/[slug]/page.tsx",
    "app/item/[slug]/page.tsx",
    "app/items/[category]/page.tsx",
    "app/info/[seoPage]/page.tsx",
  ]) {
    assert.match(read(file), /resolveDocumentTitle\(/, file);
  }
});

test("G6 mobile age gate stays inside the viewport and the menu has a hamburger label", () => {
  const ageCss = read("app/components/AgeGate.module.css");
  const ageGate = read("app/components/AgeGate.tsx");
  const nav = read("app/components/Navbar.tsx");
  assert.match(ageCss, /max-width:\s*100vw/);
  assert.match(ageCss, /max-height:\s*calc\(100dvh - 32px\)/);
  assert.match(ageCss, /overscroll-behavior:\s*contain/);
  assert.match(ageCss, /\.btnRow > \*/);
  assert.match(ageGate, /document\.body\.style\.overflow = "hidden"/);
  assert.match(nav, /aria-label=\{menuOpen \? "Close menu" : "Open menu"\}/);
  assert.match(nav, /aria-controls="mobile-store-menu"/);
  assert.match(nav, /d="M4 6h16M4 12h16M4 18h16"/);
});

test("G7 flower copy does not use 3.5g or 7g", () => {
  const root = new URL("../app", import.meta.url);
  const files: string[] = [];
  const walk = (directory: string) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
        continue;
      }
      if (!/\.(tsx|ts)$/.test(entry.name)) continue;
      if (/flowers\.json|items\.json|delivery-menu\.json/.test(entry.name)) continue;
      files.push(fullPath);
    }
  };
  walk(root.pathname);
  assert.ok(files.length > 20);
  for (const file of files) {
    const source = fs.readFileSync(file, "utf8");
    assert.equal(WEIGHT_FAIL.test(source), false, file);
  }
});

test("G8 apex redirects to www and visit canonical plus NAP stay on the current hours", () => {
  const config = read("next.config.ts");
  const visit = read("app/visit/page.tsx");
  const footer = read("app/components/Footer.tsx");
  const home = read("app/page.tsx");
  assert.match(config, /type: "host", value: "queenlansdownecannabis\.ca"/);
  assert.match(config, /destination: "https:\/\/www\.queenlansdownecannabis\.ca\/:path\*"/);
  assert.match(home, /canonical: STORE_ORIGIN/);
  assert.match(visit, /canonical: `\$\{STORE_ORIGIN\}\/visit`/);
  assert.match(visit, /501 Queen/);
  assert.match(visit, /Parking on this stretch of Queen West/);
  assert.match(footer, /\+1 \(437\) 293-8580/);
  assert.match(footer, /1472 Queen St W/);
  assert.match(footer, /Open 24 Hours Daily/);
  assert.equal(storeClaimsOpen24Hours(), true);
});

test("G9 generic Toronto dispensary URL is noindex with a canonical away from itself", () => {
  const city = read("app/weed-dispensary-toronto/page.tsx");
  const robots = read("app/robots.ts");
  const sitemap = read("app/sitemap.ts");
  assert.match(city, /index:\s*false/);
  assert.match(city, /follow:\s*true/);
  assert.match(city, /canonical: `\$\{STORE_ORIGIN\}\$\{WEED_LP_PATH\}`/);
  assert.match(robots, /allow: "\/"/);
  assert.match(robots, /disallow: \["\/api\/", "\/staff-photo", "\/staff-photo\/"\]/);
  assert.match(robots, /sitemap: "https:\/\/www\.queenlansdownecannabis\.ca\/sitemap\.xml"/);
  assert.match(sitemap, /queenlansdownecannabis\.ca/);
});

test("public pages do not use sister-store, fleet, or Athena language", () => {
  const publicFiles = [
    "app/HomePage.tsx",
    "app/page.tsx",
    "app/visit/page.tsx",
    "app/components/Footer.tsx",
    "app/components/Navbar.tsx",
    "app/careers/budtender/page.tsx",
    "app/native-cigarettes-queen-west/page.tsx",
    "app/nicotine-vape-queen-west/page.tsx",
    "app/weed-dispensary-queen-west/page.tsx",
    "app/lib/gbp-location.ts",
    "app/lib/tierSeoContent.ts",
    "app/lib/seoPages.ts",
  ];
  const banned = /Athena|sister store|our other locations|fleet of stores|Green Pentagon|Kensington Green|Gas Junction|King Rock/i;
  for (const file of publicFiles) {
    assert.doesNotMatch(read(file), banned, file);
  }
});
