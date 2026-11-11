import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import { RESOURCE_PAGES, RESOURCE_PATHS, SITE_URL } from "../app/resources/resourceData.ts";
import {
  DRY_HERB_VAPORIZER_VS_VAPE_PEN_H1,
  DRY_HERB_VAPORIZER_VS_VAPE_PEN_ROUTE,
} from "../app/resources/dryHerbVaporizerVsVapePen.ts";

const CANONICAL = `${SITE_URL}${DRY_HERB_VAPORIZER_VS_VAPE_PEN_ROUTE}`;
const BODY_LINKS = ["/guides", "/weed-dispensary-queen-west", "/visit"];

test("dry herb vaporizer vs vape pen is an added resource article", () => {
  assert.equal(RESOURCE_PATHS.filter((route) => route === DRY_HERB_VAPORIZER_VS_VAPE_PEN_ROUTE).length, 1);
  const page = RESOURCE_PAGES.find((candidate) => candidate.route === DRY_HERB_VAPORIZER_VS_VAPE_PEN_ROUTE);
  assert.ok(page);
  assert.equal(page.kind, "article");
  assert.equal(page.h1, DRY_HERB_VAPORIZER_VS_VAPE_PEN_H1);
  assert.equal(page.seoTitle, DRY_HERB_VAPORIZER_VS_VAPE_PEN_H1);
  assert.equal(page.h1, "Dry Herb Vaporizer vs Vape Pen: Same Word, Two Very Different Devices");
  assert.equal(page.datePublished, "2026-11-11");
  assert.equal(page.dateModified, "2026-11-11");
  assert.equal(page.author.name, "Queen Lansdowne Cannabis");
  assert.equal(page.author.type, "Organization");
  assert.equal(page.commercialLinks.length, 0);
  assert.equal(page.cards.length, 0);
  assert.equal(page.faqs, undefined);
  assert.match(page.body, /^Last checked: October 25, 2026\n/);
  assert.deepEqual(
    [...page.body.matchAll(/\]\((\/[^)\s]+)\)/g)].map((match) => match[1]),
    BODY_LINKS,
  );
  assert.equal(/https?:\/\//.test(page.body), false);
  assert.equal(`${page.body}\n${page.metaDescription}\n${page.h1}\n${page.seoTitle}`.includes("3.5"), false);
  assert.equal(/\b(?:price|prices|deal|deals|coupon|promo|hours|delivery|phone)\b/i.test(page.metaDescription), false);
  assert.equal(/Farmers Link/i.test(`${page.body}\n${page.metaDescription}\n${page.h1}`), false);
  assert.ok(page.metaDescription.length > 0 && page.metaDescription.length <= 155, page.metaDescription);
  assert.equal(page.metaDescription.endsWith("."), true);
  assert.equal(CANONICAL, "https://www.queenlansdownecannabis.ca/resources/dry-herb-vaporizer-vs-vape-pen");

  const home = RESOURCE_PAGES.find((candidate) => candidate.route === "/resources");
  assert.equal(home?.childRoutes.at(-1), "/resources/trichomes-frost-explained");
  assert.equal(home?.cards.at(-1)?.href, "/resources/trichomes-frost-explained");
  assert.equal(home?.childRoutes.includes(DRY_HERB_VAPORIZER_VS_VAPE_PEN_ROUTE), false);
});

test("sitemap source publishes the new article and the route is not redirected", () => {
  const sitemap = readFileSync(new URL("../app/sitemap.ts", import.meta.url), "utf8");
  assert.match(sitemap, /RESOURCE_PATHS/);
  assert.match(sitemap, /resourcePages/);
  assert.equal(RESOURCE_PATHS.includes(DRY_HERB_VAPORIZER_VS_VAPE_PEN_ROUTE), true);

  const redirects = readFileSync(new URL("../next.config.ts", import.meta.url), "utf8");
  assert.match(redirects, /source: "\/resources\/flower-guides"/);
  assert.equal(redirects.includes("dry-herb-vaporizer-vs-vape-pen"), false);

  const view = readFileSync(new URL("../app/resources/ResourceView.tsx", import.meta.url), "utf8");
  const routePage = readFileSync(new URL("../app/resources/[...slug]/page.tsx", import.meta.url), "utf8");
  assert.match(view, /DRY_HERB_VAPORIZER_VS_VAPE_PEN_ROUTE/);
  assert.match(routePage, /DRY_HERB_VAPORIZER_VS_VAPE_PEN_ROUTE/);
  assert.match(routePage, /index: true/);
  assert.match(routePage, /follow: true/);
});
