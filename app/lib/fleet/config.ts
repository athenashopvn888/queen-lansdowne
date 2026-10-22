import type { Nap, ResolvedBanner, ResolvedPage } from "./types.ts";

/**
 * The only store-specific fleet file. Other stores replace this module
 * and leave the rest of app/lib/fleet and app/components/fleet as-is.
 */
export const FLEET_STORE_CODE = "QLC01";
export const FLEET_STORE_NAME = "Queen Lansdowne Cannabis";
export const FLEET_AREA = "Queen Street West, Toronto";
export const FLEET_DOMAIN = "www.queenlansdownecannabis.ca";
export const FLEET_DOMAINS = ["www.queenlansdownecannabis.ca", "queenlansdownecannabis.ca"] as const;
export const FLEET_ORIGIN = "https://www.queenlansdownecannabis.ca";

/** Public blob origin. Objects live at /{storeCode}/manifest.json and /{storeCode}/articles/. */
export const FLEET_BLOB_ORIGIN = "https://dhaah0upvlpukv56.public.blob.vercel-storage.com";

export const FLEET_COLORS = {
  banner: "#111827",
  bannerText: "#ffffff",
} as const;

/** Digits or formatted numbers. An article containing any of these is dropped. */
export const FLEET_BLOCKED_PHONES: readonly string[] = [];

export const FLEET_ARTICLES_PATH = "/articles";

/** Page and spot names for the six TV2 category cards. Spot is the card name. */
export const TV2_PAGE = "TV2";
export const TV2_CARDS = [
  "PREROLLS_ADDONS",
  "VAPES",
  "EDIBLES",
  "CONCENTRATES",
  "CIGARETTES",
  "MAGIC",
] as const;

export const TV_PAGE = "TV";
export const TV_FULLSCREEN_SPOTS = [
  "Fullscreen promo 1",
  "Fullscreen promo 2",
  "Fullscreen promo 3",
] as const;

/** Fort York Cannabis takeover defaults: 5s on screen, once a minute, 5s first preview, 650ms slide. */
export const TV_PROMO_SHOW_SECONDS = 5;
export const TV_PROMO_EVERY_MINUTES = 1;
export const TV_PROMO_INITIAL_DELAY_MS = 5_000;
export const TV_PROMO_SLIDE_MS = 650;

export function defaultManifestUrl(storeCode = FLEET_STORE_CODE): string {
  return `${FLEET_BLOB_ORIGIN}/${storeCode}/manifest.json`;
}

export function articlesIndexUrl(storeCode = FLEET_STORE_CODE): string {
  return `${FLEET_BLOB_ORIGIN}/${storeCode}/articles/index.json`;
}

export function articleBodyUrl(slug: string, storeCode = FLEET_STORE_CODE): string {
  return `${FLEET_BLOB_ORIGIN}/${storeCode}/articles/${encodeURIComponent(slug)}.json`;
}

/** Coded resource routes win a slug clash with a sheet article. */
export function resourceRouteSlugs(routes: readonly string[]): Set<string> {
  const slugs = new Set<string>();
  for (const route of routes) {
    if (!route.startsWith("/resources/")) continue;
    const rest = route.slice("/resources/".length);
    if (!rest) continue;
    slugs.add(rest);
    for (const part of rest.split("/")) {
      if (part) slugs.add(part);
    }
  }
  return slugs;
}

export const CODED_NAP: Nap = {
  name: "Queen Lansdowne Cannabis",
  street: "1472 Queen St W",
  city: "Toronto",
  province: "ON",
  postalCode: "M6K 1M4",
  cityLine: "Toronto, ON M6K 1M4",
  area: "Queen West / Parkdale",
  intersection: "Queen St W & Lansdowne Ave",
  areaLine: "Queen St W & Lansdowne Ave, Queen West / Parkdale",
  phoneDisplay: "+1 (437) 293-8580",
  phoneTel: "+14372938580",
  hours: "Open 24 Hours Daily",
  mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=1472+Queen+St+W%2C+Toronto%2C+ON+M6K+1M4",
  mapsEmbedUrl: "https://www.google.com/maps?q=1472+Queen+St+W,+Toronto,+ON+M6K+1M4&z=16&output=embed",
  lat: "43.6406611",
  lng: "-79.4370110",
  schemaName: "Queen Lansdowne Cannabis Dispensary Weed Delivery",
  website: "https://www.queenlansdownecannabis.ca",
};

export const CODED_BANNERS: ResolvedBanner[] = [
  {
    id: "weed",
    page: "Home",
    spot: "Top banner",
    href: "/exotic-weed",
    categoryName: "Exotic Weed",
    hidden: false,
    render: "image",
    image: "/banners/top-weed-tier-qlc01.webp",
    codedImage: "/banners/top-weed-tier-qlc01.webp",
    alt: `${FLEET_STORE_NAME} in ${FLEET_AREA} — Exotic, Premium and AAA+ top weed tiers`,
    title: `${FLEET_STORE_NAME} top weed tiers — Exotic, Premium and AAA+`,
    textBar: "Buy 2g Get 1g FREE · Buy 3g Get 3g FREE · Shop weed tiers",
    caption: "Buy 2g Get 1g FREE · Buy 3g Get 3g FREE · Shop weed tiers",
  },
  {
    id: "vapes",
    page: "Home",
    spot: "Promo banner 2",
    href: "/items/vapes",
    categoryName: "Nicotine Vapes",
    hidden: false,
    render: "image",
    image: "/banners/core-vapes-nicotine-thc.webp",
    codedImage: "/banners/core-vapes-nicotine-thc.webp",
    alt: `${FLEET_STORE_NAME} in ${FLEET_AREA} — nicotine vapes and THC vapes`,
    title: `${FLEET_STORE_NAME} nicotine vapes and THC vapes`,
    textBar: "Nicotine vapes + THC vapes · Shop vapes",
    caption: "Nicotine vapes + THC vapes · Shop vapes",
  },
  {
    id: "cigarettes",
    page: "Home",
    spot: "Promo banner 3",
    href: "/items/cigarettes",
    categoryName: "Cigarettes",
    hidden: false,
    render: "image",
    image: "/banners/native-cigarette-offer-20260822.webp",
    codedImage: "/banners/native-cigarette-offer-20260822.webp",
    alt: `${FLEET_STORE_NAME} in ${FLEET_AREA} — 2 packs for $5 mix and match and $25 carton cigarette offer`,
    title: `${FLEET_STORE_NAME} cigarette offer — 2 packs $5 mix and match, $25 carton`,
    textBar: "2 packs $5 mix & match · $25 carton · Shop cigarettes",
    caption: "2 packs $5 mix & match · $25 carton · Shop cigarettes",
  },
  {
    id: "premium-cigarettes",
    page: "Home",
    spot: "Promo banner 4",
    href: "/items/cigarettes",
    categoryName: "Premium Cigarettes",
    hidden: false,
    render: "image",
    image: "/banners/core-premium-bb-marlboro-belmont.webp",
    codedImage: "/banners/core-premium-bb-marlboro-belmont.webp",
    alt: `${FLEET_STORE_NAME} in ${FLEET_AREA} — BB Full Flavor and Lights 2 packs for $5, Marlboro and Belmont $10 per pack`,
    title: `${FLEET_STORE_NAME} premium cigarettes — BB 2 packs $5, Marlboro and Belmont $10 per pack`,
    textBar: "BB Full Flavor + Lights — 2 packs $5 · Marlboro & Belmont — $10/pack · Shop cigarettes",
    caption: "BB Full Flavor + Lights — 2 packs $5 · Marlboro & Belmont — $10/pack · Shop cigarettes",
  },
];

export const CODED_PAGES: Record<string, ResolvedPage> = {
  Home: {
    description: "Queen Lansdowne Cannabis is a walk-in dispensary at 1472 Queen St W on Queen West at the Parkdale edge. Open 24 hours daily. Adults 19+. Call +1 (437) 293-8580.",
    metaTitle: "",
    metaDescription: "Queen Lansdowne Cannabis is a walk-in dispensary at 1472 Queen St W on Queen West at the Parkdale edge. Open 24 hours daily. Adults 19+. Call +1 (437) 293-8580.",
  },
  Contact: {
    description: "Visit Queen Lansdowne Cannabis at 1472 Queen St W, Toronto, ON M6K 1M4. We are open 24 hours daily. Walk-ins welcome.",
    metaTitle: "Contact Us — Queen Lansdowne Cannabis | 1472 Queen St W, Toronto",
    metaDescription: "Visit Queen Lansdowne Cannabis at 1472 Queen St W, Toronto, ON M6K 1M4. We are open 24 hours daily. Walk-ins welcome.",
  },
};
