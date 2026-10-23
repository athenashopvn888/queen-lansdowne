import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  CIG_WORDING_FALLBACK,
  decideCigaretteSurface,
  decideWebCigaretteSurface,
  readCigaretteTvHeader,
  reconcileSurfaceItems,
  resolveSurfaceFlag,
} from "../app/lib/cigDecision.ts";
import { isRealCigaretteItem } from "../app/lib/cigMarkers.ts";
import { SHOW_CIGARETTES, cigaretteEnvHardOff, filterPublicItems } from "../app/lib/showCigarettes.ts";
import {
  cigaretteCardTitle,
  filterBoardItems,
  showsVapesPromoPoster,
  VAPES_PROMO_POSTER,
  WRAPS_AND_POUCHES_TITLE,
} from "../app/tv2/cigaretteBoard.ts";

const carton = { category: "CIGARETTES", name: "BB FULL CARTON", slug: "bb-full-carton" };
const grabba = { category: "CIGARETTES", name: "GRABBA", slug: "grabba" };
const backwoods = { category: "CIGARETTES", name: "BACKWOODS ASSORTED FLAVORS $20-$25", slug: "backwoods-assorted-flavors-20-25" };
const pouch = { category: "CIGARETTES", name: "NICOTINE POUCHES , VELO, PABLO, KILLA", slug: "nicotine-pouches-velo-pablo-killa" };
const zyn = { category: "CIGARETTES", name: "ZYN NICOTINE POUCHES", slug: "zyn-nicotine-pouches" };
const wrap = { category: "CIGARETTES", name: "HEMP WRAPS", slug: "hemp-wraps" };
const paper = { category: "ADD ONS", name: "RAW PAPER KING SIZE", slug: "raw-paper-king-size" };
const cigarillo = { category: "CIGARETTES", name: "SWISHER CIGARILLO", slug: "swisher-cigarillo" };
const vape = { category: "VAPE PENS", name: "Mango Ice", slug: "mango-ice" };

const items = [vape, carton, grabba, backwoods, pouch, zyn, wrap, paper, cigarillo];

function cig(extra: Record<string, unknown> = {}) {
  return { on: true, tvOn: true, webOn: false, master: true, wording: { wrapsTitle: WRAPS_AND_POUCHES_TITLE, tv2BoardTitle: "🚬 CIGARETTES" }, ...extra };
}

test("TV follows tvOn and the website follows webOn only", () => {
  const schedule = cig({ webOn: false, tvOn: true, on: true });
  assert.equal(decideCigaretteSurface({ cig: schedule, items, surface: "tv" }).show, true);
  assert.equal(decideWebCigaretteSurface({ cig: schedule, items }).show, false);
  assert.equal(decideCigaretteSurface({ cig: cig({ webOn: true, tvOn: false }), items, surface: "web" }).show, true);
  assert.equal(decideCigaretteSurface({ cig: cig({ webOn: true, tvOn: false }), items, surface: "tv" }).show, false);
  assert.equal(resolveSurfaceFlag({ on: true }, "tv"), true);
  assert.equal(resolveSurfaceFlag({ on: false, tvOn: true }, "tv"), true);
  assert.equal(resolveSurfaceFlag({ on: true, webOn: false }, "web"), false);
});

test("a false TV flag hides real cigarettes and keeps wraps, papers, Backwoods, and pouches", () => {
  assert.equal(decideCigaretteSurface({ cig: cig({ tvOn: false }), items, surface: "tv" }).show, false);
  const hidden = reconcileSurfaceItems(items, items, false);
  assert.deepEqual(hidden.map((item) => item.slug), [vape.slug, backwoods.slug, pouch.slug, zyn.slug, wrap.slug, paper.slug, cigarillo.slug]);
  for (const kept of [backwoods, pouch, zyn, wrap, paper, cigarillo]) {
    assert.equal(isRealCigaretteItem(kept), false, kept.slug);
  }
  assert.equal(isRealCigaretteItem(carton), true);
  assert.equal(isRealCigaretteItem(grabba), true);
  const shown = reconcileSurfaceItems([vape, backwoods], [carton, backwoods], true);
  assert.deepEqual(shown.map((item) => item.slug), [vape.slug, backwoods.slug, carton.slug]);
});

test("env hard-off hides both surfaces and a missing feed does not turn the website on", () => {
  assert.equal(cigaretteEnvHardOff(undefined), false);
  assert.equal(cigaretteEnvHardOff(""), false);
  assert.equal(cigaretteEnvHardOff("false"), true);
  assert.equal(decideCigaretteSurface({ cig: cig({ webOn: true, tvOn: true }), items, surface: "tv", envRaw: "off" }).reason, "env");
  assert.equal(decideWebCigaretteSurface({ cig: cig({ webOn: true, tvOn: true }), items, envRaw: "false" }).show, false);
  assert.equal(decideWebCigaretteSurface({ cig: null, items, errored: true }).show, false);
  assert.equal(decideCigaretteSurface({ cig: null, items, surface: "tv", errored: true }).show, true);
});

test("TV2 card shows cigarettes when the flag is on and wraps or the vapes poster when it is off", () => {
  const onShelf = filterBoardItems(items, true);
  assert.equal(onShelf.some((item) => item.slug === carton.slug), true);
  assert.equal(cigaretteCardTitle(true, cig().wording as { tv2BoardTitle: string; wrapsTitle: string }), "🚬 CIGARETTES");
  assert.equal(showsVapesPromoPoster("CIGARETTES", true, onShelf.length), false);

  const offShelf = filterBoardItems(items, false);
  assert.equal(offShelf.some((item) => item.slug === carton.slug), false);
  assert.equal(offShelf.some((item) => item.slug === backwoods.slug), true);
  assert.equal(cigaretteCardTitle(false, cig().wording as { tv2BoardTitle: string; wrapsTitle: string }), WRAPS_AND_POUCHES_TITLE);
  assert.equal(cigaretteCardTitle(false, {}), CIG_WORDING_FALLBACK.wrapsTitle);
  assert.equal(showsVapesPromoPoster("CIGARETTES", false, offShelf.length), false);
  assert.equal(showsVapesPromoPoster("CIGARETTES", false, 0), true);
  assert.equal(VAPES_PROMO_POSTER.title, "💨 VAPES PROMO");
  assert.equal(showsVapesPromoPoster("VAPES", false, 0), false);
});

test("the website static gate still hides cigarettes while TV is on", () => {
  assert.equal(SHOW_CIGARETTES, false);
  const publicItems = filterPublicItems(items);
  assert.equal(publicItems.some((item) => item.slug === carton.slug), false);
  assert.equal(publicItems.some((item) => item.slug === backwoods.slug), true);
  assert.equal(publicItems.some((item) => item.slug === pouch.slug), true);
});

test("tv boards read the live header and do not keep the static cigarette switch", () => {
  const header = readCigaretteTvHeader(new Headers({
    "x-tv-data-cig-tv": "1",
    "x-tv-data-cig-web": "0",
    "x-tv-data-cig-wording": encodeURIComponent(JSON.stringify({ wrapsTitle: WRAPS_AND_POUCHES_TITLE, tv2BoardTitle: "🚬 CIGARETTES" })),
  }));
  assert.equal(header.show, true);
  assert.equal(header.wording.wrapsTitle, WRAPS_AND_POUCHES_TITLE);
  assert.equal(readCigaretteTvHeader(new Headers({ "x-tv-data-cig-tv": "0" })).show, false);

  const tv2 = readFileSync(new URL("../app/tv2/page.tsx", import.meta.url), "utf8");
  const tv = readFileSync(new URL("../app/tv/page.tsx", import.meta.url), "utf8");
  const route = readFileSync(new URL("../app/api/tv-data/route.ts", import.meta.url), "utf8");
  const web = readFileSync(new URL("../app/components/Navbar.tsx", import.meta.url), "utf8");
  assert.match(tv2, /readCigaretteTvHeader/);
  assert.match(tv2, /setInterval\(loadData, 5\*60\*1000\)/);
  assert.doesNotMatch(tv2, /SHOW_CIGARETTES/);
  assert.match(tv2, /getTv2DaytimePromo/);
  assert.match(tv2, /VAPES_PROMO_POSTER/);
  assert.match(tv, /readCigaretteTvHeader/);
  assert.doesNotMatch(tv, /SHOW_CIGARETTES/);
  assert.match(route, /reconcileSurfaceItems/);
  assert.match(route, /snapshotHeaders/);
  assert.doesNotMatch(route, /filterPublicItems/);
  assert.match(web, /SHOW_CIGARETTES/);
});
