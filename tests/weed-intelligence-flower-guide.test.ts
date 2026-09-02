import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const source = fs.readFileSync(new URL("../app/resources/resourceData.ts", import.meta.url), "utf8");
const start = source.indexOf('"route": "/resources/weed-flower-guide"');
const end = source.indexOf('"pageNumber": 4', start);
const guide = source.slice(start, end);

test("flower guide stays a supporting owner with approved Weed and tier links", () => {
  assert.ok(start >= 0 && end > start);
  assert.match(guide, /Weed & Cannabis Flower Guide/);
  assert.match(guide, /Weed & Cannabis Flower Guide Toronto \| Queen Lansdowne Cannabis/);
  for (const route of ["/weed-dispensary-toronto", "/budget-weed", "/aa-weed", "/aaa-weed", "/premium-weed", "/exotic-weed"]) {
    assert.match(guide, new RegExp(`"${route}"`));
  }
  assert.match(guide, /five Weed flower collections/);
});

test("flower guide avoids volatile and protected business claims", () => {
  assert.doesNotMatch(guide, /\$\d|in stock|available now|delivery fee|open 24|phone number|medical|treats|cures/i);
});
