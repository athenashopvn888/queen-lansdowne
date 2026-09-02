import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { TIER_SEO } from "../app/lib/tierSeoContent.ts";

const read = (path: string) => fs.readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("five tier pages use distinct weed copy and preserve the broad owner", () => {
  assert.deepEqual(Object.keys(TIER_SEO), ["EXOTIC", "PREMIUM", "AAA+", "AA", "BUDGET"]);
  assert.equal(new Set(Object.values(TIER_SEO).map((tier) => tier.intro)).size, 5);
  for (const tier of Object.values(TIER_SEO)) {
    assert.match(tier.seoTitle, /^.+ Weed & Cannabis Flower Toronto/);
    assert.match(tier.h1, /^.+ Weed & Cannabis Flower in Toronto/);
    assert.equal(tier.sections.length, 2);
    assert.equal(tier.faqs.length, 2);
    assert.ok(tier.relatedLinks.some((link) => link.href === "/weed-dispensary-toronto"));
    assert.doesNotMatch(`${tier.metaDescription} ${tier.intro}`, /\$\d|in stock|available now|best weed/i);
  }
});

test("nicotine and THC labels stay on their verified routes", () => {
  const navbar = read("app/components/Navbar.tsx");
  const homepage = read("app/page.tsx");
  assert.match(navbar, /href: "\/items\/vapes", label: "Nicotine Vape"/);
  assert.match(navbar, /href: "\/items\/vape-disposables", label: "THC Vape"/);
  assert.match(homepage, /name: "Nicotine Vapes", slug: "items\/vapes"/);
  assert.match(homepage, /name: "THC Vapes", slug: "items\/vape-disposables"/);
  assert.match(read("app/lib/products.ts"), /name: "Nicotine Vape", slug: "vapes"/);
  assert.match(read("app/lib/products.ts"), /name: "THC Vape", slug: "vape-disposables"/);
  const resources = read("app/resources/resourceData.ts");
  assert.doesNotMatch(resources, /THC vapes: `\/items\/vapes`/);
  assert.doesNotMatch(resources, /"title": "THC vapes",\s*"href": "\/items\/vapes"/);
});

test("delivery SEO uses the Weed canonical and links to the broad owner", () => {
  const page = read("app/delivery/page.tsx");
  const catalog = read("app/delivery/DeliveryCatalog.tsx");
  assert.match(page, /Weed Delivery Toronto/);
  assert.match(page, /queenlansdownecannabis\.ca\/weed-delivery-toronto/);
  assert.match(catalog, /<h1 id="delivery-seo-title">Weed Delivery in Toronto<\/h1>/);
  assert.match(catalog, /href="\/weed-dispensary-toronto"/);
});

test("approved module titles bypass the site suffix template", () => {
  assert.match(read("app/[tier]/page.tsx"), /\{ absolute: seo\.seoTitle \}/);
  assert.match(read("app/delivery/page.tsx"), /title: \{ absolute: "Weed Delivery Toronto \| Queen Lansdowne Cannabis" \}/);
  assert.match(read("app/items/[category]/page.tsx"), /\["vapes", "vape-disposables"\]\.includes\(catSlug\)/);
  assert.match(read("app/items/[category]/page.tsx"), /<h1>\{config\.name\}<\/h1>/);
});
