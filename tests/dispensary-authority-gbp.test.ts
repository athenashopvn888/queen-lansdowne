import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const resourceData = fs.readFileSync(new URL("../app/resources/resourceData.ts", import.meta.url), "utf8");
const sitemap = fs.readFileSync(new URL("../app/sitemap.ts", import.meta.url), "utf8");
const routePage = fs.readFileSync(new URL("../app/resources/[...slug]/page.tsx", import.meta.url), "utf8");

const route = "/resources/cannabis-dispensary-vs-weed-dispensary";
const localOwner = "/weed-dispensary-toronto";

test("QLC01 dispensary authority page uses the exact approved route and customer-facing copy", () => {
  for (const value of [
    `"route": "${route}"`,
    '"seoTitle": "Weed vs Cannabis Dispensary | Queen Lansdowne Cannabis Toronto"',
    '"metaDescription": "Weed dispensary, cannabis dispensary or dispensary near me? Learn how these local-search terms connect at Queen Lansdowne Cannabis in Toronto."',
    '"h1": "Weed Dispensary vs. Cannabis Dispensary: Same Goal, Different Words"',
    "Why “Dispensary Near Me” Matters",
    "Why the Local Page Still Leads",
    "Why do people search “weed dispensary near me”?",
    "Why do others use “cannabis dispensary near me”?",
    "Is “dispensary near me” the same exact keyword?",
    "What should matter after a local result is found?",
  ]) assert.ok(resourceData.includes(value), `missing approved content: ${value}`);
});

test("authority page remains a support page with one existing-page backlink and the local owner intact", () => {
  const backlink = `](${route})`;
  assert.equal(resourceData.split(backlink).length - 1, 1, "expected one contextual backlink from existing resource content");
  const articleStart = resourceData.indexOf(`"route": "${route}"`);
  const article = resourceData.slice(articleStart);
  assert.ok(article.includes(`](${localOwner})`), "authority article must link the verified local owner");
  assert.ok(article.includes('"parentRoute": "/resources/cannabis-101"'));
});

test("resource route is self-canonical and included through the existing sitemap source", () => {
  assert.ok(routePage.includes("resourceCanonical(page)"));
  assert.ok(routePage.includes("title: { absolute: page.seoTitle }"));
  assert.ok(sitemap.includes("RESOURCE_PATHS"));
  assert.ok(sitemap.includes("resourcePages"));
});

test("bounded change does not introduce NAP or hours copy", () => {
  const articleStart = resourceData.indexOf(`"route": "${route}"`);
  const article = resourceData.slice(articleStart);
  for (const protectedValue of ["1472 Queen", "+1 (437)", "Open 24"]) {
    assert.equal(article.includes(protectedValue), false, `authority article must not restate protected value: ${protectedValue}`);
  }
});

