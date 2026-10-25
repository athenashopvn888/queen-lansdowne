import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { FULL_NAME_NAP } from "../app/lib/fullNameNap.ts";
import { GBP_MAPS_URL, gbpLocation } from "../app/lib/gbp-location.ts";
import {
  hideMobileBottomBar,
  MOBILE_BAR_DELIVERY_HREF,
  MOBILE_BAR_HOURS_HREF,
  MOBILE_BAR_MENU_HREF,
  storeDirectionsHref,
} from "../app/lib/mobileBottomBar.ts";
import { STORE_OPENING_HOURS, storeHoursStatus, type OpeningHoursSpec } from "../app/lib/storeHoursStatus.ts";

const layout = fs.readFileSync("app/layout.tsx", "utf8");
const globals = fs.readFileSync("app/globals.css", "utf8");
const bar = fs.readFileSync("app/components/MobileBottomBar.tsx", "utf8");
const css = fs.readFileSync("app/components/MobileBottomBar.module.css", "utf8");
const nextConfig = fs.readFileSync("next.config.ts", "utf8");
const footer = fs.readFileSync("app/components/Footer.tsx", "utf8");
const hoursPage = fs.readFileSync("app/hours/page.tsx", "utf8");
const products = fs.readFileSync("app/lib/products.ts", "utf8");
const pkg = fs.readFileSync("package.json", "utf8");

const WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const;

function daily(opens: string, closes: string, days: readonly string[] = WEEK): OpeningHoursSpec[] {
  return [{ dayOfWeek: days, opens, closes }];
}

test("this store's hours read as open 24 hours in Toronto", () => {
  assert.equal(STORE_OPENING_HOURS[0]?.opens, "00:00");
  assert.equal(STORE_OPENING_HOURS[0]?.closes, "23:59");
  assert.equal(STORE_OPENING_HOURS[0]?.dayOfWeek.length, 7);
  for (const iso of ["2026-01-15T15:00:00.000Z", "2026-07-15T04:30:00.000Z", "2026-10-26T03:59:00.000Z"]) {
    const status = storeHoursStatus(new Date(iso));
    assert.equal(status.kind, "always");
    assert.equal(status.label, "Open 24 hours");
  }
});

test("limited hours say open until the close, or the next open, in Toronto", () => {
  const hours = daily("09:00", "21:00");
  const sundayEvening = storeHoursStatus(new Date("2026-10-25T22:00:00.000Z"), hours);
  assert.deepEqual(sundayEvening, { kind: "open", label: "Open now · until 9 p.m." });

  const beforeOpen = storeHoursStatus(new Date("2026-10-26T12:00:00.000Z"), hours);
  assert.deepEqual(beforeOpen, { kind: "closed", label: "Closed · opens 9 a.m." });

  const afterClose = storeHoursStatus(new Date("2026-10-26T02:30:00.000Z"), hours);
  assert.equal(afterClose.kind, "closed");
  assert.equal(afterClose.label, "Closed · opens Mon 9 a.m.");

  const winterAfternoon = storeHoursStatus(new Date("2026-01-15T20:00:00.000Z"), hours);
  assert.deepEqual(winterAfternoon, { kind: "open", label: "Open now · until 9 p.m." });
});

test("overnight windows stay open past midnight and name the next open day", () => {
  const hours = daily("10:00", "02:00", ["Friday"]);
  const fridayNight = storeHoursStatus(new Date("2026-10-24T03:00:00.000Z"), hours);
  assert.deepEqual(fridayNight, { kind: "open", label: "Open now · until 2 a.m." });

  const saturdayEarly = storeHoursStatus(new Date("2026-10-24T05:00:00.000Z"), hours);
  assert.deepEqual(saturdayEarly, { kind: "open", label: "Open now · until 2 a.m." });

  const saturdayLater = storeHoursStatus(new Date("2026-10-24T07:00:00.000Z"), hours);
  assert.deepEqual(saturdayLater, { kind: "closed", label: "Closed · opens Fri 10 a.m." });
});

test("a split day uses the window that is actually open", () => {
  const hours: OpeningHoursSpec[] = [
    { dayOfWeek: ["Monday"], opens: "09:00", closes: "12:00" },
    { dayOfWeek: ["Monday"], opens: "14:00", closes: "18:00" },
  ];
  assert.equal(storeHoursStatus(new Date("2026-10-26T15:00:00.000Z"), hours).label, "Open now · until 12 p.m.");
  assert.equal(storeHoursStatus(new Date("2026-10-26T17:00:00.000Z"), hours).label, "Closed · opens 2 p.m.");
  assert.equal(storeHoursStatus(new Date("2026-10-26T19:30:00.000Z"), hours).label, "Open now · until 6 p.m.");
});

test("directions prefers a short map link, then the GBP pin, then a directions URL", () => {
  assert.equal(storeDirectionsHref(), FULL_NAME_NAP.mapsUrl);
  assert.match(storeDirectionsHref(), /place_id:ChIJHy2BDCg1K4gRnDsuZFzvfbg/);
  assert.equal(storeDirectionsHref().includes("google.com/maps"), true);
  assert.equal(
    storeDirectionsHref(["https://maps.app.goo.gl/queenLansdowne", FULL_NAME_NAP.mapsUrl]),
    "https://maps.app.goo.gl/queenLansdowne",
  );
  assert.equal(storeDirectionsHref([GBP_MAPS_URL, gbpLocation.directionsUrl]), GBP_MAPS_URL);
  assert.equal(
    storeDirectionsHref([gbpLocation.directionsUrl]),
    "https://www.google.com/maps/dir/?api=1&destination=1472+Queen+St+W,+Toronto,+ON+M6K+1M4",
  );
  assert.equal(
    storeDirectionsHref(["https://example.com/not-a-map"]),
    `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(gbpLocation.address)}`,
  );
});

test("menu, delivery, and hours point at routes that exist", () => {
  assert.equal(MOBILE_BAR_HOURS_HREF, "/hours");
  assert.equal(MOBILE_BAR_MENU_HREF, "/exotic-weed");
  assert.equal(MOBILE_BAR_DELIVERY_HREF, "/weed-delivery-toronto");
  assert.equal(fs.existsSync("app/hours/page.tsx"), true);
  assert.equal(fs.existsSync("app/[tier]/page.tsx"), true);
  assert.match(products, /slug: "exotic-weed"/);
  assert.equal(fs.existsSync("app/weed-delivery-toronto/page.tsx"), true);
  assert.match(fs.readFileSync("app/weed-delivery-toronto/page.tsx", "utf8"), /from "\.\.\/delivery\/page"/);
  assert.match(nextConfig, /source: "\/delivery", destination: "\/weed-delivery-toronto", permanent: true/);
  assert.equal(fs.existsSync("app/tv/page.tsx"), true);
  assert.equal(fs.existsSync("app/tv2/page.tsx"), true);
});

test("the bar is mounted on every page, pads small screens, and stays off the TV boards", () => {
  assert.match(layout, /import MobileBottomBar from "\.\/components\/MobileBottomBar"/);
  assert.match(layout, /<MobileBottomBar \/>/);
  assert.match(globals, /--mobile-action-bar-height:\s*0px/);
  assert.match(
    globals,
    /@media \(max-width:\s*768px\)\s*\{[\s\S]*--mobile-action-bar-height:\s*calc\(68px \+ env\(safe-area-inset-bottom, 0px\)\)[\s\S]*body:has\(\[data-mobile-bottom-bar\]\)\s*\{[\s\S]*padding-bottom:\s*var\(--mobile-action-bar-height\)/,
  );
  assert.equal(hideMobileBottomBar("/tv"), true);
  assert.equal(hideMobileBottomBar("/tv2"), true);
  assert.equal(hideMobileBottomBar("/tv/extra"), true);
  assert.equal(hideMobileBottomBar("/tv2/extra"), true);
  assert.equal(hideMobileBottomBar("/"), false);
  assert.equal(hideMobileBottomBar("/hours"), false);
  assert.equal(hideMobileBottomBar("/tv-theme"), false);
  assert.match(bar, /if \(hideMobileBottomBar\(pathname\)\) return null/);
});

test("directions, hours, menu, and delivery fit the bar and call is absent", () => {
  assert.match(bar, /href=\{storeDirectionsHref\(\)\}/);
  assert.match(bar, /href=\{MOBILE_BAR_HOURS_HREF\}/);
  assert.match(bar, /href=\{MOBILE_BAR_MENU_HREF\}/);
  assert.match(bar, /href=\{MOBILE_BAR_DELIVERY_HREF\}/);
  assert.match(bar, />\s*Menu\s*</);
  assert.match(bar, />\s*Delivery\s*</);
  assert.match(bar, />\s*Directions\s*</);
  assert.doesNotMatch(bar, /Call|tel:/);
  assert.match(footer, /tel:\+14372938580/);
  assert.match(hoursPage, /tel:\+14372938580/);
  assert.match(css, /\.bar\s*\{[^}]*display:\s*none/s);
  assert.match(css, /@media \(max-width:\s*768px\)\s*\{[^}]*position:\s*fixed/s);
  assert.match(css, /bottom:\s*0/);
  assert.match(css, /minmax\(0,\s*1\.25fr\)\s+minmax\(0,\s*1\.5fr\)\s+minmax\(44px,\s*0\.72fr\)\s+minmax\(44px,\s*0\.9fr\)/);
  assert.match(css, /min-height:\s*44px/);
  assert.match(css, /min-width:\s*44px/);
  assert.match(css, /max-width:\s*100%/);
  assert.match(css, /overflow-x:\s*clip/);
  assert.match(css, /var\(--green-dark/);
  assert.match(globals, /--green-dark:\s*#1e3a8a/);
  assert.match(pkg, /"next": "16\.2\.6"/);
});
