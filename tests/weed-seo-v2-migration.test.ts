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

test("post-V2.1 cleanup keeps the broad owner direct and removes unsupported evergreen claims", () => {
  const broadOwner = read("app/weed-dispensary-toronto/page.tsx");
  const sitemap = read("app/sitemap.ts");
  const publicCopy = [
    "app/page.tsx",
    "app/faq/page.tsx",
    "app/contact/page.tsx",
    "app/lib/products.ts",
    "app/lib/seoPages.ts",
    "app/components/Footer.tsx",
    "app/delivery/DeliveryCatalog.tsx",
    "app/lib/tierSeoContent.ts",
    "app/resources/resourceData.ts",
  ].map(read).join("\n");

  assert.ok(broadOwner.includes("canonical: `https://${gbpLocation.domain}/${gbpLocation.slug}`"));
  assert.match(sitemap, /`\$\{BASE}\/(?:weed-dispensary-toronto)`/);
  assert.doesNotMatch(sitemap, /weed-dispensary-toronto\//);
  assert.doesNotMatch(publicCopy, /weed-dispensary-toronto\//);
  assert.doesNotMatch(publicCopy, /Nearby Expressway|major highways like the 401|just 5 minutes from the highways|widest selections|wide selection of native cigarette brands|competitive prices|over 200 strains|No credit cards|No minimum purchase required/);
  assert.match(read("app/components/Footer.tsx"), /href="\/items\/vapes">Nicotine Vape</);
});

test("Weed Delivery route reuses protected operational implementation", () => {
  assert.match(read("app/weed-delivery-toronto/page.tsx"), /from "\.\.\/delivery\/page"/);
  const delivery = read("app/delivery/page.tsx");
  assert.match(delivery, /Weed Delivery Toronto/);
  assert.match(delivery, /weed-delivery-toronto/);
  assert.match(read("app/delivery/DeliveryCatalog.tsx"), /Weed Delivery in Toronto/);
});
