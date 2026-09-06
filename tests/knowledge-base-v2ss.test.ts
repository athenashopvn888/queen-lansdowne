import assert from "node:assert/strict";
import test from "node:test";
import { RESOURCE_PAGES, RESOURCE_PATHS } from "../app/resources/resourceData.ts";
import { TIER_SEO } from "../app/lib/tierSeoContent.ts";

const newRoutes = [
  "/resources/cannabis-101/first-dispensary-visit",
  "/resources/flower-guides/what-does-good-weed-mean",
  "/resources/flower-guides/top-shelf-mids-quads",
  "/resources/flower-guides/thc-vs-weed-quality",
  "/resources/flower-guides/bag-appeal",
  "/resources/flower-guides/trichomes-frosty-weed",
  "/resources/flower-guides/terpenes-gas-loud-aroma",
  "/resources/flower-guides/drying-curing-freshness",
  "/resources/flower-guides/smalls-vs-big-buds",
  "/resources/flower-guides/bc-grown-indoor-hydro-outdoor",
  "/resources/flower-guides/craft-vs-commercial-cannabis",
  "/resources/cannabis-101/indica-sativa-hybrid",
  "/resources/cannabis-101/strain-vs-cultivar",
  "/resources/cannabis-101/landrace-vs-hybrid",
  "/resources/cannabis-101/weed-slang-glossary",
];

test("PINKY knowledge-base routes are unique and complete", () => {
  assert.equal(RESOURCE_PATHS.length, 40);
  assert.equal(new Set(RESOURCE_PATHS).size, RESOURCE_PATHS.length);
  for (const route of newRoutes) assert.ok(RESOURCE_PATHS.includes(route), route);
});

test("new and expanded pages preserve publication-date governance", () => {
  for (const route of newRoutes) {
    const page = RESOURCE_PAGES.find((candidate) => candidate.route === route);
    assert.equal(page?.datePublished, "2026-09-06", route);
    assert.equal(page?.dateModified, "2026-09-06", route);
  }
  for (const route of [
    "/resources/cannabis-101",
    "/resources/weed-flower-guide",
    "/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic",
    "/resources/native-smokes/native-cigarettes-guide",
  ]) {
    const page = RESOURCE_PAGES.find((candidate) => candidate.route === route);
    assert.equal(page?.datePublished, "2026-07-11", route);
    assert.equal(page?.dateModified, "2026-09-06", route);
  }
});

test("public knowledge copy has no workflow or markdown separator leakage", () => {
  const changed = RESOURCE_PAGES.filter((page) => page.dateModified === "2026-09-06");
  const banned = /\b(?:SEO workflow|keyword strategy|source[- ]of[- ]truth|content system|implementation language|CODY|PINKY|Preserve datePublished|Set commercialLinks)\b/i;
  for (const page of changed) {
    assert.equal(page.body.split("\n").some((line) => line.trim() === "---"), false, page.route);
    assert.equal(banned.test(page.body), false, page.route);
    assert.equal(/Do not link directly to \/items\/cigarettes/i.test(page.body), false, page.route);
  }
});

test("native-cigarette authority page stays informational", () => {
  const page = RESOURCE_PAGES.find((candidate) => candidate.route === "/resources/native-smokes/native-cigarettes-guide");
  assert.deepEqual(page?.commercialLinks, []);
  assert.equal(page?.linkRoutes.includes("/items/cigarettes"), false);
});

test("protected Weed tier names and owners remain unchanged with additive education", () => {
  const expected = {
    EXOTIC: "Exotic Weed & Cannabis Flower in Toronto",
    PREMIUM: "Premium Weed & Cannabis Flower in Toronto",
    "AAA+": "AAA+ Weed & Cannabis Flower in Toronto",
    AA: "AA Weed & Cannabis Flower in Toronto",
    BUDGET: "Budget Weed & Cannabis Flower in Toronto",
  };
  for (const [key, h1] of Object.entries(expected)) {
    assert.equal(TIER_SEO[key]?.h1, h1, key);
    assert.equal(TIER_SEO[key]?.sections.length, 3, key);
  }
});
