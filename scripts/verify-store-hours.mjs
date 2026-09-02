import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function jsonLdFrom(html) {
  return [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)]
    .map((match) => JSON.parse(match[1]));
}

function openingHoursFor(document, type) {
  const documents = Array.isArray(document) ? document : [document];
  return documents
    .flatMap((item) => item?.["@graph"] || item)
    .filter((item) => item?.["@type"] === type)
    .flatMap((item) => item.openingHoursSpecification || item.hoursAvailable || []);
}

const homeHtml = await readFile(path.join(root, ".next/server/app/index.html"), "utf8");
const deliveryHtml = await readFile(path.join(root, ".next/server/app/weed-delivery-toronto.html"), "utf8");
const faqHtml = await readFile(path.join(root, ".next/server/app/faq.html"), "utf8");
const contactHtml = await readFile(path.join(root, ".next/server/app/contact.html"), "utf8");

const homeSchemas = jsonLdFrom(homeHtml);
const storeHours = homeSchemas.flatMap((schema) => openingHoursFor(schema, "Store"));
assert(storeHours.length > 0, "Built homepage must contain Store opening hours");
assert(storeHours.every((hours) => hours.opens === "00:00" && hours.closes === "23:59"), "Built homepage Store schema must be open 00:00–23:59 daily");
assert(homeHtml.includes("Open 24 Hours Daily"), "Built homepage must show 24-hour store copy");
assert(faqHtml.includes("open 24 hours daily"), "Built FAQ must show 24-hour store copy");
assert(contactHtml.includes("Open 24 Hours"), "Built Contact page must show daily 24-hour rows");

const deliverySchemas = jsonLdFrom(deliveryHtml);
const deliveryHours = deliverySchemas.flatMap((schema) => openingHoursFor(schema, "Service"));
assert(deliveryHours.length > 0, "Built delivery page must contain Service hours");
assert(deliveryHours.every((hours) => hours.opens === "10:00" && hours.closes === "22:00"), "Delivery Service schema must remain 10:00–22:00");
assert(deliveryHtml.includes("DELIVERY HOURS 10:00 a.m.–10:00 p.m."), "Delivery page copy must remain 10 a.m.–10 p.m.");

const textExtensions = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs", ".json", ".html", ".md"]);
const stale = [];
async function scan(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await scan(fullPath);
      continue;
    }
    if (!textExtensions.has(path.extname(entry.name))) continue;
    const source = await readFile(fullPath, "utf8");
    if (/03:00|\b3\s*a\.?m\.?\b|10:00\s*AM\s*-\s*03:00\s*AM/i.test(source)) {
      stale.push(path.relative(root, fullPath));
    }
  }
}
await scan(path.join(root, "app"));
assert.deepEqual(stale, [], `Stale regular-store hours remain in: ${stale.join(", ")}`);

console.log(JSON.stringify({
  storeSchema: "00:00-23:59",
  deliverySchema: "10:00-22:00",
  staleStoreHourSources: stale.length,
  builtPages: ["index.html", "faq.html", "contact.html", "delivery.html"],
}, null, 2));
