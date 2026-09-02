const NATIVE_HERO_DISCLOSURE = "Brand preview only. Selection varies by store; check the current cigarette menu before visiting.";
const NATIVE_HERO_PRODUCTS = [
  { name: "BB Lights", image: "/products/1001-BB-LIGHTS-CARTONS.webp" },
  { name: "BB Full", image: "/products/1003-BB-FULL-CARTON.webp" },
  { name: "Canadian Lights", image: "/products/1005-CANADIAN-LIGHTS.webp" },
  { name: "Canadian Full", image: "/products/1006-CANADIAN-FULL.webp" },
  { name: "Canadian Classics Silver", image: "/products/1015-CANADIAN-CLASSICS-SILVER.webp" },
  { name: "Canadian Menthol", image: "/products/1013-CANADIAN-MENTHOL.webp" },
] as const;

export interface SeoPageData {
  slug: string;
  title: string;
  absoluteTitle?: boolean;
  metaDescription: string;
  h1: string;
  icon: string;
  heroTagline: string;
  heroPreview?: {
    eyebrow: string;
    intro: string;
    products: readonly { name: string; image: string }[];
    disclosure: string;
    theme?: "nicotine";
    menuHref?: string;
    primaryCta?: string;
    secondaryCta?: string;
    secondaryHref?: string;
    identity?: string;
    featuredHeading?: string;
    featuredIntro?: string;
    warning?: string;
  };
  banner?: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

const hours = "Open 24 Hours Daily";

export const SEO_PAGES: SeoPageData[] = [
  {
    slug: "toronto-weed-dispensary",
    title: `Toronto Weed Dispensary — Queen Lansdowne Cannabis | ${hours} | 1472 Queen St W`,
    metaDescription: "Queen Lansdowne Cannabis is at 1472 Queen St W in Toronto with flower, pre-rolls, edibles, vapes, concentrates, cigarettes, and accessories. We are open 24 hours daily.",
    h1: "Toronto Weed Dispensary — Queen Lansdowne Cannabis",
    icon: "*",
    heroTagline: `Cannabis at 1472 Queen St W · ${hours} · Walk-In Welcome`,
    sections: [
      { heading: "Plan a Queen Street West Visit", body: `Queen Lansdowne Cannabis is located at 1472 Queen St W. Use the store page for address and contact details, then browse the current menu by category. We are ${hours}.` },
      { heading: "Browse Menu Categories", body: "The menu includes flower tiers, pre-rolls, edibles, vapes, concentrates, cigarettes, and accessories. Listings and prices can change, so check the current category before visiting." },
    ],
    faqs: [
      { q: "Where is Queen Lansdowne Cannabis?", a: "The store is at 1472 Queen St W in Toronto." },
      { q: "When is the store open?", a: `Queen Lansdowne Cannabis is ${hours}.` },
    ],
  },
  {
    slug: "cheap-weed-toronto",
    title: "Cheap Weed Toronto — Budget Weed Guide | Queen Lansdowne Cannabis",
    metaDescription: `Compare Budget Weed, AA Weed and other flower collections at Queen Lansdowne Cannabis. We are ${hours} at 1472 Queen St W.`,
    h1: "Cheap Weed Toronto — Budget Weed Guide",
    icon: "$",
    heroTagline: `Explore Budget Weed and AA Weed · ${hours}`,
    sections: [
      { heading: "Start With Budget Weed", body: "Value-focused shoppers can begin with Budget Weed and AA Weed, then compare the current product name, weight and listed information." },
      { heading: "Compare the Same Package Size", body: "Use the current menu to compare like-for-like weights and posted prices. Tier names organize the menu; they do not promise a particular result." },
    ],
    faqs: [{ q: "Where should value shoppers begin?", a: "Start with the Budget Weed and AA Weed collections, then compare the information presented with each item." }],
  },
  {
    slug: "native-cigarettes-toronto",
    title: "Native Cigarettes Toronto — Discount Tobacco | Queen Lansdowne Cannabis",
    metaDescription: `Browse the current Native cigarette category at Queen Lansdowne Cannabis, 1472 Queen St W. We are ${hours}.`,
    h1: "Native Cigarettes Toronto — Discount Tobacco",
    icon: "*",
    heroTagline: `Compare Current Brands and Prices · ${hours}`,
    heroPreview: {
      eyebrow: "Queen Lansdowne Cannabis · 1472 Queen St W, Toronto",
      intro: "Cigarette category and visit information for Queen Street West",
      products: NATIVE_HERO_PRODUCTS,
      disclosure: NATIVE_HERO_DISCLOSURE,
    },
    sections: [
      { heading: "Check the Current Cigarette Category", body: "Compare brand, variety, pack or carton unit, and posted price on the current menu before visiting." },
      { heading: "Confirm the Unit", body: "Pack and carton listings describe different quantities. Read the listed unit beside the price before comparing options." },
    ],
    faqs: [{ q: "How should I compare cigarette listings?", a: "Compare the same unit, brand, variety, and current posted price." }],
  },
  {
    slug: "weed-store-near-toronto",
    title: "Weed Store Near Toronto — Queen Lansdowne Cannabis",
    metaDescription: `Queen Lansdowne Cannabis is at 1472 Queen St W in Toronto. Browse current menu categories before visiting. We are ${hours}.`,
    h1: "Weed Store Near Toronto — Queen Lansdowne Cannabis",
    icon: "*",
    heroTagline: `1472 Queen St W · ${hours}`,
    sections: [
      { heading: "Use the Store Page to Plan", body: "Confirm the address, phone number, listed hours, and current menu categories before travelling to Queen Street West." },
      { heading: "Choose a Category First", body: "Flower, pre-rolls, edibles, vapes, concentrates, cigarettes, and accessories each have their own menu pages." },
    ],
    faqs: [{ q: "Where can I find current menu details?", a: "Use the current category pages or contact the store before visiting." }],
  },
  {
    slug: "dispensary-near-me-toronto",
    title: `Cannabis Dispensary Near Me Toronto — Queen Lansdowne Cannabis | ${hours}`,
    metaDescription: `Find Queen Lansdowne Cannabis at 1472 Queen St W in Toronto. We are ${hours}. Walk in anytime, no appointment needed.`,
    h1: "Cannabis Dispensary Near Me — Toronto",
    icon: "*",
    heroTagline: `Walk-In Welcome · ${hours} · Browse Current Menu`,
    sections: [
      { heading: "A Queen Street West Store", body: "Queen Lansdowne Cannabis gives nearby shoppers a direct path to store information, menu categories, and visit-planning resources." },
      { heading: "Check Details Before Visiting", body: "Use the current menu for product names and posted prices, and the store page for current contact and visit information." },
    ],
    faqs: [{ q: "Do I need an appointment?", a: "No appointment is needed for an in-store visit during listed hours." }],
  },
  {
    slug: "nicotine-vapes-toronto",
    title: "Nicotine Vapes in Toronto | Queen Lansdowne Cannabis",
    absoluteTitle: true,
    metaDescription: "Adults 19+: review six verified nicotine vape product pages from Queen Lansdowne Cannabis in Toronto, then check /items/vapes for the current selection. Nicotine is addictive.",
    h1: "Nicotine Vapes at Queen Lansdowne Cannabis in Toronto",
    icon: "*",
    heroTagline: "Adults 19+ · Nicotine is addictive.",
    heroPreview: {
      eyebrow: "QUEEN LANSDOWNE CANNABIS • QUEEN WEST / LANSDOWNE / PARKDALE • ADULTS 19+",
      intro: "Searching for nicotine vapes near me in Toronto? This Queen Lansdowne Cannabis guide features six verified nicotine vape product pages and directs adults to /items/vapes for the current selection. Product details can change, so open the individual item page before choosing. Nicotine is addictive.",
      products: [
        { name: "Geek Promax 5% — 30K Puffs", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/GEEK-PROMAX.jpg" },
        { name: "Geek Universe — 25K Puffs", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/geek_universe_pulse_x_25k.webp" },
        { name: "Level X Boost G2 Device Kit", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1085-Level-X-Boost-G2-device-kit.webp" },
        { name: "Level X G2 Pod", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1086-Level-X-G2-pod.webp" },
        { name: "NEXA PIX — 30K Puffs — Many Flavors", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/nexa_showcase_600x600.webp" },
        { name: "OVNS 10000 5% — 10K Puffs", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1081OVNS10000.jpg" },
      ],
      disclosure: "The featured cards are verified starting points, not a guarantee of current stock, price or availability. Use /items/vapes for the current Queen Lansdowne Cannabis listing.",
      theme: "nicotine",
      menuHref: "/items/vapes",
      primaryCta: "Browse Nicotine Vapes",
      secondaryCta: "Compare the Six Featured Items",
      secondaryHref: "#featured-vapes",
      identity: "Queen Lansdowne Cannabis | Queen West / Lansdowne / Parkdale | Adults 19+ | Nicotine is addictive.",
      featuredHeading: "Six Verified Cards, One Current Category",
      featuredIntro: "The featured set combines Geek and NEXA listings with a Level X device kit, a Level X pod and an OVNS listing. Use each card for its exact supported display details, then rely on /items/vapes for the current nicotine vape selection.",
      warning: "Adults 19+. Nicotine is addictive.",
    },
    sections: [
      { heading: "Read the Device Kit and Pod Listings Carefully", body: "The verified Level X Boost G2 Device Kit and Level X G2 Pod are distinct listings. Keep those format descriptions attached to their respective products, and do not apply them to another featured item unless its current product page verifies that format." },
      { heading: "Puff Counts Identify Listings, Not Results", body: "Several verified product names include puff counts. Adults can use those numbers to distinguish listings, but this page does not present them as guarantees of lifespan, performance or superiority. Check the individual product page for its supported details." },
      { heading: "Keep Nicotine and Cannabis Vape Routes Separate", body: "This Queen Lansdowne Cannabis nicotine vape guide uses products from the VAPE PENS category under /items/vapes. The separate /items/vape-disposables route is for THC or cannabis vape products and is excluded from this nicotine page." },
      { heading: "Visit Queen Lansdowne Cannabis", body: "Before visiting, confirm the storefront’s current details and browse /items/vapes for the latest nicotine vape listing. This page does not claim unverified prices or guaranteed availability." },
    ],
    faqs: [
      { q: "Where should I check Queen Lansdowne Cannabis’s current nicotine selection?", a: "Use /items/vapes. The six featured cards are verified starting points, while the current category listing should control selection information." },
      { q: "Does every featured item use the same format?", a: "No. The supplied evidence identifies a Level X device kit and a separate Level X pod. Read each remaining product page for its exact verified format and details." },
      { q: "Does this page include cannabis vapes?", a: "No. It covers nicotine products from the VAPE PENS category for adults 19+. THC and cannabis vape products under /items/vape-disposables are excluded." },
    ],
  },
];

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((page) => page.slug === slug);
}
