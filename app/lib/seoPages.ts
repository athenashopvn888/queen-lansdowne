export interface SeoPageData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  icon: string;
  heroTagline: string;
  banner?: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

const hours = "Open Daily: 10:00 AM - 03:00 AM";

export const SEO_PAGES: SeoPageData[] = [
  {
    slug: "york-weed-dispensary",
    title: `Toronto Weed Dispensary — Queen Lansdowne Cannabis | ${hours} | 1472 Queen St W & Nearby Expressway`,
    metaDescription: "Queen Lansdowne Cannabis is at 1472 Queen St W in Toronto with flower, pre-rolls, edibles, vapes, concentrates, cigarettes, and accessories. We are open daily from 10:00 AM to 03:00 AM.",
    h1: "Toronto Weed Dispensary — Queen Lansdowne Cannabis",
    icon: "*",
    heroTagline: `Cannabis on 1472 Queen St W & Nearby Expressway · ${hours} · Walk-In Welcome`,
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
    slug: "cheap-weed-york",
    title: "Cheap Weed Toronto — Budget Cannabis Deals From $3/g | Queen Lansdowne Cannabis",
    metaDescription: `Compare Budget, AA, and other flower tiers at Queen Lansdowne Cannabis. We are ${hours} at 1472 Queen St W.`,
    h1: "Cheap Weed Toronto — Budget Cannabis Deals",
    icon: "$",
    heroTagline: `Budget Flower From $3/g · Ounces From $40 · ${hours}`,
    sections: [
      { heading: "Start With the Budget Tier", body: "Value-focused shoppers can begin with Budget and AA, then compare the current product name, weight, and listed price." },
      { heading: "Compare the Same Package Size", body: "Use the current menu to compare like-for-like weights and posted prices. Tier names organize the menu; they do not promise a particular result." },
    ],
    faqs: [{ q: "Where should value shoppers begin?", a: "Start with the Budget and AA tier pages, then compare current weights and prices." }],
  },
  {
    slug: "native-cigarettes-york",
    title: "Native Cigarettes Toronto — Discount Tobacco | Queen Lansdowne Cannabis",
    metaDescription: `Browse the current Native cigarette category at Queen Lansdowne Cannabis, 1472 Queen St W. We are ${hours}.`,
    h1: "Native Cigarettes Toronto — Discount Tobacco",
    icon: "*",
    heroTagline: `Compare Current Brands and Prices · ${hours}`,
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
    slug: "dispensary-near-me-york",
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
];

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((page) => page.slug === slug);
}
