import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { SEO_PAGES } from "../app/lib/seoPages.ts";
import { LEGACY_SEO_SLUGS, SEO_ROUTE_REDIRECTS } from "../app/lib/seoRouteAliases.ts";

const footer = readFileSync(new URL("../app/components/Footer.tsx", import.meta.url), "utf8");

test("aliases redirect to existing Toronto canonicals", () => {
  const slugs = new Set(SEO_PAGES.map((page) => page.slug));
  for (const { source, destination } of SEO_ROUTE_REDIRECTS) {
    assert.equal(slugs.has(source.replace("/info/", "")), false);
    assert.equal(LEGACY_SEO_SLUGS.has(source.replace("/info/", "")), true);
    assert.equal(slugs.has(destination.replace("/info/", "")), true);
    assert.doesNotMatch(footer, new RegExp(`href=["']${source}["']`));
  }
});

test("footer uses Toronto canonical routes", () => {
  for (const href of ["/info/toronto-weed-dispensary", "/info/cheap-weed-toronto", "/info/native-cigarettes-toronto", "/info/weed-store-near-toronto"]) {
    assert.match(footer, new RegExp(`href=["']${href}["']`));
  }
});
