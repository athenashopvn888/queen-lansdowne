import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const read = (path: string) => fs.readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const routeMap = {
  "/exotic": "/exotic-weed",
  "/premium": "/premium-weed",
  "/aaa": "/aaa-weed",
  "/aa": "/aa-weed",
  "/budget": "/budget-weed",
  "/delivery": "/weed-delivery-toronto",
  "/resources/flower-guides": "/resources/weed-flower-guide",
};

test("Version 2.1 route map is direct, permanent, and complete", () => {
  const config = read("next.config.ts");
  for (const [legacy, canonical] of Object.entries(routeMap)) {
    assert.match(config, new RegExp(`source: "${legacy.replaceAll("/", "\\/")}", destination: "${canonical.replaceAll("/", "\\/")}", permanent: true`));
  }
});

test("tier canonicals stay tier-first and customer-facing names use Tier Name plus Weed", () => {
  const products = read("app/lib/products.ts");
  const seo = read("app/lib/tierSeoContent.ts");
  for (const slug of ["exotic-weed", "premium-weed", "aaa-weed", "aa-weed", "budget-weed"]) {
    assert.match(products, new RegExp(`slug: "${slug}"`));
  }
  for (const name of ["Exotic Weed", "Premium Weed", "AAA+ Weed", "AA Weed", "Budget Weed"]) {
    assert.match(products, new RegExp(`name: "${name.replace("+", "\\+")}"`));
  }
  for (const tier of ["Exotic", "Premium", "AAA\\+", "AA", "Budget"]) {
    assert.match(seo, new RegExp(`seoTitle: "${tier} Weed & Cannabis Flower Toronto`));
    assert.match(seo, new RegExp(`h1: "${tier} Weed & Cannabis Flower in Toronto`));
  }
  const publicTierCopy = ["app/lib/products.ts", "app/lib/tierSeoContent.ts", "app/components/Navbar.tsx", "app/components/Footer.tsx", "app/page.tsx", "app/flower/page.tsx", "app/resources/resourceData.ts", "app/delivery/DeliveryCatalog.tsx"].map(read).join("\n");
  assert.doesNotMatch(publicTierCopy, /Weed (?:Exotic|Premium|AAA\+|AAA|AA|Budget)|WEED (?:EXOTIC|PREMIUM|AAA\+|AAA|AA|BUDGET)/);
  for (const legacy of ["/exotic", "/premium", "/aaa", "/aa", "/budget"]) {
    assert.doesNotMatch(seo, new RegExp(`href: "${legacy}"`));
  }
});

test("sitemap and public navigation use only new campaign canonicals", () => {
  const publicSources = ["app/sitemap.ts", "app/components/Navbar.tsx", "app/components/Footer.tsx", "app/page.tsx", "app/flower/page.tsx", "app/resources/resourceData.ts"].map(read).join("\n");
  for (const legacy of Object.keys(routeMap)) {
    const exactHref = new RegExp(`href=["']${legacy.replaceAll("/", "\\/")}["']`);
    assert.doesNotMatch(publicSources, exactHref);
  }
  for (const canonical of Object.values(routeMap)) assert.match(publicSources, new RegExp(canonical.replaceAll("/", "\\/")));
});

test("Weed Delivery route reuses protected operational implementation", () => {
  assert.match(read("app/weed-delivery-toronto/page.tsx"), /from "\.\.\/delivery\/page"/);
  const delivery = read("app/delivery/page.tsx");
  assert.match(delivery, /Weed Delivery Toronto/);
  assert.match(delivery, /weed-delivery-toronto/);
  assert.match(read("app/delivery/DeliveryCatalog.tsx"), /Weed Delivery in Toronto/);
});
