import assert from "node:assert/strict";
import test from "node:test";
import { RESOURCE_PAGES, RESOURCE_PATHS } from "../app/resources/resourceData.ts";
import { readFileSync } from "node:fs";

const ROUTE = "/resources/trichomes-frost-explained";
const H1 = "What Does Frost Do to Trichomes? The Science Behind the Sparkle, and the Cold";

test("trichomes frost explained is an added resource article", () => {
  assert.equal(RESOURCE_PATHS.filter((route) => route === ROUTE).length, 1);
  const page = RESOURCE_PAGES.find((candidate) => candidate.route === ROUTE);
  assert.ok(page);
  assert.equal(page.kind, "article");
  assert.equal(page.h1, H1);
  assert.equal(page.seoTitle, H1);
  assert.equal(page.datePublished, "2026-10-25");
  assert.equal(page.dateModified, "2026-10-25");
  assert.equal(page.author.name, "Queen Lansdowne Cannabis");
  assert.equal(page.author.type, "Organization");
  assert.match(page.body, /^Last checked: October 21, 2026\n/);
  assert.match(page.body, /\]\(\/resources\/flower-guides\/trichomes-frosty-weed\)/);
  assert.match(page.body, /\]\(\/visit\)/);
  assert.equal(page.body.includes("/items/"), false);
  assert.equal(/https?:\/\//.test(page.body), false);
  assert.equal(/\b(?:price|deal|hours|delivery|3\.5)\b/i.test(page.metaDescription), false);
  assert.ok(page.metaDescription.length >= 140 && page.metaDescription.length <= 165, page.metaDescription);

  const frosty = RESOURCE_PAGES.find((candidate) => candidate.route === "/resources/flower-guides/trichomes-frosty-weed");
  assert.equal(frosty?.h1, "What Does “Frosty Weed” Mean?");
  assert.equal(frosty?.route, "/resources/flower-guides/trichomes-frosty-weed");

  const home = RESOURCE_PAGES.find((candidate) => candidate.route === "/resources");
  assert.equal(home?.h1, "Queen Lansdowne Cannabis Resource Centre");
  assert.equal(home?.seoTitle, "Cannabis Resource Centre | Queen Lansdowne Cannabis");
  assert.equal(home?.childRoutes.at(-1), ROUTE);
  assert.equal(home?.cards.at(-1)?.href, ROUTE);
  assert.equal(home?.cards.filter((card) => card.href === "/guides").length, 1);
});

test("sitemap still publishes every resource path", () => {
  const sitemap = readFileSync(new URL("../app/sitemap.ts", import.meta.url), "utf8");
  assert.match(sitemap, /RESOURCE_PATHS/);
  assert.match(sitemap, /resourcePages/);
  assert.equal(RESOURCE_PATHS.includes(ROUTE), true);
});
