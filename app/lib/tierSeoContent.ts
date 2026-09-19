export interface TierSeoData {
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
  relatedLinks: { label: string; href: string }[];
}

const SIBLING_LINKS = [
  { label: "Exotic Weed", href: "/exotic-weed" },
  { label: "Premium Weed", href: "/premium-weed" },
  { label: "AAA+ Weed", href: "/aaa-weed" },
  { label: "AA Weed", href: "/aa-weed" },
  { label: "Budget Weed", href: "/budget-weed" },
] as const;

const HUB_LINKS = [
  { label: "Homepage visit hub", href: "/" },
  { label: "Queen West visit guide", href: "/visit" },
  { label: "24-hour Queen West dispensary", href: "/24-hour-queen-west-dispensary" },
  { label: "Cannabis delivery Queen West", href: "/cannabis-delivery-queen-west" },
  { label: "Native cigarettes Queen West", href: "/native-cigarettes-queen-west" },
  { label: "Nicotine vape Queen West", href: "/nicotine-vape-queen-west" },
] as const;

function meshLinks(currentHref: string): { label: string; href: string }[] {
  const siblings = SIBLING_LINKS.filter((link) => link.href !== currentHref);
  return [...siblings, ...HUB_LINKS];
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Weed on Queen West | Queen Lansdowne Cannabis",
    metaDescription:
      "Browse Exotic Weed at Queen Lansdowne Cannabis, 1472 Queen St W on Queen West at the Parkdale edge. Open 24 hours daily. Compare Premium, AAA+, AA, and Budget Weed.",
    h1: "Exotic Weed at Queen Lansdowne Cannabis on Queen West",
    intro:
      "Exotic Weed is the highest-positioned flower collection at Queen Lansdowne Cannabis, the walk-in shop at 1472 Queen St W. Use this page to compare the names, weights, and product details shown for Exotic listings, then continue to another collection or the Queen West visit hub when you are ready to walk in.",
    sections: [
      {
        heading: "Exotic Weed at the Queen Street door",
        body: "This collection sits on the Queen West / Parkdale-edge menu, not a city-wide catalogue. Open an individual Exotic listing for the details attached to that item. Adults 19+ can walk in any hour — the store is open 24 hours daily — and staff can help you compare aroma, cultivar name, and package information in person.",
      },
      {
        heading: "Compare Exotic with the other Queen West collections",
        body: "Exotic Weed is a store browsing label, not a government grade. When you want a different starting point on the same Queen Street West menu, move to Premium Weed, AAA+ Weed, AA Weed, or Budget Weed. Arrival notes live on the visit guide; overnight hours live on the 24-hour Queen West page.",
      },
    ],
    faqs: [
      {
        q: "What does Exotic Weed mean at this Queen West shop?",
        a: "At Queen Lansdowne Cannabis, Exotic Weed is the named top collection on the flower menu at 1472 Queen St W. It is a browsing owner, not a regulated laboratory grade, and it does not guarantee one THC range. Compare the actual product information shown for each listing.",
      },
      {
        q: "Can I walk in after midnight for Exotic Weed at 1472 Queen St W?",
        a: "Yes. In-store retail is open 24 hours daily. Bring government-issued photo ID. Menu listings can change, so treat this page as a collection guide rather than a stock promise.",
      },
      {
        q: "How is Exotic Weed different from Premium Weed on this menu?",
        a: "Exotic is this store’s highest-positioned flower section. Premium Weed is a separate collection one step down the same Queen West menu. Use the product details on each listing, then ask staff in store if you want a side-by-side comparison.",
      },
    ],
    relatedLinks: meshLinks("/exotic-weed"),
  },
  PREMIUM: {
    seoTitle: "Premium Weed at 1472 Queen St W | Queen Lansdowne Cannabis",
    metaDescription:
      "Browse Premium Weed flower at Queen Lansdowne Cannabis, 1472 Queen St W. Open 24 hours daily on Queen West. Compare Exotic, AAA+, AA, and Budget Weed before you visit.",
    h1: "Premium Weed flower at 1472 Queen St W",
    intro:
      "Premium Weed is the Queen Lansdowne Cannabis collection for shoppers who want a step below Exotic without starting in the value rows. Review the product details shown with each Premium listing, then walk in at 1472 Queen St W — the Queen Street door is open 24 hours daily.",
    sections: [
      {
        heading: "Premium Weed as a Queen West starting point",
        body: "Use this page to scan the current Premium Weed flower grouped for this storefront. Open individual listings for cultivar, weight, and other details attached to that item. The collection name describes menu position. It does not lock in one formula for THC, bud size, or aroma.",
      },
      {
        heading: "From Premium Weed to the rest of the shop",
        body: "Exotic Weed sits above Premium on this menu. AAA+ Weed, AA Weed, and Budget Weed sit beside or below it. Plan the door with the Queen West visit guide. If the question is whether the shop is open now, use the 24-hour Queen West dispensary page. The homepage keeps the name, address, phone, hours, and map together.",
      },
    ],
    faqs: [
      {
        q: "Where is Premium Weed listed at Queen Lansdowne Cannabis?",
        a: "Premium Weed is a dedicated flower collection on this site and on the in-store menu at 1472 Queen St W, Queen West at the Parkdale edge. Check the current listings on this page before travelling for one item.",
      },
      {
        q: "Do I need an appointment to browse Premium Weed on Queen Street West?",
        a: "No. Queen Lansdowne Cannabis is walk-in only during listed hours, which are 24 hours daily. Adults 19+ must show government-issued photo ID.",
      },
      {
        q: "Should I compare Premium Weed with AAA+ before I visit?",
        a: "Yes, if you want a different menu starting point. Premium and AAA+ are separate collections on the same Queen West flower menu. Compare names, weights, and posted details, then ask staff in store for help reading the current jars.",
      },
    ],
    relatedLinks: meshLinks("/premium-weed"),
  },
  "AAA+": {
    seoTitle: "AAA+ Weed near Lansdowne | Queen Lansdowne Cannabis",
    metaDescription:
      "Browse AAA+ Weed near Lansdowne at Queen Lansdowne Cannabis, 1472 Queen St W. Open 24 hours daily. Compare Exotic, Premium, AA, and Budget Weed on Queen West.",
    h1: "AAA+ Weed near Lansdowne on Queen Street West",
    intro:
      "AAA+ Weed is the mid-to-upper flower collection at Queen Lansdowne Cannabis, a short walk from the Queen Street West at Lansdowne streetcar stop. Treat AAA+ as this store’s browsing label, then compare the actual product information shown for each listing.",
    sections: [
      {
        heading: "AAA+ Weed beside the Lansdowne stop",
        body: "After you step off the 501 Queen at Queen Street West at Lansdowne Avenue, stay on Queen Street and look for the south-side sign at 1472. AAA+ Weed is one of five flower collections inside. Overnight, the 301 Queen Blue Night uses the same corridor. Live times belong in a TTC planner, not on this collection page.",
      },
      {
        heading: "Read AAA+ as menu language, then compare siblings",
        body: "AAA and AAA+ are common Canadian cannabis shorthand. They are not one national grading system. On this Queen West menu, AAA+ Weed sits between Premium Weed and AA Weed. Continue to Exotic Weed or Budget Weed when you want the top or value starting points. The homepage remains the NAP hub; the 24-hour page owns overnight hours.",
      },
    ],
    faqs: [
      {
        q: "Is AAA+ a regulated grade at Queen Lansdowne Cannabis?",
        a: "No. AAA+ Weed is this store’s named collection for the tier. It is not a government laboratory category. Compare cultivar, THC/CBD where listed, producer, and package details on each product.",
      },
      {
        q: "How do I reach the AAA+ collection from the 501 Queen stop?",
        a: "Ride the 501 Queen to Queen Street West at Lansdowne Avenue, then stay on Queen Street and enter the street-level shop at 1472 Queen St W. Staff can point you to the AAA+ Weed section inside.",
      },
      {
        q: "What should I compare besides the AAA+ label?",
        a: "Use the listing details on this page — name, weight, and any posted cannabinoid information — then compare Exotic Weed, Premium Weed, AA Weed, or Budget Weed if you want a different Queen West starting point.",
      },
    ],
    relatedLinks: meshLinks("/aaa-weed"),
  },
  AA: {
    seoTitle: "AA Weed Queen West / Parkdale | Queen Lansdowne Cannabis",
    metaDescription:
      "Browse AA Weed at Queen Lansdowne Cannabis on Queen West at the Parkdale edge, 1472 Queen St W. Open 24 hours daily. Compare Exotic, Premium, AAA+, and Budget Weed.",
    h1: "AA Weed at the Parkdale edge of Queen West",
    intro:
      "AA Weed is the everyday flower collection at Queen Lansdowne Cannabis, the Parkdale-edge shop at 1472 Queen St W. The section name helps narrow the browse. It is not a promise about one THC range, aroma, or cultivation method.",
    sections: [
      {
        heading: "AA Weed on the Parkdale-edge menu",
        body: "This collection is for shoppers who want a middle Queen West starting point — above Budget Weed, below AAA+ Weed. Open each AA listing for the product information attached to that item. Walk-ins are welcome 24 hours daily with photo ID for adults 19+.",
      },
      {
        heading: "AA Weed beside the other four collections",
        body: "Continue to Budget Weed when you want the value row, or to AAA+ Weed and Premium Weed when you want a higher-positioned starting point. Exotic Weed is the top collection. Use the visit guide for the south-side door and curb parking, and the 24-hour Queen West page when the question is open-now.",
      },
    ],
    faqs: [
      {
        q: "What is AA Weed used for on this Queen West menu?",
        a: "AA Weed is a protected commercial owner that organizes part of the flower menu at 1472 Queen St W. Use it to narrow the browse, then read each listing rather than treating the letters as a laboratory result.",
      },
      {
        q: "Is AA Weed the same as Budget Weed at 1472 Queen St W?",
        a: "No. AA Weed and Budget Weed are separate collections on the same Queen Lansdowne Cannabis menu. Budget is the value-oriented starting point; AA sits above it as a distinct browsing row.",
      },
      {
        q: "Can staff help me compare AA listings in store?",
        a: "Yes. Walk in during listed hours — 24 hours daily — with government-issued photo ID. Staff can help you compare category, package size, and posted details on current AA Weed jars.",
      },
    ],
    relatedLinks: meshLinks("/aa-weed"),
  },
  BUDGET: {
    seoTitle: "Budget Weed on Queen St W | Queen Lansdowne Cannabis",
    metaDescription:
      "Browse Budget Weed at Queen Lansdowne Cannabis on Queen St W, 1472 Queen Street West. Open 24 hours daily. The collection name does not lock in a current price or deal.",
    h1: "Budget Weed at Queen Lansdowne Cannabis on Queen St W",
    intro:
      "Budget Weed is the value-oriented flower collection at Queen Lansdowne Cannabis, 1472 Queen St W. The collection name identifies a place to start browsing. It does not establish a current price, promotion, stock, or availability claim.",
    sections: [
      {
        heading: "Budget Weed as a value starting point on Queen St W",
        body: "Browse the flower presented in Budget Weed and open each listing for the product information attached to that item. Price position and quality characteristics overlap imperfectly. A useful comparison looks at weight, cultivar, and posted details rather than assuming the word Budget settles every question.",
      },
      {
        heading: "Value row, then the rest of Queen West",
        body: "If you want a step up from Budget Weed, AA Weed is the next collection on this menu, followed by AAA+ Weed, Premium Weed, and Exotic Weed. Confirm the Queen Street door on the visit guide. Overnight walk-ins use the same 24-hour retail hours as every other hour. Delivery from this store is separately 10:00 a.m. to 10:00 p.m.",
      },
    ],
    faqs: [
      {
        q: "Does Budget Weed mean a locked-in price on Queen West?",
        a: "No. The collection name does not establish a current price, promotion, or availability claim. Compare the posted information on each listing, and confirm details in store at 1472 Queen St W.",
      },
      {
        q: "When can I walk in for Budget Weed at this Parkdale-edge shop?",
        a: "Queen Lansdowne Cannabis is open 24 hours daily. Adults 19+ walk in with government-issued photo ID. No appointment is required.",
      },
      {
        q: "Where should value shoppers start besides this collection?",
        a: "AA Weed is the next Queen West flower collection above Budget. Cheap-weed browsing notes also live under the existing cheap-weed information page. The homepage remains the NAP and map hub.",
      },
    ],
    relatedLinks: meshLinks("/budget-weed"),
  },
};

const PINKY_TIER_ADDITIONS: Record<string, { section: { heading: string; body: string }; links: { label: string; href: string }[] }> = {
  "EXOTIC": {
    "section": {
      "heading": "What “Exotic Weed” Means on This Menu",
      "body": "Exotic is one of cannabis culture's broadest quality words. It can point to unusual genetics, distinctive aroma, rarity, visual presentation or simply a retailer's highest-positioned flower section.\n\nIt is not a government cannabis grade and it does not guarantee one THC range.\n\nAt Queen Lansdowne Cannabis, Exotic Weed is a named browsing owner. The useful way to read the page is to treat Exotic as this store's category label, then compare the actual products shown in the current listing.\n\nWhen adults talk about exotic flower, they may be reacting to traits such as:\n\nuncommon or memorable cultivar names;\n\npronounced aroma;\n\nvisible trichomes;\n\nbud structure;\n\ntrim;\n\nfreshness;\n\noverall bag appeal.\n\nThose traits should still be evaluated from the real product information. A dramatic name or high THC number alone does not prove that every quality characteristic is better.\n\nFor a deeper explanation of how Exotic, Premium, AAA+, AA and Budget relate as browsing language, use the Flower Quality & Tiers guide."
    },
    "links": [
      {
        "label": "Flower Quality & Tiers",
        "href": "/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic"
      },
      {
        "label": "What Does Good Weed Mean?",
        "href": "/resources/flower-guides/what-does-good-weed-mean"
      },
      {
        "label": "Terpenes, Gas & Loud",
        "href": "/resources/flower-guides/terpenes-gas-loud-aroma"
      }
    ]
  },
  "PREMIUM": {
    "section": {
      "heading": "Premium Weed Is a Positioning Term, Not One Formula",
      "body": "Premium usually means a product or category is positioned above a standard or value starting point.\n\nIn cannabis, that positioning may reflect a combination of genetics, appearance, aroma, trim, cure, freshness, producer reputation or batch characteristics.\n\nThere is no universal rule saying Premium Weed must have one exact THC percentage or one exact bud size.\n\nQueen Lansdowne's Premium Weed route should therefore stay focused on the store's current Premium category while the resource centre explains the broader quality language.\n\nWhen comparing products within the category, read the legal label and the current listing rather than assuming the word Premium answers every question."
    },
    "links": [
      {
        "label": "Flower Quality & Tiers",
        "href": "/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic"
      },
      {
        "label": "THC vs Weed Quality",
        "href": "/resources/flower-guides/thc-vs-weed-quality"
      },
      {
        "label": "Drying, Curing & Freshness",
        "href": "/resources/flower-guides/drying-curing-freshness"
      }
    ]
  },
  "AAA+": {
    "section": {
      "heading": "What AAA+ Weed Means as a Store Tier",
      "body": "AAA and AAA+ are common Canadian cannabis quality shorthand.\n\nThey are not one regulated national grading system.\n\nThe plus sign usually communicates positioning above a basic AAA label, but retailers do not all use an identical scoring formula.\n\nAt Queen Lansdowne Cannabis, AAA+ Weed is the established owner for this tier. That route should stay intact.\n\nUse the tier to narrow the menu, then compare actual product information such as cultivar, THC/CBD, producer, aroma description and current package details."
    },
    "links": [
      {
        "label": "Top Shelf, Mids & Quads",
        "href": "/resources/flower-guides/top-shelf-mids-quads"
      },
      {
        "label": "Flower Quality & Tiers",
        "href": "/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic"
      },
      {
        "label": "Bag Appeal",
        "href": "/resources/flower-guides/bag-appeal"
      }
    ]
  },
  "AA": {
    "section": {
      "heading": "AA Weed as a Browsing Category",
      "body": "AA is familiar cannabis grade shorthand, but it is not a government-defined laboratory category.\n\nAt Queen Lansdowne Cannabis, AA Weed is a protected commercial owner used to organize the flower menu.\n\nThe section name helps narrow the browse. It should not be treated as a promise about one exact THC range, aroma, bud size or cultivation method.\n\nIf a shopper wants to understand why cannabis gets described with letter grades, top shelf, mids or quads, the educational guides explain the vocabulary without changing the AA Weed owner."
    },
    "links": [
      {
        "label": "Top Shelf, Mids & Quads",
        "href": "/resources/flower-guides/top-shelf-mids-quads"
      },
      {
        "label": "Flower Quality & Tiers",
        "href": "/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic"
      },
      {
        "label": "What Does Good Weed Mean?",
        "href": "/resources/flower-guides/what-does-good-weed-mean"
      }
    ]
  },
  "BUDGET": {
    "section": {
      "heading": "Budget Weed Means Value Positioning, Not a Safety or Potency Verdict",
      "body": "Budget is a value-oriented browsing term.\n\nIt should not be used as shorthand for unsafe, unusable or automatically low-THC flower.\n\nQueen Lansdowne's Budget Weed route is the established owner for shoppers who want to begin with value.\n\nThe actual products within that section still have their own cultivar, producer, legal label, cannabinoid information and current listing details.\n\nPrice position and quality characteristics overlap imperfectly. A useful comparison looks at the whole product rather than assuming the word Budget settles every question."
    },
    "links": [
      {
        "label": "Budget vs Premium Flower",
        "href": "/resources/flower-guides/budget-vs-premium-flower"
      },
      {
        "label": "Flower Quality & Tiers",
        "href": "/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic"
      },
      {
        "label": "THC vs Weed Quality",
        "href": "/resources/flower-guides/thc-vs-weed-quality"
      }
    ]
  }
};
for (const [key, addition] of Object.entries(PINKY_TIER_ADDITIONS)) {
  const target = TIER_SEO[key];
  if (!target) continue;
  target.sections = [...target.sections, addition.section];
  target.relatedLinks = [...target.relatedLinks, ...addition.links.filter((link) => !target.relatedLinks.some((current) => current.href === link.href))];
}
