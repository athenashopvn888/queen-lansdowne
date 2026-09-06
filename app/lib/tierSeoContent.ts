export interface TierSeoData {
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
  relatedLinks: { label: string; href: string }[];
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Weed & Cannabis Flower Toronto | Queen Lansdowne Cannabis",
    metaDescription: "Explore Exotic Weed and cannabis flower at Queen Lansdowne Cannabis in Toronto, then compare the store’s five dedicated Weed flower collections.",
    h1: "Exotic Weed & Cannabis Flower in Toronto",
    intro: "Explore the Exotic Weed flower collection at Queen Lansdowne Cannabis. Review the names, weights and product details presented for this collection, then compare another Weed flower collection when it helps narrow your browsing.",
    sections: [
      { heading: "Browse Exotic Weed Flower", body: "Start with the flower presented in Exotic Weed, then open an individual product listing for the details attached to that item." },
      { heading: "Compare Queen Lansdowne Weed Collections", body: "Exotic Weed can be compared with Premium Weed, AAA+ Weed, AA Weed and Budget Weed without treating one collection name as a promise about every item." },
    ],
    faqs: [
      { q: "What is Exotic Weed at Queen Lansdowne Cannabis?", a: "Exotic Weed is one of Queen Lansdowne Cannabis’s five dedicated cannabis flower collections." },
      { q: "How can I compare Exotic Weed with another collection?", a: "Review the product information presented in Exotic Weed, then use the collection links to compare Premium Weed, AAA+ Weed, AA Weed or Budget Weed." },
    ],
    relatedLinks: [
      { label: "Premium Weed & Flower", href: "/premium-weed" }, { label: "AAA+ Weed & Flower", href: "/aaa-weed" }, { label: "AA Weed & Flower", href: "/aa-weed" }, { label: "Budget Weed & Flower", href: "/budget-weed" }, { label: "Explore Queen Lansdowne Weed in Toronto", href: "/weed-dispensary-toronto" },
    ],
  },
  PREMIUM: {
    seoTitle: "Premium Weed & Cannabis Flower Toronto | Queen Lansdowne Cannabis",
    metaDescription: "Explore Premium Weed and cannabis flower at Queen Lansdowne Cannabis in Toronto, with direct paths to the store’s other Weed flower collections.",
    h1: "Premium Weed & Cannabis Flower in Toronto",
    intro: "Browse the Premium Weed flower collection from Queen Lansdowne Cannabis. Use the product details shown with each item, then compare another Weed flower collection when you want a different starting point.",
    sections: [
      { heading: "Browse Premium Weed Flower", body: "Explore the flower grouped within Premium Weed and open individual listings for the product information presented for each item." },
      { heading: "Compare More Weed Flower Collections", body: "Move between Premium Weed, Exotic Weed, AAA+ Weed, AA Weed and Budget Weed when comparing more than one Queen Lansdowne flower collection." },
    ],
    faqs: [
      { q: "What is Premium Weed at Queen Lansdowne Cannabis?", a: "Premium Weed is one of Queen Lansdowne Cannabis’s five dedicated cannabis flower collections." },
      { q: "Can I compare Premium Weed with the other flower collections?", a: "Yes. Use the collection links to continue to Exotic Weed, AAA+ Weed, AA Weed or Budget Weed." },
    ],
    relatedLinks: [
      { label: "Exotic Weed & Flower", href: "/exotic-weed" }, { label: "AAA+ Weed & Flower", href: "/aaa-weed" }, { label: "AA Weed & Flower", href: "/aa-weed" }, { label: "Budget Weed & Flower", href: "/budget-weed" }, { label: "Queen Lansdowne Weed Dispensary in Toronto", href: "/weed-dispensary-toronto" },
    ],
  },
  "AAA+": {
    seoTitle: "AAA+ Weed & Cannabis Flower Toronto | Queen Lansdowne Cannabis",
    metaDescription: "Explore AAA+ Weed and cannabis flower at Queen Lansdowne Cannabis in Toronto, then compare the other dedicated Weed flower collections.",
    h1: "AAA+ Weed & Cannabis Flower in Toronto",
    intro: "Explore Queen Lansdowne Cannabis AAA+ Weed as its own flower collection. Review the information presented with individual products, or compare AAA+ Weed with another Weed flower collection.",
    sections: [
      { heading: "Explore AAA+ Weed Flower", body: "Start with the flower presented in AAA+ Weed and open the individual listings that interest you for their product details." },
      { heading: "Compare AAA+ Weed with Other Collections", body: "Exotic Weed, Premium Weed, AA Weed and Budget Weed offer four additional Queen Lansdowne flower collections to compare." },
    ],
    faqs: [
      { q: "What is AAA+ Weed at Queen Lansdowne Cannabis?", a: "AAA+ Weed is one of Queen Lansdowne Cannabis’s five dedicated cannabis flower collections." },
      { q: "What can I compare with AAA+ Weed?", a: "Use the collection links to compare AAA+ Weed with Exotic Weed, Premium Weed, AA Weed and Budget Weed." },
    ],
    relatedLinks: [
      { label: "Exotic Weed & Flower", href: "/exotic-weed" }, { label: "Premium Weed & Flower", href: "/premium-weed" }, { label: "AA Weed & Flower", href: "/aa-weed" }, { label: "Budget Weed & Flower", href: "/budget-weed" }, { label: "See the broader Toronto Weed guide", href: "/weed-dispensary-toronto" },
    ],
  },
  AA: {
    seoTitle: "AA Weed & Cannabis Flower Toronto | Queen Lansdowne Cannabis",
    metaDescription: "Explore AA Weed and cannabis flower at Queen Lansdowne Cannabis in Toronto, then compare the store’s other Weed flower collections.",
    h1: "AA Weed & Cannabis Flower in Toronto",
    intro: "Browse Queen Lansdowne Cannabis AA Weed as a dedicated flower collection. Review individual product details or continue to another Weed flower collection for a broader comparison.",
    sections: [
      { heading: "Browse AA Weed Flower", body: "Explore the flower presented in AA Weed and use each individual listing for the product information attached to that item." },
      { heading: "Compare AA Weed with Other Collections", body: "Continue to Exotic Weed, Premium Weed, AAA+ Weed or Budget Weed when you want to compare another Queen Lansdowne flower collection." },
    ],
    faqs: [
      { q: "What is AA Weed at Queen Lansdowne Cannabis?", a: "AA Weed is one of Queen Lansdowne Cannabis’s five dedicated cannabis flower collections." },
      { q: "Can I compare AA Weed with another collection?", a: "Yes. Use the collection links to compare AA Weed with Exotic Weed, Premium Weed, AAA+ Weed or Budget Weed." },
    ],
    relatedLinks: [
      { label: "Exotic Weed & Flower", href: "/exotic-weed" }, { label: "Premium Weed & Flower", href: "/premium-weed" }, { label: "AAA+ Weed & Flower", href: "/aaa-weed" }, { label: "Budget Weed & Flower", href: "/budget-weed" }, { label: "Explore Weed at Queen Lansdowne Cannabis", href: "/weed-dispensary-toronto" },
    ],
  },
  BUDGET: {
    seoTitle: "Budget Weed & Cannabis Flower Toronto | Queen Lansdowne Cannabis",
    metaDescription: "Explore Budget Weed and cannabis flower at Queen Lansdowne Cannabis in Toronto without implying a current price, promotion or availability.",
    h1: "Budget Weed & Cannabis Flower in Toronto",
    intro: "Explore the Budget Weed flower collection at Queen Lansdowne Cannabis. The collection name identifies a place to browse flower and does not establish a current price, promotion, stock or availability claim.",
    sections: [
      { heading: "Explore Budget Weed Flower", body: "Browse the flower presented in Budget Weed and use each individual listing for the product information attached to that item." },
      { heading: "Compare Budget Weed with Other Collections", body: "Continue to Exotic Weed, Premium Weed, AAA+ Weed or AA Weed when you want to compare another Queen Lansdowne flower collection." },
    ],
    faqs: [
      { q: "What is Budget Weed at Queen Lansdowne Cannabis?", a: "Budget Weed is one of Queen Lansdowne Cannabis’s five dedicated cannabis flower collections." },
      { q: "Does Budget Weed confirm a current price or deal?", a: "No. The collection name does not establish a current price, promotion or availability claim." },
    ],
    relatedLinks: [
      { label: "Exotic Weed & Flower", href: "/exotic-weed" }, { label: "Premium Weed & Flower", href: "/premium-weed" }, { label: "AAA+ Weed & Flower", href: "/aaa-weed" }, { label: "AA Weed & Flower", href: "/aa-weed" }, { label: "Queen Lansdowne Weed Dispensary in Toronto", href: "/weed-dispensary-toronto" },
    ],
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
