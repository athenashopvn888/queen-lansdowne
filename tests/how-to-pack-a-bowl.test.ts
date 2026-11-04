import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import { RESOURCE_PAGES, RESOURCE_PATHS, SITE_URL } from "../app/resources/resourceData.ts";
import { HOW_TO_PACK_A_BOWL_H1, HOW_TO_PACK_A_BOWL_ROUTE } from "../app/resources/howToPackABowl.ts";

const CANONICAL = `${SITE_URL}${HOW_TO_PACK_A_BOWL_ROUTE}`;
const BODY_LINKS = [
  "/resources/flower-guides/drying-curing-freshness",
  "/resources/trichomes-frost-explained",
  "/resources/cannabis-101/first-dispensary-visit",
];

test("how to pack a bowl is an added resource article", () => {
  assert.equal(RESOURCE_PATHS.filter((route) => route === HOW_TO_PACK_A_BOWL_ROUTE).length, 1);
  const page = RESOURCE_PAGES.find((candidate) => candidate.route === HOW_TO_PACK_A_BOWL_ROUTE);
  assert.ok(page);
  assert.equal(page.kind, "article");
  assert.equal(page.h1, HOW_TO_PACK_A_BOWL_H1);
  assert.equal(page.seoTitle, HOW_TO_PACK_A_BOWL_H1);
  assert.equal(page.datePublished, "2026-11-04");
  assert.equal(page.dateModified, "2026-11-04");
  assert.equal(page.author.name, "Queen Lansdowne Cannabis");
  assert.equal(page.author.type, "Organization");
  assert.equal(page.commercialLinks.length, 0);
  assert.equal(page.cards.length, 0);
  assert.equal(page.faqs, undefined);
  assert.match(page.body, /^Last checked: October 30, 2026\n/);
  assert.deepEqual(
    [...page.body.matchAll(/\]\((\/[^)\s]+)\)/g)].map((match) => match[1]),
    BODY_LINKS,
  );
  assert.equal(/https?:\/\//.test(page.body), false);
  assert.equal(page.body.includes("3.5"), false);
  assert.equal(page.metaDescription.includes("3.5"), false);
  assert.equal(page.h1.includes("3.5"), false);
  assert.equal(/\b(?:price|prices|deal|deals|coupon|promo|hours|delivery|phone)\b/i.test(page.metaDescription), false);
  assert.equal(/Farmers Link/i.test(`${page.body}\n${page.metaDescription}\n${page.h1}`), false);
  assert.equal(/\b(?:in stock|we sell|our (?:bongs|pipes|bubblers|grinders|glass))\b/i.test(page.body), false);
  assert.ok(page.metaDescription.length > 0 && page.metaDescription.length <= 155, page.metaDescription);
  assert.equal(CANONICAL, "https://www.queenlansdownecannabis.ca/resources/how-to-pack-a-bowl");

  const home = RESOURCE_PAGES.find((candidate) => candidate.route === "/resources");
  assert.equal(home?.childRoutes.at(-1), "/resources/trichomes-frost-explained");
  assert.equal(home?.cards.at(-1)?.href, "/resources/trichomes-frost-explained");
  assert.equal(home?.childRoutes.includes(HOW_TO_PACK_A_BOWL_ROUTE), false);
});

test("sitemap source still publishes every resource path including the new article", () => {
  const sitemap = readFileSync(new URL("../app/sitemap.ts", import.meta.url), "utf8");
  assert.match(sitemap, /RESOURCE_PATHS/);
  assert.match(sitemap, /resourcePages/);
  assert.equal(RESOURCE_PATHS.includes(HOW_TO_PACK_A_BOWL_ROUTE), true);
});
