export const STORE_ORIGIN = "https://www.queenlansdownecannabis.ca";
export const STORE_ID = `${STORE_ORIGIN}/#store`;
export const GBP_MAPS_URL =
  "https://www.google.com/maps/place/Queen+Lansdowne+Cannabis/data=!4m2!3m1!1s0x0:0xb87def5c642e3b9c";
export const STOREFRONT_IMAGE = `${STORE_ORIGIN}/wp-content/uploads/2026/04/7Clmh.jpg`;

export type StoreFaq = { q: string; a: string };

export const gbpLocation = {
  storeName: "Queen Lansdowne Cannabis",
  domain: "www.queenlansdownecannabis.ca",
  city: "Toronto",
  province: "ON",
  country: "CA",
  slug: "weed-dispensary-toronto",
  address: "1472 Queen St W, Toronto, ON M6K 1M4",
  streetAddress: "1472 Queen St W",
  postalCode: "M6K 1M4",
  phone: "+1 (437) 293-8580",
  phoneIntl: "+14372938580",
  neighborhood: "Queen West / Parkdale",
  nearbyAreas: ["Queen Street West", "Lansdowne", "Parkdale", "Dufferin", "Roncesvalles"],
  products: [
    "Flower",
    "Pre-rolls",
    "Edibles",
    "THC vapes",
    "Concentrates",
    "Shatter",
    "CBD oils",
    "Accessories",
  ],
  menuUrl: "/",
  visitUrl: "/visit",
  hoursLpUrl: "/24-hour-queen-west-dispensary",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=1472+Queen+St+W,+Toronto,+ON+M6K+1M4",
  mapEmbedUrl:
    "https://www.google.com/maps?q=1472+Queen+St+W,+Toronto,+ON+M6K+1M4&z=16&output=embed",
  latitude: "43.6406611",
  longitude: "-79.4370110",
  hours: ["Open 24 Hours Daily"],
  hoursLabel: "Open 24 Hours Daily",
  seoTitle: "Queen Lansdowne Cannabis | Queen West / Parkdale Dispensary",
  metaDescription:
    "Queen Lansdowne Cannabis is a walk-in dispensary at 1472 Queen St W on Queen West at the Parkdale edge. Open 24 hours daily. Adults 19+. Call +1 (437) 293-8580.",
  localLandmarks: ["Queen Street West", "Lansdowne Avenue", "Parkdale"],
  introVariant:
    "Queen Lansdowne Cannabis is a walk-in shop at 1472 Queen St W, on Queen Street West where the Queen West strip meets Parkdale. Use the homepage for the name, address, phone and hours, and the visit guide for streetcar, parking and the door.",
  neighborhoodDescription:
    "The storefront faces Queen Street West at the Parkdale edge, near Lansdowne Avenue, with Dufferin the next major north-south crossing to the east.",
  transitNote:
    "The 501 Queen streetcar stops at Queen Street West at Lansdowne Avenue. Overnight, the 301 Queen Blue Night runs the same street.",
  sectionTitle: "Queen West at the Parkdale edge",
};

/** Homepage corridor copy around the menu. Unique to 1472 Queen St W. */
export const HOME_CORRIDOR_COPY = [
  "Queen Lansdowne Cannabis sits at 1472 Queen St W, a street-level shop on Queen Street West where the Queen West strip meets Parkdale. The useful local search is this block — between Dufferin and Lansdowne — not a generic Toronto dispensary listing. Adults 19+ walk in at the Queen Street door; no appointment is required.",
  "The 501 Queen streetcar stops at Queen Street West at Lansdowne Avenue, a short walk from 1472. Overnight, the 301 Queen Blue Night covers the same street. Shoppers coming from the east often pass Dufferin first. From the west, the 501 continues toward Roncesvalles. Use a current TTC trip planner for live times.",
  "Look for the Queen Lansdowne Cannabis sign on the south side of Queen St W. The entrance is the retail bay at 1472. Bring government-issued photo ID. The store is open 24 hours daily. On-street parking on Queen Street West is posted and changes by time of day — read the curb signs before you leave the car. A public Green P surface lot, Carpark 158, is several blocks east at 1325 Queen Street West. That lot is city parking, not a private store lot, and spaces are not guaranteed.",
  "Use this homepage as the visit hub: the same name, address, phone, and hours appear here, in the footer, and on the Queen West visit guide. Flower is grouped as Exotic, Premium, AAA+, AA, and Budget Weed, with separate pages for pre-rolls, edibles, vapes, concentrates, and accessories. Listings can change, so treat the menu as current information rather than a promise of stock. Call +1 (437) 293-8580, or open the visit guide for streetcar, parking, and door-finding detail.",
];

export const HOME_FAQS: StoreFaq[] = [
  {
    q: "What are the hours for Queen Lansdowne Cannabis?",
    a: "Queen Lansdowne Cannabis at 1472 Queen St W, Toronto is open 24 hours daily. Walk in anytime — no appointment needed.",
  },
  {
    q: "Where is the Queen West / Parkdale storefront?",
    a: "The shop is at 1472 Queen St W, Toronto, ON M6K 1M4, on Queen Street West at the Parkdale edge near Lansdowne. Call +1 (437) 293-8580. Check current curb parking signs before you visit.",
  },
  {
    q: "Do I need ID to walk in on Queen Street West?",
    a: "Yes. Adults 19+ must show valid government-issued photo ID at the door. Queen Lansdowne Cannabis is walk-in only during listed hours.",
  },
  {
    q: "How do I reach 1472 Queen St W on transit?",
    a: "Take the 501 Queen streetcar to Queen Street West at Lansdowne Avenue, then stay on Queen Street and look for the Queen Lansdowne Cannabis sign on the south side. Overnight, the 301 Queen Blue Night covers the same corridor.",
  },
];

export const HOURS_LP_PATH = "/24-hour-queen-west-dispensary";
export const DELIVERY_LP_PATH = "/cannabis-delivery-queen-west";
export const CIGARETTES_LP_PATH = "/native-cigarettes-queen-west";
export const VAPE_LP_PATH = "/nicotine-vape-queen-west";

export const MESH_HUB_LINKS = [
  { label: "Homepage visit hub", href: "/" },
  { label: "Queen West visit guide", href: "/visit" },
  { label: "Open now · 24-hour Queen West", href: HOURS_LP_PATH },
] as const;

export const VERTICAL_MESH_LINKS = [
  { label: "Cannabis delivery Queen West", href: DELIVERY_LP_PATH },
  { label: "Native cigarettes Queen West", href: CIGARETTES_LP_PATH },
  { label: "Nicotine vape Queen West", href: VAPE_LP_PATH },
] as const;

export const TIER_MESH_LINKS = [
  { label: "Exotic Weed", href: "/exotic-weed" },
  { label: "Premium Weed", href: "/premium-weed" },
  { label: "AAA+ Weed", href: "/aaa-weed" },
  { label: "AA Weed", href: "/aa-weed" },
  { label: "Budget Weed", href: "/budget-weed" },
] as const;

export const HOURS_LP_FAQS: StoreFaq[] = [
  {
    q: "Is Queen Lansdowne Cannabis a 24-hour dispensary on Queen West?",
    a: "Yes. Queen Lansdowne Cannabis at 1472 Queen St W is open 24 hours daily. Adults 19+ can walk in any hour — there is no appointment window. The homepage remains the name, address, phone, and hours hub.",
  },
  {
    q: "Can I walk in after midnight at 1472 Queen St W?",
    a: "Yes. The Queen Street door stays open overnight. Bring government-issued photo ID. Staff can help you compare the current in-store menu. Listings can change, so treat the website as information rather than a stock promise.",
  },
  {
    q: "Does overnight TTC still run on Queen Street West?",
    a: "Overnight, the 301 Queen Blue Night follows the same Queen Street corridor when the daytime 501 Queen streetcar is not running. The closest stop remains Queen Street West at Lansdowne Avenue. Use a current TTC trip planner for live times.",
  },
  {
    q: "Do late-night visits still require photo ID?",
    a: "Yes. The store serves adults 19+ at every hour, including overnight. Government-issued photo ID is required before purchase, the same as during the day.",
  },
  {
    q: "Is cannabis delivery from this store also 24 hours?",
    a: "No. Walk-in retail at 1472 Queen St W is open 24 hours daily. Delivery ordering from this store runs daily from 10:00 a.m. to 10:00 p.m. through the delivery menu, with details confirmed by the dispatcher.",
  },
  {
    q: "Is Queen Lansdowne Cannabis open now near Queen West and Parkdale?",
    a: "Yes, if you mean this walk-in shop. Queen Lansdowne Cannabis at 1472 Queen St W stays open 24 hours daily on Queen West at the Parkdale edge. Use this page for open-now and overnight questions. The homepage remains the name, address, phone, and map hub.",
  },
  {
    q: "Is there a 24-hour dispensary near me on the Lansdowne corridor?",
    a: "This storefront is the 24-hour walk-in shop at 1472 Queen St W, near the Queen Street West at Lansdowne Avenue streetcar stop. It is one Queen West door, not a city-wide hours listing. Bring government-issued photo ID. Adults 19+ only.",
  },
];

export const DELIVERY_LP_FAQS: StoreFaq[] = [
  {
    q: "Does Queen Lansdowne Cannabis deliver from the Queen West storefront?",
    a: "Yes. Delivery ordering is coordinated from Queen Lansdowne Cannabis at 1472 Queen St W. The dispatcher confirms whether your address is eligible. This page does not publish a city-wide zone map.",
  },
  {
    q: "What are cannabis delivery hours from 1472 Queen St W?",
    a: "Delivery ordering from this store runs daily from 10:00 a.m. to 10:00 p.m. Walk-in retail at the same Queen West door is open 24 hours daily and is a separate path.",
  },
  {
    q: "How do I start a delivery order on Queen West?",
    a: "Open the delivery menu, note product names and weights, then use LIVE ORDER to reach the dispatcher. New customers complete private selfie-with-ID verification in Web Chat. Adults 19+ only.",
  },
  {
    q: "Is there a delivery minimum or fee from this Queen West store?",
    a: "The live delivery menu states a $60 product minimum and a $10 delivery fee. The dispatcher confirms current order details before checkout.",
  },
  {
    q: "Can I assume delivery covers every Toronto neighbourhood?",
    a: "No. Eligibility is confirmed when you place the order. Use this Queen West page for storefront context, then the delivery menu to start an order. Do not treat a city URL as a guaranteed radius.",
  },
];

export const CIGARETTES_LP_FAQS: StoreFaq[] = [
  {
    q: "Does the Queen West shop sell Native cigarettes?",
    a: "Yes. Queen Lansdowne Cannabis lists Native cigarettes in the in-store cigarette category at 1472 Queen St W. Use the current cigarette menu for brand, variety, pack or carton unit, and posted price. Selection can change.",
  },
  {
    q: "Where do I check current cigarette brands at 1472 Queen St W?",
    a: "Open the cigarette category for the listed selection. This Queen West page explains the storefront. It does not replace the current menu or lock in a brand, pack count, or price.",
  },
  {
    q: "What should I compare on a pack versus a carton listing?",
    a: "A pack and a carton are different sales units. Read the listed unit beside the posted price, then compare the same unit, brand, and variety. Ask staff in store if the unit is unclear.",
  },
  {
    q: "Do I need ID to buy cigarettes on Queen Street West?",
    a: "Yes. The store serves adults 19+ only. Government-issued photo ID is required before purchase, including overnight walk-ins.",
  },
  {
    q: "Can I buy Native cigarettes after midnight at this Parkdale-edge shop?",
    a: "Walk-in retail is open 24 hours daily. Bring photo ID. Treat the website category as current information rather than a promise that one brand will still be on the shelf when you arrive.",
  },
];

export const VAPE_LP_FAQS: StoreFaq[] = [
  {
    q: "Where is the current nicotine vape menu for Queen Lansdowne Cannabis?",
    a: "Use the nicotine vape category at /items/vapes. This Queen West page is neighbourhood context. It does not list SKUs or prices, and it does not promise that a named device is in stock.",
  },
  {
    q: "Are nicotine vapes the same as THC vapes at this Queen West shop?",
    a: "No. Nicotine vapes are listed under /items/vapes. THC or cannabis vapes are a separate category under /items/vape-disposables. Read the category label before you travel for one format.",
  },
  {
    q: "Does this Queen West page publish nicotine vape prices?",
    a: "No. Open the current nicotine vape category, then the individual item page for posted details. Confirm the listing in store. Nicotine is addictive.",
  },
  {
    q: "Who can buy a nicotine vape at 1472 Queen St W?",
    a: "Adults 19+ with government-issued photo ID. The walk-in shop is open 24 hours daily. Delivery ordering, when used, is a separate 10:00 a.m. to 10:00 p.m. path.",
  },
  {
    q: "Should I treat puff counts on a listing as a performance promise?",
    a: "No. When a product name includes a puff count, use it only to tell listings apart. This page does not present puff counts as lifespan, strength, or superiority claims.",
  },
];

export const VISIT_FAQS: StoreFaq[] = [
  {
    q: "Which streetcar stop is closest to Queen Lansdowne Cannabis?",
    a: "The closest stop is Queen Street West at Lansdowne Avenue on the 501 Queen. Overnight service uses the 301 Queen Blue Night on the same street. Confirm live arrivals in a current TTC trip planner.",
  },
  {
    q: "Where should I park near 1472 Queen St W?",
    a: "Street parking on Queen Street West is posted and changes by block and time of day. Read the signs at the curb in front of 1472. A public Green P surface lot, Carpark 158, is several blocks east at 1325 Queen Street West; it is city parking, not a private store lot, and availability is not guaranteed.",
  },
  {
    q: "How do I recognize the entrance on Queen Street West?",
    a: "The store is a street-level retail bay at 1472 Queen St W on the south side of Queen Street West, at the Parkdale edge near Lansdowne. Look for the Queen Lansdowne Cannabis sign facing the sidewalk. There is no appointment desk — walk in during listed hours.",
  },
  {
    q: "What should adults bring to visit?",
    a: "Bring government-issued photo ID. The store serves adults 19+ only. Debit and cash are accepted in store. Menu listings on the website can change, so use the current category pages as information rather than a stock promise.",
  },
  {
    q: "Can I order delivery from this Queen West store?",
    a: "Yes. Queen Lansdowne Cannabis offers delivery ordering daily from 10:00 a.m. to 10:00 p.m. through the delivery menu. The dispatcher confirms order details and eligibility. Do not assume a city-wide radius from this page.",
  },
];

export const THIN_CITY_INFO_SLUGS = new Set([
  "toronto-weed-dispensary",
  "weed-store-near-toronto",
  "dispensary-near-me-toronto",
]);

export function faqPageJsonLd(faqs: StoreFaq[], pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function cannabisStoreJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CannabisStore",
        "@id": STORE_ID,
        name: gbpLocation.storeName,
        description:
          "Walk-in cannabis store at 1472 Queen St W on Queen West at the Parkdale edge in Toronto. Open 24 hours daily. Adults 19+.",
        url: `${STORE_ORIGIN}/`,
        telephone: gbpLocation.phoneIntl,
        image: STOREFRONT_IMAGE,
        address: {
          "@type": "PostalAddress",
          streetAddress: gbpLocation.streetAddress,
          addressLocality: gbpLocation.city,
          addressRegion: gbpLocation.province,
          postalCode: gbpLocation.postalCode,
          addressCountry: gbpLocation.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: Number(gbpLocation.latitude),
          longitude: Number(gbpLocation.longitude),
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        sameAs: [GBP_MAPS_URL],
        hasMap: GBP_MAPS_URL,
        areaServed: [
          { "@type": "Neighborhood", name: "Queen West" },
          { "@type": "Neighborhood", name: "Parkdale" },
          { "@type": "City", name: "Toronto" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${STORE_ORIGIN}/#website`,
        url: `${STORE_ORIGIN}/`,
        name: gbpLocation.storeName,
      },
    ],
  };
}

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
