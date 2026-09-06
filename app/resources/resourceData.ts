export type ResourceAuthor = {
  name: string;
  handle: string;
  role: string;
  type: "Person" | "Organization";
};

export type ResourceLink = {
  title: string;
  href: string;
  description: string;
};

export type ResourceCard = {
  title: string;
  href: string;
  description: string;
  category: string;
  author: string;
  updated: string;
};

export type ResourcePage = {
  faqs?: { question: string; answer: string }[];
  pageNumber: number;
  sourceHeading: string;
  route: string;
  kind: "main" | "hub" | "article" | "update";
  pageType: string;
  parentRoute: string;
  h1: string;
  seoTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  supportingKeywords: string[];
  author: ResourceAuthor;
  datePublished: string;
  dateModified: string;
  heroImage: string;
  excerpt: string;
  body: string;
  secondTake: (ResourceAuthor & { label: string; body: string }) | null;
  linkRoutes: string[];
  childRoutes: string[];
  relatedRoutes: string[];
  commercialLinks: ResourceLink[];
  cards: ResourceCard[];
};

export const SITE_URL = "https://www.queenlansdownecannabis.ca";
export const STORE_NAME = "Queen Lansdowne Cannabis";
export const STORE_ROUTE = "/weed-dispensary-toronto";

const BASE_RESOURCE_ROUTE_LABELS: Record<string, string> = {
  "/": "Home",
  "/resources": "Resource Centre",
  "/resources/cannabis-101": "Cannabis 101",
  "/resources/cannabis-dispensary-vs-weed-dispensary": "Cannabis Dispensary vs. Weed Dispensary",
  "/resources/weed-flower-guide": "Weed Flower Guide",
  "/resources/pre-roll-guides": "Pre-Roll Guides",
  "/resources/edibles-guides": "Edibles Guides",
  "/resources/vape-guides": "Vape Guides",
  "/resources/value-guides": "Value Guides",
  "/resources/local-guides": "Local Guides",
  "/resources/store-updates": "Store Updates",
  "/resources/native-smokes": "Native Smokes",
  "/resources/magic-mushroom-guides": "Magic Mushroom Guides",
  "/weed-dispensary-toronto": "Queen Lansdowne Cannabis store page",
  "/budget-weed": "Budget Weed flower",
  "/aa-weed": "AA Weed flower",
  "/aaa-weed": "AAA+ Weed flower",
  "/premium-weed": "Premium Weed flower",
  "/exotic-weed": "Exotic Weed flower",
  "/items/prerolls": "Pre-rolls",
  "/items/edibles": "Edibles",
  "/items/vapes": "Nicotine vapes",
  "/items/vape-disposables": "THC vapes",
  "/items/concentrates": "Concentrates",
  "/items/magic": "Magic Stuff",
  "/items/cigarettes": "Cigarettes",
  "/info/native-cigarettes-toronto": "Native cigarettes information",
  "/faq": "FAQ",
  "/resources/cannabis-101/how-to-read-a-cannabis-menu": "How to Read a Cannabis Menu Without Getting Lost",
  "/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic": "AA vs AAA+ vs Premium vs Exotic: What the Flower Sections Actually Do",
  "/resources/flower-guides/budget-vs-premium-flower": "Budget vs Premium Flower: Two Different Starting Points",
  "/resources/pre-roll-guides/pre-rolls-vs-flower": "Pre-Rolls vs Flower: Which Format Fits the Visit?",
  "/resources/edibles-guides/how-long-do-edibles-take": "How Long Do Edibles Take?",
  "/resources/vape-guides/thc-vapes-vs-flower": "THC Vapes vs Flower: What Changes With the Format?",
  "/resources/value-guides/how-to-compare-flower-prices": "How to Compare Flower Prices Without Ignoring Weight",
  "/resources/local-guides/weed-dispensary-in-queen-west": "Weed Dispensary in Queen West: A Queen and Lansdowne Guide",
  "/resources/native-smokes/native-cigarettes-guide": "Native Cigarettes in Toronto: What to Check Before Visiting",
  "/resources/native-smokes/packs-vs-cartons": "Cigarette Packs vs Cartons: What the Listing Means",
  "/resources/magic-mushroom-guides/magic-mushroom-formats-explained": "Magic Mushroom Formats Explained at the Menu Level",
  "/resources/magic-mushroom-guides/how-to-read-a-magic-mushroom-menu": "How to Read a Magic Mushroom Menu Clearly",
  "/resources/store-updates/resource-centre-launch": "The Queen Lansdowne Cannabis Resource Centre Is Now Live"
};

const BASE_RESOURCE_PAGES: ResourcePage[] = [
  {
    "pageNumber": 1,
    "sourceHeading": "MAIN RESOURCE CENTRE",
    "route": "/resources",
    "kind": "main",
    "pageType": "Resource Centre landing page",
    "parentRoute": "",
    "h1": "Queen Lansdowne Cannabis Resource Centre",
    "seoTitle": "Cannabis Resource Centre | Queen Lansdowne Cannabis",
    "metaDescription": "Explore Queen Lansdowne Cannabis resources for flower, pre-rolls, edibles, THC vapes, value shopping, native smokes, specialty products, and Queen West visits.",
    "primaryKeyword": "Queen Lansdowne Cannabis resources",
    "supportingKeywords": [
      "cannabis guides Queen West",
      "Queen Lansdowne Cannabis menu guide",
      "native cigarettes Toronto",
      "magic mushroom menu Toronto"
    ],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-07-11",
    "dateModified": "2026-07-11",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "The Queen Lansdowne Cannabis Resource Centre keeps the useful guides in one place: flower, pre-rolls, edibles, THC vapes, value shopping, native smokes, specialty products, and Queen West visit help.",
    "body": "The Queen Lansdowne Cannabis Resource Centre keeps the useful guides in one place: flower, pre-rolls, edibles, THC vapes, value shopping, native smokes, specialty products, and Queen West visit help.\n\nThese Queen Lansdowne Cannabis resources keep the useful stuff close: category explainers, local visit help, and current category links when details can change.\n\nThese pages are designed to explain categories and help shoppers use the current menu more confidently. Product names, prices, weights, and selection can change, so each resource points back to the appropriate current category whenever current details matter.\n\n### Start with the topic you need\n\n**Cannabis 101**\nUnderstand the menu, product formats, listing details, and the difference between general guidance and current product information.\n\n**Flower Guides**\nLearn how Budget, AA, AAA+, Premium, and Exotic sections organize the flower menu and how to compare listings without treating a tier name as a fixed promise.\n\n**Pre-Roll Guides**\nCompare pre-rolls with flower and understand the listing details that matter when convenience is part of the decision.\n\n**Edibles Guides**\nRead edible labels and menu information more carefully, including the package timing details of edible cannabis.\n\n**Vape Guides**\nSeparate THC vape questions from flower questions and check format, compatibility, and current product details.\n\n**Value Guides**\nCompare price with weight, format, and current listing information instead of reacting to one number by itself.\n\n**Local Guides**\nFind practical Queen West and Lansdowne store information connected to the store page, current hours, contact details, and category links.\n\n**Native Smokes**\nReview informational guides about native cigarettes, pack and carton terminology, and current store selection.\n\n**Magic Mushroom Guides**\nUnderstand how specialty products may be organized on a menu and which label details should be checked before choosing.\n\n**Store Updates**\nRead official Queen Lansdowne Cannabis announcements about the Resource Centre, hours, services, and other real store changes.\n\n### Current information comes first\n\nResources explain the subject. The current menu provides current product details. The store page provides current visit information. When one fact could change the trip, use the current page or contact the store rather than relying on an older guide.\n\n### Explore Queen Lansdowne Cannabis\n\nQueen Lansdowne Cannabis is located near Queen Street West and Lansdowne in Toronto. Use the main store page for current location, hours, contact details, and visit planning.\n\n**Primary links:**\n- Store page: `/weed-dispensary-toronto`\n- Flower: `/budget-weed`, `/aa-weed`, `/aaa-weed`, `/premium-weed`, `/exotic-weed`\n- Pre-rolls: `/items/prerolls`\n- Edibles: `/items/edibles`\n- Nicotine vapes: `/items/vapes`\n- THC vapes: `/items/vape-disposables`\n- Concentrates: `/items/concentrates`\n- Magic Stuff: `/items/magic`\n- Native cigarettes: `/info/native-cigarettes-toronto`\n- FAQ: `/faq`",
    "secondTake": null,
    "linkRoutes": [
      "/weed-dispensary-toronto",
      "/budget-weed",
      "/aa-weed",
      "/aaa-weed",
      "/premium-weed",
      "/exotic-weed",
      "/items/prerolls",
      "/items/edibles",
      "/items/vapes",
      "/items/vape-disposables",
      "/items/concentrates",
      "/items/magic",
      "/info/native-cigarettes-toronto",
      "/faq"
    ],
    "childRoutes": [
      "/resources/cannabis-101",
      "/resources/weed-flower-guide",
      "/resources/pre-roll-guides",
      "/resources/edibles-guides",
      "/resources/vape-guides",
      "/resources/value-guides",
      "/resources/local-guides",
      "/resources/store-updates",
      "/resources/native-smokes",
      "/resources/magic-mushroom-guides"
    ],
    "relatedRoutes": [
      "/resources/cannabis-101",
      "/resources/weed-flower-guide",
      "/resources/pre-roll-guides",
      "/resources/edibles-guides",
      "/resources/vape-guides",
      "/resources/value-guides",
      "/resources/local-guides",
      "/resources/store-updates",
      "/resources/native-smokes",
      "/resources/magic-mushroom-guides"
    ],
    "commercialLinks": [
      {
        "title": "Queen Lansdowne Cannabis store page",
        "href": "/weed-dispensary-toronto",
        "description": "Use the store page for current location, hours, contact details, and visit planning."
      },
      {
        "title": "Budget flower",
        "href": "/budget-weed",
        "description": "Browse the current Budget flower section."
      },
      {
        "title": "AA flower",
        "href": "/aa-weed",
        "description": "Browse the current AA flower section."
      },
      {
        "title": "AAA+ flower",
        "href": "/aaa-weed",
        "description": "Browse the current AAA+ flower section."
      },
      {
        "title": "Premium flower",
        "href": "/premium-weed",
        "description": "Browse the current Premium flower section."
      },
      {
        "title": "Exotic flower",
        "href": "/exotic-weed",
        "description": "Browse the current Exotic flower section."
      },
      {
        "title": "Pre-rolls",
        "href": "/items/prerolls",
        "description": "Browse current pre-roll listings."
      },
      {
        "title": "Edibles",
        "href": "/items/edibles",
        "description": "Browse current edible listings."
      },
      {
        "title": "Nicotine vapes",
        "href": "/items/vapes",
        "description": "Browse current nicotine vape listings."
      },
      {
        "title": "THC vapes",
        "href": "/items/vape-disposables",
        "description": "Browse current THC vape listings."
      },
      {
        "title": "Concentrates",
        "href": "/items/concentrates",
        "description": "Browse current concentrate listings."
      },
      {
        "title": "Magic Stuff",
        "href": "/items/magic",
        "description": "Browse current specialty-product listings."
      },
      {
        "title": "Native cigarettes information",
        "href": "/info/native-cigarettes-toronto",
        "description": "Read the current native-cigarette information page."
      },
      {
        "title": "FAQ",
        "href": "/faq",
        "description": "Check common store questions."
      }
    ],
    "cards": [
      {
        "title": "Cannabis 101: Start With the Menu, Not the Noise",
        "href": "/resources/cannabis-101",
        "description": "Cannabis terminology can become complicated long before it becomes useful. This section keeps the starting point simple: understand the product format, read the current listing, and know which details belong to the menu,",
        "category": "Menu guide",
        "author": "Lana Queen",
        "updated": "2026-07-11"
      },
      {
        "title": "Flower Guides: Understand the Sections Before Comparing Strains",
        "href": "/resources/weed-flower-guide",
        "description": "Queen Lansdowne Cannabis organizes flower into Budget, AA, AAA+, Premium, and Exotic sections. Those labels help shoppers decide where to begin, but the current listing still carries the details that complete the compari",
        "category": "Menu guide",
        "author": "Lana Queen",
        "updated": "2026-07-11"
      },
      {
        "title": "Pre-Roll Guides",
        "href": "/resources/pre-roll-guides",
        "description": "Pre-rolls have a straightforward appeal: the flower is already rolled. The menu comparison still deserves attention. Pack count, size, item details, and whether an item is standard or infused can change what the listing",
        "category": "Menu guide",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      },
      {
        "title": "Edibles Guides: Read the Label Before Making Assumptions",
        "href": "/resources/edibles-guides",
        "description": "This section helps shoppers compare edible formats, package counts, listed amounts, and current menu details.\n\n### Featured guide\n\n**How to Read Edible Package Details**\nA practical guide to product formats, package information, and current listings.\n\n### Quick note\n\nRead the full product package and listing details rather than guessing from the menu title.",
        "category": "Menu guide",
        "author": "Lana Queen",
        "updated": "2026-07-11"
      },
      {
        "title": "THC Vape Guides",
        "href": "/resources/vape-guides",
        "description": "THC vapes have their own menu logic. The first question is usually the format: cartridge, disposable, or another listed type. Compatibility may matter for cartridge products, while disposable products are sold as self-co",
        "category": "Menu guide",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      },
      {
        "title": "Value Guides: Compare the Full Listing, Not One Number",
        "href": "/resources/value-guides",
        "description": "Value shopping is not simply finding the lowest number on the page. A useful comparison includes the listed weight, product section, current price, and item details. A lower price attached to a different size is not the ",
        "category": "Menu guide",
        "author": "Quinn West",
        "updated": "2026-07-11"
      },
      {
        "title": "Queen West and Lansdowne Local Guides",
        "href": "/resources/local-guides",
        "description": "Queen Street West is busy, so a store visit should be easy to plan. These local guides connect Queen Lansdowne Cannabis to the neighbourhood in a useful way: the address, the store page, the correct men",
        "category": "Menu guide",
        "author": "Quinn West",
        "updated": "2026-07-11"
      },
      {
        "title": "Queen Lansdowne Cannabis Store Updates",
        "href": "/resources/store-updates",
        "description": "This section contains official Queen Lansdowne Cannabis announcements. It is not a general news feed and it will not be filled with routine promotional posts.",
        "category": "Menu guide",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      },
      {
        "title": "Native Smokes and Cigarette Guides",
        "href": "/resources/native-smokes",
        "description": "This section helps Queen West shoppers compare Native cigarette brands, pack or carton wording, and current listed prices.\n\nUse the current cigarette category before visiting when one brand or unit matters.\n\n### Guides in this section\n\n**Native Cigarettes in Toronto: What to Check Before Visiting**\nCompare current brand, variety, unit, and price information.\n\n**Cigarette Packs vs Cartons: What the Listing Means**\nA simple explanation of units and packaging.\n\nCurrent menu category: `/items/cigarettes`.",
        "category": "Menu guide",
        "author": "Quinn West",
        "updated": "2026-07-11"
      },
      {
        "title": "Magic Mushroom and Specialty-Product Guides",
        "href": "/resources/magic-mushroom-guides",
        "description": "Specialty-product menus can use different formats, package sizes, and label conventions. This section helps shoppers compare those listings without guessing from a product name alone.\n\nUse the current Magic Stuff category before planning a visit around one item.\n\n### Guides in this section\n\n**Magic Mushroom Formats Explained**\nA menu-level overview of listed formats and package information.\n\n**How to Read a Magic Mushroom Menu**\nA practical guide to product name, format, package amount, and current listing details.",
        "category": "Menu guide",
        "author": "Lana Queen",
        "updated": "2026-07-11"
      }
    ]
  },
  {
    "pageNumber": 2,
    "sourceHeading": "CANNABIS 101 HUB",
    "route": "/resources/cannabis-101",
    "kind": "hub",
    "pageType": "Queen Lansdowne Cannabis · Queen West",
    "parentRoute": "/resources",
    "h1": "Cannabis 101: Start With the Menu, Not the Noise",
    "seoTitle": "Cannabis 101 Guides | Queen Lansdowne Cannabis",
    "metaDescription": "Cannabis 101 resources from Queen Lansdowne Cannabis explain menu categories, product formats, listing details, and practical ways to browse current information.",
    "primaryKeyword": "cannabis 101 guide",
    "supportingKeywords": [
      "cannabis menu guide",
      "cannabis product formats",
      "beginner cannabis information Toronto"
    ],
    "author": {
      "name": "Lana Queen",
      "handle": "@LanaOnQueen",
      "role": "Resource Editor",
      "type": "Person"
    },
    "datePublished": "2026-07-11",
    "dateModified": "2026-07-11",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Cannabis terminology can become complicated long before it becomes useful. This section keeps the starting point simple: understand the product format, read the current listing, and know which details belong to the menu,",
    "body": "Cannabis terminology can become complicated long before it becomes useful. This section keeps the starting point simple: understand the product format, read the current listing, and know which details belong to the menu, the package, or a staff question.\n\nA flower listing, a pre-roll pack, an edible, a THC vape, and a concentrate should not be compared in exactly the same way. Each format has its own practical details. The guides in this section explain those differences without assuming the reader already knows every term.\n\n[Learn how cannabis dispensary, weed dispensary and dispensary near me wording connect](/resources/cannabis-dispensary-vs-weed-dispensary).\n\n### Featured guide\n\n**How to Read a Cannabis Menu Without Getting Lost**\nLearn where to begin, what listing details commonly matter, and how category pages make a large menu easier to understand.\n\n### Continue to product-specific guides\n\n- Flower Guides\n- Pre-Roll Guides\n- Edibles Guides\n- Vape Guides\n- Value Guides\n\n### Quick note\n\nA useful beginner resource should make the reader more comfortable, not make the subject sound exclusive. The best first step is often identifying the product format before comparing individual names.",
    "secondTake": null,
    "linkRoutes": [
      "/resources/cannabis-101/how-to-read-a-cannabis-menu",
      "/weed-dispensary-toronto",
      "/faq"
    ],
    "childRoutes": [
      "/resources/cannabis-101/how-to-read-a-cannabis-menu"
    ],
    "relatedRoutes": [
      "/resources/cannabis-101/how-to-read-a-cannabis-menu",
      "/resources"
    ],
    "commercialLinks": [
      {
        "title": "Queen Lansdowne Cannabis store page",
        "href": "/weed-dispensary-toronto",
        "description": "Use the store page for current location, hours, contact details, and visit planning."
      },
      {
        "title": "FAQ",
        "href": "/faq",
        "description": "Check common store questions."
      }
    ],
    "cards": [
      {
        "title": "How to Read a Cannabis Menu Without Getting Lost",
        "href": "/resources/cannabis-101/how-to-read-a-cannabis-menu",
        "description": "A large cannabis menu becomes easier when you stop reading it as one giant list. Start by choosing the product format. Flower, pre-rolls, edibles, THC vapes, concentrates, accessories, native smokes, and specialty produc",
        "category": "Evergreen resource",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      },
      {
        "title": "Queen Lansdowne Cannabis Resource Centre",
        "href": "/resources",
        "description": "The Queen Lansdowne Cannabis Resource Centre keeps the useful guides in one place: flower, pre-rolls, edibles, THC vapes, value shopping, native smokes, specialty products, and Queen West visit help.",
        "category": "Resource Centre landing page",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      }
    ]
  },
  {
    "pageNumber": 3,
    "sourceHeading": "FLOWER GUIDES HUB",
    "route": "/resources/weed-flower-guide",
    "kind": "hub",
    "pageType": "Category hub",
    "parentRoute": "/resources",
    "h1": "Weed & Cannabis Flower Guide",
    "seoTitle": "Weed & Cannabis Flower Guide Toronto | Queen Lansdowne Cannabis",
    "metaDescription": "Explore Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed at Queen Lansdowne Cannabis, with a simple guide to the five flower collections.",
    "primaryKeyword": "cannabis flower guides for Toronto shoppers",
    "supportingKeywords": [
      "AA vs AAA+ flower",
      "premium flower guide",
      "exotic flower guide",
      "Budget flower Toronto"
    ],
    "author": {
      "name": "Lana Queen",
      "handle": "@LanaOnQueen",
      "role": "Resource Editor",
      "type": "Person"
    },
    "datePublished": "2026-07-11",
    "dateModified": "2026-09-02",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Queen Lansdowne Cannabis brings five Weed flower collections together for shoppers who want to compare different sections before choosing what to explore.",
    "body": "Queen Lansdowne Cannabis brings five Weed flower collections together for shoppers who want to compare different sections before choosing what to explore. Browse Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed, then continue directly to the collection that interests you.\n\nFor broader Weed browsing from Queen Lansdowne Cannabis, explore our established [Explore Queen Lansdowne Cannabis Weed in Toronto](/weed-dispensary-toronto) section.\n\n## Explore Five Weed Flower Collections\n\nEach collection gives you a different section of Queen Lansdowne Cannabis flower to explore. Start anywhere that catches your interest, or compare several collections before narrowing your browsing.\n\n**Exotic Weed**\nExplore the dedicated Exotic Weed flower collection from Queen Lansdowne Cannabis. [Explore Exotic Weed](/exotic-weed).\n\n**Premium Weed**\nBrowse the Premium Weed collection and explore the flower presented within this dedicated section. [Explore Premium Weed](/premium-weed).\n\n**AAA+ Weed**\nExplore Queen Lansdowne Cannabis AAA+ Weed through its dedicated flower collection. [Explore AAA+ Weed](/aaa-weed).\n\n**AA Weed**\nBrowse the dedicated AA Weed flower collection. [Explore AA Weed](/aa-weed).\n\n**Budget Weed**\nExplore Budget Weed through its dedicated Queen Lansdowne Cannabis flower collection. [Explore Budget Weed](/budget-weed).\n\n## Weed, Cannabis and Flower at Queen Lansdowne Cannabis\n\nWeed, cannabis, bud and flower are common terms shoppers use when exploring dispensary selections. Queen Lansdowne Cannabis uses those terms naturally while giving each flower collection a clear identity.\n\nFor broader local Weed browsing rather than one specific flower collection, [Browse Queen Lansdowne Cannabis Weed in Toronto](/weed-dispensary-toronto).\n\n## Find the Flower Collection That Interests You\n\nYou can start with any of the five Weed flower collections and compare others as you browse. Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed each have their own dedicated collection, while the broader Toronto Weed section gives you a wider starting point.\n\n- [Exotic Weed](/exotic-weed)\n- [Premium Weed](/premium-weed)\n- [AAA+ Weed](/aaa-weed)\n- [AA Weed](/aa-weed)\n- [Budget Weed](/budget-weed)\n\n## Weed & Flower FAQs\n\n**What Weed flower collections can I explore at Queen Lansdowne Cannabis?**\nQueen Lansdowne Cannabis organizes flower browsing across five collections: **Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed**.\n\n**Where can I start if I am not looking for a particular flower collection?**\nUse the **Queen Lansdowne Cannabis Weed in Toronto** section for broader Weed browsing, then move into one of the five flower collections when something interests you.\n\n**Can I compare more than one Weed flower collection?**\nYes. You can move between Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed and explore the information presented within each collection.\n\n**Where can I find the broader Queen Lansdowne Cannabis Weed selection?**\nVisit the established **Weed Dispensary in Toronto** section for broader local Weed browsing.",
    "secondTake": null,
    "linkRoutes": [
      "/weed-dispensary-toronto",
      "/budget-weed",
      "/aa-weed",
      "/aaa-weed",
      "/premium-weed",
      "/exotic-weed"
    ],
    "childRoutes": [
      "/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic",
      "/resources/flower-guides/budget-vs-premium-flower"
    ],
    "relatedRoutes": [
      "/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic",
      "/resources/flower-guides/budget-vs-premium-flower",
      "/resources"
    ],
    "commercialLinks": [
      {
        "title": "Explore Queen Lansdowne Cannabis Weed in Toronto",
        "href": "/weed-dispensary-toronto",
        "description": "Browse the established broader local Weed page."
      },
      {
        "title": "Explore Budget Weed",
        "href": "/budget-weed",
        "description": "Explore the dedicated Budget Weed flower collection."
      },
      {
        "title": "Explore AA Weed",
        "href": "/aa-weed",
        "description": "Browse the dedicated AA Weed flower collection."
      },
      {
        "title": "Explore AAA+ Weed",
        "href": "/aaa-weed",
        "description": "Explore the dedicated AAA+ Weed flower collection."
      },
      {
        "title": "Explore Premium Weed",
        "href": "/premium-weed",
        "description": "Browse the dedicated Premium Weed flower collection."
      },
      {
        "title": "Explore Exotic Weed",
        "href": "/exotic-weed",
        "description": "Explore the dedicated Exotic Weed flower collection."
      }
    ],
    "cards": [
      {
        "title": "AA vs AAA+ vs Premium vs Exotic: What the Flower Sections Actually Do",
        "href": "/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic",
        "description": "AA, AAA+, Premium, and Exotic are menu sections that help shoppers narrow a flower selection. They are most useful when treated as starting points rather than automatic verdicts.",
        "category": "Evergreen flower guide",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      },
      {
        "title": "Budget vs Premium Flower: Two Different Starting Points",
        "href": "/resources/flower-guides/budget-vs-premium-flower",
        "description": "Budget and Premium flower do not need a winner. They serve different browsing priorities.",
        "category": "Evergreen comparison guide",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      },
      {
        "title": "Queen Lansdowne Cannabis Resource Centre",
        "href": "/resources",
        "description": "The Queen Lansdowne Cannabis Resource Centre keeps the useful guides in one place: flower, pre-rolls, edibles, THC vapes, value shopping, native smokes, specialty products, and Queen West visit help.",
        "category": "Resource Centre landing page",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      }
    ]
  },
  {
    "pageNumber": 4,
    "sourceHeading": "PRE-ROLL GUIDES HUB",
    "route": "/resources/pre-roll-guides",
    "kind": "hub",
    "pageType": "Category hub",
    "parentRoute": "/resources",
    "h1": "Pre-Roll Guides",
    "seoTitle": "Pre-Roll Cannabis Guides | Queen Lansdowne Cannabis",
    "metaDescription": "Queen Lansdowne Cannabis pre-roll guides explain pre-rolls, flower comparisons, pack details, current listings, and practical menu browsing.",
    "primaryKeyword": "pre-roll guide for Toronto shoppers",
    "supportingKeywords": [
      "pre-rolls vs flower",
      "cannabis pre-roll menu",
      "pre-roll packs"
    ],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-07-11",
    "dateModified": "2026-07-11",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Pre-rolls have a straightforward appeal: the flower is already rolled. The menu comparison still deserves attention. Pack count, size, item details, and whether an item is standard or infused can change what the listing",
    "body": "Pre-rolls have a straightforward appeal: the flower is already rolled. The menu comparison still deserves attention. Pack count, size, item details, and whether an item is standard or infused can change what the listing means.\n\nThis pre-roll guide for Toronto shoppers keeps the category simple: check the pack, compare the current listing, and ask staff when one detail matters.\n\nThe guides in this section focus on the format itself. They do not assume that pre-rolls are automatically the right choice or compare them as if they were identical to loose flower.\n\n### Featured guide\n\n**Pre-Rolls vs Flower: Which Format Fits the Visit?**\nA practical comparison of convenience, menu detail, and the amount of control each format gives the shopper.\n\n### Quick note\n\nCurrent menu information should decide current product questions. Resource pages explain how to compare; the current category shows what is listed now.",
    "secondTake": null,
    "linkRoutes": [
      "/items/prerolls"
    ],
    "childRoutes": [
      "/resources/pre-roll-guides/pre-rolls-vs-flower"
    ],
    "relatedRoutes": [
      "/resources/pre-roll-guides/pre-rolls-vs-flower",
      "/resources"
    ],
    "commercialLinks": [
      {
        "title": "Pre-rolls",
        "href": "/items/prerolls",
        "description": "Browse current pre-roll listings."
      }
    ],
    "cards": [
      {
        "title": "Pre-Rolls vs Flower: Which Format Fits the Visit?",
        "href": "/resources/pre-roll-guides/pre-rolls-vs-flower",
        "description": "Pre-rolls and flower can contain the same broad type of cannabis product, but they create different shopping experiences.",
        "category": "Evergreen comparison guide",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      },
      {
        "title": "Queen Lansdowne Cannabis Resource Centre",
        "href": "/resources",
        "description": "The Queen Lansdowne Cannabis Resource Centre keeps the useful guides in one place: flower, pre-rolls, edibles, THC vapes, value shopping, native smokes, specialty products, and Queen West visit help.",
        "category": "Resource Centre landing page",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      }
    ]
  },
  {
    "pageNumber": 5,
    "sourceHeading": "EDIBLES GUIDES HUB",
    "route": "/resources/edibles-guides",
    "kind": "hub",
    "pageType": "Category hub",
    "parentRoute": "/resources",
    "h1": "Edibles Guides: Read the Label Before Making Assumptions",
    "seoTitle": "Cannabis Edibles Guides | Queen Lansdowne Cannabis",
    "metaDescription": "Read Queen Lansdowne Cannabis edible guides covering package timing details, product labels, serving information, current menu details, and safer browsing.",
    "primaryKeyword": "cannabis edibles guide for Toronto shoppers",
    "supportingKeywords": [
      "how long do edibles take",
      "edible cannabis menu",
      "edible label guide"
    ],
    "author": {
      "name": "Lana Queen",
      "handle": "@LanaOnQueen",
      "role": "Resource Editor",
      "type": "Person"
    },
    "datePublished": "2026-07-11",
    "dateModified": "2026-07-11",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Read Queen Lansdowne Cannabis edible guides covering package timing details, product labels, serving information, current menu details, and safer browsing.",
    "body": "This section helps shoppers compare edible formats, package counts, listed amounts, and current menu details.\n\n### Featured guide\n\n**How to Read Edible Package Details**\nA practical guide to product formats, package information, and current listings.\n\n### Quick note\n\nRead the full product package and listing details rather than guessing from the menu title.",
    "secondTake": null,
    "linkRoutes": [
      "/items/edibles"
    ],
    "childRoutes": [
      "/resources/edibles-guides/how-long-do-edibles-take"
    ],
    "relatedRoutes": [
      "/resources/edibles-guides/how-long-do-edibles-take",
      "/resources"
    ],
    "commercialLinks": [
      {
        "title": "Edibles",
        "href": "/items/edibles",
        "description": "Browse current edible listings."
      }
    ],
    "cards": [
      {
        "title": "How Long Do Edibles Take?",
        "href": "/resources/edibles-guides/how-long-do-edibles-take",
        "description": "Edible listings can use different product formats, package counts, and label descriptions. Start with the current listing and the product package.\n\n## Identify the format\n\nConfirm whether the item is a gummy, chocolate, beverage, capsule, baked item, or another format.\n\n## Read the package details\n\nCompare the product name, package count, total listed amount, and other label information. Do not assume two items use the same package structure.\n\n## Current edible menu\n\nUse `/items/edibles` to review currently listed edible products at Queen Lansdowne Cannabis.",
        "category": "Question-led evergreen guide",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      },
      {
        "title": "Queen Lansdowne Cannabis Resource Centre",
        "href": "/resources",
        "description": "The Queen Lansdowne Cannabis Resource Centre keeps the useful guides in one place: flower, pre-rolls, edibles, THC vapes, value shopping, native smokes, specialty products, and Queen West visit help.",
        "category": "Resource Centre landing page",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      }
    ]
  },
  {
    "pageNumber": 6,
    "sourceHeading": "VAPE GUIDES HUB",
    "route": "/resources/vape-guides",
    "kind": "hub",
    "pageType": "Category hub",
    "parentRoute": "/resources",
    "h1": "THC Vape Guides",
    "seoTitle": "THC Vape Menu Guides | Queen Lansdowne Cannabis",
    "metaDescription": "Queen Lansdowne Cannabis THC vape guides explain format differences, disposable and cartridge details, compatibility questions, and current menu checks.",
    "primaryKeyword": "THC vape guide for Toronto shoppers",
    "supportingKeywords": [
      "THC vapes vs flower",
      "disposable THC vapes",
      "vape cartridge guide"
    ],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-07-11",
    "dateModified": "2026-07-11",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "THC vapes have their own menu logic. The first question is usually the format: cartridge, disposable, or another listed type. Compatibility may matter for cartridge products, while disposable products are sold as self-co",
    "body": "THC vapes have their own menu logic. The first question is usually the format: cartridge, disposable, or another listed type. Compatibility may matter for cartridge products, while disposable products are sold as self-contained units.\n\nThis THC vape guide for Toronto shoppers keeps format and compatibility questions separate from flower questions.\n\nThis section keeps THC vape information separate from nicotine vape information and separate from flower comparisons.\n\n### Featured guide\n\n**THC Vapes vs Flower: What Changes With the Format?**\nCompare the shopping details involved in each format without turning the article into a claim about which one is better.\n\n### Current categories\n\n- Nicotine vapes: `/items/vapes`\n- THC vapes: `/items/vape-disposables`\n\n### Quick note\n\nCurrent product formats and selection can change. Check the current page before planning a visit around a specific vape item.",
    "secondTake": null,
    "linkRoutes": [
      "/items/vapes",
      "/items/vape-disposables"
    ],
    "childRoutes": [
      "/resources/vape-guides/thc-vapes-vs-flower"
    ],
    "relatedRoutes": [
      "/resources/vape-guides/thc-vapes-vs-flower",
      "/resources"
    ],
    "commercialLinks": [
      {
        "title": "Nicotine vapes",
        "href": "/items/vapes",
        "description": "Browse current nicotine vape listings."
      },
      {
        "title": "THC vapes",
        "href": "/items/vape-disposables",
        "description": "Browse current THC vape listings."
      }
    ],
    "cards": [
      {
        "title": "THC Vapes vs Flower: What Changes With the Format?",
        "href": "/resources/vape-guides/thc-vapes-vs-flower",
        "description": "THC vapes and flower belong to different menu categories because the product format changes the shopping questions.",
        "category": "Evergreen format comparison",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      },
      {
        "title": "Queen Lansdowne Cannabis Resource Centre",
        "href": "/resources",
        "description": "The Queen Lansdowne Cannabis Resource Centre keeps the useful guides in one place: flower, pre-rolls, edibles, THC vapes, value shopping, native smokes, specialty products, and Queen West visit help.",
        "category": "Resource Centre landing page",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      }
    ]
  },
  {
    "pageNumber": 7,
    "sourceHeading": "VALUE GUIDES HUB",
    "route": "/resources/value-guides",
    "kind": "hub",
    "pageType": "Category hub",
    "parentRoute": "/resources",
    "h1": "Value Guides: Compare the Full Listing, Not One Number",
    "seoTitle": "Value and Budget Cannabis Guides | Queen Lansdowne Cannabis",
    "metaDescription": "Queen Lansdowne Cannabis value guides help Queen West shoppers compare flower prices, weights, Budget sections, and current listings more clearly.",
    "primaryKeyword": "cheap weed in Queen West",
    "supportingKeywords": [
      "affordable weed Toronto",
      "Budget flower Queen West",
      "compare cannabis prices",
      "flower price by weight"
    ],
    "author": {
      "name": "Quinn West",
      "handle": "@QuinnLansdowne",
      "role": "Resource Editor",
      "type": "Person"
    },
    "datePublished": "2026-07-11",
    "dateModified": "2026-07-11",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Value shopping is not simply finding the lowest number on the page. A useful comparison includes the listed weight, product section, current price, and item details. A lower price attached to a different size is not the ",
    "body": "Value shopping is not simply finding the lowest number on the page. A useful comparison includes the listed weight, product section, current price, and item details. A lower price attached to a different size is not the same comparison.\n\nIf you are comparing cheap weed in Queen West, this section keeps price, weight, and current listing details in the same conversation.\n\nThis section is built for shoppers using phrases such as cheap weed, affordable weed, Budget flower, and flower deals. The language is direct because those are common shopper wording, but the advice stays grounded in current menu information.\n\n### Featured guide\n\n**How to Compare Flower Prices Without Ignoring Weight**\nA practical guide to reading price and quantity together before comparing current flower listings.\n\n### Useful category links\n\n- Budget: `/budget-weed`\n- AA: `/aa-weed`\n- AAA+: `/aaa-weed`\n- Premium: `/premium-weed`\n- Exotic: `/exotic-weed`\n\n### Quinn's note\n\nValue shoppers do not need a lecture. They need the full line: section, product, size, and current price.",
    "secondTake": null,
    "linkRoutes": [
      "/budget-weed",
      "/aa-weed",
      "/aaa-weed",
      "/premium-weed",
      "/exotic-weed"
    ],
    "childRoutes": [
      "/resources/value-guides/how-to-compare-flower-prices"
    ],
    "relatedRoutes": [
      "/resources/value-guides/how-to-compare-flower-prices",
      "/resources"
    ],
    "commercialLinks": [
      {
        "title": "Budget flower",
        "href": "/budget-weed",
        "description": "Browse the current Budget flower section."
      },
      {
        "title": "AA flower",
        "href": "/aa-weed",
        "description": "Browse the current AA flower section."
      },
      {
        "title": "AAA+ flower",
        "href": "/aaa-weed",
        "description": "Browse the current AAA+ flower section."
      },
      {
        "title": "Premium flower",
        "href": "/premium-weed",
        "description": "Browse the current Premium flower section."
      },
      {
        "title": "Exotic flower",
        "href": "/exotic-weed",
        "description": "Browse the current Exotic flower section."
      }
    ],
    "cards": [
      {
        "title": "How to Compare Flower Prices Without Ignoring Weight",
        "href": "/resources/value-guides/how-to-compare-flower-prices",
        "description": "A flower price only makes sense beside the amount attached to it.",
        "category": "Evergreen value guide",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      },
      {
        "title": "Queen Lansdowne Cannabis Resource Centre",
        "href": "/resources",
        "description": "The Queen Lansdowne Cannabis Resource Centre keeps the useful guides in one place: flower, pre-rolls, edibles, THC vapes, value shopping, native smokes, specialty products, and Queen West visit help.",
        "category": "Resource Centre landing page",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      }
    ]
  },
  {
    "pageNumber": 8,
    "sourceHeading": "LOCAL GUIDES HUB",
    "route": "/resources/local-guides",
    "kind": "hub",
    "pageType": "Category hub",
    "parentRoute": "/resources",
    "h1": "Queen West and Lansdowne Local Guides",
    "seoTitle": "Queen West Cannabis Store Guides | Queen Lansdowne Cannabis",
    "metaDescription": "Local Queen West and Lansdowne guides for Queen Lansdowne Cannabis, including store location, menu planning, Parkdale context, and current visit information.",
    "primaryKeyword": "weed dispensary in Queen West",
    "supportingKeywords": [
      "cannabis store near Lansdowne",
      "Queen Street West cannabis store",
      "cannabis dispensary Parkdale"
    ],
    "author": {
      "name": "Quinn West",
      "handle": "@QuinnLansdowne",
      "role": "Resource Editor",
      "type": "Person"
    },
    "datePublished": "2026-07-11",
    "dateModified": "2026-07-11",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Queen Street West is busy, so a store visit should be easy to plan. These local guides connect Queen Lansdowne Cannabis to the neighbourhood in a useful way: the address, the store page, the correct men",
    "body": "Queen Street West is busy, so a store visit should be easy to plan. These local guides connect Queen Lansdowne Cannabis to the neighbourhood in a useful way: the address, the store page, the matching category, and the current visit information.\n\nIf you searched for a weed dispensary in Queen West, start here for the store page, current category links, and visit-planning links.\n\nQueen Lansdowne Cannabis is located at 1472 Queen St W near Lansdowne. Parkdale, Little Portugal, Roncesvalles, Brockton Village, and Dundas West may be useful orientation points for people already familiar with the west side of Toronto, but the store page remains the place to confirm current details.\n\n### Featured guide\n\n**Weed Dispensary in Queen West: A Practical Queen and Lansdowne Guide**\nA locally grounded guide to finding the store page, confirming the visit, and moving into the matching category.\n\n### Current store page\n\n`/weed-dispensary-toronto`\n\n### Quinn's note\n\nLocal content is useful when the neighbourhood information helps someone plan the visit or choose the helpful category.",
    "secondTake": null,
    "linkRoutes": [
      "/weed-dispensary-toronto"
    ],
    "childRoutes": [
      "/resources/local-guides/weed-dispensary-in-queen-west"
    ],
    "relatedRoutes": [
      "/resources/local-guides/weed-dispensary-in-queen-west",
      "/resources"
    ],
    "commercialLinks": [
      {
        "title": "Queen Lansdowne Cannabis store page",
        "href": "/weed-dispensary-toronto",
        "description": "Use the store page for current location, hours, contact details, and visit planning."
      }
    ],
    "cards": [
      {
        "title": "Weed Dispensary in Queen West: A Queen and Lansdowne Guide",
        "href": "/resources/local-guides/weed-dispensary-in-queen-west",
        "description": "Queen Lansdowne Cannabis is located at 1472 Queen St W, near Lansdowne in Toronto. For shoppers searching around Queen West or Parkdale, the most useful first step is the store page, followed by the category that matches",
        "category": "Local evergreen guide",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      },
      {
        "title": "Queen Lansdowne Cannabis Resource Centre",
        "href": "/resources",
        "description": "The Queen Lansdowne Cannabis Resource Centre keeps the useful guides in one place: flower, pre-rolls, edibles, THC vapes, value shopping, native smokes, specialty products, and Queen West visit help.",
        "category": "Resource Centre landing page",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      }
    ]
  },
  {
    "pageNumber": 9,
    "sourceHeading": "STORE UPDATES HUB",
    "route": "/resources/store-updates",
    "kind": "hub",
    "pageType": "Official updates hub",
    "parentRoute": "/resources",
    "h1": "Queen Lansdowne Cannabis Store Updates",
    "seoTitle": "Queen Lansdowne Cannabis Store Updates and News",
    "metaDescription": "Read Queen Lansdowne Cannabis updates about resources, store services, menu navigation, delivery status, holiday notes, and Queen West announcements.",
    "primaryKeyword": "Queen Lansdowne Cannabis updates",
    "supportingKeywords": [
      "Queen Lansdowne Cannabis hours",
      "Queen Lansdowne news",
      "store announcements Queen West"
    ],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-07-11",
    "dateModified": "2026-07-11",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "This section contains official Queen Lansdowne Cannabis announcements. It is not a general news feed and it will not be filled with routine promotional posts.",
    "body": "This section contains official Queen Lansdowne Cannabis announcements. It is not a general news feed and it will not be filled with routine promotional posts.\n\nQueen Lansdowne Cannabis updates belong here when the information is official, useful, and worth keeping easy to find.\n\nUpdates belong here when something verifiable changes, such as:\n\n- Resource Centre launches\n- Store hours\n- Contact information\n- Services\n- Menu navigation\n- Delivery status\n- Store closures or holiday schedules\n- Major category additions\n\nOlder updates should remain dated and clearly marked when newer information replaces them.\n\n### Current update\n\n**The Queen Lansdowne Cannabis Resource Centre Is Now Live**\nThis announcement is available now that the Resource Centre is live.\n\n### Quick note\n\nFor current visit information, use the store page. For dated announcements, use this update archive.",
    "secondTake": null,
    "linkRoutes": [],
    "childRoutes": [
      "/resources/store-updates/resource-centre-launch"
    ],
    "relatedRoutes": [
      "/resources/store-updates/resource-centre-launch",
      "/resources"
    ],
    "commercialLinks": [],
    "cards": [
      {
        "title": "The Queen Lansdowne Cannabis Resource Centre Is Now Live",
        "href": "/resources/store-updates/resource-centre-launch",
        "description": "Queen Lansdowne Cannabis has launched a new Resource Centre for adults 19+ who want clearer information before browsing the current menu or planning a visit.",
        "category": "Official store update",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      },
      {
        "title": "Queen Lansdowne Cannabis Resource Centre",
        "href": "/resources",
        "description": "The Queen Lansdowne Cannabis Resource Centre keeps the useful guides in one place: flower, pre-rolls, edibles, THC vapes, value shopping, native smokes, specialty products, and Queen West visit help.",
        "category": "Resource Centre landing page",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      }
    ]
  },
  {
    "pageNumber": 10,
    "sourceHeading": "NATIVE SMOKES HUB",
    "route": "/resources/native-smokes",
    "kind": "hub",
    "pageType": "Category hub",
    "parentRoute": "/resources",
    "h1": "Native Smokes and Cigarette Guides",
    "seoTitle": "Native Smokes and Cigarette Guides | Queen Lansdowne Cannabis",
    "metaDescription": "Informational native cigarette guides from Queen Lansdowne Cannabis covering menu selection, packs, cartons, varieties, and Queen West details for adults 19+.",
    "primaryKeyword": "native cigarettes in Toronto",
    "supportingKeywords": [
      "native smokes Toronto",
      "native cigarettes Queen West",
      "cigarette packs and cartons"
    ],
    "author": {
      "name": "Quinn West",
      "handle": "@QuinnLansdowne",
      "role": "Resource Editor",
      "type": "Person"
    },
    "datePublished": "2026-07-11",
    "dateModified": "2026-07-11",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Informational native cigarette guides from Queen Lansdowne Cannabis covering menu selection, packs, cartons, varieties, and Queen West details for adults 19+.",
    "body": "This section helps Queen West shoppers compare Native cigarette brands, pack or carton wording, and current listed prices.\n\nUse the current cigarette category before visiting when one brand or unit matters.\n\n### Guides in this section\n\n**Native Cigarettes in Toronto: What to Check Before Visiting**\nCompare current brand, variety, unit, and price information.\n\n**Cigarette Packs vs Cartons: What the Listing Means**\nA simple explanation of units and packaging.\n\nCurrent menu category: `/items/cigarettes`.",
    "secondTake": null,
    "linkRoutes": [
      "/info/native-cigarettes-toronto",
      "/items/cigarettes"
    ],
    "childRoutes": [
      "/resources/native-smokes/native-cigarettes-guide",
      "/resources/native-smokes/packs-vs-cartons"
    ],
    "relatedRoutes": [
      "/resources/native-smokes/native-cigarettes-guide",
      "/resources/native-smokes/packs-vs-cartons",
      "/resources"
    ],
    "commercialLinks": [
      {
        "title": "Native cigarettes information",
        "href": "/info/native-cigarettes-toronto",
        "description": "Read the current native-cigarette information page."
      },
      {
        "title": "Cigarettes",
        "href": "/items/cigarettes",
        "description": "Browse current cigarette listings."
      }
    ],
    "cards": [
      {
        "title": "Native Cigarettes in Toronto: What to Check Before Visiting",
        "href": "/resources/native-smokes/native-cigarettes-guide",
        "description": "Adults 19+ comparing Native cigarette listings usually need the current brand, variety, pack or carton unit, and posted price.\n\nUse the cigarette category as a current menu snapshot rather than a permanent promise. If one brand matters, check `/items/cigarettes` or contact the store before leaving.\n\n## What to check\n\n- Brand\n- Variety\n- Pack or carton\n- Quantity\n- Current price\n- Store location\n\nQueen Lansdowne Cannabis is located at 1472 Queen St W near Lansdowne. Use the main store page to confirm current hours and contact details.",
        "category": "Evergreen native-smokes guide",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      },
      {
        "title": "Cigarette Packs vs Cartons: What the Listing Means",
        "href": "/resources/native-smokes/packs-vs-cartons",
        "description": "A pack and a carton are different sales units, so compare the listed unit beside the current price.\n\n## Pack listings\n\nCheck the brand, variety, pack size where shown, and current price.\n\n## Carton listings\n\nA carton contains multiple packs. If one brand or carton count matters, check `/items/cigarettes` or ask the store before leaving.\n\n## Compare the same unit\n\n1. Confirm pack or carton.\n2. Confirm quantity.\n3. Confirm brand and variety.\n4. Read the current posted price.",
        "category": "Evergreen terminology guide",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      },
      {
        "title": "Queen Lansdowne Cannabis Resource Centre",
        "href": "/resources",
        "description": "The Queen Lansdowne Cannabis Resource Centre keeps the useful guides in one place: flower, pre-rolls, edibles, THC vapes, value shopping, native smokes, specialty products, and Queen West visit help.",
        "category": "Resource Centre landing page",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      }
    ]
  },
  {
    "pageNumber": 11,
    "sourceHeading": "MAGIC MUSHROOM GUIDES HUB",
    "route": "/resources/magic-mushroom-guides",
    "kind": "hub",
    "pageType": "Category hub",
    "parentRoute": "/resources",
    "h1": "Magic Mushroom and Specialty-Product Guides",
    "seoTitle": "Magic Mushroom Menu Guides | Queen Lansdowne Cannabis",
    "metaDescription": "Queen Lansdowne Cannabis specialty-product guides explain magic mushroom menu formats, label details, current listings, and practical questions for adults 19+.",
    "primaryKeyword": "magic mushroom guide for Toronto shoppers",
    "supportingKeywords": [
      "magic mushrooms Toronto",
      "mushroom chocolate menu",
      "mushroom gummy menu",
      "specialty products Toronto"
    ],
    "author": {
      "name": "Lana Queen",
      "handle": "@LanaOnQueen",
      "role": "Resource Editor",
      "type": "Person"
    },
    "datePublished": "2026-07-11",
    "dateModified": "2026-07-11",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Queen Lansdowne Cannabis specialty-product guides explain magic mushroom menu formats, label details, current listings, and practical questions for adults 19+.",
    "body": "Specialty-product menus can use different formats, package sizes, and label conventions. This section helps shoppers compare those listings without guessing from a product name alone.\n\nUse the current Magic Stuff category before planning a visit around one item.\n\n### Guides in this section\n\n**Magic Mushroom Formats Explained**\nA menu-level overview of listed formats and package information.\n\n**How to Read a Magic Mushroom Menu**\nA practical guide to product name, format, package amount, and current listing details.",
    "secondTake": null,
    "linkRoutes": [
      "/items/magic"
    ],
    "childRoutes": [
      "/resources/magic-mushroom-guides/magic-mushroom-formats-explained",
      "/resources/magic-mushroom-guides/how-to-read-a-magic-mushroom-menu"
    ],
    "relatedRoutes": [
      "/resources/magic-mushroom-guides/magic-mushroom-formats-explained",
      "/resources/magic-mushroom-guides/how-to-read-a-magic-mushroom-menu",
      "/resources"
    ],
    "commercialLinks": [
      {
        "title": "Magic Stuff",
        "href": "/items/magic",
        "description": "Browse current specialty-product listings."
      }
    ],
    "cards": [
      {
        "title": "Magic Mushroom Formats Explained at the Menu Level",
        "href": "/resources/magic-mushroom-guides/magic-mushroom-formats-explained",
        "description": "Magic mushroom and specialty-product menus may use several formats. The format helps shoppers understand how an item is packaged and listed.\n\nCheck the current Magic Stuff category because listings can change. Compare the product name, format, package count, listed amount, and package details.\n\n## Important boundary\n\nThis guide focuses on menu formats, package labels, and current listing details.",
        "category": "Evergreen specialty-product format guide",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      },
      {
        "title": "How to Read a Magic Mushroom Menu Clearly",
        "href": "/resources/magic-mushroom-guides/how-to-read-a-magic-mushroom-menu",
        "description": "A specialty-product listing should be checked by product format, package, listed amount, and current listing details.\n\n## Identify the format first\n\nConfirm whether the item is a dried product, chocolate, gummy, capsule, beverage, or another specialty format.\n\n## Read the package information\n\nA number may refer to a total package amount, piece count, product weight, or another label detail. The listing or package should clarify which one applies.\n\n## Check current listings\n\nUse `/items/magic` for current products. This resource focuses on menu formats, package labels, and current listing details.",
        "category": "Evergreen menu-literacy guide",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      },
      {
        "title": "Queen Lansdowne Cannabis Resource Centre",
        "href": "/resources",
        "description": "The Queen Lansdowne Cannabis Resource Centre keeps the useful guides in one place: flower, pre-rolls, edibles, THC vapes, value shopping, native smokes, specialty products, and Queen West visit help.",
        "category": "Resource Centre landing page",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      }
    ]
  },
  {
    "pageNumber": 12,
    "sourceHeading": "HOW TO READ A CANNABIS MENU",
    "route": "/resources/cannabis-101/how-to-read-a-cannabis-menu",
    "kind": "article",
    "pageType": "Evergreen resource",
    "parentRoute": "/resources/cannabis-101",
    "h1": "How to Read a Cannabis Menu Without Getting Lost",
    "seoTitle": "How to Read a Cannabis Menu | Queen Lansdowne Cannabis",
    "metaDescription": "Learn how to read a cannabis menu by starting with product format, then comparing product names, weights, prices, pack details, and current item details.",
    "primaryKeyword": "how to read a cannabis menu",
    "supportingKeywords": [
      "cannabis menu guide",
      "Queen Lansdowne Cannabis menu",
      "cannabis product categories"
    ],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Resource Editor",
      "type": "Organization"
    },
    "datePublished": "2026-07-11",
    "dateModified": "2026-07-11",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "A large cannabis menu becomes easier when you stop reading it as one giant list. Start by choosing the product format. Flower, pre-rolls, edibles, THC vapes, concentrates, accessories, native smokes, and specialty produc",
    "body": "A large cannabis menu becomes easier when you stop reading it as one giant list. Start by choosing the product format. Flower, pre-rolls, edibles, THC vapes, concentrates, accessories, native smokes, and specialty products each answer a different shopping question.\n\nAt Queen Lansdowne Cannabis, the menu is divided into product categories and flower sections. That structure is meant to reduce the first decision, not make every item look comparable.\n\n## Begin with format\n\nSomeone looking for loose flower should begin with the flower sections. Someone looking for a ready-rolled product should open pre-rolls. Edibles, THC vapes, concentrates, and accessories each have their own category paths.\n\nChoosing the format first prevents a common problem: comparing products that do not serve the same purpose.\n\n## Read the complete listing\n\nOnce you are inside the correct category, look for the information the page provides:\n\n- Product name\n- Category or flower section\n- Weight or package size\n- Current posted price\n- Pack count where applicable\n- Format details\n- Item notes\n- Current selection where shown\n\nNo single detail should carry the whole decision. A price without a weight is incomplete. A product name without format information may still leave the important question unanswered.\n\n## Flower sections are navigation tools\n\nBudget, AA, AAA+, Premium, and Exotic are separate flower browsing paths at Queen Lansdowne Cannabis. The section helps the shopper choose a starting point. The current product page supplies the details.\n\nThat distinction matters because a tier label should not be treated as a permanent claim about every item. Listings rotate, and the menu should be read in the present tense.\n\n## Changing details belong to the current menu\n\nEvergreen resources can explain methods, categories, and terminology. They should not lock a changing product, price, or selection claim into an article.\n\nUse the resource to understand the menu. Use the current category to answer the current product question.\n\n## Ask a smaller question\n\nWhen the page leaves something unclear, a specific question is more useful than What is best?\n\nExamples:\n\n- Is this listing a single pre-roll or a pack?\n- Does this cartridge require a separate battery?\n- What size is attached to this flower price?\n- Is this specialty item currently listed at this location?\n\nSmaller questions produce clearer answers.\n\n## Continue browsing\n\n- Store information: `/weed-dispensary-toronto`\n- Flower: `/budget-weed`, `/aa-weed`, `/aaa-weed`, `/premium-weed`, `/exotic-weed`\n- Pre-rolls: `/items/prerolls`\n- Edibles: `/items/edibles`\n- Nicotine vapes: `/items/vapes`\n- THC vapes: `/items/vape-disposables`\n- Concentrates: `/items/concentrates`\n- Specialty products: `/items/magic`",
    "secondTake": {
      "label": "A Second Take",
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization",
      "body": "The fastest route through a menu is not memorizing more names. It is knowing which category deserves the first click."
    },
    "linkRoutes": [
      "/weed-dispensary-toronto",
      "/budget-weed",
      "/aa-weed",
      "/aaa-weed",
      "/premium-weed",
      "/exotic-weed",
      "/items/prerolls",
      "/items/edibles",
      "/items/vapes",
      "/items/concentrates",
      "/items/magic"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/cannabis-101"
    ],
    "commercialLinks": [
      {
        "title": "Queen Lansdowne Cannabis store page",
        "href": "/weed-dispensary-toronto",
        "description": "Use the store page for current location, hours, contact details, and visit planning."
      },
      {
        "title": "Budget flower",
        "href": "/budget-weed",
        "description": "Browse the current Budget flower section."
      },
      {
        "title": "AA flower",
        "href": "/aa-weed",
        "description": "Browse the current AA flower section."
      },
      {
        "title": "AAA+ flower",
        "href": "/aaa-weed",
        "description": "Browse the current AAA+ flower section."
      },
      {
        "title": "Premium flower",
        "href": "/premium-weed",
        "description": "Browse the current Premium flower section."
      },
      {
        "title": "Exotic flower",
        "href": "/exotic-weed",
        "description": "Browse the current Exotic flower section."
      },
      {
        "title": "Pre-rolls",
        "href": "/items/prerolls",
        "description": "Browse current pre-roll listings."
      },
      {
        "title": "Edibles",
        "href": "/items/edibles",
        "description": "Browse current edible listings."
      },
      {
        "title": "Nicotine vapes",
        "href": "/items/vapes",
        "description": "Browse current nicotine vape listings."
      },
      {
        "title": "Concentrates",
        "href": "/items/concentrates",
        "description": "Browse current concentrate listings."
      },
      {
        "title": "Magic Stuff",
        "href": "/items/magic",
        "description": "Browse current specialty-product listings."
      }
    ],
    "cards": [
      {
        "title": "Cannabis 101: Start With the Menu, Not the Noise",
        "href": "/resources/cannabis-101",
        "description": "Cannabis terminology can become complicated long before it becomes useful. This section keeps the starting point simple: understand the product format, read the current listing, and know which details belong to the menu,",
        "category": "Menu guide",
        "author": "Lana Queen",
        "updated": "2026-07-11"
      }
    ]
  },
  {
    "pageNumber": 13,
    "sourceHeading": "AA VS AAA+ VS PREMIUM VS EXOTIC",
    "route": "/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic",
    "kind": "article",
    "pageType": "Evergreen flower guide",
    "parentRoute": "/resources/weed-flower-guide",
    "h1": "AA vs AAA+ vs Premium vs Exotic: What the Flower Sections Actually Do",
    "seoTitle": "AA vs AAA+ vs Premium vs Exotic Flower | Queen Lansdowne",
    "metaDescription": "Compare AA, AAA+, Premium, and Exotic flower as menu sections, then use current product names, weights, prices, and notes to complete the comparison.",
    "primaryKeyword": "AA vs AAA+ vs Premium vs Exotic",
    "supportingKeywords": [
      "cannabis flower tiers",
      "premium flower Toronto",
      "exotic flower Toronto",
      "AA flower",
      "AAA+ flower"
    ],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-07-11",
    "dateModified": "2026-07-11",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "AA, AAA+, Premium, and Exotic are menu sections that help shoppers narrow a flower selection. They are most useful when treated as starting points rather than automatic verdicts.",
    "body": "AA, AAA+, Premium, and Exotic are menu sections that help shoppers narrow a flower selection. They are most useful when treated as starting points rather than automatic verdicts.\n\nQueen Lansdowne Cannabis also includes a Budget section, giving the flower menu five distinct entry points. Each section can organize browsing, but the current listing still decides what is available and what details can be compared.\n\n## AA: a separate value-oriented browse\n\nAA gives shoppers a flower section outside the Budget page while remaining distinct from AAA+, Premium, and Exotic. The section name tells you where you are browsing. It does not replace the need to check the individual item.\n\nRead the listed weight, price, product name, and notes together.\n\n## AAA+: another step in the menu structure\n\nAAA+ is presented as its own flower lane. Shoppers using this section should compare current AAA+ listings with one another before jumping into a different tier.\n\nThis keeps the comparison clean. Like-for-like comparisons are easier to understand than mixing several sections and several sizes at once.\n\n## Premium: a focused section, not a fixed promise\n\nPremium is a useful starting point for shoppers who specifically want to review that part of the flower menu. The word itself should not be stretched into unsupported promises about every item.\n\nThe current product listing remains the evidence. Check what is shown now.\n\n## Exotic: the top browsing section in the menu\n\nExotic receives strong attention because the name suggests rarity and distinction. That makes careful reading more important, not less.\n\nA memorable strain name or an attractive photo can draw the eye, but the full listing still matters: product name, type where shown, weight, price, and current notes.\n\n## Where Budget fits\n\nBudget is the value-first flower path. It belongs in the same menu system, but it answers a different first question from Premium or Exotic.\n\nA shopper focused on spending may begin with Budget. A shopper interested in another section may begin elsewhere. Neither approach requires declaring one section universally better.\n\n## A cleaner comparison method\n\n1. Choose the section that matches the reason for browsing.\n2. Compare current items inside that section.\n3. Keep weight and price together.\n4. Read item details where available.\n5. Move to another section only when a cross-section comparison is genuinely useful.",
    "secondTake": {
      "label": "A Second Take",
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization",
      "body": "Section names organize the flower menu. Current product pages provide the changing information, including listed sizes, prices, and selection."
    },
    "linkRoutes": [
      "/budget-weed",
      "/aa-weed",
      "/aaa-weed",
      "/premium-weed",
      "/exotic-weed"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/weed-flower-guide",
      "/resources/flower-guides/budget-vs-premium-flower"
    ],
    "commercialLinks": [
      {
        "title": "Budget flower",
        "href": "/budget-weed",
        "description": "Browse the current Budget flower section."
      },
      {
        "title": "AA flower",
        "href": "/aa-weed",
        "description": "Browse the current AA flower section."
      },
      {
        "title": "AAA+ flower",
        "href": "/aaa-weed",
        "description": "Browse the current AAA+ flower section."
      },
      {
        "title": "Premium flower",
        "href": "/premium-weed",
        "description": "Browse the current Premium flower section."
      },
      {
        "title": "Exotic flower",
        "href": "/exotic-weed",
        "description": "Browse the current Exotic flower section."
      }
    ],
    "cards": [
      {
        "title": "Flower Guides: Understand the Sections Before Comparing Strains",
        "href": "/resources/weed-flower-guide",
        "description": "Queen Lansdowne Cannabis organizes flower into Budget, AA, AAA+, Premium, and Exotic sections. Those labels help shoppers decide where to begin, but the current listing still carries the details that complete the compari",
        "category": "Menu guide",
        "author": "Lana Queen",
        "updated": "2026-07-11"
      },
      {
        "title": "Budget vs Premium Flower: Two Different Starting Points",
        "href": "/resources/flower-guides/budget-vs-premium-flower",
        "description": "Budget and Premium flower do not need a winner. They serve different browsing priorities.",
        "category": "Evergreen comparison guide",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      }
    ]
  },
  {
    "pageNumber": 14,
    "sourceHeading": "BUDGET VS PREMIUM FLOWER",
    "route": "/resources/flower-guides/budget-vs-premium-flower",
    "kind": "article",
    "pageType": "Evergreen comparison guide",
    "parentRoute": "/resources/weed-flower-guide",
    "h1": "Budget vs Premium Flower: Two Different Starting Points",
    "seoTitle": "Budget vs Premium Flower | Queen Lansdowne Cannabis",
    "metaDescription": "Budget and Premium flower are different menu starting points. Compare current listings by weight, price, product details, and the reason for the visit.",
    "primaryKeyword": "Budget vs Premium flower",
    "supportingKeywords": [
      "budget weed Queen West",
      "premium flower Queen West",
      "affordable flower Toronto"
    ],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-07-11",
    "dateModified": "2026-07-11",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Budget and Premium flower do not need a winner. They serve different browsing priorities.",
    "body": "Budget and Premium flower do not need a winner. They serve different browsing priorities.\n\nAt Queen Lansdowne Cannabis, Budget is the obvious place to begin when spending and quantity are leading the decision. Premium is a separate flower section for shoppers who want to review that part of the menu. The useful comparison begins after the section is chosen.\n\n## When Budget makes sense as the first click\n\nBudget is built for value-focused browsing. That does not mean every current Budget listing is identical or that the lowest visible number tells the whole story.\n\nCheck:\n\n- Listed weight\n- Current price\n- Product name\n- Item notes\n- Whether the comparison uses the same quantity\n\nBudget shopping becomes clearer when the entire listing is read instead of isolating one number.\n\n## When Premium becomes the better starting point\n\nPremium is useful when the shopper specifically wants to see the current Premium flower section. It narrows the menu without asking the shopper to inspect every tier first.\n\nThe label does not need exaggerated copy around it. Open the section and compare the products actually listed there.\n\n## Cross-section comparisons\n\nA Budget item and a Premium item may use different weights or pricing structures. Before comparing them, make sure the numbers describe comparable quantities.\n\nA practical comparison might ask:\n\n- Are these the same weight?\n- Are both prices current?\n- Do the item details add relevant context?\n- Is the shopper comparing value, section preference, or both?\n\n## Queen West value searches\n\nPeople commonly use direct phrases such as cheap weed, affordable weed, Budget flower, and weed deals. Those searches should lead to information that respects the shoppers intent.\n\nThe answer is not generic hype. It is a clear path into the current Budget page, followed by an honest comparison.\n\n## Browse the sections\n\n- Budget: `/budget-weed`\n- Premium: `/premium-weed`",
    "secondTake": {
      "label": "A Second Take",
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization",
      "body": "A well-designed menu lets Budget and Premium keep their own identities. The comparison becomes useful when the reader knows which priority brought them to the page."
    },
    "linkRoutes": [
      "/budget-weed",
      "/premium-weed"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/weed-flower-guide",
      "/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic"
    ],
    "commercialLinks": [
      {
        "title": "Budget flower",
        "href": "/budget-weed",
        "description": "Browse the current Budget flower section."
      },
      {
        "title": "Premium flower",
        "href": "/premium-weed",
        "description": "Browse the current Premium flower section."
      }
    ],
    "cards": [
      {
        "title": "Flower Guides: Understand the Sections Before Comparing Strains",
        "href": "/resources/weed-flower-guide",
        "description": "Queen Lansdowne Cannabis organizes flower into Budget, AA, AAA+, Premium, and Exotic sections. Those labels help shoppers decide where to begin, but the current listing still carries the details that complete the compari",
        "category": "Menu guide",
        "author": "Lana Queen",
        "updated": "2026-07-11"
      },
      {
        "title": "AA vs AAA+ vs Premium vs Exotic: What the Flower Sections Actually Do",
        "href": "/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic",
        "description": "AA, AAA+, Premium, and Exotic are menu sections that help shoppers narrow a flower selection. They are most useful when treated as starting points rather than automatic verdicts.",
        "category": "Evergreen flower guide",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      }
    ]
  },
  {
    "pageNumber": 15,
    "sourceHeading": "PRE-ROLLS VS FLOWER",
    "route": "/resources/pre-roll-guides/pre-rolls-vs-flower",
    "kind": "article",
    "pageType": "Evergreen comparison guide",
    "parentRoute": "/resources/pre-roll-guides",
    "h1": "Pre-Rolls vs Flower: Which Format Fits the Visit?",
    "seoTitle": "Pre-Rolls vs Flower | Queen Lansdowne Cannabis",
    "metaDescription": "Compare pre-rolls and flower by convenience, control, pack information, weights, current listings, and the kind of Queen West visit you are planning.",
    "primaryKeyword": "pre-rolls vs flower",
    "supportingKeywords": [
      "pre-rolls Queen West",
      "cannabis flower Queen West",
      "pre-roll guide Toronto"
    ],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-07-11",
    "dateModified": "2026-07-11",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Pre-rolls and flower can contain the same broad type of cannabis product, but they create different shopping experiences.",
    "body": "Pre-rolls and flower can contain the same broad type of cannabis product, but they create different shopping experiences.\n\nFlower gives the shopper more control over quantity and preparation. Pre-rolls arrive in a ready-rolled format. The better choice depends on what the shopper wants from the format, not on a universal rule.\n\n## Flower offers more control\n\nLoose flower lets shoppers compare different weights, flower sections, and individual listings. It suits someone who wants to choose the flower first and handle preparation separately.\n\nAt Queen Lansdowne Cannabis, flower also includes Budget, AA, AAA+, Premium, and Exotic sections. That gives the flower shopper more category links to explore.\n\n## Pre-rolls prioritize convenience\n\nPre-rolls reduce the preparation step. The important listing details may include:\n\n- Single item or pack\n- Pack count\n- Size\n- Standard or infused format where shown\n- Current price\n- Item notes\n\nA pre-roll page should be read as a pre-roll page, not as a shortcut to the flower menu.\n\n## Do not mix the comparison too early\n\nA shopper who already knows the preferred format can save time by going directly to that category.\n\nA shopper who is undecided should first ask what matters more:\n\n- Control over quantity and preparation\n- A ready-rolled format\n- Pack convenience\n- A specific current product listing\n\nOnce that question is answered, the menu becomes much smaller.\n\n## Current categories\n\n- Pre-rolls: `/items/prerolls`\n- Flower sections: `/budget-weed`, `/aa-weed`, `/aaa-weed`, `/premium-weed`, `/exotic-weed`",
    "secondTake": {
      "label": "A Second Take",
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization",
      "body": "Current pre-roll pack details and current flower listings should be checked on their respective menu pages before visiting for one specific item."
    },
    "linkRoutes": [
      "/items/prerolls",
      "/budget-weed",
      "/aa-weed",
      "/aaa-weed",
      "/premium-weed",
      "/exotic-weed"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/pre-roll-guides"
    ],
    "commercialLinks": [
      {
        "title": "Pre-rolls",
        "href": "/items/prerolls",
        "description": "Browse current pre-roll listings."
      },
      {
        "title": "Budget flower",
        "href": "/budget-weed",
        "description": "Browse the current Budget flower section."
      },
      {
        "title": "AA flower",
        "href": "/aa-weed",
        "description": "Browse the current AA flower section."
      },
      {
        "title": "AAA+ flower",
        "href": "/aaa-weed",
        "description": "Browse the current AAA+ flower section."
      },
      {
        "title": "Premium flower",
        "href": "/premium-weed",
        "description": "Browse the current Premium flower section."
      },
      {
        "title": "Exotic flower",
        "href": "/exotic-weed",
        "description": "Browse the current Exotic flower section."
      }
    ],
    "cards": [
      {
        "title": "Pre-Roll Guides",
        "href": "/resources/pre-roll-guides",
        "description": "Pre-rolls have a straightforward appeal: the flower is already rolled. The menu comparison still deserves attention. Pack count, size, item details, and whether an item is standard or infused can change what the listing",
        "category": "Menu guide",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      }
    ]
  },
  {
    "pageNumber": 16,
    "sourceHeading": "HOW LONG DO EDIBLES TAKE?",
    "route": "/resources/edibles-guides/how-long-do-edibles-take",
    "kind": "article",
    "pageType": "Question-led evergreen guide",
    "parentRoute": "/resources/edibles-guides",
    "h1": "How Long Do Edibles Take?",
    "seoTitle": "How Long Do Edibles Take? | Queen Lansdowne Cannabis",
    "metaDescription": "Edible cannabis may take 30 minutes to 2 hours to be felt and up to 4 hours for full package details. Read the package and avoid choosing more too quickly.",
    "primaryKeyword": "how long do edibles take",
    "supportingKeywords": [
      "edible cannabis onset",
      "cannabis edibles guide",
      "edibles Toronto"
    ],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-07-11",
    "dateModified": "2026-07-11",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Edible cannabis may take 30 minutes to 2 hours to be felt and up to 4 hours for full package details. Read the package and avoid choosing more too quickly.",
    "body": "Edible listings can use different product formats, package counts, and label descriptions. Start with the current listing and the product package.\n\n## Identify the format\n\nConfirm whether the item is a gummy, chocolate, beverage, capsule, baked item, or another format.\n\n## Read the package details\n\nCompare the product name, package count, total listed amount, and other label information. Do not assume two items use the same package structure.\n\n## Current edible menu\n\nUse `/items/edibles` to review currently listed edible products at Queen Lansdowne Cannabis.",
    "secondTake": {
      "label": "A Second Take",
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization",
      "body": "The most important edible detail is not the flavour name. It is the amount shown on the package and the patience to let the first serving take detail."
    },
    "linkRoutes": [
      "/items/edibles"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/edibles-guides"
    ],
    "commercialLinks": [
      {
        "title": "Edibles",
        "href": "/items/edibles",
        "description": "Browse current edible listings."
      }
    ],
    "cards": [
      {
        "title": "Edibles Guides: Read the Label Before Making Assumptions",
        "href": "/resources/edibles-guides",
        "description": "This section helps shoppers compare edible formats, package counts, listed amounts, and current menu details.\n\n### Featured guide\n\n**How to Read Edible Package Details**\nA practical guide to product formats, package information, and current listings.\n\n### Quick note\n\nRead the full product package and listing details rather than guessing from the menu title.",
        "category": "Menu guide",
        "author": "Lana Queen",
        "updated": "2026-07-11"
      }
    ]
  },
  {
    "pageNumber": 17,
    "sourceHeading": "THC VAPES VS FLOWER",
    "route": "/resources/vape-guides/thc-vapes-vs-flower",
    "kind": "article",
    "pageType": "Evergreen format comparison",
    "parentRoute": "/resources/vape-guides",
    "h1": "THC Vapes vs Flower: What Changes With the Format?",
    "seoTitle": "THC Vapes vs Flower | Queen Lansdowne Cannabis",
    "metaDescription": "Compare THC vapes and flower by format, compatibility, menu details, preparation, and current listings without treating the two categories as interchangeable.",
    "primaryKeyword": "THC vapes vs flower",
    "supportingKeywords": [
      "THC vape guide",
      "disposable THC vapes Toronto",
      "cannabis flower vs vape"
    ],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-07-11",
    "dateModified": "2026-07-11",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "THC vapes and flower belong to different menu categories because the product format changes the shopping questions.",
    "body": "THC vapes and flower belong to different menu categories because the product format changes the shopping questions.\n\nFlower is a plant product sold in listed weights and organized into flower sections. THC vapes are extract-based products that may be listed as cartridges, disposables, or other vape formats.\n\n## Flower questions\n\nA flower comparison commonly includes:\n\n- Flower section\n- Product name\n- Weight\n- Current price\n- Type or item details where shown\n\nThe shopper may also consider how the flower will be prepared after purchase.\n\n## THC vape questions\n\nA THC vape comparison often begins with format:\n\n- Cartridge or disposable\n- Device compatibility\n- Listed volume or amount\n- Product details\n- Current price\n- Whether a battery is required\n\nCompatibility is especially important when the item is not a self-contained disposable product.\n\n## Why the categories should stay separate\n\nComparing a vape price directly with a flower price usually does not answer much. The units, formats, and use requirements are different.\n\nThe better approach is:\n\n1. Choose the format.\n2. Open the matching category.\n3. Compare current items within that category.\n4. Ask a compatibility question when the listing does not make it clear.\n\n## Current categories\n\n- Nicotine vapes: `/items/vapes`\n- THC vapes: `/items/vape-disposables`\n- Flower: `/budget-weed`, `/aa-weed`, `/aaa-weed`, `/premium-weed`, `/exotic-weed`",
    "secondTake": {
      "label": "A Second Take",
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization",
      "body": "THC vape and flower selection can change. Check the current menu before planning a visit around one product or device format."
    },
    "linkRoutes": [
      "/items/vapes",
      "/items/vape-disposables",
      "/budget-weed",
      "/aa-weed",
      "/aaa-weed",
      "/premium-weed",
      "/exotic-weed"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/vape-guides"
    ],
    "commercialLinks": [
      {
        "title": "Nicotine vapes",
        "href": "/items/vapes",
        "description": "Browse current nicotine vape listings."
      },
      {
        "title": "THC vapes",
        "href": "/items/vape-disposables",
        "description": "Browse current THC vape listings."
      },
      {
        "title": "Budget flower",
        "href": "/budget-weed",
        "description": "Browse the current Budget flower section."
      },
      {
        "title": "AA flower",
        "href": "/aa-weed",
        "description": "Browse the current AA flower section."
      },
      {
        "title": "AAA+ flower",
        "href": "/aaa-weed",
        "description": "Browse the current AAA+ flower section."
      },
      {
        "title": "Premium flower",
        "href": "/premium-weed",
        "description": "Browse the current Premium flower section."
      },
      {
        "title": "Exotic flower",
        "href": "/exotic-weed",
        "description": "Browse the current Exotic flower section."
      }
    ],
    "cards": [
      {
        "title": "THC Vape Guides",
        "href": "/resources/vape-guides",
        "description": "THC vapes have their own menu logic. The first question is usually the format: cartridge, disposable, or another listed type. Compatibility may matter for cartridge products, while disposable products are sold as self-co",
        "category": "Menu guide",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      }
    ]
  },
  {
    "pageNumber": 18,
    "sourceHeading": "HOW TO COMPARE FLOWER PRICES",
    "route": "/resources/value-guides/how-to-compare-flower-prices",
    "kind": "article",
    "pageType": "Evergreen value guide",
    "parentRoute": "/resources/value-guides",
    "h1": "How to Compare Flower Prices Without Ignoring Weight",
    "seoTitle": "How to Compare Flower Prices | Queen Lansdowne Cannabis",
    "metaDescription": "Compare cannabis flower prices by reading weight, current price, flower section, and product details together instead of reacting to one number.",
    "primaryKeyword": "how to compare flower prices",
    "supportingKeywords": [
      "cheap weed Queen West",
      "affordable flower Toronto",
      "cannabis price per gram",
      "Budget flower"
    ],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-07-11",
    "dateModified": "2026-07-11",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "A flower price only makes sense beside the amount attached to it.",
    "body": "A flower price only makes sense beside the amount attached to it.\n\nTwo listings can show different prices because they represent different weights, different sections, or different current offers. The useful comparison begins by reading the full line.\n\n## Keep price and weight together\n\nBefore deciding which listing offers stronger value, confirm:\n\n- The weight of each listing\n- The current posted price\n- Whether both listings use the same quantity\n- The flower section\n- Any current item details\n\nComparing a smaller quantity with a larger quantity as if they were equal creates a false result.\n\n## Use price per gram carefully\n\nPrice per gram can make different quantities easier to compare. It is a calculation tool, not the only measure of value.\n\nA clear listing may already show a per-gram figure. When it does not, divide the total price by the listed number of grams.\n\nEven then, current product details still matter. The lowest calculated number does not automatically answer every shoppers priorities.\n\n## Compare within a section first\n\nBudget listings are easiest to compare against other current Budget listings. The same principle applies to AA, AAA+, Premium, and Exotic.\n\nCross-section comparisons can still be useful, but the shopper should understand that the section itself is part of the browsing decision.\n\n## Shopper language can stay direct\n\nCheap weed, affordable weed, Budget flower, and weed deals are normal shopper phrases. A page targeting those terms should answer the value question directly instead of hiding behind vague language.\n\nThe practical answer is current price, current weight, and the correct category page.\n\n## Browse current flower sections\n\n- `/budget-weed`\n- `/aa-weed`\n- `/aaa-weed`\n- `/premium-weed`\n- `/exotic-weed`",
    "secondTake": {
      "label": "A Second Take",
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization",
      "body": "Price comparison is a layout problem as much as a math problem. When weight, section, and current price are visible together, the decision becomes much easier to read."
    },
    "linkRoutes": [
      "/budget-weed",
      "/aa-weed",
      "/aaa-weed",
      "/premium-weed",
      "/exotic-weed"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/value-guides"
    ],
    "commercialLinks": [
      {
        "title": "Budget flower",
        "href": "/budget-weed",
        "description": "Browse the current Budget flower section."
      },
      {
        "title": "AA flower",
        "href": "/aa-weed",
        "description": "Browse the current AA flower section."
      },
      {
        "title": "AAA+ flower",
        "href": "/aaa-weed",
        "description": "Browse the current AAA+ flower section."
      },
      {
        "title": "Premium flower",
        "href": "/premium-weed",
        "description": "Browse the current Premium flower section."
      },
      {
        "title": "Exotic flower",
        "href": "/exotic-weed",
        "description": "Browse the current Exotic flower section."
      }
    ],
    "cards": [
      {
        "title": "Value Guides: Compare the Full Listing, Not One Number",
        "href": "/resources/value-guides",
        "description": "Value shopping is not simply finding the lowest number on the page. A useful comparison includes the listed weight, product section, current price, and item details. A lower price attached to a different size is not the ",
        "category": "Menu guide",
        "author": "Quinn West",
        "updated": "2026-07-11"
      }
    ]
  },
  {
    "pageNumber": 19,
    "sourceHeading": "WEED DISPENSARY IN QUEEN WEST",
    "route": "/resources/local-guides/weed-dispensary-in-queen-west",
    "kind": "article",
    "pageType": "Local evergreen guide",
    "parentRoute": "/resources/local-guides",
    "h1": "Weed Dispensary in Queen West: A Queen and Lansdowne Guide",
    "seoTitle": "Weed Dispensary in Queen West | Queen Lansdowne Cannabis",
    "metaDescription": "Find Queen Lansdowne Cannabis near Queen Street West and Lansdowne, with current store information, menu categories, Parkdale context, and visit-planning links.",
    "primaryKeyword": "weed dispensary in Queen West",
    "supportingKeywords": [
      "cannabis store near Lansdowne",
      "cannabis dispensary Parkdale",
      "Queen Street West weed store",
      "Queen Lansdowne Cannabis"
    ],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-07-11",
    "dateModified": "2026-07-11",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Queen Lansdowne Cannabis is located at 1472 Queen St W, near Lansdowne in Toronto. For shoppers searching around Queen West or Parkdale, the most useful first step is the store page, followed by the category that matches",
    "body": "Queen Lansdowne Cannabis is located at 1472 Queen St W, near Lansdowne in Toronto. For shoppers searching around Queen West or Parkdale, the most useful first step is the store page, followed by the category that matches the product question.\n\n## Start with the exact store\n\nBroad searches can return several similarly named stores and listings. Use the Queen Lansdowne Cannabis store page to confirm the address, current hours, phone number, and visit information.\n\nStore page: `/weed-dispensary-toronto`\n\n## Queen West and nearby area context\n\nQueen Street West and Lansdowne place the store near Parkdale and the west side neighbourhoods that many local shoppers already recognize, including Little Portugal, Roncesvalles, Brockton Village, and Dundas West.\n\nThe neighbourhood names should help orientation. They should not be used as a pasted list in every sentence.\n\n## Move from location to category\n\nAfter confirming the store, use the menu category that matches the visit:\n\n- Flower sections\n- Pre-rolls\n- Edibles\n- THC vapes\n- Concentrates\n- Accessories\n- Native smokes\n- Specialty products\n\nThis keeps local intent connected to a practical next step.\n\n## Check current details before travelling for one item\n\nProduct selection can change. Store information can also change over time. When one item, price, or hour determines the visit, check it on the current page or contact the store.\n\n## Local links\n\n- Store page: `/weed-dispensary-toronto`\n- FAQ: `/faq`\n- Resource Centre: `/resources/`\n- Pre-rolls: `/items/prerolls`\n- Edibles: `/items/edibles`\n- Nicotine vapes: `/items/vapes`\n- THC vapes: `/items/vape-disposables`",
    "secondTake": {
      "label": "A Second Take",
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization",
      "body": "A local guide works best when it makes the current store details, category, and page easier to confirm."
    },
    "linkRoutes": [
      "/weed-dispensary-toronto",
      "/faq",
      "/resources",
      "/items/prerolls",
      "/items/edibles",
      "/items/vapes"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/local-guides",
      "/resources"
    ],
    "commercialLinks": [
      {
        "title": "Queen Lansdowne Cannabis store page",
        "href": "/weed-dispensary-toronto",
        "description": "Use the store page for current location, hours, contact details, and visit planning."
      },
      {
        "title": "FAQ",
        "href": "/faq",
        "description": "Check common store questions."
      },
      {
        "title": "Pre-rolls",
        "href": "/items/prerolls",
        "description": "Browse current pre-roll listings."
      },
      {
        "title": "Edibles",
        "href": "/items/edibles",
        "description": "Browse current edible listings."
      },
      {
        "title": "Nicotine vapes",
        "href": "/items/vapes",
        "description": "Browse current nicotine vape listings."
      }
    ],
    "cards": [
      {
        "title": "Queen West and Lansdowne Local Guides",
        "href": "/resources/local-guides",
        "description": "Queen Street West is busy, so a store visit should be easy to plan. These local guides connect Queen Lansdowne Cannabis to the neighbourhood in a useful way: the address, the store page, the correct men",
        "category": "Menu guide",
        "author": "Quinn West",
        "updated": "2026-07-11"
      },
      {
        "title": "Queen Lansdowne Cannabis Resource Centre",
        "href": "/resources",
        "description": "The Queen Lansdowne Cannabis Resource Centre keeps the useful guides in one place: flower, pre-rolls, edibles, THC vapes, value shopping, native smokes, specialty products, and Queen West visit help.",
        "category": "Resource Centre landing page",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      }
    ]
  },
  {
    "pageNumber": 20,
    "sourceHeading": "NATIVE CIGARETTES GUIDE",
    "route": "/resources/native-smokes/native-cigarettes-guide",
    "kind": "article",
    "pageType": "Evergreen native-smokes guide",
    "parentRoute": "/resources/native-smokes",
    "h1": "Native Cigarettes in Toronto: What to Check Before Visiting",
    "seoTitle": "Native Cigarettes in Toronto | Queen Lansdowne Cannabis",
    "metaDescription": "Native cigarette guide for Queen Lansdowne Cannabis with listed brand examples, $25 carton listings, pack/carton checks, and Queen West store links.",
    "primaryKeyword": "native cigarettes in Toronto",
    "supportingKeywords": [
      "native smokes Toronto",
      "native cigarettes Queen West",
      "native cigarettes near Lansdowne"
    ],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-07-11",
    "dateModified": "2026-07-11",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Adults 19+ looking for native cigarettes in Toronto can check listed QLC brand examples, $25 carton listings, pack/carton wording, current price, and selection before visiting.",
    "body": "Adults 19+ comparing Native cigarette listings usually need the current brand, variety, pack or carton unit, and posted price.\n\nUse the cigarette category as a current menu snapshot rather than a permanent promise. If one brand matters, check `/items/cigarettes` or contact the store before leaving.\n\n## What to check\n\n- Brand\n- Variety\n- Pack or carton\n- Quantity\n- Current price\n- Store location\n\nQueen Lansdowne Cannabis is located at 1472 Queen St W near Lansdowne. Use the main store page to confirm current hours and contact details.",
    "secondTake": {
      "label": "A Second Take",
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization",
      "body": "Current brand, variety, carton, and $25 price information should still be checked before visiting for a specific cigarette product."
    },
    "linkRoutes": [
      "/info/native-cigarettes-toronto",
      "/items/cigarettes",
      "/weed-dispensary-toronto",
      "/resources/native-smokes"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/native-smokes",
      "/resources/native-smokes/packs-vs-cartons"
    ],
    "commercialLinks": [
      {
        "title": "Native cigarettes information",
        "href": "/info/native-cigarettes-toronto",
        "description": "Read the current native-cigarette information page."
      },
      {
        "title": "Cigarettes",
        "href": "/items/cigarettes",
        "description": "Browse current cigarette listings."
      },
      {
        "title": "Queen Lansdowne Cannabis store page",
        "href": "/weed-dispensary-toronto",
        "description": "Use the store page for current location, hours, contact details, and visit planning."
      }
    ],
    "cards": [
      {
        "title": "Native Smokes and Cigarette Guides",
        "href": "/resources/native-smokes",
        "description": "This section helps Queen West shoppers compare Native cigarette brands, pack or carton wording, and current listed prices.\n\nUse the current cigarette category before visiting when one brand or unit matters.\n\n### Guides in this section\n\n**Native Cigarettes in Toronto: What to Check Before Visiting**\nCompare current brand, variety, unit, and price information.\n\n**Cigarette Packs vs Cartons: What the Listing Means**\nA simple explanation of units and packaging.\n\nCurrent menu category: `/items/cigarettes`.",
        "category": "Menu guide",
        "author": "Quinn West",
        "updated": "2026-07-11"
      },
      {
        "title": "Cigarette Packs vs Cartons: What the Listing Means",
        "href": "/resources/native-smokes/packs-vs-cartons",
        "description": "A pack and a carton are different sales units, so compare the listed unit beside the current price.\n\n## Pack listings\n\nCheck the brand, variety, pack size where shown, and current price.\n\n## Carton listings\n\nA carton contains multiple packs. If one brand or carton count matters, check `/items/cigarettes` or ask the store before leaving.\n\n## Compare the same unit\n\n1. Confirm pack or carton.\n2. Confirm quantity.\n3. Confirm brand and variety.\n4. Read the current posted price.",
        "category": "Evergreen terminology guide",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      }
    ]
  },
  {
    "pageNumber": 21,
    "sourceHeading": "PACKS VS CARTONS",
    "route": "/resources/native-smokes/packs-vs-cartons",
    "kind": "article",
    "pageType": "Evergreen terminology guide",
    "parentRoute": "/resources/native-smokes",
    "h1": "Cigarette Packs vs Cartons: What the Listing Means",
    "seoTitle": "Cigarette Packs vs Cartons | Native Smokes Guide",
    "metaDescription": "Understand how cigarette packs and cartons differ as listing units, and why quantity, variety, current price, and selection should be checked together.",
    "primaryKeyword": "cigarette packs vs cartons",
    "supportingKeywords": [
      "native cigarette carton",
      "native cigarette pack",
      "cigarette packaging guide"
    ],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-07-11",
    "dateModified": "2026-07-11",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Understand how cigarette packs and cartons differ as listing units, and why quantity, variety, current price, and selection should be checked together.",
    "body": "A pack and a carton are different sales units, so compare the listed unit beside the current price.\n\n## Pack listings\n\nCheck the brand, variety, pack size where shown, and current price.\n\n## Carton listings\n\nA carton contains multiple packs. If one brand or carton count matters, check `/items/cigarettes` or ask the store before leaving.\n\n## Compare the same unit\n\n1. Confirm pack or carton.\n2. Confirm quantity.\n3. Confirm brand and variety.\n4. Read the current posted price.",
    "secondTake": {
      "label": "A Second Take",
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization",
      "body": "Most confusion disappears once the unit is clear. Pack and carton are not two prices for the same amount."
    },
    "linkRoutes": [
      "/items/cigarettes"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/native-smokes",
      "/resources/native-smokes/native-cigarettes-guide"
    ],
    "commercialLinks": [
      {
        "title": "Cigarettes",
        "href": "/items/cigarettes",
        "description": "Browse current cigarette listings."
      }
    ],
    "cards": [
      {
        "title": "Native Smokes and Cigarette Guides",
        "href": "/resources/native-smokes",
        "description": "This section helps Queen West shoppers compare Native cigarette brands, pack or carton wording, and current listed prices.\n\nUse the current cigarette category before visiting when one brand or unit matters.\n\n### Guides in this section\n\n**Native Cigarettes in Toronto: What to Check Before Visiting**\nCompare current brand, variety, unit, and price information.\n\n**Cigarette Packs vs Cartons: What the Listing Means**\nA simple explanation of units and packaging.\n\nCurrent menu category: `/items/cigarettes`.",
        "category": "Menu guide",
        "author": "Quinn West",
        "updated": "2026-07-11"
      },
      {
        "title": "Native Cigarettes in Toronto: What to Check Before Visiting",
        "href": "/resources/native-smokes/native-cigarettes-guide",
        "description": "Adults 19+ comparing Native cigarette listings usually need the current brand, variety, pack or carton unit, and posted price.\n\nUse the cigarette category as a current menu snapshot rather than a permanent promise. If one brand matters, check `/items/cigarettes` or contact the store before leaving.\n\n## What to check\n\n- Brand\n- Variety\n- Pack or carton\n- Quantity\n- Current price\n- Store location\n\nQueen Lansdowne Cannabis is located at 1472 Queen St W near Lansdowne. Use the main store page to confirm current hours and contact details.",
        "category": "Evergreen native-smokes guide",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      }
    ]
  },
  {
    "pageNumber": 22,
    "sourceHeading": "MAGIC MUSHROOM FORMATS EXPLAINED",
    "route": "/resources/magic-mushroom-guides/magic-mushroom-formats-explained",
    "kind": "article",
    "pageType": "Evergreen specialty-product format guide",
    "parentRoute": "/resources/magic-mushroom-guides",
    "h1": "Magic Mushroom Formats Explained at the Menu Level",
    "seoTitle": "Magic Mushroom Formats Explained | Queen Lansdowne",
    "metaDescription": "Learn how magic mushroom and specialty-product formats may appear on a menu, including chocolates, gummies, capsules, dried products, and package information.",
    "primaryKeyword": "magic mushroom formats",
    "supportingKeywords": [
      "magic mushroom chocolate",
      "mushroom gummies",
      "dried magic mushrooms",
      "mushroom capsules"
    ],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-07-11",
    "dateModified": "2026-07-11",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Learn how magic mushroom and specialty-product formats may appear on a menu, including chocolates, gummies, capsules, dried products, and package information.",
    "body": "Magic mushroom and specialty-product menus may use several formats. The format helps shoppers understand how an item is packaged and listed.\n\nCheck the current Magic Stuff category because listings can change. Compare the product name, format, package count, listed amount, and package details.\n\n## Important boundary\n\nThis guide focuses on menu formats, package labels, and current listing details.",
    "secondTake": {
      "label": "A Second Take",
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization",
      "body": "Specialty-product selection can vary. Use the current Magic Stuff category before planning a visit around a specific item."
    },
    "linkRoutes": [
      "/items/magic"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/magic-mushroom-guides",
      "/resources/magic-mushroom-guides/how-to-read-a-magic-mushroom-menu"
    ],
    "commercialLinks": [
      {
        "title": "Magic Stuff",
        "href": "/items/magic",
        "description": "Browse current specialty-product listings."
      }
    ],
    "cards": [
      {
        "title": "Magic Mushroom and Specialty-Product Guides",
        "href": "/resources/magic-mushroom-guides",
        "description": "Specialty-product menus can use different formats, package sizes, and label conventions. This section helps shoppers compare those listings without guessing from a product name alone.\n\nUse the current Magic Stuff category before planning a visit around one item.\n\n### Guides in this section\n\n**Magic Mushroom Formats Explained**\nA menu-level overview of listed formats and package information.\n\n**How to Read a Magic Mushroom Menu**\nA practical guide to product name, format, package amount, and current listing details.",
        "category": "Menu guide",
        "author": "Lana Queen",
        "updated": "2026-07-11"
      },
      {
        "title": "How to Read a Magic Mushroom Menu Clearly",
        "href": "/resources/magic-mushroom-guides/how-to-read-a-magic-mushroom-menu",
        "description": "A specialty-product listing should be checked by product format, package, listed amount, and current listing details.\n\n## Identify the format first\n\nConfirm whether the item is a dried product, chocolate, gummy, capsule, beverage, or another specialty format.\n\n## Read the package information\n\nA number may refer to a total package amount, piece count, product weight, or another label detail. The listing or package should clarify which one applies.\n\n## Check current listings\n\nUse `/items/magic` for current products. This resource focuses on menu formats, package labels, and current listing details.",
        "category": "Evergreen menu-literacy guide",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      }
    ]
  },
  {
    "pageNumber": 23,
    "sourceHeading": "HOW TO READ A MAGIC MUSHROOM MENU",
    "route": "/resources/magic-mushroom-guides/how-to-read-a-magic-mushroom-menu",
    "kind": "article",
    "pageType": "Evergreen menu-literacy guide",
    "parentRoute": "/resources/magic-mushroom-guides",
    "h1": "How to Read a Magic Mushroom Menu Clearly",
    "seoTitle": "How to Read a Magic Mushroom Menu | Queen Lansdowne",
    "metaDescription": "Read magic mushroom menu listings by checking format, package amount, listed strength, serving information, item details, and current selection.",
    "primaryKeyword": "how to read a magic mushroom menu",
    "supportingKeywords": [
      "magic mushroom menu Toronto",
      "mushroom chocolate menu",
      "mushroom gummy menu",
      "specialty products Queen West"
    ],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-07-11",
    "dateModified": "2026-07-11",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Read magic mushroom menu listings by checking format, package amount, listed strength, serving information, item details, and current selection.",
    "body": "A specialty-product listing should be checked by product format, package, listed amount, and current listing details.\n\n## Identify the format first\n\nConfirm whether the item is a dried product, chocolate, gummy, capsule, beverage, or another specialty format.\n\n## Read the package information\n\nA number may refer to a total package amount, piece count, product weight, or another label detail. The listing or package should clarify which one applies.\n\n## Check current listings\n\nUse `/items/magic` for current products. This resource focuses on menu formats, package labels, and current listing details.",
    "secondTake": {
      "label": "A Second Take",
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization",
      "body": "A clear specialty menu separates the product name from the information that actually explains the package."
    },
    "linkRoutes": [
      "/items/magic"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/magic-mushroom-guides",
      "/resources/magic-mushroom-guides/magic-mushroom-formats-explained"
    ],
    "commercialLinks": [
      {
        "title": "Magic Stuff",
        "href": "/items/magic",
        "description": "Browse current specialty-product listings."
      }
    ],
    "cards": [
      {
        "title": "Magic Mushroom and Specialty-Product Guides",
        "href": "/resources/magic-mushroom-guides",
        "description": "Specialty-product menus can use different formats, package sizes, and label conventions. This section helps shoppers compare those listings without guessing from a product name alone.\n\nUse the current Magic Stuff category before planning a visit around one item.\n\n### Guides in this section\n\n**Magic Mushroom Formats Explained**\nA menu-level overview of listed formats and package information.\n\n**How to Read a Magic Mushroom Menu**\nA practical guide to product name, format, package amount, and current listing details.",
        "category": "Menu guide",
        "author": "Lana Queen",
        "updated": "2026-07-11"
      },
      {
        "title": "Magic Mushroom Formats Explained at the Menu Level",
        "href": "/resources/magic-mushroom-guides/magic-mushroom-formats-explained",
        "description": "Magic mushroom and specialty-product menus may use several formats. The format helps shoppers understand how an item is packaged and listed.\n\nCheck the current Magic Stuff category because listings can change. Compare the product name, format, package count, listed amount, and package details.\n\n## Important boundary\n\nThis guide focuses on menu formats, package labels, and current listing details.",
        "category": "Evergreen specialty-product format guide",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      }
    ]
  },
  {
    "pageNumber": 24,
    "sourceHeading": "RESOURCE CENTRE LAUNCH UPDATE",
    "route": "/resources/store-updates/resource-centre-launch",
    "kind": "update",
    "pageType": "Official store update",
    "parentRoute": "/resources/store-updates",
    "h1": "The Queen Lansdowne Cannabis Resource Centre Is Now Live",
    "seoTitle": "Queen Lansdowne Cannabis Resource Centre Is Live",
    "metaDescription": "Queen Lansdowne Cannabis has launched a new Resource Centre for flower, pre-rolls, edibles, vapes, value, local guides, native smokes, and specialty products.",
    "primaryKeyword": "Queen Lansdowne Cannabis Resource Centre",
    "supportingKeywords": [
      "cannabis guides Queen West",
      "Queen Lansdowne updates",
      "cannabis resource centre Toronto"
    ],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-07-11",
    "dateModified": "2026-07-11",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Queen Lansdowne Cannabis has launched a new Resource Centre for adults 19+ who want clearer information before browsing the current menu or planning a visit.",
    "body": "Queen Lansdowne Cannabis has launched a new Resource Centre for adults 19+ who want clearer information before browsing the current menu or planning a visit.\n\nThe new section organizes practical guides by topic instead of placing every article in one dated feed.\n\n## What the Resource Centre covers\n\nThe first release includes:\n\n- Cannabis 101\n- Flower Guides\n- Pre-Roll Guides\n- Edibles Guides\n- THC Vape Guides\n- Value Guides\n- Queen West Local Guides\n- Native Smokes\n- Magic Mushroom and Specialty-Product Guides\n- Official Store Updates\n\n## Why we changed the structure\n\nSome questions stay useful for a long time. A guide to flower sections, edible timing, or menu terminology should remain easy to find instead of disappearing beneath newer posts.\n\nThe Resource Centre keeps permanent guides organized by subject while current product information remains on the current menu.\n\n## Where to begin\n\nVisit `/resources/` and choose the category that matches your question.\n\nUse the store page for current location, hours, contact information, and visit planning. Use the current menu for current products, prices, weights, and selection.\n\n## What happens next\n\nNew resources will be added when there is a real customer question, a useful shopper question, a real store change, or a topic that needs a complete answer.\n\nThe Resource Centre will not be filled with daily posts simply to keep a schedule.",
    "secondTake": {
      "label": "A Second Take",
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization",
      "body": "A neighbourhood resource should be easy to return to. Organizing the guides by topic gives each page a permanent job."
    },
    "linkRoutes": [
      "/resources"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/store-updates",
      "/resources"
    ],
    "commercialLinks": [],
    "cards": [
      {
        "title": "Queen Lansdowne Cannabis Store Updates",
        "href": "/resources/store-updates",
        "description": "This section contains official Queen Lansdowne Cannabis announcements. It is not a general news feed and it will not be filled with routine promotional posts.",
        "category": "Menu guide",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      },
      {
        "title": "Queen Lansdowne Cannabis Resource Centre",
        "href": "/resources",
        "description": "The Queen Lansdowne Cannabis Resource Centre keeps the useful guides in one place: flower, pre-rolls, edibles, THC vapes, value shopping, native smokes, specialty products, and Queen West visit help.",
        "category": "Resource Centre landing page",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      }
    ]
  },
  {
    "pageNumber": 25,
    "sourceHeading": "CANNABIS DISPENSARY VS WEED DISPENSARY AUTHORITY GUIDE",
    "route": "/resources/cannabis-dispensary-vs-weed-dispensary",
    "kind": "article",
    "pageType": "Cannabis terminology guide",
    "parentRoute": "/resources/cannabis-101",
    "h1": "Weed Dispensary vs. Cannabis Dispensary: Same Goal, Different Words",
    "seoTitle": "Weed vs Cannabis Dispensary | Queen Lansdowne Cannabis Toronto",
    "metaDescription": "Weed dispensary, cannabis dispensary or dispensary near me? Learn how these local-search terms connect at Queen Lansdowne Cannabis in Toronto.",
    "primaryKeyword": "cannabis dispensary vs weed dispensary",
    "supportingKeywords": [
      "weed dispensary near me",
      "cannabis dispensary near me",
      "dispensary near me",
      "cannabis store Toronto"
    ],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-09-04",
    "dateModified": "2026-09-04",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Weed dispensary, cannabis dispensary or dispensary near me? Learn how these local-search terms connect at Queen Lansdowne Cannabis in Toronto.",
    "body": "Local cannabis searches are full of vocabulary changes. Some customers use the formal word cannabis, some use the everyday word weed, and others simply search for a dispensary. Those differences matter for search language, but they do not automatically describe different kinds of businesses.\n\n## Why “Dispensary Near Me” Matters\n\nThe phrase “near me” signals that location matters. The searcher is not only learning about cannabis terminology; they are trying to identify a nearby place.\n\nLonger versions such as “cannabis dispensary near me” and “weed dispensary near me” make the cannabis context explicit. The shorter “dispensary near me” removes the modifier but keeps strong local intent.\n\n## Why the Local Page Still Leads\n\nThe purpose of this article is educational. It explains the relationship among dispensary, cannabis dispensary, weed dispensary and cannabis store.\n\nFor real visit intent in Toronto, Queen Lansdowne Cannabis should continue directing users to the [existing canonical local/store page](/weed-dispensary-toronto), where the business’s verified location information belongs.\n\n## Frequently Asked Questions\n\n**Why do people search “weed dispensary near me”?**\nBecause weed is common everyday language and “near me” signals that the searcher wants a nearby business.\n\n**Why do others use “cannabis dispensary near me”?**\nCannabis is the more formal term, so some people naturally use it when searching for the same kind of local business.\n\n**Is “dispensary near me” the same exact keyword?**\nNo. It is a distinct query, but it can express closely related local intent.\n\n**What should matter after a local result is found?**\nCorrect business identity, location information, current store details and a reliable page for planning a visit.",
    "secondTake": null,
    "linkRoutes": [
      "/weed-dispensary-toronto",
      "/resources/cannabis-101"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/cannabis-101"
    ],
    "commercialLinks": [],
    "cards": []
  }
];

// BEGIN PINKY QLC01 KNOWLEDGE BASE V2 SS
const PINKY_RESOURCE_LABELS: Record<string, string> = {
  "/resources/cannabis-101": "Cannabis 101: Start With the Menu, Not the Noise",
  "/resources/cannabis-101/first-dispensary-visit": "First Cannabis Store Visit: What to Expect",
  "/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic": "AA vs AAA+ vs Premium vs Exotic: What the Flower Sections Actually Do",
  "/resources/flower-guides/what-does-good-weed-mean": "What Does “Good Weed” Actually Mean?",
  "/resources/flower-guides/top-shelf-mids-quads": "Top Shelf, Mids, Quads, AAAA and AAA: What Do They Mean?",
  "/resources/flower-guides/thc-vs-weed-quality": "Does Higher THC Mean Better Weed?",
  "/resources/flower-guides/bag-appeal": "Bag Appeal 101: What Makes Weed Look Good?",
  "/resources/flower-guides/trichomes-frosty-weed": "What Does “Frosty Weed” Mean?",
  "/resources/flower-guides/terpenes-gas-loud-aroma": "Gas, Loud, Terpy: Understanding Cannabis Aroma",
  "/resources/flower-guides/drying-curing-freshness": "Drying, Curing and Freshness: What Changes After Harvest?",
  "/resources/flower-guides/smalls-vs-big-buds": "Smalls vs Big Buds: Is Size a Quality Grade?",
  "/resources/weed-flower-guide": "Weed & Cannabis Flower Guide",
  "/resources/flower-guides/bc-grown-indoor-hydro-outdoor": "BC Grown, Indoor, Hydro, Greenhouse and Outdoor: Different Labels, Different Meanings",
  "/resources/flower-guides/craft-vs-commercial-cannabis": "Craft vs Commercial Cannabis: What Actually Changes?",
  "/resources/cannabis-101/indica-sativa-hybrid": "Indica vs Sativa vs Hybrid: Useful Labels, Imperfect Shortcuts",
  "/resources/cannabis-101/strain-vs-cultivar": "Strain vs Cultivar: Two Ways People Name Cannabis",
  "/resources/cannabis-101/landrace-vs-hybrid": "Landrace vs Hybrid: Where Modern Cannabis Genetics Come From",
  "/resources/cannabis-101/weed-slang-glossary": "Weed Slang Explained: Gas, Loud, Fire, Dank, Mids, Quads and More",
  "/resources/native-smokes/native-cigarettes-guide": "Native Cigarettes in Ontario: Terms, History and What to Know"
};
const PINKY_RESOURCE_OVERRIDES: Record<string, Partial<ResourcePage>> = {
  "/resources/cannabis-101": {
    "h1": "Cannabis 101: Start With the Menu, Not the Noise",
    "seoTitle": "Cannabis 101 in Toronto | Queen Lansdowne Cannabis",
    "metaDescription": "A practical Cannabis 101 guide to menu language, flower terms, labels and visit planning for adults 19+ in Toronto.",
    "excerpt": "A practical Cannabis 101 guide to menu language, flower terms, labels and visit planning for adults 19+ in Toronto.",
    "body": "## Cannabis Language Changes From Person to Person\n\nCannabis has a formal vocabulary and an everyday vocabulary, and both show up on the same menu.\n\n“Cannabis” is the formal term used in Canadian law, regulated product labels and most health information. “Weed” is the everyday word many adults use when they talk about flower or search for a nearby store. “Bud” and “flower” usually refer to the dried flowering part of the plant, while “nug” is casual slang for an individual piece of dried flower.\n\nNone of those words automatically tells you whether a product is stronger, fresher or better. They mostly tell you how someone is talking about it.\n\nThe same is true for terms such as Premium, Exotic, AA and AAA+. Queen Lansdowne Cannabis uses named sections to organize flower browsing, but those section names are not a single government grading scale. They are navigation labels. The useful next step is to read the actual listing and legal product information rather than treating the section name as a laboratory result.\n\n## Start With Format Before Chasing a Strain Name\n\nA cannabis menu makes more sense when you first decide what kind of product you are looking at.\n\nFlower, pre-rolls, edibles, THC vape products and concentrates are different formats. They are used differently, their labels present information differently, and a familiar cultivar name does not make two different formats interchangeable.\n\nThat is why the Queen Lansdowne resource centre separates format education from flower-quality language.\n\nFor flower, you may see terms about tier, cultivar, Indica/Sativa/Hybrid classification, THC, aroma or bud size. For edibles, the label and amount per unit matter. Pre-rolls may identify flower type, count and weight. Vape and concentrate listings have their own product information.\n\nThe easiest way to avoid getting lost is to compare like with like.\n\n## Read the Legal Label, Not Just the Big Number\n\nTHC attracts attention because it is one of the most visible measurements on a cannabis label. It matters, but it is not a complete quality score.\n\nLegal cannabis labels identify product name, THC and CBD amounts, health warnings and regulated package information. Depending on the product, there may also be ingredients or other details.\n\nFor flower, adults often care about additional characteristics that are not captured by THC alone: aroma, moisture, trim, structure, trichome coverage, drying, curing, freshness and the consistency of the batch.\n\nA high number cannot tell you all of those things.\n\n## Indica, Sativa and Hybrid Are Starting Points, Not Guarantees\n\nIndica, Sativa and Hybrid remain common menu labels because people recognize them quickly. Modern commercial cannabis, however, has a long history of crossbreeding.\n\nThat means the label is better treated as one piece of information rather than a guaranteed prediction of how a product will feel.\n\nIf you want to understand a product more clearly, use the label together with cannabinoid information, the producer's description and any aroma or terpene information that is actually provided.\n\nAvoid turning a familiar category into a promise such as “Indica always means sleepy” or “Sativa always means energetic.” Real products are more complicated than that shortcut.\n\n## Quality Slang Is Useful When You Translate It\n\nCannabis culture has its own shorthand.\n\n“Fire” can mean very good. “Gas” often describes a strong fuel-like aroma. “Loud” usually means the smell is pronounced. “Frosty” points to visible trichome coverage. “Mids” is a casual term for something viewed as middle-of-the-road. “Top shelf,” “quads” and “AAAA” are often used to suggest premium quality.\n\nThose words can be useful conversation starters, but they are not official test results.\n\nThe better question is: what specific characteristic is the slang describing?\n\nIf someone says a flower is “loud,” are they talking about aroma? If they call it “frosty,” are they pointing to visible resin glands? If they say “top shelf,” are they talking about trim, cure, appearance, genetics, freshness or simply price positioning?\n\nTranslate the nickname into something observable.\n\n## Use the Resource Centre as a Map\n\nCannabis 101 should make the rest of the site easier to understand.\n\nFrom here, adults 19+ can move into deeper guides on first-store visits, flower tiers, THC, trichomes, aroma, drying and curing, growing methods, genetics and common weed slang.\n\nFor current store details, use Queen Lansdowne Cannabis's local store information. For current product listings, use the live menu rather than an educational article.\n\n## Frequently Asked Questions\n\n**Is weed the same thing as cannabis?**\n“Weed” is common informal language for cannabis. Cannabis is the formal term used in Canadian law and regulated product information.\n\n**Are AA, AAA+, Premium and Exotic official government grades?**\nNo single Canadian government grading system defines those retail tier labels. Their exact meaning can vary by retailer.\n\n**Does higher THC automatically mean higher-quality flower?**\nNo. THC is important information, but it does not describe every part of flower quality such as aroma, cure, moisture, trim, trichomes or freshness.\n\n**Are Indica and Sativa guaranteed to produce different effects?**\nNo. The labels remain common, but modern cannabis is heavily crossbred and the terms do not guarantee one specific experience.\n\n**Where should I check current products?**\nUse Queen Lansdowne Cannabis's current menu/category pages. Educational resources should not be treated as inventory or availability promises.\n\n## Keep Reading\n\n- [First Cannabis Store Visit](/resources/cannabis-101/first-dispensary-visit)\n- [Indica vs Sativa vs Hybrid](/resources/cannabis-101/indica-sativa-hybrid)\n- [Strain vs Cultivar](/resources/cannabis-101/strain-vs-cultivar)\n- [Landrace vs Hybrid](/resources/cannabis-101/landrace-vs-hybrid)\n- [Weed Slang Explained](/resources/cannabis-101/weed-slang-glossary)\n- [Weed & Cannabis Flower Guide](/resources/weed-flower-guide)",
    "dateModified": "2026-09-06",
    "linkRoutes": [
      "/resources/cannabis-101/first-dispensary-visit",
      "/resources/cannabis-101/indica-sativa-hybrid",
      "/resources/cannabis-101/strain-vs-cultivar",
      "/resources/cannabis-101/landrace-vs-hybrid",
      "/resources/cannabis-101/weed-slang-glossary",
      "/resources/weed-flower-guide"
    ],
    "relatedRoutes": [
      "/resources/cannabis-101/first-dispensary-visit",
      "/resources/cannabis-101/indica-sativa-hybrid",
      "/resources/cannabis-101/strain-vs-cultivar",
      "/resources/cannabis-101/landrace-vs-hybrid",
      "/resources/cannabis-101/weed-slang-glossary",
      "/resources/weed-flower-guide"
    ],
    "faqs": [
      {
        "question": "Is weed the same thing as cannabis?",
        "answer": "“Weed” is common informal language for cannabis. Cannabis is the formal term used in Canadian law and regulated product information."
      },
      {
        "question": "Are AA, AAA+, Premium and Exotic official government grades?",
        "answer": "No single Canadian government grading system defines those retail tier labels. Their exact meaning can vary by retailer."
      },
      {
        "question": "Does higher THC automatically mean higher-quality flower?",
        "answer": "No. THC is important information, but it does not describe every part of flower quality such as aroma, cure, moisture, trim, trichomes or freshness."
      },
      {
        "question": "Are Indica and Sativa guaranteed to produce different effects?",
        "answer": "No. The labels remain common, but modern cannabis is heavily crossbred and the terms do not guarantee one specific experience."
      },
      {
        "question": "Where should I check current products?",
        "answer": "Use Queen Lansdowne Cannabis's current menu/category pages. Educational resources should not be treated as inventory or availability promises."
      }
    ],
    "childRoutes": [
      "/resources/cannabis-101/first-dispensary-visit",
      "/resources/cannabis-101/indica-sativa-hybrid",
      "/resources/cannabis-101/strain-vs-cultivar",
      "/resources/cannabis-101/landrace-vs-hybrid",
      "/resources/cannabis-101/weed-slang-glossary"
    ]
  },
  "/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic": {
    "h1": "AA vs AAA+ vs Premium vs Exotic: What the Flower Sections Actually Do",
    "seoTitle": "Weed Quality Tiers Explained | AA, AAA+, Premium & Exotic",
    "metaDescription": "Learn how retail flower tiers such as AA, AAA+, Premium and Exotic are used, what they can describe and what actually affects flower quality.",
    "excerpt": "Learn how retail flower tiers such as AA, AAA+, Premium and Exotic are used, what they can describe and what actually affects flower quality.",
    "body": "## Tier Names Are Store Navigation, Not Laboratory Grades\n\nAA, AAA+, Premium and Exotic are familiar cannabis retail terms. Budget is another common starting point.\n\nThe important distinction is that these labels are not a single regulated Canadian grading scale. Two retailers can use the same word differently, and a tier name does not replace the information on the legal package.\n\nAt Queen Lansdowne Cannabis, the five protected flower routes organize browsing: Budget Weed, AA Weed, AAA+ Weed, Premium Weed and Exotic Weed.\n\nWhat Can Make One Flower Feel Better Finished Than Another?\n\nWhen adults talk about quality, they may be combining several characteristics at once.\n\nGenetics and cultivar\n\nGenetics influence the plant's potential traits, but the cultivar name alone does not guarantee an identical finished product from every producer or batch.\n\n## Cultivation\n\nEnvironment, plant health, harvest timing and grower decisions influence how the plant develops. Indoor, outdoor, greenhouse and hydro describe parts of the cultivation story, not automatic quality scores.\n\nTrichome development\n\nTrichomes are resin-producing structures on the plant. Visible trichome coverage can contribute to a frosty look, but appearance alone cannot tell you everything about chemistry, freshness or handling.\n\nTrim and structure\n\nBud shape, density and trim influence presentation or bag appeal. Those are useful visual clues, not proof of potency or overall quality.\n\nDrying and curing\n\nPost-harvest handling matters. Drying removes moisture; curing is part of controlled post-harvest conditioning. Poor handling can change aroma, texture and how the flower stores.\n\nFreshness and storage\n\nA flower can begin as a carefully grown product and still lose desirable characteristics through poor storage. Heat, air, light and time can affect the finished material.\n\n## Aroma\n\nAroma comes from volatile compounds including terpenes. Words such as gas, loud, fruity, skunky, floral, earthy and terpy are ways people describe what they smell. They are not official grades.\n\n## THC Is Not a Tier by Itself\n\nTHC is one important cannabis measurement. It is not a complete grading system.\n\nTwo flower products with similar THC numbers can differ in aroma, trim, moisture, trichome appearance, cultivar, freshness and post-harvest handling.\n\nLikewise, a higher THC number does not automatically prove that one product belongs in a higher retail tier.\n\n## Price and Quality Are Related Less Perfectly Than People Think\n\nPrice can reflect producer, supply, package size, cultivation costs, branding, batch characteristics or retailer positioning.\n\nThat means “more expensive” and “better” are not exact synonyms.\n\nThe purpose of a tier is to make comparison easier, not to make every decision for the shopper.\n\n## Where Budget Fits\n\nBudget Weed deserves its own route because value is a real browsing intent.\n\nBudget does not automatically mean unsafe, unusable or low potency. It means the store is positioning the section around value.\n\nThe same comparison rules still apply: read the product information, understand the format and compare the actual listing rather than judging only from the tier name.\n\n## How to Use Queen Lansdowne's Flower Tiers\n\nUse the five tier routes as five doors into the same flower category.\n\nThen compare the actual products shown within the section.\n\nIf you want to understand the vocabulary behind the tiers, continue into the guides on good weed, top shelf/mids/quads, THC, bag appeal, trichomes, aroma, drying/curing, smalls and growing methods.\n\n## Frequently Asked Questions\n\n**Is AAAA an official Canadian cannabis grade?**\nNo single government grading standard defines AAAA, AAA, AA, Premium or Exotic as universal cannabis grades.\n\n**Does Exotic always mean higher THC?**\nNo. Exotic is a retail/culture term and does not guarantee one THC range.\n\n**Can Budget Weed still have a high THC number?**\nA tier name and THC are different pieces of information. A product's legal label should be used for its actual THC information.\n\n**What does “top shelf” mean?**\nIt is informal language generally used to suggest premium positioning or quality. It is not a laboratory classification.\n\n**What should I compare besides tier?**\nDepending on what information is available, adults may compare cultivar, legal label, THC/CBD, aroma description, bud structure, trichomes, trim, freshness and producer information.\n\n## Keep Reading\n\n- [Budget Weed](/budget-weed)\n- [AA Weed](/aa-weed)\n- [AAA+ Weed](/aaa-weed)\n- [Premium Weed](/premium-weed)\n- [Exotic Weed](/exotic-weed)\n- [What Does Good Weed Mean?](/resources/flower-guides/what-does-good-weed-mean)\n- [Top Shelf, Mids and Quads Explained](/resources/flower-guides/top-shelf-mids-quads)\n- [THC vs Weed Quality](/resources/flower-guides/thc-vs-weed-quality)",
    "dateModified": "2026-09-06",
    "linkRoutes": [
      "/budget-weed",
      "/aa-weed",
      "/aaa-weed",
      "/premium-weed",
      "/exotic-weed",
      "/resources/flower-guides/what-does-good-weed-mean",
      "/resources/flower-guides/top-shelf-mids-quads",
      "/resources/flower-guides/thc-vs-weed-quality"
    ],
    "relatedRoutes": [
      "/resources/flower-guides/what-does-good-weed-mean",
      "/resources/flower-guides/top-shelf-mids-quads",
      "/resources/flower-guides/thc-vs-weed-quality"
    ],
    "faqs": [
      {
        "question": "Is AAAA an official Canadian cannabis grade?",
        "answer": "No single government grading standard defines AAAA, AAA, AA, Premium or Exotic as universal cannabis grades."
      },
      {
        "question": "Does Exotic always mean higher THC?",
        "answer": "No. Exotic is a retail/culture term and does not guarantee one THC range."
      },
      {
        "question": "Can Budget Weed still have a high THC number?",
        "answer": "A tier name and THC are different pieces of information. A product's legal label should be used for its actual THC information."
      },
      {
        "question": "What does “top shelf” mean?",
        "answer": "It is informal language generally used to suggest premium positioning or quality. It is not a laboratory classification."
      },
      {
        "question": "What should I compare besides tier?",
        "answer": "Depending on what information is available, adults may compare cultivar, legal label, THC/CBD, aroma description, bud structure, trichomes, trim, freshness and producer information."
      }
    ]
  },
  "/resources/weed-flower-guide": {
    "h1": "Weed & Cannabis Flower Guide",
    "seoTitle": "Weed & Cannabis Flower Guide Toronto | Queen Lansdowne Cannabis",
    "metaDescription": "Explore Queen Lansdowne Cannabis flower education covering Weed tiers, THC, trichomes, aroma, curing, genetics, growing methods and common slang.",
    "excerpt": "Explore Queen Lansdowne Cannabis flower education covering Weed tiers, THC, trichomes, aroma, curing, genetics, growing methods and common slang.",
    "body": "Add a new opening section:\n\n## Flower Has More Than One Language\n\nFlower, weed, bud and nugs can all point toward dried cannabis flower, but the quality language around it is much broader.\n\nA shopper may see Budget, AA, AAA+, Premium or Exotic. Someone else may talk about top shelf, mids, quads, gas, loud, frosty, terpy or bag appeal. Another person may be focused on THC, Indica/Sativa/Hybrid, BC-grown, indoor, hydro or craft.\n\nThose words describe different things.\n\nSome are store navigation. Some are chemistry. Some are cultivation. Some are genetics. Some are sensory slang.\n\nThis hub organizes them so one word does not have to carry the entire meaning of the product.\n\nAdd resource groups/cards\n\n## Quality & Tiers\n\nFlower Quality & Tiers → /resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic\n\nWhat Does Good Weed Mean? → /resources/flower-guides/what-does-good-weed-mean\n\nTop Shelf, Mids & Quads → /resources/flower-guides/top-shelf-mids-quads\n\nTHC vs Weed Quality → /resources/flower-guides/thc-vs-weed-quality\n\n## Appearance & Aroma\n\nBag Appeal → /resources/flower-guides/bag-appeal\n\nTrichomes & Frosty Weed → /resources/flower-guides/trichomes-frosty-weed\n\nTerpenes, Gas & Loud → /resources/flower-guides/terpenes-gas-loud-aroma\n\nSmalls vs Big Buds → /resources/flower-guides/smalls-vs-big-buds\n\n## After Harvest\n\nDrying, Curing & Freshness → /resources/flower-guides/drying-curing-freshness\n\n## Growing & Origins\n\nBC Grown / Indoor / Hydro / Outdoor → /resources/flower-guides/bc-grown-indoor-hydro-outdoor\n\nCraft vs Commercial Cannabis → /resources/flower-guides/craft-vs-commercial-cannabis\n\n## Genetics & Terminology\n\nIndica vs Sativa vs Hybrid → /resources/cannabis-101/indica-sativa-hybrid\n\nStrain vs Cultivar → /resources/cannabis-101/strain-vs-cultivar\n\nLandrace vs Hybrid → /resources/cannabis-101/landrace-vs-hybrid\n\nWeed Slang Explained → /resources/cannabis-101/weed-slang-glossary\n\nKeep all five protected Weed tier links already present.",
    "dateModified": "2026-09-06",
    "linkRoutes": [],
    "relatedRoutes": [],
    "faqs": [],
    "childRoutes": [
      "/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic",
      "/resources/flower-guides/budget-vs-premium-flower",
      "/resources/flower-guides/what-does-good-weed-mean",
      "/resources/flower-guides/top-shelf-mids-quads",
      "/resources/flower-guides/thc-vs-weed-quality",
      "/resources/flower-guides/bag-appeal",
      "/resources/flower-guides/trichomes-frosty-weed",
      "/resources/flower-guides/terpenes-gas-loud-aroma",
      "/resources/flower-guides/drying-curing-freshness",
      "/resources/flower-guides/smalls-vs-big-buds",
      "/resources/flower-guides/bc-grown-indoor-hydro-outdoor",
      "/resources/flower-guides/craft-vs-commercial-cannabis"
    ]
  },
  "/resources/native-smokes/native-cigarettes-guide": {
    "h1": "Native Cigarettes in Ontario: Terms, History and What to Know",
    "seoTitle": "Native Cigarettes in Ontario | History, Terms & Tobacco Rules",
    "metaDescription": "Learn what “Native cigarettes” can mean in Ontario, how tax-exempt allocation cigarettes differ from manufacturer identity, and what package stamps indicate.",
    "excerpt": "Learn what “Native cigarettes” can mean in Ontario, how tax-exempt allocation cigarettes differ from manufacturer identity, and what package stamps indicate.",
    "body": "“Native cigarettes” is common language in Ontario, but the phrase can blur together several different ideas.\n\nIt can refer to cigarettes associated with First Nations manufacturers, brands or retailers. It can also be used casually when people are really talking about tax-exempt allocation cigarettes sold under Ontario's First Nations Cigarette Allocation System.\n\nThose are not automatically the same thing.\n\nUnderstanding the difference makes the subject much clearer.\n\n## Traditional Tobacco and Commercial Cigarettes Are Not the Same Thing\n\nTobacco has cultural and ceremonial significance in many Indigenous communities.\n\nHealth Canada distinguishes traditional or sacred tobacco from modern commercial tobacco such as cigarettes, cigars and chewing tobacco.\n\nThat distinction matters.\n\nA modern manufactured cigarette should not be presented as the same thing as sacred or ceremonial tobacco simply because it is associated with an Indigenous business or community.\n\nThis page discusses commercial cigarettes and Ontario tobacco terminology, not ceremonial tobacco practices.\n\n## “Native Cigarette” Is Not One Legal Product Category\n\nThere is no single cigarette called “the Native cigarette.”\n\nDifferent manufacturers, brand owners and retailers participate in the broader tobacco market.\n\nSome cigarette brands are associated with Indigenous-owned manufacturers or First Nations territories. Others may be sold by retailers that also carry products from unrelated manufacturers.\n\nThat means brand identity, manufacturer identity and tax status should be checked separately.\n\nDo not infer all three from one nickname.\n\n## Ontario's First Nations Cigarette Allocation System\n\nOntario operates a First Nations Cigarette Allocation System under the provincial Tobacco Tax framework.\n\nThe system allows ministry-authorized wholesalers to deliver limited quantities of allocation cigarettes to authorized retailers located on reserves.\n\nEligible First Nations individuals may purchase those allocation cigarettes on reserve for their own personal use without Ontario tobacco tax being accounted for in the same way as ordinary marked cigarettes.\n\nThe system is sometimes called a cigarette quota.\n\nWhat Does the Peach-Coloured Stamp Mean?\n\nOntario explains that allocation cigarettes use a federal peach-coloured stamp.\n\nOntario tobacco tax has not been accounted for on those packages.\n\nThat does not mean any cigarette with a peach stamp can be sold anywhere to anyone.\n\nThe allocation system has rules about authorized wholesalers, authorized reserve retailers, eligible purchasers and where the sale occurs.\n\nOntario specifically states that allocation cigarettes are to be sold on reserve to eligible First Nations individuals for their exclusive use.\n\nWhat Does the Yellow Ontario Stamp Mean?\n\nOrdinary marked cigarettes sold in Ontario generally use the Ontario-adapted federal stamp, commonly described as the yellow Ontario stamp.\n\nThat indicates Ontario tobacco tax has been accounted for.\n\nThis is a different concept from whether a cigarette brand is Indigenous-owned or manufactured by an Indigenous business.\n\nAgain:\n\nmanufacturer identity and tax status are different questions.\n\n## “Native-Manufactured” Does Not Automatically Mean “Tax Free”\n\nThis is one of the biggest misunderstandings around the topic.\n\nA cigarette can be associated with an Indigenous-owned manufacturer without every package being tax-exempt.\n\nTax treatment depends on the applicable rules, package markings, distribution path, location and purchaser.\n\nSo statements such as “all Native cigarettes are tax free” are inaccurate.\n\nThe correct question is: what is the legal status of this particular package and sale?\n\n## Brands and Names Seen in the Queen Lansdowne Cigarette Catalog\n\nThe Queen Lansdowne website's cigarette source has referenced names including:\n\nCanadian Lights;\n\nCanadian Full;\n\nCanadian Menthol;\n\nCanadian Classics Original;\n\nCanadian Classics Silver;\n\nPutter's;\n\nCanadian Goose Full;\n\nCanadian Goose Lights;\n\nRolled Gold Lights;\n\nNexus Full;\n\nNexus Lights;\n\nTime Full.\n\nThese names are included here as catalog terminology, not as a claim that every brand is Indigenous-owned, Native-manufactured, tax-exempt or currently available.\n\nAvailability changes and should never be inferred from an educational article.\n\nManufacturer or ownership claims should only be added when they are independently verified for the exact brand.\n\nWhat About Packs and Cartons?\n\nA pack is an individual retail package.\n\nA carton contains multiple packs.\n\nThe exact count and package details should be confirmed from the actual listing or package.\n\nPack versus carton describes packaging quantity; it does not change the legal identity of the cigarettes.\n\nQueen Lansdowne already has a separate packs-versus-cartons resource for that terminology.\n\n## Why the Topic Matters in Ontario\n\nThe subject combines several histories:\n\nIndigenous relationships with tobacco;\n\nmodern First Nations entrepreneurship;\n\ncommercial cigarette manufacturing;\n\nreserve retail;\n\nprovincial tobacco tax;\n\nfederal package stamping;\n\nconsumer slang.\n\nReducing all of that to “cheap cigarettes” misses most of the story.\n\nIt also creates legal confusion by mixing together manufacturer identity with tax-exempt allocation status.\n\n## Commercial Tobacco Has Health Risks\n\n“Native,” “natural,” “traditional,” “premium” or similar words should not be interpreted as evidence that a commercial cigarette is safe.\n\nHealth Canada identifies commercial tobacco use as a major cause of preventable disease and premature death.\n\nCommercial cigarette smoking is associated with serious health risks including cancer, respiratory disease and cardiovascular disease.\n\nTraditional sacred tobacco and commercial cigarette smoking should not be treated as the same practice.\n\n## How to Read an Ontario Cigarette Listing More Carefully\n\nIf you are trying to understand a cigarette listing, separate the questions:\n\nWhat is the exact brand or product name?\n\nWho is the verified manufacturer or brand owner?\n\nWhat does the package stamp indicate?\n\nWhere is the product being sold?\n\nWhich Ontario rules apply to that package and sale?\n\nIs the information current, or am I looking at an old page?\n\nThat approach is much more reliable than using “Native cigarette” as a catch-all answer.\n\n## Queen Lansdowne Cannabis and This Guide\n\nThis page is an educational resource.\n\nIt does not promise that any cigarette name listed above is in stock, available in a particular format, or offered at a particular price.\n\nFor current store information, use Queen Lansdowne Cannabis's current public store information.\n\n## Frequently Asked Questions\n\n**Are all Native cigarettes tax free?**\nNo. Indigenous manufacturer/brand identity and tax-exempt allocation status are different issues.\n\n**What is Ontario's First Nations Cigarette Allocation System?**\nIt is a provincial tobacco-tax system that permits authorized wholesalers to supply specified quantities of allocation cigarettes to authorized on-reserve retailers for eligible First Nations purchasers.\n\n**What does a peach-coloured cigarette stamp mean in Ontario?**\nOntario says allocation cigarette packages use a federal peach-coloured stamp and that Ontario tobacco tax has not been accounted for on those cigarettes. Distribution and sale still have specific legal requirements.\n\n**Does “Native cigarette” identify the manufacturer?**\nNot reliably. The phrase is broad consumer language. Manufacturer or ownership should be verified for the exact brand.\n\n**Are traditional sacred tobacco and commercial cigarettes the same thing?**\nNo. Health Canada distinguishes sacred/traditional tobacco practices from commercial tobacco use.\n\n**Does this page show current cigarette availability?**\nNo. It is informational and should not be treated as an inventory, price or availability promise.\n\n**Related informational routes only**\nNative Smokes & Cigarette Guides → /resources/native-smokes\n\n**Cigarette Packs vs Cartons → /resources/native-smokes/packs-vs-cartons**\nQueen Lansdowne Cannabis Resource Centre → /resources",
    "dateModified": "2026-09-06",
    "linkRoutes": [],
    "relatedRoutes": [],
    "faqs": [
      {
        "question": "Are all Native cigarettes tax free?",
        "answer": "No. Indigenous manufacturer/brand identity and tax-exempt allocation status are different issues."
      },
      {
        "question": "What is Ontario's First Nations Cigarette Allocation System?",
        "answer": "It is a provincial tobacco-tax system that permits authorized wholesalers to supply specified quantities of allocation cigarettes to authorized on-reserve retailers for eligible First Nations purchasers."
      },
      {
        "question": "What does a peach-coloured cigarette stamp mean in Ontario?",
        "answer": "Ontario says allocation cigarette packages use a federal peach-coloured stamp and that Ontario tobacco tax has not been accounted for on those cigarettes. Distribution and sale still have specific legal requirements."
      },
      {
        "question": "Does “Native cigarette” identify the manufacturer?",
        "answer": "Not reliably. The phrase is broad consumer language. Manufacturer or ownership should be verified for the exact brand."
      },
      {
        "question": "Are traditional sacred tobacco and commercial cigarettes the same thing?",
        "answer": "No. Health Canada distinguishes sacred/traditional tobacco practices from commercial tobacco use."
      },
      {
        "question": "Does this page show current cigarette availability?",
        "answer": "No. It is informational and should not be treated as an inventory, price or availability promise."
      },
      {
        "question": "Related informational routes only",
        "answer": "Native Smokes & Cigarette Guides → /resources/native-smokes"
      },
      {
        "question": "Cigarette Packs vs Cartons → /resources/native-smokes/packs-vs-cartons",
        "answer": "Queen Lansdowne Cannabis Resource Centre → /resources"
      }
    ],
    "commercialLinks": []
  },
  "/resources": {
    "dateModified": "2026-09-06",
    "childRoutes": [
      "/resources/cannabis-101",
      "/resources/cannabis-101/first-dispensary-visit",
      "/resources/cannabis-101/indica-sativa-hybrid",
      "/resources/cannabis-101/strain-vs-cultivar",
      "/resources/cannabis-101/landrace-vs-hybrid",
      "/resources/cannabis-101/weed-slang-glossary",
      "/resources/cannabis-dispensary-vs-weed-dispensary",
      "/resources/weed-flower-guide",
      "/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic",
      "/resources/flower-guides/what-does-good-weed-mean",
      "/resources/flower-guides/top-shelf-mids-quads",
      "/resources/flower-guides/thc-vs-weed-quality",
      "/resources/flower-guides/bag-appeal",
      "/resources/flower-guides/trichomes-frosty-weed",
      "/resources/flower-guides/terpenes-gas-loud-aroma",
      "/resources/flower-guides/drying-curing-freshness",
      "/resources/flower-guides/smalls-vs-big-buds",
      "/resources/flower-guides/bc-grown-indoor-hydro-outdoor",
      "/resources/flower-guides/craft-vs-commercial-cannabis",
      "/resources/pre-roll-guides",
      "/resources/edibles-guides",
      "/resources/vape-guides",
      "/resources/value-guides",
      "/resources/local-guides",
      "/resources/native-smokes",
      "/resources/native-smokes/native-cigarettes-guide",
      "/resources/magic-mushroom-guides",
      "/resources/store-updates"
    ]
  }
};
const PINKY_RESOURCE_ADDITIONS: ResourcePage[] = [
  {
    "pageNumber": 26,
    "sourceHeading": "FIRST CANNABIS STORE VISIT: WHAT TO EXPECT",
    "route": "/resources/cannabis-101/first-dispensary-visit",
    "kind": "article",
    "pageType": "Cannabis education guide",
    "parentRoute": "/resources/cannabis-101",
    "h1": "First Cannabis Store Visit: What to Expect",
    "seoTitle": "First Cannabis Store Visit in Toronto | Queen Lansdowne",
    "metaDescription": "Visiting a cannabis store for the first time? Learn what adults 19+ can expect, what to bring and how to read common menu language.",
    "primaryKeyword": "First Cannabis Store Visit: What to Expect",
    "supportingKeywords": [],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-09-06",
    "dateModified": "2026-09-06",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Visiting a cannabis store for the first time? Learn what adults 19+ can expect, what to bring and how to read common menu language.",
    "body": "Walking into a cannabis store for the first time can feel more complicated than it needs to be. There are product formats, cultivar names, THC numbers, Indica/Sativa/Hybrid labels, flower tiers and a lot of slang packed into a relatively small space.\n\nThe simplest approach is to treat the first visit as an information-gathering trip.\n\nQueen Lansdowne Cannabis is located at 1472 Queen St W in Toronto, in the Queen Street West / Parkdale area. Adults 19+ should be prepared to show valid identification and should use the store's current public information for hours and other visit details before travelling.\n\nThis guide explains the language and the basic flow without making assumptions about what will be available on a particular day.\n\n## Before You Go, Separate Store Information From Menu Information\n\nStore information answers practical questions: where the business is, what the exact store name is, what the current public hours are and which page owns the visit details.\n\nMenu information answers a different set of questions: what products are currently listed, which format each product uses, what the legal label says and which flower section the product is shown under.\n\nAn educational article should not pretend to be the live menu. Current listings can change.\n\n## You Do Not Need to Know Every Weed Term Before Walking In\n\nA few basics cover most menu language.\n\nFlower or bud means dried cannabis flower.\n\nPre-rolls are prepared rolls containing cannabis.\n\nEdibles are cannabis-containing food or beverage products.\n\nTHC vape products use a vaporizer format and should not be confused with nicotine-vape categories.\n\nConcentrates are products in which cannabis constituents are present in a more concentrated form than dried flower.\n\nThen there are culture and quality terms: Premium, Exotic, AA, AAA+, top shelf, mids, gas, loud, frosty, terpy and quads.\n\nYou do not need to memorize them. Ask what the term is describing.\n\n## Flower Tiers Are Navigation, Not a Universal Scientific Scale\n\nQueen Lansdowne Cannabis has separate flower routes for Budget Weed, AA Weed, AAA+ Weed, Premium Weed and Exotic Weed.\n\nThose labels help organize browsing. They are not one universal Canadian grading law.\n\nA tier can communicate how a store positions a flower section, but the actual product still has its own producer, cultivar, legal label, cannabinoid information and batch characteristics.\n\nIf you are comparing flower, look beyond the tier name.\n\n## THC Is Important, but It Is Not the Whole Product\n\nTHC is the main intoxicating cannabinoid in cannabis, and legal labels show THC information prominently.\n\nThat makes it easy to treat the biggest number as the whole decision.\n\nFor flower quality, however, adults may also compare aroma, visible trichomes, trim, bud structure, moisture, drying and curing, freshness, producer information, CBD or other labelled cannabinoid information, and the product format and amount.\n\nMore THC does not automatically tell you more about every one of those characteristics.\n\n## Indica, Sativa and Hybrid Are Common Labels, Not Effect Guarantees\n\nMany adults arrive with a simple rule in mind: Indica for one type of experience, Sativa for another, Hybrid somewhere in the middle.\n\nThose labels are still widely recognized, but modern commercial cannabis has been crossbred extensively. Scientific studies of commercial cannabis have found that the familiar categories do not cleanly map to simple genetic or chemical divisions.\n\nUse them as broad menu language, not as a promise.\n\n## Ask Clear Questions Instead of Trying to Sound Like an Expert\n\nA useful question is specific.\n\nInstead of “What's the best weed?” try “What does this tier mean on your menu?” or “What information is on this label?” or “What does ‘gas’ mean when people describe the aroma?”\n\nClear questions make the vocabulary easier.\n\n## What to Check Before Leaving With a Product\n\nBefore making a purchase, read the legal package and confirm that the product you are looking at is the product you intended to select.\n\nPay attention to product name, format, package amount, THC and CBD information, health warning, producer/brand information and any other label details relevant to that product.\n\nDo not rely on a nickname, colour or menu photo as a substitute for the legal package.\n\n## Queen West Context Without the “Near Me” Stuffing\n\nPeople searching around Queen Street West may use phrases such as weed dispensary, cannabis dispensary, weed store or dispensary near me.\n\nThose are different ways of expressing local intent.\n\nFor Queen Lansdowne Cannabis, the useful information is concrete: the real business name, the Queen Street West location and the current public store information.\n\n## The First Visit Gets Easier Once the Menu Has a Map\n\nStart with Cannabis 101, then move into the specific question you actually have: flower quality and tiers, THC, Indica/Sativa/Hybrid, trichomes, aroma and terpenes, drying and curing, growing methods, genetics or weed slang.\n\n## Frequently Asked Questions\n\n**How old do I need to be to visit a cannabis store in Ontario?**\nOntario's legal age for recreational cannabis is 19. Adults should be prepared to show valid identification.\n\n**Do I need to know which strain I want before visiting?**\nNo. Understanding the format and reading the product information is a reasonable starting point.\n\n**Are Premium and Exotic official cannabis grades?**\nThey are common retail terms, not one universal government grading system.\n\n**Should I choose flower based only on THC?**\nTHC is important information, but it does not describe every aspect of flower quality or personal preference.\n\n**Where do I check Queen Lansdowne's current hours and menu?**\nUse the store's current public store and menu pages. This guide is educational and should not be treated as a live availability source.\n\n## Keep Reading\n\n- [Cannabis 101](/resources/cannabis-101)\n- [Cannabis Dispensary vs Weed Dispensary](/resources/cannabis-dispensary-vs-weed-dispensary)\n- [Weed Dispensary in Queen West](/resources/local-guides/weed-dispensary-in-queen-west)\n- [Weed & Cannabis Flower Guide](/resources/weed-flower-guide)\n- [Queen Lansdowne Cannabis in Toronto](/weed-dispensary-toronto)",
    "secondTake": null,
    "linkRoutes": [
      "/resources/cannabis-101",
      "/resources/cannabis-dispensary-vs-weed-dispensary",
      "/resources/local-guides/weed-dispensary-in-queen-west",
      "/resources/weed-flower-guide",
      "/weed-dispensary-toronto"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/cannabis-101",
      "/resources/cannabis-dispensary-vs-weed-dispensary",
      "/resources/local-guides/weed-dispensary-in-queen-west",
      "/resources/weed-flower-guide"
    ],
    "commercialLinks": [],
    "cards": [],
    "faqs": [
      {
        "question": "How old do I need to be to visit a cannabis store in Ontario?",
        "answer": "Ontario's legal age for recreational cannabis is 19. Adults should be prepared to show valid identification."
      },
      {
        "question": "Do I need to know which strain I want before visiting?",
        "answer": "No. Understanding the format and reading the product information is a reasonable starting point."
      },
      {
        "question": "Are Premium and Exotic official cannabis grades?",
        "answer": "They are common retail terms, not one universal government grading system."
      },
      {
        "question": "Should I choose flower based only on THC?",
        "answer": "THC is important information, but it does not describe every aspect of flower quality or personal preference."
      },
      {
        "question": "Where do I check Queen Lansdowne's current hours and menu?",
        "answer": "Use the store's current public store and menu pages. This guide is educational and should not be treated as a live availability source."
      }
    ]
  },
  {
    "pageNumber": 27,
    "sourceHeading": "WHAT DOES “GOOD WEED” ACTUALLY MEAN?",
    "route": "/resources/flower-guides/what-does-good-weed-mean",
    "kind": "article",
    "pageType": "Flower education guide",
    "parentRoute": "/resources/weed-flower-guide",
    "h1": "What Does “Good Weed” Actually Mean?",
    "seoTitle": "What Does Good Weed Mean? | Flower Quality Guide Toronto",
    "metaDescription": "Good weed is more than one number. Learn how aroma, trichomes, cure, freshness, structure and personal preference shape flower quality.",
    "primaryKeyword": "What Does “Good Weed” Actually Mean?",
    "supportingKeywords": [],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-09-06",
    "dateModified": "2026-09-06",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Good weed is more than one number. Learn how aroma, trichomes, cure, freshness, structure and personal preference shape flower quality.",
    "body": "“Good weed” sounds simple until two people start describing what they mean.\n\nOne person may care most about aroma. Another may focus on how the buds look. Someone else may pay attention to the cultivar, moisture, trim or freshness. Another shopper may start with price or THC.\n\nThat is why cannabis quality is better understood as a group of characteristics than a single score.\n\n## Good Weed Is Not One Official Grade\n\nThere is no universal Canadian government grade called “good weed,” “top shelf,” “fire” or “quads.”\n\nThose are consumer and retail terms.\n\nA store can organize flower into sections such as Budget, AA, AAA+, Premium and Exotic, but those names are not substitutes for the product's legal information.\n\nThe useful question is not “Which word sounds best?” It is “What characteristics are actually behind the word?”\n\n## Aroma Is One of the First Things People Notice\n\nCannabis aroma comes partly from volatile compounds including terpenes.\n\nPeople use all kinds of language to describe it:\n\ngassy;\n\nskunky;\n\ncitrus;\n\nfruity;\n\nsweet;\n\nfloral;\n\nearthy;\n\npine-like;\n\nspicy;\n\ncreamy;\n\n## “loud” or “terpy.”\n\nThose descriptions are sensory language. They do not prove potency or guarantee a particular effect.\n\nA strong aroma can make a product memorable, but aroma is still one part of the picture.\n\n## Trichomes Explain the “Frosty” Look\n\nTrichomes are small resin-producing structures found on cannabis plants.\n\nWhen flower looks sparkly or frosted, people are often noticing visible trichome coverage.\n\nThat is a useful visual characteristic, but more visible frost does not automatically mean a product is better in every way.\n\nHandling can damage trichomes. Lighting can make them look more dramatic. Bud size and camera photography can change how they appear.\n\nTreat visible trichomes as a clue, not the final verdict.\n\n## Trim and Structure Affect Bag Appeal\n\n“Bag appeal” is cannabis shorthand for how flower looks at first glance.\n\nPeople may notice:\n\nshape;\n\ndensity;\n\ntrim;\n\ncolour;\n\nvisible trichomes;\n\nhow intact the buds are;\n\nthe consistency of the batch.\n\nGood presentation can suggest careful handling, but appearance alone cannot prove freshness, cannabinoid content or aroma.\n\nA beautiful bud can still be too dry. A smaller or less photogenic bud can still come from the same batch as larger flower.\n\n## Moisture Matters to the Finished Flower\n\nFlower that has lost too much moisture can become brittle and may lose aroma more quickly.\n\nFlower with too much retained moisture can handle and store differently.\n\nThat is why drying, curing, packaging and storage are part of the quality conversation.\n\nThe goal of good post-harvest handling is not to make flower “wet” or “dry” as a slogan. It is to manage moisture and preserve desirable characteristics.\n\n## Cure and Freshness Matter After the Plant Is Cut\n\nCultivation gets most of the attention, but quality does not stop at harvest.\n\nDrying and curing change the finished flower. Storage conditions after packaging matter too.\n\nTime, heat, light, oxygen and repeated handling can influence the product after it leaves the grow room.\n\nThat is one reason an educational quality guide should discuss the full path from genetics to storage rather than treating the grow method as the whole story.\n\n## THC Is Important but Incomplete\n\nTHC is an important cannabinoid measurement and legal labels display it prominently.\n\nIt does not measure:\n\naroma quality;\n\ntrim;\n\nbud structure;\n\nmoisture;\n\ncure;\n\nfreshness;\n\nvisual trichome preservation;\n\npersonal preference.\n\nA higher THC number may matter to a shopper, but it is not a universal “better weed” score.\n\n## Cultivar Names Are Useful, but They Are Not Guarantees\n\nCannabis culture relies heavily on cultivar or “strain” names.\n\nThose names can be useful for identifying a product, but research has shown that names and familiar Indica/Sativa ancestry claims do not always map cleanly to a unique genetic identity.\n\nDifferent producers can grow similarly named cultivars under different conditions.\n\nRead the product in front of you rather than assuming the name tells the whole story.\n\n## Good Weed Depends on What You Mean by Good\n\nThere is no need to turn quality into a contest.\n\nA person looking for value may judge a product differently from someone focused on aroma, appearance or a particular cultivar.\n\nThe useful approach is to identify the characteristics you actually care about, then compare the legal label and the product information.\n\nQueen Lansdowne's flower tiers can help organize that comparison, but the tiers are the starting map, not the final answer.\n\n## Frequently Asked Questions\n\n**Does high THC mean good weed?**\nNot by itself. THC is one measurement and does not describe every quality characteristic.\n\n**What does “fire weed” mean?**\n“Fire” is slang for something a person considers very good. It is subjective, not an official grade.\n\n**Does frosty weed mean it is stronger?**\nVisible frost usually refers to trichomes. Trichome appearance alone does not prove one exact potency level.\n\n**Is expensive weed always better?**\nNo. Price can reflect many factors and is not a universal quality measurement.\n\n**What should I compare when looking at flower?**\nAdults may consider the legal label, cultivar, THC/CBD information, aroma description, trichomes, trim, structure, moisture, freshness and producer information.\n\n## Keep Reading\n\n- [Flower Quality & Tiers](/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic)\n- [THC vs Weed Quality](/resources/flower-guides/thc-vs-weed-quality)\n- [Bag Appeal](/resources/flower-guides/bag-appeal)\n- [Trichomes & Frosty Weed](/resources/flower-guides/trichomes-frosty-weed)\n- [Drying, Curing & Freshness](/resources/flower-guides/drying-curing-freshness)",
    "secondTake": null,
    "linkRoutes": [
      "/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic",
      "/resources/flower-guides/thc-vs-weed-quality",
      "/resources/flower-guides/bag-appeal",
      "/resources/flower-guides/trichomes-frosty-weed",
      "/resources/flower-guides/drying-curing-freshness"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic",
      "/resources/flower-guides/thc-vs-weed-quality",
      "/resources/flower-guides/bag-appeal",
      "/resources/flower-guides/trichomes-frosty-weed",
      "/resources/flower-guides/drying-curing-freshness"
    ],
    "commercialLinks": [],
    "cards": [],
    "faqs": [
      {
        "question": "Does high THC mean good weed?",
        "answer": "Not by itself. THC is one measurement and does not describe every quality characteristic."
      },
      {
        "question": "What does “fire weed” mean?",
        "answer": "“Fire” is slang for something a person considers very good. It is subjective, not an official grade."
      },
      {
        "question": "Does frosty weed mean it is stronger?",
        "answer": "Visible frost usually refers to trichomes. Trichome appearance alone does not prove one exact potency level."
      },
      {
        "question": "Is expensive weed always better?",
        "answer": "No. Price can reflect many factors and is not a universal quality measurement."
      },
      {
        "question": "What should I compare when looking at flower?",
        "answer": "Adults may consider the legal label, cultivar, THC/CBD information, aroma description, trichomes, trim, structure, moisture, freshness and producer information."
      }
    ]
  },
  {
    "pageNumber": 28,
    "sourceHeading": "TOP SHELF, MIDS, QUADS, AAAA AND AAA: WHAT DO THEY MEAN?",
    "route": "/resources/flower-guides/top-shelf-mids-quads",
    "kind": "article",
    "pageType": "Flower education guide",
    "parentRoute": "/resources/weed-flower-guide",
    "h1": "Top Shelf, Mids, Quads, AAAA and AAA: What Do They Mean?",
    "seoTitle": "Top Shelf vs Mids vs Quads | Weed Slang & Grades Explained",
    "metaDescription": "Top shelf, mids, quads, AAAA and AAA are common weed terms, not one official grading system. Learn what the labels usually try to describe.",
    "primaryKeyword": "Top Shelf, Mids, Quads, AAAA and AAA: What Do They Mean?",
    "supportingKeywords": [],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-09-06",
    "dateModified": "2026-09-06",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Top shelf, mids, quads, AAAA and AAA are common weed terms, not one official grading system. Learn what the labels usually try to describe.",
    "body": "Cannabis quality language is full of unofficial grades.\n\n“Top shelf,” “mids,” “quads,” “AAAA,” “AAA,” “AA,” Premium and Exotic can all appear in conversation, online menus or product descriptions.\n\nThe problem is that people often treat the words as if they come from one universal grading authority.\n\nThey do not.\n\n## Top Shelf\n\n“Top shelf” is traditional retail slang for products positioned toward the premium end of a selection.\n\nIn cannabis, someone using the term may be talking about:\n\nappearance;\n\naroma;\n\ntrim;\n\ngenetics;\n\ncure;\n\nfreshness;\n\nrarity;\n\nprice;\n\nor simply the store's highest-positioned section.\n\nThat flexibility is why the term needs context.\n\nA top-shelf label does not tell you one official THC range or one government-defined quality score.\n\n## Mids\n\n“Mids” is casual cannabis slang for flower someone considers middle-of-the-road.\n\nThe word is usually comparative rather than technical.\n\nOne person may call something mids because the aroma is mild. Another may be talking about trim, appearance, price positioning or overall experience.\n\nBecause the term is subjective, it should not be used as a factual defect claim.\n\nIf someone calls a product mids, ask what characteristic they mean.\n\n## Quads and AAAA\n\nIn Canadian weed culture, “quads” usually refers to “AAAA,” a four-A shorthand commonly associated with premium positioning.\n\nThe A-based system is widely understood in informal cannabis language, but it is not a single regulated Canadian standard.\n\nThere is no universal rule requiring every retailer to assign AA, AAA or AAAA using the same scoring sheet.\n\nQueen Lansdowne uses its own named commercial flower sections, including AA Weed and AAA+ Weed, plus Premium and Exotic.\n\nThose existing owners should remain the source for how this store organizes its menu.\n\n## AAA and AAA+\n\nAAA is commonly read as a step above AA in informal quality shorthand.\n\nAAA+ usually suggests something positioned slightly above a typical AAA label.\n\nAgain, the exact meaning depends on the retailer or seller using the term.\n\nThat is why it is more useful to explain the underlying quality characteristics than to debate whether one plus sign should equal a specific THC percentage.\n\n## Premium and Exotic\n\nPremium is a broad quality-positioning term.\n\nExotic often carries an additional idea of unusual genetics, distinctive aroma, rarity or top-end presentation.\n\nIn cannabis culture, “exotic” can also be marketing language.\n\nAt Queen Lansdowne, Exotic Weed and Premium Weed are protected named menu sections. Their meaning should come from the store's own structure rather than a claim that all cannabis retailers define those words identically.\n\n## What These Words Are Trying to Capture\n\nAlthough the grade names are informal, the qualities behind them are real enough to discuss.\n\nPeople may be evaluating:\n\nbud structure;\n\ntrim;\n\ntrichome coverage;\n\naroma;\n\nmoisture;\n\ncure;\n\nfreshness;\n\ncultivar;\n\nbatch consistency;\n\nvisual presentation.\n\nThose are much more useful than assuming a letter grade speaks for itself.\n\n## Why THC Should Not Be Used as the Grade\n\nA common shortcut is to turn potency into the grade:\n\nhigher THC = higher quality.\n\nThat is too simple.\n\nTHC is an important cannabinoid measurement, but quality language often includes characteristics that THC does not measure.\n\nTwo products can have similar THC numbers and look, smell, handle or age differently.\n\n## Use the Store's Tiers as Navigation\n\nFor Queen Lansdowne Cannabis, the cleanest approach is:\n\nuse Budget Weed for the value-positioned owner;\n\nAA Weed for the AA owner;\n\nAAA+ Weed for the AAA+ owner;\n\nPremium Weed for the Premium owner;\n\nExotic Weed for the Exotic owner.\n\nThen use educational guides to explain the culture and quality language behind those labels.\n\n## Frequently Asked Questions\n\n**What are quads in weed?**\nQuads is common Canadian cannabis slang for AAAA, usually implying premium positioning. It is not an official government grade.\n\n**What does mids mean?**\nMids is informal slang for cannabis someone considers average or middle-tier. The meaning is subjective.\n\n**Is top shelf the same as Exotic?**\nNot necessarily. Both can imply premium positioning, but retailers may use the terms differently.\n\n**Does AAAA mean a certain THC percentage?**\nNo universal rule ties AAAA to one THC percentage.\n\n**Is Queen Lansdowne changing its tier names?**\nNo. The established Budget Weed, AA Weed, AAA+ Weed, Premium Weed and Exotic Weed owners remain distinct.\n\n## Keep Reading\n\n- [Flower Quality & Tiers](/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic)\n- [Weed Slang Explained](/resources/cannabis-101/weed-slang-glossary)\n- [Budget vs Premium Flower](/resources/flower-guides/budget-vs-premium-flower)\n- [AA Weed](/aa-weed)\n- [AAA+ Weed](/aaa-weed)\n- [Premium Weed](/premium-weed)\n- [Exotic Weed](/exotic-weed)",
    "secondTake": null,
    "linkRoutes": [
      "/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic",
      "/resources/cannabis-101/weed-slang-glossary",
      "/resources/flower-guides/budget-vs-premium-flower",
      "/aa-weed",
      "/aaa-weed",
      "/premium-weed",
      "/exotic-weed"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic",
      "/resources/cannabis-101/weed-slang-glossary",
      "/resources/flower-guides/budget-vs-premium-flower"
    ],
    "commercialLinks": [],
    "cards": [],
    "faqs": [
      {
        "question": "What are quads in weed?",
        "answer": "Quads is common Canadian cannabis slang for AAAA, usually implying premium positioning. It is not an official government grade."
      },
      {
        "question": "What does mids mean?",
        "answer": "Mids is informal slang for cannabis someone considers average or middle-tier. The meaning is subjective."
      },
      {
        "question": "Is top shelf the same as Exotic?",
        "answer": "Not necessarily. Both can imply premium positioning, but retailers may use the terms differently."
      },
      {
        "question": "Does AAAA mean a certain THC percentage?",
        "answer": "No universal rule ties AAAA to one THC percentage."
      },
      {
        "question": "Is Queen Lansdowne changing its tier names?",
        "answer": "No. The established Budget Weed, AA Weed, AAA+ Weed, Premium Weed and Exotic Weed owners remain distinct."
      }
    ]
  },
  {
    "pageNumber": 29,
    "sourceHeading": "DOES HIGHER THC MEAN BETTER WEED?",
    "route": "/resources/flower-guides/thc-vs-weed-quality",
    "kind": "article",
    "pageType": "Flower education guide",
    "parentRoute": "/resources/weed-flower-guide",
    "h1": "Does Higher THC Mean Better Weed?",
    "seoTitle": "THC vs Weed Quality | Why Potency Is Not the Whole Story",
    "metaDescription": "THC is an important label measurement, but it does not describe every part of cannabis flower quality. Learn what else is worth reading and comparing.",
    "primaryKeyword": "Does Higher THC Mean Better Weed?",
    "supportingKeywords": [],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-09-06",
    "dateModified": "2026-09-06",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "THC is an important label measurement, but it does not describe every part of cannabis flower quality. Learn what else is worth reading and comparing.",
    "body": "THC is one of the easiest cannabis numbers to compare.\n\nIt is printed prominently on legal cannabis labels and it matters because THC is the main intoxicating cannabinoid in cannabis.\n\nThe mistake is treating that number as a complete quality score.\n\n## What THC Tells You\n\nTHC information tells you about the amount or concentration of THC in the product as presented on the legal label.\n\nThat is useful information.\n\nIt does not directly tell you:\n\nhow the flower was trimmed;\n\nhow fresh it is;\n\nwhat the aroma is like;\n\nhow much visible trichome coverage remains;\n\nwhether the buds are large or small;\n\nhow the flower was dried or cured;\n\nwhether you personally prefer the cultivar.\n\nThose are different questions.\n\n## Why the Biggest Number Wins Too Much Attention\n\nNumbers feel objective.\n\nIf one package shows a larger THC number than another, it is easy to assume the choice is settled.\n\nBut cannabis flower is a plant product with many characteristics.\n\nHealth Canada requires legal cannabis labels to display THC and CBD information and health warnings. Those labels are important safety and product-information tools.\n\nThey are not designed to reduce every part of product quality to one number.\n\n## Terpenes and Aroma Are a Different Part of the Picture\n\nTerpenes are volatile compounds that contribute to cannabis aroma and flavour.\n\nA product's aroma profile can differ even when THC numbers are similar.\n\nPeople may describe those aromas as gas, citrus, pine, fruit, earth, spice, floral, sweet or skunky.\n\nWhen terpene information is actually provided, it can add context. When it is not provided, do not invent a terpene profile from a cultivar name.\n\n## Higher THC Can Also Mean Higher Risk of Unwanted Effects\n\nHigher THC is not automatically a goal.\n\nHealth Canada warns that higher amounts of cannabinoids can be associated with greater risk of side effects.\n\nThat is another reason the highest number should not be presented as the default “best” choice.\n\n## Quality Includes Post-Harvest Handling\n\nDrying, curing, packaging and storage influence the finished flower.\n\nA product can have a high THC number and still be overly dry, poorly handled or less aromatic than expected.\n\nAnother product with a lower THC number may appeal to a shopper because of freshness, aroma or cultivar preference.\n\nThose are not contradictions. They are different dimensions.\n\n## Tier and THC Are Not the Same Thing\n\nQueen Lansdowne's Budget, AA, AAA+, Premium and Exotic routes are retail browsing owners.\n\nTHC is a labelled cannabinoid measurement.\n\nDo not collapse those two systems into one.\n\nA product's tier should not be inferred from THC alone, and a tier should not be treated as a guarantee of one THC range.\n\n## A Better Comparison Checklist\n\nWhen comparing flower, consider:\n\nlegal product name and producer;\n\nTHC and CBD information;\n\npackage amount;\n\ncultivar;\n\nany provided aroma or terpene information;\n\nflower structure and trim;\n\nvisible trichomes;\n\nfreshness and moisture;\n\ncurrent tier/listing context.\n\nThat gives you more information than sorting by one number.\n\n## Frequently Asked Questions\n\n**Is higher THC stronger?**\nTHC is the main intoxicating cannabinoid, so THC amount is relevant to potency. It still does not define every part of product quality.\n\n**Does higher THC mean a higher flower tier?**\nNot automatically. Retail tiers and labelled THC are different pieces of information.\n\n**Can two products with similar THC feel different?**\nCannabis products can differ in other cannabinoids, terpenes, format and individual response. A similar THC number does not make two products identical.\n\n**Should beginners look for the highest THC?**\nNo. Higher THC can increase the risk of unwanted effects. Adults should read the legal label and make informed choices rather than treating maximum potency as the default goal.\n\n**Where is the real THC number?**\nUse the legal product label for the product's actual THC information.\n\n## Keep Reading\n\n- [Cannabis 101](/resources/cannabis-101)\n- [Flower Quality & Tiers](/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic)\n- [Terpenes, Gas & Loud](/resources/flower-guides/terpenes-gas-loud-aroma)\n- [Drying, Curing & Freshness](/resources/flower-guides/drying-curing-freshness)",
    "secondTake": null,
    "linkRoutes": [
      "/resources/cannabis-101",
      "/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic",
      "/resources/flower-guides/terpenes-gas-loud-aroma",
      "/resources/flower-guides/drying-curing-freshness"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/cannabis-101",
      "/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic",
      "/resources/flower-guides/terpenes-gas-loud-aroma",
      "/resources/flower-guides/drying-curing-freshness"
    ],
    "commercialLinks": [],
    "cards": [],
    "faqs": [
      {
        "question": "Is higher THC stronger?",
        "answer": "THC is the main intoxicating cannabinoid, so THC amount is relevant to potency. It still does not define every part of product quality."
      },
      {
        "question": "Does higher THC mean a higher flower tier?",
        "answer": "Not automatically. Retail tiers and labelled THC are different pieces of information."
      },
      {
        "question": "Can two products with similar THC feel different?",
        "answer": "Cannabis products can differ in other cannabinoids, terpenes, format and individual response. A similar THC number does not make two products identical."
      },
      {
        "question": "Should beginners look for the highest THC?",
        "answer": "No. Higher THC can increase the risk of unwanted effects. Adults should read the legal label and make informed choices rather than treating maximum potency as the default goal."
      },
      {
        "question": "Where is the real THC number?",
        "answer": "Use the legal product label for the product's actual THC information."
      }
    ]
  },
  {
    "pageNumber": 30,
    "sourceHeading": "BAG APPEAL 101: WHAT MAKES WEED LOOK GOOD?",
    "route": "/resources/flower-guides/bag-appeal",
    "kind": "article",
    "pageType": "Flower education guide",
    "parentRoute": "/resources/weed-flower-guide",
    "h1": "Bag Appeal 101: What Makes Weed Look Good?",
    "seoTitle": "Cannabis Bag Appeal Explained | Queen Lansdowne Cannabis",
    "metaDescription": "Learn what people mean by bag appeal, which visual clues can be useful and why looks alone cannot prove cannabis flower quality.",
    "primaryKeyword": "Bag Appeal 101: What Makes Weed Look Good?",
    "supportingKeywords": [],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-09-06",
    "dateModified": "2026-09-06",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Learn what people mean by bag appeal, which visual clues can be useful and why looks alone cannot prove cannabis flower quality.",
    "body": "“Bag appeal” is cannabis slang for first impression.\n\nBefore anyone smells a flower, reads a label closely or thinks about the cure, they see it.\n\nThat visual impression can be useful, but it is easy to over-read.\n\n## What People Usually Notice\n\nCommon visual clues include:\n\nbud shape;\n\ndensity;\n\ncolour;\n\nvisible trichomes;\n\ntrim;\n\nintactness;\n\namount of loose leaf;\n\nconsistency from bud to bud.\n\nLarge, tidy, frosty buds often photograph well.\n\nThat does not mean every smaller, darker or less symmetrical bud is low quality.\n\n## Colour Is Not a Grade\n\nCannabis can display many shades of green along with purple, orange, red or other tones.\n\nColour can reflect genetics, plant pigments, growing conditions and maturity.\n\nPurple does not automatically mean stronger. Orange hairs do not automatically mean better. Bright green is not a universal quality guarantee.\n\nColour is descriptive, not a score.\n\n## Trichomes Matter, but Photos Can Exaggerate Them\n\nVisible trichomes give flower a frosted or sparkling appearance.\n\nClose-up photography, strong lighting and image sharpening can make trichomes look more dramatic.\n\nThat is why bag appeal should be evaluated as one clue rather than a laboratory test.\n\n## Trim Changes Presentation\n\nTrim refers to how much surrounding leaf material remains around the flower after processing.\n\nA neat trim can make buds look more defined.\n\nA less aggressive trim may leave more small leaf material.\n\nNeither appearance alone tells you exact THC, freshness or aroma.\n\n## Big Buds Are Not Automatically Better Than Smalls\n\nBud size is one of the most overused visual shortcuts.\n\nLarge buds can look impressive. Smalls can come from the same plant or batch.\n\nSize can affect presentation and sometimes pricing, but it is not a universal potency grade.\n\n## The Best-Looking Weed Can Still Be Too Dry\n\nA photo cannot tell you everything about moisture.\n\nFlower can look beautiful and still be brittle.\n\nThat is why drying, curing, storage and freshness belong in the same quality conversation as appearance.\n\n## Use Bag Appeal as the First Question, Not the Final Answer\n\nIf a flower looks appealing, ask why.\n\nIs it the trichome coverage? Colour? Structure? Trim? Bud size?\n\nThen compare the rest of the product information.\n\nBag appeal is useful when it starts a more specific comparison.\n\n## Frequently Asked Questions\n\n**What does bag appeal mean?**\nIt is slang for the visual first impression of cannabis flower.\n\n**Do purple buds mean better weed?**\nNo. Purple colour can reflect genetics and plant pigments but is not a universal quality grade.\n\n**Are large buds stronger than small buds?**\nBud size alone does not prove potency.\n\n**Does more frost always mean better flower?**\nVisible frost usually means visible trichomes, but trichome appearance is only one quality clue.\n\n**Can photos be misleading?**\nLighting, magnification and editing can make colour and trichomes appear different from normal viewing.\n\n## Keep Reading\n\n- [Trichomes & Frosty Weed](/resources/flower-guides/trichomes-frosty-weed)\n- [Smalls vs Big Buds](/resources/flower-guides/smalls-vs-big-buds)\n- [What Does Good Weed Mean?](/resources/flower-guides/what-does-good-weed-mean)\n- [Drying, Curing & Freshness](/resources/flower-guides/drying-curing-freshness)",
    "secondTake": null,
    "linkRoutes": [
      "/resources/flower-guides/trichomes-frosty-weed",
      "/resources/flower-guides/smalls-vs-big-buds",
      "/resources/flower-guides/what-does-good-weed-mean",
      "/resources/flower-guides/drying-curing-freshness"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/flower-guides/trichomes-frosty-weed",
      "/resources/flower-guides/smalls-vs-big-buds",
      "/resources/flower-guides/what-does-good-weed-mean",
      "/resources/flower-guides/drying-curing-freshness"
    ],
    "commercialLinks": [],
    "cards": [],
    "faqs": [
      {
        "question": "What does bag appeal mean?",
        "answer": "It is slang for the visual first impression of cannabis flower."
      },
      {
        "question": "Do purple buds mean better weed?",
        "answer": "No. Purple colour can reflect genetics and plant pigments but is not a universal quality grade."
      },
      {
        "question": "Are large buds stronger than small buds?",
        "answer": "Bud size alone does not prove potency."
      },
      {
        "question": "Does more frost always mean better flower?",
        "answer": "Visible frost usually means visible trichomes, but trichome appearance is only one quality clue."
      },
      {
        "question": "Can photos be misleading?",
        "answer": "Lighting, magnification and editing can make colour and trichomes appear different from normal viewing."
      }
    ]
  },
  {
    "pageNumber": 31,
    "sourceHeading": "WHAT DOES “FROSTY WEED” MEAN?",
    "route": "/resources/flower-guides/trichomes-frosty-weed",
    "kind": "article",
    "pageType": "Flower education guide",
    "parentRoute": "/resources/weed-flower-guide",
    "h1": "What Does “Frosty Weed” Mean?",
    "seoTitle": "Frosty Weed & Trichomes Explained | Cannabis Flower Guide",
    "metaDescription": "What makes weed look frosty? Learn what trichomes are, why they matter to the plant and why visible frost is only one quality clue.",
    "primaryKeyword": "What Does “Frosty Weed” Mean?",
    "supportingKeywords": [],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-09-06",
    "dateModified": "2026-09-06",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "What makes weed look frosty? Learn what trichomes are, why they matter to the plant and why visible frost is only one quality clue.",
    "body": "When people say a cannabis flower looks “frosty,” they are usually talking about trichomes.\n\nTrichomes are tiny structures on the cannabis plant that produce and hold resin containing cannabinoids and aromatic compounds.\n\nUnder magnification they can look like small stalks with rounded heads. To the eye they can create the glittery, dusty or crystal-like surface that gives flower a frosted appearance.\n\n## Why Trichomes Get So Much Attention\n\nTrichomes are visually striking and are associated with compounds people care about in cannabis.\n\nThat makes them an easy symbol of quality.\n\nBut visible frost should not be turned into a simple equation:\n\nmore visible frost = automatically better weed.\n\nA product still has a legal label, a cultivar, a producer, a moisture level, a cure, a storage history and a full chemical profile.\n\n## Trichome Coverage and Trichome Condition Are Different Questions\n\nTwo buds can both look frosty while having been handled differently.\n\nTrichomes can be damaged or lost through rough handling. Light, photography and magnification can also change how obvious they look.\n\nA close-up image may reveal a dense surface of trichomes that is much less dramatic at normal viewing distance.\n\nThat is why visual inspection is informative but incomplete.\n\n## Frost Is Not a THC Meter\n\nTrichomes are associated with cannabinoid production, but visible trichome coverage does not tell you the exact THC number.\n\nUse the legal product label for actual THC and CBD information.\n\nA photo cannot replace that.\n\n## Trichomes Also Relate to Aroma\n\nCannabis aroma involves volatile compounds including terpenes, many of which are associated with glandular trichomes.\n\nThat helps explain why trichomes, aroma and freshness are often discussed together.\n\nIt still does not mean a visually frosty bud must smell stronger than every less-frosty bud.\n\n## Why Storage and Handling Matter\n\nThe finished flower keeps changing after harvest.\n\nHeat, light, air, dryness and handling can influence how well desirable characteristics are preserved.\n\nA product that began with strong trichome development can lose visual and aromatic quality through poor handling.\n\nThat is why trichomes belong inside a larger discussion of harvest, drying, curing and storage.\n\n## Frosty Is a Useful Word When You Know What It Describes\n\n“Frosty” is one of the better pieces of cannabis slang because it points to something visible.\n\nThe mistake is turning the visible clue into a full grade.\n\nUse it as one observation:\n\n“This flower shows strong visible trichome coverage.”\n\nThen keep reading.\n\n## Frequently Asked Questions\n\n**What are cannabis trichomes?**\nThey are small resin-producing structures on the plant associated with cannabinoids and aromatic compounds.\n\n**Does frosty weed always have higher THC?**\nNo. Visible trichomes do not provide an exact THC measurement.\n\n**Can trichomes fall off?**\nThey can be damaged or lost through handling and processing.\n\n**Do trichomes create cannabis smell?**\nAromatic compounds including terpenes are associated with glandular trichomes, but aroma depends on the full product and its handling.\n\n**How do I know the actual THC amount?**\nRead the legal product label.\n\n## Keep Reading\n\n- [Bag Appeal](/resources/flower-guides/bag-appeal)\n- [Terpenes, Gas & Loud](/resources/flower-guides/terpenes-gas-loud-aroma)\n- [Drying, Curing & Freshness](/resources/flower-guides/drying-curing-freshness)\n- [THC vs Weed Quality](/resources/flower-guides/thc-vs-weed-quality)",
    "secondTake": null,
    "linkRoutes": [
      "/resources/flower-guides/bag-appeal",
      "/resources/flower-guides/terpenes-gas-loud-aroma",
      "/resources/flower-guides/drying-curing-freshness",
      "/resources/flower-guides/thc-vs-weed-quality"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/flower-guides/bag-appeal",
      "/resources/flower-guides/terpenes-gas-loud-aroma",
      "/resources/flower-guides/drying-curing-freshness",
      "/resources/flower-guides/thc-vs-weed-quality"
    ],
    "commercialLinks": [],
    "cards": [],
    "faqs": [
      {
        "question": "What are cannabis trichomes?",
        "answer": "They are small resin-producing structures on the plant associated with cannabinoids and aromatic compounds."
      },
      {
        "question": "Does frosty weed always have higher THC?",
        "answer": "No. Visible trichomes do not provide an exact THC measurement."
      },
      {
        "question": "Can trichomes fall off?",
        "answer": "They can be damaged or lost through handling and processing."
      },
      {
        "question": "Do trichomes create cannabis smell?",
        "answer": "Aromatic compounds including terpenes are associated with glandular trichomes, but aroma depends on the full product and its handling."
      },
      {
        "question": "How do I know the actual THC amount?",
        "answer": "Read the legal product label."
      }
    ]
  },
  {
    "pageNumber": 32,
    "sourceHeading": "GAS, LOUD, TERPY: UNDERSTANDING CANNABIS AROMA",
    "route": "/resources/flower-guides/terpenes-gas-loud-aroma",
    "kind": "article",
    "pageType": "Flower education guide",
    "parentRoute": "/resources/weed-flower-guide",
    "h1": "Gas, Loud, Terpy: Understanding Cannabis Aroma",
    "seoTitle": "Terpenes, Gas & Loud Weed | Cannabis Aroma Explained",
    "metaDescription": "Learn how cannabis aroma is described, what terpenes are and what slang such as gas, loud, skunky, fruity and terpy usually means.",
    "primaryKeyword": "Gas, Loud, Terpy: Understanding Cannabis Aroma",
    "supportingKeywords": [],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-09-06",
    "dateModified": "2026-09-06",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Learn how cannabis aroma is described, what terpenes are and what slang such as gas, loud, skunky, fruity and terpy usually means.",
    "body": "Cannabis aroma has its own vocabulary.\n\nA flower can be described as gassy, fruity, citrusy, skunky, sweet, piney, floral, earthy, spicy, creamy or “loud.”\n\nThose words are not official quality grades. They are attempts to describe smell.\n\nUnderstanding the difference between the chemistry and the slang makes the language much more useful.\n\nWhat Are Terpenes?\n\nTerpenes are aromatic compounds found in many plants, including cannabis.\n\nThey contribute to smell and flavour.\n\nDifferent cannabis products can contain different terpene profiles and different amounts of those compounds.\n\nWhen terpene information is actually provided on a product or producer description, it can help explain part of the aroma profile.\n\nDo not assume a terpene profile solely from a cultivar name.\n\nWhat Does “Gas” Mean?\n\n“Gas” is common weed slang for a pungent fuel-like, diesel-like or chemical-leaning aroma.\n\nSome adults use it broadly for any strong, sharp cannabis smell.\n\nBecause it is sensory slang, there is no official “gas score.”\n\nA person describing something as gas is telling you about their impression of aroma, not giving you a lab result.\n\nWhat Does “Loud” Mean?\n\n“Loud” usually means the smell is pronounced or immediately noticeable.\n\nIt is less about one specific scent family and more about intensity.\n\nA loud flower might be gassy, fruity, skunky, floral or something else.\n\nAgain, loud is subjective.\n\nWhat Does “Terpy” Mean?\n\n“Terpy” is slang suggesting that a product has a noticeable aroma or flavour profile associated with terpenes.\n\nPeople sometimes use it as a compliment.\n\nThat does not make “terpy” an official grade, and it does not tell you which terpenes are present unless that information is actually provided.\n\n## Why Aroma Can Change\n\nCannabis aroma is not fixed forever.\n\nPost-harvest handling matters.\n\nDrying, curing, packaging, storage temperature, exposure to air and time can influence volatile compounds.\n\nThat is why a cultivar known for a certain aroma can present differently across producers, batches or storage conditions.\n\n## Strong Smell Does Not Equal Strong THC\n\nA very aromatic flower does not automatically have the highest THC.\n\nTHC and aroma are different parts of the product.\n\nLikewise, a less aromatic flower does not automatically mean low THC.\n\nUse the legal label for cannabinoid information.\n\nCommon Aroma Words\nCitrus\n\nOften used for lemon, lime, orange or grapefruit-like impressions.\n\n## Fruity\n\nA broad term covering berry, tropical, grape, stone-fruit and other sweet fruit-like notes.\n\n## Skunky\n\nA sharp, pungent descriptor associated with classic cannabis aroma language.\n\n## Earthy\n\nUsed for soil-like, woody, herbal or musky impressions.\n\n## Pine\n\nUsed for resinous, forest-like or needle-like aromas.\n\n## Floral\n\nUsed for perfume-like or blossom-like notes.\n\nSweet or creamy\n\nUsed for dessert-like or softer aromatic impressions.\n\nThese are descriptive categories, not effect claims.\n\n## Aroma Is Personal\n\nTwo people can smell the same flower and use different words.\n\nThat is normal.\n\nAroma language works best when it helps someone communicate what they notice rather than trying to prove a universal ranking.\n\n## Frequently Asked Questions\n\n**What does gas mean in weed slang?**\nUsually a strong fuel-like or diesel-like aroma impression.\n\n**What does loud mean?**\nIt generally means the aroma is pronounced or noticeable.\n\n**What does terpy mean?**\nIt is slang suggesting a noticeable terpene-related aroma or flavour profile.\n\n**Does strong smell mean high THC?**\nNo. Aroma intensity and THC are different characteristics.\n\n**Are terpene effects guaranteed?**\nNo. This guide uses terpene information to explain aroma language, not to promise a specific effect.\n\n## Keep Reading\n\n- [Drying, Curing & Freshness](/resources/flower-guides/drying-curing-freshness)\n- [Trichomes & Frosty Weed](/resources/flower-guides/trichomes-frosty-weed)\n- [THC vs Weed Quality](/resources/flower-guides/thc-vs-weed-quality)\n- [Weed Slang Explained](/resources/cannabis-101/weed-slang-glossary)",
    "secondTake": null,
    "linkRoutes": [
      "/resources/flower-guides/drying-curing-freshness",
      "/resources/flower-guides/trichomes-frosty-weed",
      "/resources/flower-guides/thc-vs-weed-quality",
      "/resources/cannabis-101/weed-slang-glossary"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/flower-guides/drying-curing-freshness",
      "/resources/flower-guides/trichomes-frosty-weed",
      "/resources/flower-guides/thc-vs-weed-quality",
      "/resources/cannabis-101/weed-slang-glossary"
    ],
    "commercialLinks": [],
    "cards": [],
    "faqs": [
      {
        "question": "What does gas mean in weed slang?",
        "answer": "Usually a strong fuel-like or diesel-like aroma impression."
      },
      {
        "question": "What does loud mean?",
        "answer": "It generally means the aroma is pronounced or noticeable."
      },
      {
        "question": "What does terpy mean?",
        "answer": "It is slang suggesting a noticeable terpene-related aroma or flavour profile."
      },
      {
        "question": "Does strong smell mean high THC?",
        "answer": "No. Aroma intensity and THC are different characteristics."
      },
      {
        "question": "Are terpene effects guaranteed?",
        "answer": "No. This guide uses terpene information to explain aroma language, not to promise a specific effect."
      }
    ]
  },
  {
    "pageNumber": 33,
    "sourceHeading": "DRYING, CURING AND FRESHNESS: WHAT CHANGES AFTER HARVEST?",
    "route": "/resources/flower-guides/drying-curing-freshness",
    "kind": "article",
    "pageType": "Flower education guide",
    "parentRoute": "/resources/weed-flower-guide",
    "h1": "Drying, Curing and Freshness: What Changes After Harvest?",
    "seoTitle": "Drying, Curing & Cannabis Freshness Explained",
    "metaDescription": "Learn how drying, curing, storage and moisture can change the way cannabis flower feels, smells and handles after harvest.",
    "primaryKeyword": "Drying, Curing and Freshness: What Changes After Harvest?",
    "supportingKeywords": [],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-09-06",
    "dateModified": "2026-09-06",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Learn how drying, curing, storage and moisture can change the way cannabis flower feels, smells and handles after harvest.",
    "body": "Growing cannabis is only part of the flower-quality story.\n\nOnce the plant is harvested, moisture has to be managed, the flower has to be handled and stored, and the finished product can continue changing over time.\n\nThat is why growers, processors and consumers talk about drying, curing and freshness.\n\n## Drying Removes Moisture\n\nFreshly harvested cannabis contains substantial moisture.\n\nDrying reduces that moisture so the flower can be processed and stored more safely.\n\nThe process has to balance several goals: remove enough moisture, avoid damaging the material and preserve desirable chemical and sensory characteristics as well as practical storage quality.\n\nResearch on post-harvest cannabis shows that drying conditions can affect cannabinoids, volatile compounds and product quality.\n\n## Curing Is Part of Post-Harvest Conditioning\n\n“Curing” is a broad industry term for controlled conditioning after initial drying.\n\nExact processes vary.\n\nThe goal is not to create a mystical quality upgrade. It is to manage the finished material carefully after harvest.\n\nA good educational guide should avoid pretending there is one universal curing recipe.\n\n## Too Dry Changes the Experience of the Flower\n\nOverly dry flower can become brittle.\n\nIt may crumble more easily and can lose aromatic intensity.\n\nThat does not mean every dry-feeling product is unsafe or that moisture alone determines quality.\n\nIt means moisture is one practical quality characteristic.\n\n## Too Much Moisture Is Not the Goal Either\n\nFreshness is not the same thing as wetness.\n\nExcess retained moisture can create handling and storage problems.\n\nThat is why quality conversations should focus on appropriate post-harvest management rather than a simple “wetter is fresher” rule.\n\n## Aroma Can Change During Drying and Storage\n\nTerpenes and other aromatic compounds are volatile.\n\nTemperature, airflow, drying conditions and storage can influence how well aromatic characteristics are preserved.\n\nThat helps explain why two batches of similarly named flower may not smell identical.\n\n## Storage Keeps Matter After Packaging\n\nOnce cannabis is packaged, time still passes.\n\nHeat, light, oxygen and repeated opening can influence the product.\n\nLegal packaging is designed around regulatory and safety requirements, but consumers should still follow the storage guidance provided with the product and keep cannabis secured away from children and pets.\n\n## Freshness Is Not Visible From a Menu Photo\n\nA photo can show structure, colour and trichomes.\n\nIt cannot reliably show moisture or tell you how recently the flower was packaged.\n\nUse actual product information and packaging details where available.\n\n## Why Cure Belongs in the Quality Conversation\n\nWhen people talk about “smooth,” “harsh,” “fresh,” “dry,” “sticky” or “aromatic” flower, they may be reacting partly to post-harvest characteristics.\n\nThose descriptions are subjective, but they point to a real lesson:\n\nquality does not end when the plant is cut.\n\n## Frequently Asked Questions\n\n**What is cannabis drying?**\nIt is the post-harvest process of reducing moisture in harvested cannabis.\n\n**What is curing?**\nCuring is a broad term for controlled conditioning after initial drying. Processes vary.\n\n**Can drying affect aroma?**\nYes. Post-harvest conditions can influence volatile aromatic compounds.\n\n**Does fresh weed mean wet weed?**\nNo. Freshness and excessive moisture are not the same thing.\n\n**Can a menu photo show freshness?**\nNot reliably. Photos cannot measure moisture or tell the full storage history.\n\n## Keep Reading\n\n- [Terpenes, Gas & Loud](/resources/flower-guides/terpenes-gas-loud-aroma)\n- [What Does Good Weed Mean?](/resources/flower-guides/what-does-good-weed-mean)\n- [Bag Appeal](/resources/flower-guides/bag-appeal)\n- [BC Grown / Indoor / Hydro / Outdoor](/resources/flower-guides/bc-grown-indoor-hydro-outdoor)",
    "secondTake": null,
    "linkRoutes": [
      "/resources/flower-guides/terpenes-gas-loud-aroma",
      "/resources/flower-guides/what-does-good-weed-mean",
      "/resources/flower-guides/bag-appeal",
      "/resources/flower-guides/bc-grown-indoor-hydro-outdoor"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/flower-guides/terpenes-gas-loud-aroma",
      "/resources/flower-guides/what-does-good-weed-mean",
      "/resources/flower-guides/bag-appeal",
      "/resources/flower-guides/bc-grown-indoor-hydro-outdoor"
    ],
    "commercialLinks": [],
    "cards": [],
    "faqs": [
      {
        "question": "What is cannabis drying?",
        "answer": "It is the post-harvest process of reducing moisture in harvested cannabis."
      },
      {
        "question": "What is curing?",
        "answer": "Curing is a broad term for controlled conditioning after initial drying. Processes vary."
      },
      {
        "question": "Can drying affect aroma?",
        "answer": "Yes. Post-harvest conditions can influence volatile aromatic compounds."
      },
      {
        "question": "Does fresh weed mean wet weed?",
        "answer": "No. Freshness and excessive moisture are not the same thing."
      },
      {
        "question": "Can a menu photo show freshness?",
        "answer": "Not reliably. Photos cannot measure moisture or tell the full storage history."
      }
    ]
  },
  {
    "pageNumber": 34,
    "sourceHeading": "SMALLS VS BIG BUDS: IS SIZE A QUALITY GRADE?",
    "route": "/resources/flower-guides/smalls-vs-big-buds",
    "kind": "article",
    "pageType": "Flower education guide",
    "parentRoute": "/resources/weed-flower-guide",
    "h1": "Smalls vs Big Buds: Is Size a Quality Grade?",
    "seoTitle": "Smalls vs Big Buds | Does Cannabis Bud Size Matter?",
    "metaDescription": "Smalls and larger buds can come from the same plant or batch. Learn what bud size can tell you—and what it cannot.",
    "primaryKeyword": "Smalls vs Big Buds: Is Size a Quality Grade?",
    "supportingKeywords": [],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-09-06",
    "dateModified": "2026-09-06",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Smalls and larger buds can come from the same plant or batch. Learn what bud size can tell you—and what it cannot.",
    "body": "Large cannabis buds get attention because they photograph well and make a strong first impression.\n\nSmalls are exactly what the name suggests: smaller pieces of flower.\n\nThe mistake is assuming size is a complete quality grade.\n\n## Why Buds Grow in Different Sizes\n\nA cannabis plant does not produce identical flowers at every point.\n\nPosition on the plant, light exposure, genetics, plant structure and cultivation conditions can all influence bud development.\n\nAfter harvest, trimming, handling and packaging can also affect the size distribution that ends up in a package.\n\n## Smalls Can Come From the Same Batch\n\nSmaller buds do not automatically come from a different cultivar.\n\nThey may come from the same plant or batch as larger flower.\n\nThat means size alone cannot tell you the exact THC, aroma or genetics.\n\n## Why Large Buds Have More Bag Appeal\n\nLarge buds often preserve a more complete visible flower structure.\n\nThat can make them look more premium.\n\nIt is a presentation advantage, not proof of every other quality characteristic.\n\n## Why Smalls Can Be Easier to Misjudge\n\nBecause they are smaller, people may assume they are automatically lower potency or lower quality.\n\nThat is too broad.\n\nA more useful comparison is the actual product label, cultivar, batch information and the flower characteristics available to inspect.\n\n## Trichomes and Aroma Still Matter\n\nA small bud can have visible trichomes.\n\nA large bud can be dry.\n\nA large bud can smell strong.\n\nA small bud can come from an aromatic batch.\n\nSize and those other characteristics overlap, but they are not the same thing.\n\n## Price Positioning Is a Separate Question\n\nSome markets position small buds differently by price or packaging.\n\nDo not assume a specific discount or value rule unless the actual listing says so.\n\nThis guide is about what bud size means, not about promising current pricing.\n\n## Frequently Asked Questions\n\n**Are small buds weaker?**\nBud size alone does not prove one potency level.\n\n**Do smalls come from different plants?**\nNot necessarily. They can come from the same cultivar, plant or batch as larger buds.\n\n**Are big buds always premium?**\nNo. Large size can improve presentation but does not guarantee every quality characteristic.\n\n**Can small buds still be frosty?**\nYes. Bud size and visible trichome coverage are different characteristics.\n\n**Should I compare price from this guide?**\nNo. Use the current listing for current pricing and package information.\n\n## Keep Reading\n\n- [Bag Appeal](/resources/flower-guides/bag-appeal)\n- [Trichomes & Frosty Weed](/resources/flower-guides/trichomes-frosty-weed)\n- [What Does Good Weed Mean?](/resources/flower-guides/what-does-good-weed-mean)\n- [Budget vs Premium Flower](/resources/flower-guides/budget-vs-premium-flower)",
    "secondTake": null,
    "linkRoutes": [
      "/resources/flower-guides/bag-appeal",
      "/resources/flower-guides/trichomes-frosty-weed",
      "/resources/flower-guides/what-does-good-weed-mean",
      "/resources/flower-guides/budget-vs-premium-flower"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/flower-guides/bag-appeal",
      "/resources/flower-guides/trichomes-frosty-weed",
      "/resources/flower-guides/what-does-good-weed-mean",
      "/resources/flower-guides/budget-vs-premium-flower"
    ],
    "commercialLinks": [],
    "cards": [],
    "faqs": [
      {
        "question": "Are small buds weaker?",
        "answer": "Bud size alone does not prove one potency level."
      },
      {
        "question": "Do smalls come from different plants?",
        "answer": "Not necessarily. They can come from the same cultivar, plant or batch as larger buds."
      },
      {
        "question": "Are big buds always premium?",
        "answer": "No. Large size can improve presentation but does not guarantee every quality characteristic."
      },
      {
        "question": "Can small buds still be frosty?",
        "answer": "Yes. Bud size and visible trichome coverage are different characteristics."
      },
      {
        "question": "Should I compare price from this guide?",
        "answer": "No. Use the current listing for current pricing and package information."
      }
    ]
  },
  {
    "pageNumber": 35,
    "sourceHeading": "BC GROWN, INDOOR, HYDRO, GREENHOUSE AND OUTDOOR: DIFFERENT LABELS, DIFFERENT MEANINGS",
    "route": "/resources/flower-guides/bc-grown-indoor-hydro-outdoor",
    "kind": "article",
    "pageType": "Flower education guide",
    "parentRoute": "/resources/weed-flower-guide",
    "h1": "BC Grown, Indoor, Hydro, Greenhouse and Outdoor: Different Labels, Different Meanings",
    "seoTitle": "BC Grown vs Indoor, Hydro, Greenhouse & Outdoor Weed",
    "metaDescription": "BC grown describes origin; indoor, outdoor and greenhouse describe environments; hydroponic describes a growing method. Learn the difference.",
    "primaryKeyword": "BC Grown, Indoor, Hydro, Greenhouse and Outdoor: Different Labels, Different Meanings",
    "supportingKeywords": [],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-09-06",
    "dateModified": "2026-09-06",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "BC grown describes origin; indoor, outdoor and greenhouse describe environments; hydroponic describes a growing method. Learn the difference.",
    "body": "Cannabis growing terms are easy to mix together because they sound like competing quality categories.\n\nThey are not always describing the same thing.\n\n“BC grown” is about where cannabis was grown.\n\n“Indoor,” “outdoor” and “greenhouse” describe growing environments.\n\n“Hydroponic” describes a cultivation method.\n\nA single cannabis crop can fit more than one of those descriptions at the same time.\n\n## BC Grown Is About Origin\n\nBC-grown cannabis means cannabis grown in British Columbia.\n\nIt does not, by itself, tell you:\n\nwhether the crop was grown indoors or outdoors;\n\nwhether it used hydroponics or another growing medium;\n\nwhether it was grown at small or large scale;\n\nwhether the final flower belongs in a particular retail tier;\n\nwhat the THC number is.\n\nBritish Columbia has a long cannabis-growing reputation, but geographic origin is still only one part of the product story.\n\n## Indoor Describes the Environment\n\nIndoor cultivation gives growers a high degree of control over light, temperature, humidity, airflow and other environmental conditions.\n\nThat control can support consistency, but indoor growing is not an automatic guarantee of premium flower.\n\nGenetics, plant health, harvest timing, drying, curing and storage still matter.\n\nIndoor also does not tell you which growing medium was used. An indoor crop might be hydroponic, soil-grown or use another substrate.\n\n## Outdoor Uses Natural Conditions\n\nOutdoor cultivation uses natural sunlight and outdoor environmental conditions.\n\nWeather, season, temperature, humidity and local climate play larger roles.\n\nOutdoor does not mean careless or low quality.\n\nIt means the plant was cultivated outdoors.\n\nThe final result still depends on genetics, cultivation decisions, harvest timing and post-harvest handling.\n\n## Greenhouse Sits Between Fully Indoor and Fully Outdoor\n\nGreenhouse cultivation uses a protected structure while still taking advantage of natural light.\n\nDepending on the operation, growers may also use supplemental lighting or environmental controls.\n\nThat makes “greenhouse” a broad category rather than one exact recipe.\n\nLike indoor and outdoor, the word does not determine quality on its own.\n\n## Hydroponic Describes How the Roots Are Fed\n\nHydroponic growing generally refers to cultivation where plant roots receive water and nutrients through a managed solution rather than relying on traditional field soil.\n\nHydro can be used indoors.\n\nHydro can also be used in greenhouse systems.\n\nThat is why “BC grown vs hydro” is not an apples-to-apples comparison. One describes origin; the other describes cultivation method.\n\nA BC-grown crop can itself be hydroponic.\n\n## Soil and Other Substrates\n\nNot every non-hydro grow is simply “outdoor soil.”\n\nIndoor growers can use soil or soilless substrates.\n\nGreenhouses can use containers, beds or controlled systems.\n\nThe actual cultivation setup can be more complicated than a menu label suggests.\n\nDoes One Method Make Better Weed?\n\nNo growing method automatically wins every quality category.\n\nA well-managed outdoor crop can be excellent.\n\nA poorly handled indoor crop can disappoint.\n\nA hydroponic crop can show strong development, but hydroponics alone does not guarantee aroma, cure or freshness.\n\nThe finished product depends on the whole chain:\n\ngenetics → cultivation → harvest → drying → curing → packaging → storage.\n\n## Why Grow Method Still Matters\n\nGrowing method is useful information because it helps explain how a plant was produced.\n\nIt can influence:\n\nenvironmental control;\n\nresource use;\n\nseasonal exposure;\n\nconsistency;\n\nplant expression;\n\nproduction scale.\n\nIt just should not be used as a shortcut for “better” or “worse.”\n\n## Frequently Asked Questions\n\n**Is BC bud always indoor?**\nNo. BC-grown describes origin, not the growing environment.\n\n**Can hydroponic weed be grown indoors?**\nYes. Hydroponics is a growing method and can be used in indoor or greenhouse settings.\n\n**Is outdoor weed automatically lower quality?**\nNo. Outdoor describes the environment, not a universal quality score.\n\n**Is greenhouse the same as indoor?**\nNo. Greenhouses use a protected structure and usually make use of natural light, while indoor cultivation is conducted inside controlled buildings.\n\n**What matters besides growing method?**\nGenetics, plant health, harvest timing, drying, curing, storage and the actual product information all matter.\n\n## Keep Reading\n\n- [Craft vs Commercial Cannabis](/resources/flower-guides/craft-vs-commercial-cannabis)\n- [Drying, Curing & Freshness](/resources/flower-guides/drying-curing-freshness)\n- [What Does Good Weed Mean?](/resources/flower-guides/what-does-good-weed-mean)\n- [Flower Quality & Tiers](/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic)",
    "secondTake": null,
    "linkRoutes": [
      "/resources/flower-guides/craft-vs-commercial-cannabis",
      "/resources/flower-guides/drying-curing-freshness",
      "/resources/flower-guides/what-does-good-weed-mean",
      "/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/flower-guides/craft-vs-commercial-cannabis",
      "/resources/flower-guides/drying-curing-freshness",
      "/resources/flower-guides/what-does-good-weed-mean",
      "/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic"
    ],
    "commercialLinks": [],
    "cards": [],
    "faqs": [
      {
        "question": "Is BC bud always indoor?",
        "answer": "No. BC-grown describes origin, not the growing environment."
      },
      {
        "question": "Can hydroponic weed be grown indoors?",
        "answer": "Yes. Hydroponics is a growing method and can be used in indoor or greenhouse settings."
      },
      {
        "question": "Is outdoor weed automatically lower quality?",
        "answer": "No. Outdoor describes the environment, not a universal quality score."
      },
      {
        "question": "Is greenhouse the same as indoor?",
        "answer": "No. Greenhouses use a protected structure and usually make use of natural light, while indoor cultivation is conducted inside controlled buildings."
      },
      {
        "question": "What matters besides growing method?",
        "answer": "Genetics, plant health, harvest timing, drying, curing, storage and the actual product information all matter."
      }
    ]
  },
  {
    "pageNumber": 36,
    "sourceHeading": "CRAFT VS COMMERCIAL CANNABIS: WHAT ACTUALLY CHANGES?",
    "route": "/resources/flower-guides/craft-vs-commercial-cannabis",
    "kind": "article",
    "pageType": "Flower education guide",
    "parentRoute": "/resources/weed-flower-guide",
    "h1": "Craft vs Commercial Cannabis: What Actually Changes?",
    "seoTitle": "Craft vs Commercial Cannabis | What the Labels Can Mean",
    "metaDescription": "Craft and commercial cannabis can describe scale, process and branding, but neither term is a universal quality grade. Learn what to compare instead.",
    "primaryKeyword": "Craft vs Commercial Cannabis: What Actually Changes?",
    "supportingKeywords": [],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-09-06",
    "dateModified": "2026-09-06",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Craft and commercial cannabis can describe scale, process and branding, but neither term is a universal quality grade. Learn what to compare instead.",
    "body": "“Craft cannabis” sounds like a quality grade.\n\n“Commercial cannabis” can sound like the opposite.\n\nIn practice, the words are less precise than that.\n\nThey can describe scale, production style, branding, batch size, cultivation approach or how closely a producer wants consumers to associate the product with hands-on growing.\n\nNeither term guarantees the finished flower.\n\n## Craft Is a Broad Market Term\n\nIn everyday cannabis language, craft often suggests smaller-scale production, close attention to individual batches or a producer identity built around cultivation detail.\n\nCanada does have different federal licence classes, including micro and standard cultivation, but a retail label such as “craft” should not be assumed to mean one specific licence class unless the producer actually says so.\n\nThat distinction matters.\n\nA marketing term and a regulatory licence are not automatically the same thing.\n\n## Commercial Usually Refers to Scale\n\nCommercial cannabis can describe larger-scale production and distribution.\n\nLarger operations may use more standardized systems and may focus heavily on consistency.\n\nThat does not automatically mean lower quality.\n\nScale can create strengths such as repeatability and process control.\n\nIt can also create different trade-offs from a small batch operation.\n\nThe finished product still has to stand on its own.\n\n## Small Does Not Automatically Mean Better\n\nA small producer can make excellent flower.\n\nA small producer can also have an inconsistent batch.\n\nA large producer can make average flower.\n\nA large producer can also make carefully finished flower.\n\nSize alone does not settle the question.\n\n## The Better Comparison Is Product-Level\n\nInstead of asking only “craft or commercial?”, compare:\n\ncultivar;\n\nproducer;\n\nlegal label;\n\nTHC/CBD information;\n\naroma description;\n\nbud structure;\n\ntrim;\n\nvisible trichomes;\n\nmoisture and freshness;\n\npost-harvest handling;\n\nbatch consistency.\n\nThat turns a broad branding term into a real comparison.\n\n## Craft and Premium Are Not Synonyms\n\nA product described as craft does not automatically belong in the highest retail tier.\n\nLikewise, a Premium or Exotic tier product is not automatically craft.\n\nThose are separate labels coming from different parts of the supply chain.\n\n## Why the Distinction Still Matters\n\nScale and process influence how cannabis is produced.\n\nAdults may care about who grew the product, how the producer describes its operation and how consistently batches are presented.\n\nThat is useful context.\n\nThe problem only starts when craft becomes shorthand for guaranteed superiority.\n\n## Frequently Asked Questions\n\n**Does craft cannabis mean micro-licensed cannabis?**\nNot necessarily. Micro-cultivation is a federal licence class, while “craft” is also used more broadly in retail and marketing language.\n\n**Is commercial cannabis lower quality?**\nNot automatically. Scale is not a complete quality grade.\n\n**Is craft the same as Premium or Exotic?**\nNo. Craft describes production/branding context; Premium and Exotic are retail positioning terms.\n\n**What should I compare besides producer size?**\nUse the legal product information and actual flower characteristics, including aroma, structure, trim, trichomes, freshness and cultivar.\n\n**Can a large producer make consistent flower?**\nYes. Larger operations may use standardized processes designed for consistency.\n\n## Keep Reading\n\n- [BC Grown / Indoor / Hydro / Outdoor](/resources/flower-guides/bc-grown-indoor-hydro-outdoor)\n- [Flower Quality & Tiers](/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic)\n- [Drying, Curing & Freshness](/resources/flower-guides/drying-curing-freshness)\n- [What Does Good Weed Mean?](/resources/flower-guides/what-does-good-weed-mean)",
    "secondTake": null,
    "linkRoutes": [
      "/resources/flower-guides/bc-grown-indoor-hydro-outdoor",
      "/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic",
      "/resources/flower-guides/drying-curing-freshness",
      "/resources/flower-guides/what-does-good-weed-mean"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/flower-guides/bc-grown-indoor-hydro-outdoor",
      "/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic",
      "/resources/flower-guides/drying-curing-freshness",
      "/resources/flower-guides/what-does-good-weed-mean"
    ],
    "commercialLinks": [],
    "cards": [],
    "faqs": [
      {
        "question": "Does craft cannabis mean micro-licensed cannabis?",
        "answer": "Not necessarily. Micro-cultivation is a federal licence class, while “craft” is also used more broadly in retail and marketing language."
      },
      {
        "question": "Is commercial cannabis lower quality?",
        "answer": "Not automatically. Scale is not a complete quality grade."
      },
      {
        "question": "Is craft the same as Premium or Exotic?",
        "answer": "No. Craft describes production/branding context; Premium and Exotic are retail positioning terms."
      },
      {
        "question": "What should I compare besides producer size?",
        "answer": "Use the legal product information and actual flower characteristics, including aroma, structure, trim, trichomes, freshness and cultivar."
      },
      {
        "question": "Can a large producer make consistent flower?",
        "answer": "Yes. Larger operations may use standardized processes designed for consistency."
      }
    ]
  },
  {
    "pageNumber": 37,
    "sourceHeading": "INDICA VS SATIVA VS HYBRID: USEFUL LABELS, IMPERFECT SHORTCUTS",
    "route": "/resources/cannabis-101/indica-sativa-hybrid",
    "kind": "article",
    "pageType": "Cannabis education guide",
    "parentRoute": "/resources/cannabis-101",
    "h1": "Indica vs Sativa vs Hybrid: Useful Labels, Imperfect Shortcuts",
    "seoTitle": "Indica vs Sativa vs Hybrid | Cannabis Labels Explained",
    "metaDescription": "Indica, Sativa and Hybrid remain common cannabis labels, but modern genetics are heavily crossed. Learn what the terms can and cannot tell you.",
    "primaryKeyword": "Indica vs Sativa vs Hybrid: Useful Labels, Imperfect Shortcuts",
    "supportingKeywords": [],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-09-06",
    "dateModified": "2026-09-06",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Indica, Sativa and Hybrid remain common cannabis labels, but modern genetics are heavily crossed. Learn what the terms can and cannot tell you.",
    "body": "Indica, Sativa and Hybrid are probably the most familiar cannabis categories on a menu.\n\nThey are also some of the most oversimplified.\n\nPeople often learn a simple rule:\n\nIndica = relaxing.\nSativa = energetic.\nHybrid = in between.\n\nThat shorthand is easy to remember, but modern commercial cannabis is much more complicated.\n\n## Where the Labels Came From\n\nCannabis plants have historically been described using botanical and geographic differences, including forms associated with the names sativa and indica.\n\nOver decades of breeding, commercial cannabis has been crossed repeatedly.\n\nThat means today's retail products often have mixed ancestry.\n\n## What Modern Research Shows\n\nGenetic studies of commercial cannabis have found that familiar strain names and reported Indica/Sativa ancestry do not always match a simple underlying genetic identity.\n\nLarge chemical datasets have also found that the retail labels do not neatly divide products into three completely distinct chemical groups.\n\nThat does not make the labels useless.\n\nIt means they are better treated as broad consumer language than exact scientific predictions.\n\n## Why the Labels Stay on Menus\n\nPeople recognize them.\n\nThey provide a fast starting point.\n\nA product labelled Indica communicates something about how the producer or retailer is positioning it.\n\nA Sativa label does the same.\n\nHybrid signals mixed ancestry or a product positioned between familiar categories.\n\nThe label is still useful as long as it is not turned into a guarantee.\n\n## Why “Indica Means Sleepy” Is Too Strong\n\nIndividual response to cannabis varies.\n\nProducts differ in THC, CBD, other cannabinoids, terpene profiles, dose, format and user sensitivity.\n\nThat makes one-word effect promises unreliable.\n\nAn educational resource should explain the common cultural association without turning it into a promised outcome.\n\n## Hybrid Is Not a Lesser Category\n\nHybrid is sometimes treated like a vague middle option.\n\nIn reality, extensive hybridization is normal in modern cannabis breeding.\n\nA Hybrid label does not mean the product lacks character.\n\nIt means the genetics or market positioning do not fit a simple pure-Indica/pure-Sativa story.\n\n## What to Read Alongside the Label\n\nWhen available, compare:\n\nlegal product name;\n\nproducer;\n\nTHC and CBD;\n\ncultivar;\n\naroma or terpene information;\n\nformat;\n\npackage amount;\n\nother labelled details.\n\nThe Indica/Sativa/Hybrid label then becomes one piece of a larger picture.\n\n## Use the Label as a Conversation Starter\n\nInstead of asking, “Is this Indica guaranteed to make me sleepy?”, ask:\n\n“What does the producer mean by this Indica classification?”\n\nor:\n\n“What other information is on the label?”\n\nThat keeps the familiar language without overselling what it can predict.\n\n## Frequently Asked Questions\n\n**Are Indica and Sativa scientifically exact categories?**\nNot for modern commercial cannabis. The terms remain common, but extensive crossbreeding makes the simple categories imperfect.\n\n**Is most modern cannabis hybridized?**\nModern drug-type cannabis has a long history of crossbreeding, so mixed ancestry is common.\n\n**Does Indica always mean sleepy?**\nNo. That is a common cultural association, not a guaranteed effect.\n\n**Does Sativa always mean energetic?**\nNo. Product chemistry and individual response vary.\n\n**What should I read besides Indica/Sativa/Hybrid?**\nRead the legal label, THC/CBD information, producer, cultivar and any other product information that is actually provided.\n\n## Keep Reading\n\n- [Cannabis 101](/resources/cannabis-101)\n- [Strain vs Cultivar](/resources/cannabis-101/strain-vs-cultivar)\n- [Landrace vs Hybrid](/resources/cannabis-101/landrace-vs-hybrid)\n- [THC vs Weed Quality](/resources/flower-guides/thc-vs-weed-quality)",
    "secondTake": null,
    "linkRoutes": [
      "/resources/cannabis-101",
      "/resources/cannabis-101/strain-vs-cultivar",
      "/resources/cannabis-101/landrace-vs-hybrid",
      "/resources/flower-guides/thc-vs-weed-quality"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/cannabis-101",
      "/resources/cannabis-101/strain-vs-cultivar",
      "/resources/cannabis-101/landrace-vs-hybrid",
      "/resources/flower-guides/thc-vs-weed-quality"
    ],
    "commercialLinks": [],
    "cards": [],
    "faqs": [
      {
        "question": "Are Indica and Sativa scientifically exact categories?",
        "answer": "Not for modern commercial cannabis. The terms remain common, but extensive crossbreeding makes the simple categories imperfect."
      },
      {
        "question": "Is most modern cannabis hybridized?",
        "answer": "Modern drug-type cannabis has a long history of crossbreeding, so mixed ancestry is common."
      },
      {
        "question": "Does Indica always mean sleepy?",
        "answer": "No. That is a common cultural association, not a guaranteed effect."
      },
      {
        "question": "Does Sativa always mean energetic?",
        "answer": "No. Product chemistry and individual response vary."
      },
      {
        "question": "What should I read besides Indica/Sativa/Hybrid?",
        "answer": "Read the legal label, THC/CBD information, producer, cultivar and any other product information that is actually provided."
      }
    ]
  },
  {
    "pageNumber": 38,
    "sourceHeading": "STRAIN VS CULTIVAR: TWO WAYS PEOPLE NAME CANNABIS",
    "route": "/resources/cannabis-101/strain-vs-cultivar",
    "kind": "article",
    "pageType": "Cannabis education guide",
    "parentRoute": "/resources/cannabis-101",
    "h1": "Strain vs Cultivar: Two Ways People Name Cannabis",
    "seoTitle": "Strain vs Cultivar | Why Cannabis Names Can Be Confusing",
    "metaDescription": "Strain is common cannabis language; cultivar is a horticultural term. Learn why a familiar name does not guarantee identical genetics from every producer.",
    "primaryKeyword": "Strain vs Cultivar: Two Ways People Name Cannabis",
    "supportingKeywords": [],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-09-06",
    "dateModified": "2026-09-06",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Strain is common cannabis language; cultivar is a horticultural term. Learn why a familiar name does not guarantee identical genetics from every producer.",
    "body": "Cannabis menus use the word “strain” constantly.\n\nGrowers, breeders and horticultural writers may prefer “cultivar.”\n\nThe two words often point toward the same practical idea for a shopper: the named type of cannabis being discussed.\n\nBut the language has different roots.\n\n## Strain Is the Everyday Cannabis Word\n\nIn cannabis culture, strain usually means a named line such as a familiar flower name.\n\nIt is deeply established consumer language.\n\nThat makes it useful even when it is not the most precise botanical term.\n\n## Cultivar Is a Horticultural Word\n\nCultivar is short for “cultivated variety.”\n\nIt is used in horticulture for plants that have been selected and maintained for particular characteristics.\n\nIn cannabis education, cultivar can be a useful alternative because it reminds us that these are cultivated plant lines, not magic labels.\n\n## Why a Name Is Not a Genetic Barcode\n\nCannabis naming is messy.\n\nResearch has found that identical or similar commercial strain names do not always represent one perfectly consistent genetic identity.\n\nDifferent producers may work with different cuts, breeding lines or selections under familiar names.\n\nThat means the name is useful for identification, but it is not a guarantee that every product with that name will be identical.\n\n## Producer Matters\n\nA cultivar is expressed through a real production process.\n\nGenetics interact with:\n\ngrowing environment;\n\nplant health;\n\nharvest timing;\n\ndrying;\n\ncuring;\n\nstorage.\n\nTwo products with the same familiar name can therefore differ in appearance, aroma or labelled chemistry.\n\nWhich Word Should You Use?\n\nIf you say strain, people will understand you.\n\nIf you say cultivar, you are using a more horticultural term.\n\nThere is no need to correct customers for using normal cannabis language.\n\nThe educational value is in explaining that the name is one part of the product identity.\n\n## Frequently Asked Questions\n\n**Is strain the wrong word for cannabis?**\nIt is common consumer language and widely understood. Cultivar is a more horticultural term.\n\n**Does the same strain name mean identical genetics everywhere?**\nNot necessarily. Commercial naming is not perfectly standardized.\n\n**Can two producers grow the same named cultivar differently?**\nYes. Growing and post-harvest conditions can influence the finished product.\n\n**Should cultivar names be used to predict effects?**\nA name alone should not be treated as an effect guarantee.\n\n**What else should I compare?**\nProducer, legal label, THC/CBD, aroma information, format and actual flower characteristics.\n\n## Keep Reading\n\n- [Indica vs Sativa vs Hybrid](/resources/cannabis-101/indica-sativa-hybrid)\n- [Landrace vs Hybrid](/resources/cannabis-101/landrace-vs-hybrid)\n- [Cannabis 101](/resources/cannabis-101)\n- [Weed Slang Explained](/resources/cannabis-101/weed-slang-glossary)",
    "secondTake": null,
    "linkRoutes": [
      "/resources/cannabis-101/indica-sativa-hybrid",
      "/resources/cannabis-101/landrace-vs-hybrid",
      "/resources/cannabis-101",
      "/resources/cannabis-101/weed-slang-glossary"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/cannabis-101/indica-sativa-hybrid",
      "/resources/cannabis-101/landrace-vs-hybrid",
      "/resources/cannabis-101",
      "/resources/cannabis-101/weed-slang-glossary"
    ],
    "commercialLinks": [],
    "cards": [],
    "faqs": [
      {
        "question": "Is strain the wrong word for cannabis?",
        "answer": "It is common consumer language and widely understood. Cultivar is a more horticultural term."
      },
      {
        "question": "Does the same strain name mean identical genetics everywhere?",
        "answer": "Not necessarily. Commercial naming is not perfectly standardized."
      },
      {
        "question": "Can two producers grow the same named cultivar differently?",
        "answer": "Yes. Growing and post-harvest conditions can influence the finished product."
      },
      {
        "question": "Should cultivar names be used to predict effects?",
        "answer": "A name alone should not be treated as an effect guarantee."
      },
      {
        "question": "What else should I compare?",
        "answer": "Producer, legal label, THC/CBD, aroma information, format and actual flower characteristics."
      }
    ]
  },
  {
    "pageNumber": 39,
    "sourceHeading": "LANDRACE VS HYBRID: WHERE MODERN CANNABIS GENETICS COME FROM",
    "route": "/resources/cannabis-101/landrace-vs-hybrid",
    "kind": "article",
    "pageType": "Cannabis education guide",
    "parentRoute": "/resources/cannabis-101",
    "h1": "Landrace vs Hybrid: Where Modern Cannabis Genetics Come From",
    "seoTitle": "Landrace vs Hybrid Cannabis | Genetics Explained Simply",
    "metaDescription": "Learn what people mean by landrace cannabis, how hybrids are created and why modern commercial cannabis usually has a complicated breeding history.",
    "primaryKeyword": "Landrace vs Hybrid: Where Modern Cannabis Genetics Come From",
    "supportingKeywords": [],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-09-06",
    "dateModified": "2026-09-06",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Learn what people mean by landrace cannabis, how hybrids are created and why modern commercial cannabis usually has a complicated breeding history.",
    "body": "Cannabis genetics are often explained with family-tree language.\n\nLandrace sits near the roots of that story.\n\nHybrid describes the crossing that has shaped much of modern commercial cannabis.\n\nThe terms are useful as long as they are not turned into myths.\n\nWhat Does Landrace Mean?\n\nLandrace is generally used for cannabis populations associated with long-term adaptation to a particular geographic region before modern commercial breeding mixed many lineages together.\n\nThe word points toward geographic history and relatively old local populations.\n\nIt does not mean the plant was untouched by people or that every seed from a region is genetically identical.\n\nWhat Is a Hybrid?\n\nA hybrid is produced by crossing genetic lines.\n\nBreeders use crossing and selection to combine or emphasize traits.\n\nModern cannabis breeding has involved extensive hybridization, which is one reason today's commercial categories do not fit neatly into pure Indica or pure Sativa boxes.\n\n## Why Breeders Create Hybrids\n\nBreeders may select for characteristics such as:\n\nplant structure;\n\nflowering time;\n\naroma;\n\ncannabinoid profile;\n\nyield;\n\nresistance to environmental pressures;\n\nvisual traits.\n\nThe resulting line can then be selected and crossed again.\n\nOver generations, the family tree gets complicated.\n\n## Landrace Does Not Mean Automatically Better\n\nOld geographic origin can be interesting.\n\nIt does not automatically mean stronger, safer, more aromatic or higher quality.\n\nLikewise, Hybrid does not mean diluted or inferior.\n\nThose are value judgments, not genetic definitions.\n\n## Modern Cultivar Names Often Reflect Breeding History\n\nMany popular names combine or descend from earlier lines.\n\nMarketing names can also become detached from a clean genetic record.\n\nThat is why strain/cultivar identity should be treated as one part of the product rather than a perfect map of ancestry.\n\n## Why This Matters at the Store\n\nGenetics explain why familiar labels overlap.\n\nAn Indica-labelled product can have mixed ancestry.\n\nA Sativa-labelled product can have mixed ancestry.\n\nA Hybrid label is not unusual; it reflects the reality of modern breeding.\n\nThe practical shopper still needs the actual product label and producer information.\n\n## Frequently Asked Questions\n\n**What is landrace cannabis?**\nThe term generally refers to cannabis populations historically associated with long-term adaptation to particular geographic regions.\n\n**Is landrace cannabis pure?**\n“Pure” is too strong. Landrace refers to historical geographic populations, not a guarantee of identical untouched genetics.\n\n**What is a hybrid cultivar?**\nA cultivar created from crosses between genetic lines.\n\n**Is hybrid cannabis lower quality?**\nNo. Hybrid describes breeding history, not quality.\n\n**Why are so many modern products hybrids?**\nDecades of breeding and selection have mixed many cannabis lineages.\n\n## Keep Reading\n\n- [Indica vs Sativa vs Hybrid](/resources/cannabis-101/indica-sativa-hybrid)\n- [Strain vs Cultivar](/resources/cannabis-101/strain-vs-cultivar)\n- [BC Grown / Indoor / Hydro / Outdoor](/resources/flower-guides/bc-grown-indoor-hydro-outdoor)\n- [Cannabis 101](/resources/cannabis-101)",
    "secondTake": null,
    "linkRoutes": [
      "/resources/cannabis-101/indica-sativa-hybrid",
      "/resources/cannabis-101/strain-vs-cultivar",
      "/resources/flower-guides/bc-grown-indoor-hydro-outdoor",
      "/resources/cannabis-101"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/cannabis-101/indica-sativa-hybrid",
      "/resources/cannabis-101/strain-vs-cultivar",
      "/resources/flower-guides/bc-grown-indoor-hydro-outdoor",
      "/resources/cannabis-101"
    ],
    "commercialLinks": [],
    "cards": [],
    "faqs": [
      {
        "question": "What is landrace cannabis?",
        "answer": "The term generally refers to cannabis populations historically associated with long-term adaptation to particular geographic regions."
      },
      {
        "question": "Is landrace cannabis pure?",
        "answer": "“Pure” is too strong. Landrace refers to historical geographic populations, not a guarantee of identical untouched genetics."
      },
      {
        "question": "What is a hybrid cultivar?",
        "answer": "A cultivar created from crosses between genetic lines."
      },
      {
        "question": "Is hybrid cannabis lower quality?",
        "answer": "No. Hybrid describes breeding history, not quality."
      },
      {
        "question": "Why are so many modern products hybrids?",
        "answer": "Decades of breeding and selection have mixed many cannabis lineages."
      }
    ]
  },
  {
    "pageNumber": 40,
    "sourceHeading": "WEED SLANG EXPLAINED: GAS, LOUD, FIRE, DANK, MIDS, QUADS AND MORE",
    "route": "/resources/cannabis-101/weed-slang-glossary",
    "kind": "article",
    "pageType": "Cannabis education guide",
    "parentRoute": "/resources/cannabis-101",
    "h1": "Weed Slang Explained: Gas, Loud, Fire, Dank, Mids, Quads and More",
    "seoTitle": "Weed Slang Glossary | Gas, Loud, Fire, Dank, Mids & More",
    "metaDescription": "Weed, bud, gas, loud, fire, dank, mids, quads and zaza are common cannabis slang. Learn what the terms usually mean and what they do not prove.",
    "primaryKeyword": "Weed Slang Explained: Gas, Loud, Fire, Dank, Mids, Quads and More",
    "supportingKeywords": [],
    "author": {
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization"
    },
    "datePublished": "2026-09-06",
    "dateModified": "2026-09-06",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Weed, bud, gas, loud, fire, dank, mids, quads and zaza are common cannabis slang. Learn what the terms usually mean and what they do not prove.",
    "body": "Cannabis has formal label language and street language.\n\nThe formal side gives you regulated product information.\n\nThe slang side tells you how people actually talk.\n\nA good cannabis glossary should translate between the two without pretending slang is science.\n\n## Weed\n\nWeed is the most common informal synonym for cannabis.\n\nIt does not identify a product format by itself, although people often use it when they mean flower.\n\n## Bud / Flower / Nugs\n\nBud and flower usually refer to dried cannabis flower.\n\nNug or nugs is slang for individual pieces of flower.\n\n## Fire\n\nFire means very good or impressive.\n\nIt is pure opinion unless the speaker explains what they like.\n\n“This is fire” might refer to aroma, appearance, cultivar, freshness or simply personal preference.\n\nGas\n\nGas usually describes a pungent fuel-like or diesel-like aroma.\n\nIt is an aroma descriptor, not a potency grade.\n\n## Loud\n\nLoud means the aroma is pronounced or easy to notice.\n\nThe actual smell might be gassy, skunky, fruity, floral or something else.\n\n## Dank\n\nDank is old cannabis slang generally used positively for strong-smelling, desirable weed.\n\nLike fire, it is subjective.\n\n## Terpy\n\nTerpy suggests a noticeable terpene-related aroma or flavour profile.\n\nIt does not tell you the exact terpene content unless that information is actually provided.\n\n## Frosty\n\nFrosty points to visible trichome coverage.\n\nIt is one of the more literal slang terms because the visual clue is easy to see.\n\nFrost still does not give you an exact THC measurement.\n\n## Bag Appeal\n\nBag appeal means visual first impression: bud shape, colour, trim, trichomes, size and overall presentation.\n\n## Mids\n\nMids means middle-of-the-road cannabis in someone's opinion.\n\nIt is not an official grade and can be used loosely.\n\n## Top Shelf\n\nTop shelf suggests premium positioning.\n\nRetailers may use the concept differently.\n\nIt does not have one required THC range.\n\n## Quads / AAAA\n\nQuads is common Canadian slang for AAAA.\n\nThe term usually signals premium positioning, but the A-based grading language is not one regulated national standard.\n\n## AAA / AAA+\n\nAAA is a familiar informal grade.\n\nAAA+ usually suggests something positioned above a normal AAA label.\n\nQueen Lansdowne's protected commercial owner is AAA+ Weed at /aaa-weed.\n\nAA\n\nAA is another informal grade commonly positioned below AAA-style labels.\n\nQueen Lansdowne's protected owner is AA Weed at /aa-weed.\n\n## Exotic\n\nExotic can suggest unusual genetics, distinctive aroma, rarity or high-end positioning.\n\nIt is also marketing language.\n\nAt Queen Lansdowne, Exotic Weed is a named commercial section at /exotic-weed.\n\n## Zaza / Za\n\nZaza or za is newer slang often used for expensive, rare-looking or supposedly premium/exotic weed.\n\nIt is not an official grade.\n\nIf someone calls something zaza, ask what they actually mean: genetics, appearance, price, rarity, aroma or hype.\n\n## Why Slang Is Useful\n\nSlang often captures what formal language misses.\n\n“Gas” can quickly communicate an aroma family.\n\n“Frosty” points to trichomes.\n\n“Bag appeal” points to presentation.\n\nThe problem starts when a descriptive nickname gets treated as proof.\n\nUse the slang, then translate it.\n\n## Frequently Asked Questions\n\n**Is weed the same as cannabis?**\nWeed is common informal language for cannabis.\n\n**What does gas mean?**\nUsually a fuel-like or diesel-like aroma impression.\n\n**What does loud mean?**\nUsually a pronounced smell.\n\n**What are quads?**\nCanadian slang for AAAA, commonly implying premium positioning.\n\n**What is zaza?**\nSlang often associated with expensive, exotic or premium-positioned cannabis. It is not an official grade.\n\n## Keep Reading\n\n- [Cannabis 101](/resources/cannabis-101)\n- [Top Shelf, Mids & Quads](/resources/flower-guides/top-shelf-mids-quads)\n- [Terpenes, Gas & Loud](/resources/flower-guides/terpenes-gas-loud-aroma)\n- [Trichomes & Frosty Weed](/resources/flower-guides/trichomes-frosty-weed)\n- [Exotic Weed](/exotic-weed)\n- [Premium Weed](/premium-weed)",
    "secondTake": null,
    "linkRoutes": [
      "/resources/cannabis-101",
      "/resources/flower-guides/top-shelf-mids-quads",
      "/resources/flower-guides/terpenes-gas-loud-aroma",
      "/resources/flower-guides/trichomes-frosty-weed",
      "/exotic-weed",
      "/premium-weed"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/cannabis-101",
      "/resources/flower-guides/top-shelf-mids-quads",
      "/resources/flower-guides/terpenes-gas-loud-aroma",
      "/resources/flower-guides/trichomes-frosty-weed"
    ],
    "commercialLinks": [],
    "cards": [],
    "faqs": [
      {
        "question": "Is weed the same as cannabis?",
        "answer": "Weed is common informal language for cannabis."
      },
      {
        "question": "What does gas mean?",
        "answer": "Usually a fuel-like or diesel-like aroma impression."
      },
      {
        "question": "What does loud mean?",
        "answer": "Usually a pronounced smell."
      },
      {
        "question": "What are quads?",
        "answer": "Canadian slang for AAAA, commonly implying premium positioning."
      },
      {
        "question": "What is zaza?",
        "answer": "Slang often associated with expensive, exotic or premium-positioned cannabis. It is not an official grade."
      }
    ]
  }
];
// END PINKY QLC01 KNOWLEDGE BASE V2 SS

export const RESOURCE_ROUTE_LABELS: Record<string, string> = { ...BASE_RESOURCE_ROUTE_LABELS, ...PINKY_RESOURCE_LABELS };
export const RESOURCE_PAGES: ResourcePage[] = [
  ...BASE_RESOURCE_PAGES.map((page) => ({ ...page, ...(PINKY_RESOURCE_OVERRIDES[page.route] || {}) })),
  ...PINKY_RESOURCE_ADDITIONS,
];

export const RESOURCE_PATHS = RESOURCE_PAGES.map((page) => page.route);

export function normalizeResourceRoute(route: string) {
  return route.length > 1 ? route.replace(/\/$/, "") : route;
}

export function getResourcePageByRoute(route: string) {
  const normalized = normalizeResourceRoute(route);
  return RESOURCE_PAGES.find((page) => page.route === normalized);
}

export function getResourcePageBySlugParts(parts: string[]) {
  const route = `/resources/${parts.join("/")}`;
  return RESOURCE_PAGES.find((page) => page.route === route);
}

export function getResourceStaticParams() {
  return RESOURCE_PAGES.filter((page) => page.route !== "/resources").map((page) => ({
    slug: page.route.replace(/^\/resources\//, "").split("/"),
  }));
}

export function getResourceChildren(page: ResourcePage) {
  return page.childRoutes
    .map((route) => getResourcePageByRoute(route))
    .filter((child): child is ResourcePage => Boolean(child));
}

export function resourceCanonical(page: ResourcePage) {
  return `${SITE_URL}${page.route}`;
}

