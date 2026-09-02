import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const source = fs.readFileSync(new URL("../app/resources/resourceData.ts", import.meta.url), "utf8");
const start = source.indexOf('"route": "/resources/flower-guides"');
const end = source.indexOf('"pageNumber": 4', start);
const guide = source.slice(start, end);

test("flower guide stays a supporting owner with approved Weed and tier links", () => {
  assert.ok(start >= 0 && end > start);
  assert.match(guide, /Weed & Flower Guides at Queen Lansdowne Cannabis/);
  assert.match(guide, /Weed & Flower Guides Toronto \| Queen Lansdowne Cannabis/);
  for (const route of ["/weed-dispensary-toronto", "/budget", "/aa", "/aaa", "/premium", "/exotic"]) {
    assert.match(guide, new RegExp(`"${route}"`));
  }
  assert.match(guide, /supporting|remains a guide/);
});

test("flower guide avoids volatile and protected business claims", () => {
  assert.doesNotMatch(guide, /\$\d|in stock|available now|delivery fee|open 24|phone number|medical|treats|cures/i);
});
