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

export const RESOURCE_ROUTE_LABELS: Record<string, string> = {
  "/": "Home",
  "/resources": "Resource Centre",
  "/resources/cannabis-101": "Cannabis 101",
  "/resources/flower-guides": "Flower Guides",
  "/resources/pre-roll-guides": "Pre-Roll Guides",
  "/resources/edibles-guides": "Edibles Guides",
  "/resources/vape-guides": "Vape Guides",
  "/resources/value-guides": "Value Guides",
  "/resources/local-guides": "Local Guides",
  "/resources/store-updates": "Store Updates",
  "/resources/native-smokes": "Native Smokes",
  "/resources/magic-mushroom-guides": "Magic Mushroom Guides",
  "/weed-dispensary-toronto": "Queen Lansdowne Cannabis store page",
  "/budget": "Budget flower",
  "/aa": "AA flower",
  "/aaa": "AAA+ flower",
  "/premium": "Premium flower",
  "/exotic": "Exotic flower",
  "/items/prerolls": "Pre-rolls",
  "/items/edibles": "Edibles",
  "/items/vapes": "THC vapes",
  "/items/vape-disposables": "Disposable vapes",
  "/items/concentrates": "Concentrates",
  "/items/magic": "Magic Stuff",
  "/items/cigarettes": "Cigarettes",
  "/info/native-cigarettes-york": "Native cigarettes information",
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
  "/resources/magic-mushroom-guides/how-to-read-a-magic-mushroom-menu": "How to Read a Magic Mushroom Menu Without Guessing",
  "/resources/store-updates/resource-centre-launch": "The Queen Lansdowne Cannabis Resource Centre Is Now Live"
};

export const RESOURCE_PAGES: ResourcePage[] = [
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
    "excerpt": "The Queen Lansdowne Cannabis Resource Centre brings our most useful guides into one organized place. Instead of sorting through a dated stream of posts, adults 19+ can begin with the topic that matches their question: fl",
    "body": "The Queen Lansdowne Cannabis Resource Centre brings our most useful guides into one organized place. Instead of sorting through a dated stream of posts, adults 19+ can begin with the topic that matches their question: flower, pre-rolls, edibles, THC vapes, value comparisons, native smokes, specialty products, or local Queen West information.\n\nThese Queen Lansdowne Cannabis resources keep the useful stuff close: category explainers, local visit help, and live-menu paths when details can change.\n\nThese pages are designed to explain categories and help shoppers use the current menu more confidently. Product names, prices, weights, and availability can change, so each resource points back to the appropriate live category whenever current details matter.\n\n### Start with the topic you need\n\n**Cannabis 101**\nUnderstand the menu, product formats, listing details, and the difference between general guidance and current product information.\n\n**Flower Guides**\nLearn how Budget, AA, AAA+, Premium, and Exotic sections organize the flower menu and how to compare listings without treating a tier name as a guarantee.\n\n**Pre-Roll Guides**\nCompare pre-rolls with flower and understand the listing details that matter when convenience is part of the decision.\n\n**Edibles Guides**\nRead edible labels and menu information more carefully, including the delayed onset of edible cannabis.\n\n**Vape Guides**\nSeparate THC vape questions from flower questions and check format, compatibility, and current product details.\n\n**Value Guides**\nCompare price with weight, format, and current listing information instead of reacting to one number by itself.\n\n**Local Guides**\nFind practical Queen West and Lansdowne store information connected to the store page, current hours, contact details, and menu routes.\n\n**Native Smokes**\nReview informational guides about native cigarettes, pack and carton terminology, and current store selection.\n\n**Magic Mushroom Guides**\nUnderstand how specialty products may be organized on a menu and which label details should be checked before choosing.\n\n**Store Updates**\nRead official Queen Lansdowne Cannabis announcements about the Resource Centre, hours, services, and other confirmed store changes.\n\n### Current information comes first\n\nResources explain the subject. The live menu provides current product details. The store page provides current visit information. When one fact could change the trip, use the live page or contact the store rather than relying on an older guide.\n\n### Explore Queen Lansdowne Cannabis\n\nQueen Lansdowne Cannabis is located near Queen Street West and Lansdowne in Toronto. Use the main store page for current location, hours, contact details, and visit planning.\n\n**Primary links:**\n- Store page: `/weed-dispensary-toronto`\n- Flower: `/budget`, `/aa`, `/aaa`, `/premium`, `/exotic`\n- Pre-rolls: `/items/prerolls`\n- Edibles: `/items/edibles`\n- THC vapes: `/items/vapes`, `/items/vape-disposables`\n- Concentrates: `/items/concentrates`\n- Magic Stuff: `/items/magic`\n- Native cigarettes: `/info/native-cigarettes-york`\n- FAQ: `/faq`",
    "secondTake": null,
    "linkRoutes": [
      "/weed-dispensary-toronto",
      "/budget",
      "/aa",
      "/aaa",
      "/premium",
      "/exotic",
      "/items/prerolls",
      "/items/edibles",
      "/items/vapes",
      "/items/vape-disposables",
      "/items/concentrates",
      "/items/magic",
      "/info/native-cigarettes-york",
      "/faq"
    ],
    "childRoutes": [
      "/resources/cannabis-101",
      "/resources/flower-guides",
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
      "/resources/flower-guides",
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
        "href": "/budget",
        "description": "Browse the current Budget flower section."
      },
      {
        "title": "AA flower",
        "href": "/aa",
        "description": "Browse the current AA flower section."
      },
      {
        "title": "AAA+ flower",
        "href": "/aaa",
        "description": "Browse the current AAA+ flower section."
      },
      {
        "title": "Premium flower",
        "href": "/premium",
        "description": "Browse the current Premium flower section."
      },
      {
        "title": "Exotic flower",
        "href": "/exotic",
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
        "title": "THC vapes",
        "href": "/items/vapes",
        "description": "Browse current THC vape listings."
      },
      {
        "title": "Disposable vapes",
        "href": "/items/vape-disposables",
        "description": "Browse current disposable vape listings."
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
        "href": "/info/native-cigarettes-york",
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
        "category": "Resource category",
        "author": "Lana Queen",
        "updated": "2026-07-11"
      },
      {
        "title": "Flower Guides: Understand the Sections Before Comparing Strains",
        "href": "/resources/flower-guides",
        "description": "Queen Lansdowne Cannabis organizes flower into Budget, AA, AAA+, Premium, and Exotic sections. Those labels help shoppers decide where to begin, but the current listing still carries the details that complete the compari",
        "category": "Resource category",
        "author": "Lana Queen",
        "updated": "2026-07-11"
      },
      {
        "title": "Pre-Roll Guides",
        "href": "/resources/pre-roll-guides",
        "description": "Pre-rolls have a straightforward appeal: the flower is already rolled. The menu comparison still deserves attention. Pack count, size, product notes, and whether an item is standard or infused can change what the listing",
        "category": "Resource category",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      },
      {
        "title": "Edibles Guides: Read the Label Before Making Assumptions",
        "href": "/resources/edibles-guides",
        "description": "Edible cannabis works on a different timeline from inhaled products, which makes careful label reading especially important. This section focuses on product type, package information, THC content where shown, serving inf",
        "category": "Resource category",
        "author": "Lana Queen",
        "updated": "2026-07-11"
      },
      {
        "title": "THC Vape Guides",
        "href": "/resources/vape-guides",
        "description": "THC vapes have their own menu logic. The first question is usually the format: cartridge, disposable, or another listed type. Compatibility may matter for cartridge products, while disposable products are sold as self-co",
        "category": "Resource category",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      },
      {
        "title": "Value Guides: Compare the Full Listing, Not One Number",
        "href": "/resources/value-guides",
        "description": "Value shopping is not simply finding the lowest number on the page. A useful comparison includes the listed weight, product section, current price, and item details. A lower price attached to a different size is not the ",
        "category": "Resource category",
        "author": "Quinn West",
        "updated": "2026-07-11"
      },
      {
        "title": "Queen West and Lansdowne Local Guides",
        "href": "/resources/local-guides",
        "description": "Queen Street West is busy enough without turning a store visit into a scavenger hunt. These local guides connect Queen Lansdowne Cannabis to the neighbourhood in a useful way: the address, the store page, the correct men",
        "category": "Resource category",
        "author": "Quinn West",
        "updated": "2026-07-11"
      },
      {
        "title": "Queen Lansdowne Cannabis Store Updates",
        "href": "/resources/store-updates",
        "description": "This section contains official Queen Lansdowne Cannabis announcements. It is not a general news feed and it will not be filled with routine promotional posts.",
        "category": "Resource category",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      },
      {
        "title": "Native Smokes and Cigarette Guides",
        "href": "/resources/native-smokes",
        "description": "This section helps adults 19+ understand how native cigarettes may be organized on the Queen Lansdowne Cannabis menu and what details to check before visiting. Selection can rotate, so brand, variety, pack, carton, and p",
        "category": "Resource category",
        "author": "Quinn West",
        "updated": "2026-07-11"
      },
      {
        "title": "Magic Mushroom and Specialty-Product Guides",
        "href": "/resources/magic-mushroom-guides",
        "description": "Specialty-product menus can include different formats, package sizes, and label conventions. This section explains how to read those listings without making assumptions based on a product name alone.",
        "category": "Resource category",
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
    "pageType": "Category hub",
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
    "body": "Cannabis terminology can become complicated long before it becomes useful. This section keeps the starting point simple: understand the product format, read the current listing, and know which details belong to the menu, the package, or a staff question.\n\nA flower listing, a pre-roll pack, an edible, a THC vape, and a concentrate should not be compared in exactly the same way. Each format has its own practical details. The guides in this section explain those differences without assuming the reader already knows every term.\n\n### Featured guide\n\n**How to Read a Cannabis Menu Without Getting Lost**\nLearn where to begin, what listing details commonly matter, and how category pages make a large menu easier to understand.\n\n### Continue to product-specific guides\n\n- Flower Guides\n- Pre-Roll Guides\n- Edibles Guides\n- Vape Guides\n- Value Guides\n\n### Editors note\n\nA useful beginner resource should make the reader more comfortable, not make the subject sound exclusive. The best first step is often identifying the product format before comparing individual names.",
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
        "description": "The Queen Lansdowne Cannabis Resource Centre brings our most useful guides into one organized place. Instead of sorting through a dated stream of posts, adults 19+ can begin with the topic that matches their question: fl",
        "category": "Resource Centre landing page",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      }
    ]
  },
  {
    "pageNumber": 3,
    "sourceHeading": "FLOWER GUIDES HUB",
    "route": "/resources/flower-guides",
    "kind": "hub",
    "pageType": "Category hub",
    "parentRoute": "/resources",
    "h1": "Flower Guides: Understand the Sections Before Comparing Strains",
    "seoTitle": "Cannabis Flower Guides | Queen Lansdowne Cannabis",
    "metaDescription": "Explore Queen Lansdowne Cannabis flower guides covering Budget, AA, AAA+, Premium, Exotic, value comparisons, weights, and current menu listings.",
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
    "dateModified": "2026-07-11",
    "heroImage": "/storeFavicon.webp",
    "excerpt": "Queen Lansdowne Cannabis organizes flower into Budget, AA, AAA+, Premium, and Exotic sections. Those labels help shoppers decide where to begin, but the current listing still carries the details that complete the compari",
    "body": "Queen Lansdowne Cannabis organizes flower into Budget, AA, AAA+, Premium, and Exotic sections. Those labels help shoppers decide where to begin, but the current listing still carries the details that complete the comparison: product name, weight, posted price, type, and item notes.\n\nThese cannabis flower guides for Toronto shoppers keep the focus on the current menu instead of old strain memories.\n\nThis resource category explains how the flower menu is organized without turning tier names into guaranteed outcomes. A section is a browsing tool. It is not a substitute for checking the current product page.\n\n### Guides in this section\n\n**AA vs AAA+ vs Premium vs Exotic Flower**\nA clear look at what the section names are doing on the menu and how to compare inside each section.\n\n**Budget vs Premium Flower**\nA shopper-focused comparison between two different starting points: value-first browsing and premium-section browsing.\n\n### Browse current flower sections\n\n- Budget: `/budget`\n- AA: `/aa`\n- AAA+: `/aaa`\n- Premium: `/premium`\n- Exotic: `/exotic`\n\n### Editors note\n\nFlower becomes easier to compare when the section and the item are treated as two separate layers. The section narrows the shelf. The item listing answers the current question.",
    "secondTake": null,
    "linkRoutes": [
      "/budget",
      "/aa",
      "/aaa",
      "/premium",
      "/exotic"
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
        "title": "Budget flower",
        "href": "/budget",
        "description": "Browse the current Budget flower section."
      },
      {
        "title": "AA flower",
        "href": "/aa",
        "description": "Browse the current AA flower section."
      },
      {
        "title": "AAA+ flower",
        "href": "/aaa",
        "description": "Browse the current AAA+ flower section."
      },
      {
        "title": "Premium flower",
        "href": "/premium",
        "description": "Browse the current Premium flower section."
      },
      {
        "title": "Exotic flower",
        "href": "/exotic",
        "description": "Browse the current Exotic flower section."
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
        "description": "The Queen Lansdowne Cannabis Resource Centre brings our most useful guides into one organized place. Instead of sorting through a dated stream of posts, adults 19+ can begin with the topic that matches their question: fl",
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
    "excerpt": "Pre-rolls have a straightforward appeal: the flower is already rolled. The menu comparison still deserves attention. Pack count, size, product notes, and whether an item is standard or infused can change what the listing",
    "body": "Pre-rolls have a straightforward appeal: the flower is already rolled. The menu comparison still deserves attention. Pack count, size, product notes, and whether an item is standard or infused can change what the listing means.\n\nThis pre-roll guide for Toronto shoppers keeps the category simple: check the pack, compare the current listing, and ask staff when one detail matters.\n\nThe guides in this section focus on the format itself. They do not assume that pre-rolls are automatically the right choice or compare them as if they were identical to loose flower.\n\n### Featured guide\n\n**Pre-Rolls vs Flower: Which Format Fits the Visit?**\nA practical comparison of convenience, menu detail, and the amount of control each format gives the shopper.\n\n### Official note\n\nCurrent menu information should decide current product questions. Resource pages explain how to compare; the live category shows what is listed now.",
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
        "description": "The Queen Lansdowne Cannabis Resource Centre brings our most useful guides into one organized place. Instead of sorting through a dated stream of posts, adults 19+ can begin with the topic that matches their question: fl",
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
    "metaDescription": "Read Queen Lansdowne Cannabis edible guides covering delayed onset, product labels, serving information, current menu details, and safer browsing.",
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
    "excerpt": "Edible cannabis works on a different timeline from inhaled products, which makes careful label reading especially important. This section focuses on product type, package information, THC content where shown, serving inf",
    "body": "Edible cannabis works on a different timeline from inhaled products, which makes careful label reading especially important. This section focuses on product type, package information, THC content where shown, serving information, and the delayed onset of effects.\n\nThis cannabis edibles guide for Toronto shoppers keeps the focus on labels, serving information, and patience rather than guesswork.\n\nThe guides do not replace package directions or health advice. They help adults 19+ understand why edible products should not be judged like flower, pre-rolls, or THC vapes.\n\n### Featured guide\n\n**How Long Do Edibles Take?**\nA direct answer based on Health Canada guidance, followed by the menu and package details that matter before consuming edible cannabis.\n\n### Editors note\n\nPatience begins before consumption. A careful edible decision starts by reading the product and package information rather than treating every edible as interchangeable.",
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
        "description": "Health Canada advises that edible cannabis effects may be felt within 30 minutes to 2 hours and can take up to 4 hours to reach their full effect. Consuming more before the first serving has taken full effect increases t",
        "category": "Question-led evergreen guide",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      },
      {
        "title": "Queen Lansdowne Cannabis Resource Centre",
        "href": "/resources",
        "description": "The Queen Lansdowne Cannabis Resource Centre brings our most useful guides into one organized place. Instead of sorting through a dated stream of posts, adults 19+ can begin with the topic that matches their question: fl",
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
    "body": "THC vapes have their own menu logic. The first question is usually the format: cartridge, disposable, or another listed type. Compatibility may matter for cartridge products, while disposable products are sold as self-contained units.\n\nThis THC vape guide for Toronto shoppers keeps format and compatibility questions separate from flower questions.\n\nThis section keeps THC vape information separate from nicotine vape information and separate from flower comparisons.\n\n### Featured guide\n\n**THC Vapes vs Flower: What Changes With the Format?**\nCompare the shopping details involved in each format without turning the article into a claim about which one is better.\n\n### Current categories\n\n- THC vapes: `/items/vapes`\n- Disposable THC vapes: `/items/vape-disposables`\n\n### Official note\n\nCurrent product formats and availability can change. Check the live page before planning a visit around a specific vape item.",
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
        "title": "THC vapes",
        "href": "/items/vapes",
        "description": "Browse current THC vape listings."
      },
      {
        "title": "Disposable vapes",
        "href": "/items/vape-disposables",
        "description": "Browse current disposable vape listings."
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
        "description": "The Queen Lansdowne Cannabis Resource Centre brings our most useful guides into one organized place. Instead of sorting through a dated stream of posts, adults 19+ can begin with the topic that matches their question: fl",
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
    "body": "Value shopping is not simply finding the lowest number on the page. A useful comparison includes the listed weight, product section, current price, and item details. A lower price attached to a different size is not the same comparison.\n\nIf you are comparing cheap weed in Queen West, this section keeps price, weight, and current listing details in the same conversation.\n\nThis section is built for shoppers using phrases such as cheap weed, affordable weed, Budget flower, and flower deals. The language is direct because those are real searches, but the advice stays grounded in current menu information.\n\n### Featured guide\n\n**How to Compare Flower Prices Without Ignoring Weight**\nA practical guide to reading price and quantity together before comparing current flower listings.\n\n### Useful menu paths\n\n- Budget: `/budget`\n- AA: `/aa`\n- AAA+: `/aaa`\n- Premium: `/premium`\n- Exotic: `/exotic`\n\n### Quinns note\n\nValue shoppers do not need a lecture. They need the full line: section, product, size, and current price.",
    "secondTake": null,
    "linkRoutes": [
      "/budget",
      "/aa",
      "/aaa",
      "/premium",
      "/exotic"
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
        "href": "/budget",
        "description": "Browse the current Budget flower section."
      },
      {
        "title": "AA flower",
        "href": "/aa",
        "description": "Browse the current AA flower section."
      },
      {
        "title": "AAA+ flower",
        "href": "/aaa",
        "description": "Browse the current AAA+ flower section."
      },
      {
        "title": "Premium flower",
        "href": "/premium",
        "description": "Browse the current Premium flower section."
      },
      {
        "title": "Exotic flower",
        "href": "/exotic",
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
        "description": "The Queen Lansdowne Cannabis Resource Centre brings our most useful guides into one organized place. Instead of sorting through a dated stream of posts, adults 19+ can begin with the topic that matches their question: fl",
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
    "excerpt": "Queen Street West is busy enough without turning a store visit into a scavenger hunt. These local guides connect Queen Lansdowne Cannabis to the neighbourhood in a useful way: the address, the store page, the correct men",
    "body": "Queen Street West is busy enough without turning a store visit into a scavenger hunt. These local guides connect Queen Lansdowne Cannabis to the neighbourhood in a useful way: the address, the store page, the correct menu category, and the current visit information.\n\nIf you searched for a weed dispensary in Queen West, start here for the store page, current menu paths, and visit-planning links.\n\nQueen Lansdowne Cannabis is located at 1472 Queen St W near Lansdowne. Parkdale, Little Portugal, Roncesvalles, Brockton Village, and Dundas West may be useful orientation points for people already familiar with the west side of Toronto, but the store page remains the place to confirm current details.\n\n### Featured guide\n\n**Weed Dispensary in Queen West: A Practical Queen and Lansdowne Guide**\nA locally grounded guide to finding the store page, confirming the visit, and moving into the relevant menu category.\n\n### Current store page\n\n`/weed-dispensary-toronto`\n\n### Quinns note\n\nLocal content earns its place when the neighbourhood information helps someone make a real next move.",
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
        "description": "The Queen Lansdowne Cannabis Resource Centre brings our most useful guides into one organized place. Instead of sorting through a dated stream of posts, adults 19+ can begin with the topic that matches their question: fl",
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
    "body": "This section contains official Queen Lansdowne Cannabis announcements. It is not a general news feed and it will not be filled with routine promotional posts.\n\nQueen Lansdowne Cannabis updates belong here when the information is official, useful, and worth keeping easy to find.\n\nUpdates belong here when something verifiable changes, such as:\n\n- Resource Centre launches\n- Store hours\n- Contact information\n- Services\n- Menu navigation\n- Delivery status\n- Store closures or holiday schedules\n- Major category additions\n\nOlder updates should remain dated and clearly marked when newer information replaces them.\n\n### Current update\n\n**The Queen Lansdowne Cannabis Resource Centre Is Now Live**\nThis announcement is available now that the Resource Centre is live.\n\n### Official note\n\nFor current visit information, use the store page. For dated announcements, use this update archive.",
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
        "description": "The Queen Lansdowne Cannabis Resource Centre brings our most useful guides into one organized place. Instead of sorting through a dated stream of posts, adults 19+ can begin with the topic that matches their question: fl",
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
    "excerpt": "This section helps adults 19+ understand how native cigarettes may be organized on the Queen Lansdowne Cannabis menu and what details to check before visiting. Selection can rotate, so brand, variety, pack, carton, and p",
    "body": "This section helps adults 19+ understand how native cigarettes may be organized on the Queen Lansdowne Cannabis menu and what details to check before visiting. Selection can rotate, so brand, variety, pack, carton, and price questions should always be confirmed through the current store information.\n\nFor native cigarettes in Toronto, the useful move is checking the current store information instead of trusting an old brand list.\n\nThese resources do not make health or safety claims about tobacco. Smoking and nicotine use carry serious health risks. The purpose of the section is menu clarity and accurate store navigation.\n\n### Guides in this section\n\n**Native Cigarettes in Toronto: What to Check Before Visiting**\nA current-information guide for Queen West shoppers looking for native smokes.\n\n**Cigarette Packs vs Cartons: What the Listing Means**\nA simple explanation of units, packaging, and why the current listing matters.\n\n### Current store information\n\nExisting native-cigarette landing page: `/info/native-cigarettes-york`\nCurrent menu category: `/items/cigarettes`\n\n### Quinns note\n\nFor a category that changes by brand and variety, accuracy matters more than a long list that can become stale.",
    "secondTake": null,
    "linkRoutes": [
      "/info/native-cigarettes-york",
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
        "href": "/info/native-cigarettes-york",
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
        "description": "Adults 19+ looking for native cigarettes in Toronto usually need current answers: which brands or varieties are listed, whether the item is sold as a pack or carton, the current price, and whether the selection is availa",
        "category": "Evergreen native-smokes guide",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      },
      {
        "title": "Cigarette Packs vs Cartons: What the Listing Means",
        "href": "/resources/native-smokes/packs-vs-cartons",
        "description": "A pack and a carton are different sales units. That sounds obvious, but menu comparisons become confusing when the package type is not read beside the current price.",
        "category": "Evergreen terminology guide",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      },
      {
        "title": "Queen Lansdowne Cannabis Resource Centre",
        "href": "/resources",
        "description": "The Queen Lansdowne Cannabis Resource Centre brings our most useful guides into one organized place. Instead of sorting through a dated stream of posts, adults 19+ can begin with the topic that matches their question: fl",
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
    "excerpt": "Specialty-product menus can include different formats, package sizes, and label conventions. This section explains how to read those listings without making assumptions based on a product name alone.",
    "body": "Specialty-product menus can include different formats, package sizes, and label conventions. This section explains how to read those listings without making assumptions based on a product name alone.\n\nThis magic mushroom guide for Toronto shoppers explains menu labels and formats without turning into dosing or medical advice.\n\nThe current Queen Lansdowne Cannabis menu uses a Magic Stuff category for specialty products. Availability can change, and the live category should be checked before planning a visit around one item.\n\nThese guides are informational. They do not provide dosing, consumption, medical, therapeutic, or legal advice.\n\n### Guides in this section\n\n**Magic Mushroom Formats Explained**\nA menu-level overview of common listed formats such as dried products, chocolates, gummies, capsules, and other specialty items when shown.\n\n**How to Read a Magic Mushroom Menu**\nA practical guide to product name, format, package amount, listed strength, serving information, and current availability.\n\n### Lanas note\n\nA carefully written specialty-product guide should make the label easier to understand without pretending the label answers every question.",
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
        "description": "Magic mushroom and specialty-product menus may use several formats. The format tells the shopper how the product is packaged; it does not answer every question about the product.",
        "category": "Evergreen specialty-product format guide",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      },
      {
        "title": "How to Read a Magic Mushroom Menu Without Guessing",
        "href": "/resources/magic-mushroom-guides/how-to-read-a-magic-mushroom-menu",
        "description": "A specialty-product listing should be read in layers: format, package, listed amount, product notes, and current availability.",
        "category": "Evergreen menu-literacy guide",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      },
      {
        "title": "Queen Lansdowne Cannabis Resource Centre",
        "href": "/resources",
        "description": "The Queen Lansdowne Cannabis Resource Centre brings our most useful guides into one organized place. Instead of sorting through a dated stream of posts, adults 19+ can begin with the topic that matches their question: fl",
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
    "metaDescription": "Learn how to read a cannabis menu by starting with product format, then comparing product names, weights, prices, pack details, and current item notes.",
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
    "body": "A large cannabis menu becomes easier when you stop reading it as one giant list. Start by choosing the product format. Flower, pre-rolls, edibles, THC vapes, concentrates, accessories, native smokes, and specialty products each answer a different shopping question.\n\nAt Queen Lansdowne Cannabis, the menu is divided into product categories and flower sections. That structure is meant to reduce the first decision, not make every item look comparable.\n\n## Begin with format\n\nSomeone looking for loose flower should begin with the flower sections. Someone looking for a ready-rolled product should open pre-rolls. Edibles, THC vapes, concentrates, and accessories each have their own category paths.\n\nChoosing the format first prevents a common problem: comparing products that do not serve the same purpose.\n\n## Read the complete listing\n\nOnce you are inside the correct category, look for the information the page provides:\n\n- Product name\n- Category or flower section\n- Weight or package size\n- Current posted price\n- Pack count where applicable\n- Format details\n- Item notes\n- Current availability where shown\n\nNo single detail should carry the whole decision. A price without a weight is incomplete. A product name without format information may still leave the important question unanswered.\n\n## Flower sections are navigation tools\n\nBudget, AA, AAA+, Premium, and Exotic are separate flower browsing paths at Queen Lansdowne Cannabis. The section helps the shopper choose a starting point. The current product page supplies the details.\n\nThat distinction matters because a tier label should not be treated as a permanent claim about every item. Listings rotate, and the menu should be read in the present tense.\n\n## Changing details belong to the live menu\n\nEvergreen resources can explain methods, categories, and terminology. They should not lock a changing product, price, or availability claim into an article.\n\nUse the resource to understand the menu. Use the live category to answer the current product question.\n\n## Ask a smaller question\n\nWhen the page leaves something unclear, a specific question is more useful than What is best?\n\nExamples:\n\n- Is this listing a single pre-roll or a pack?\n- Does this cartridge require a separate battery?\n- What size is attached to this flower price?\n- Is this specialty item currently listed at this location?\n\nSmaller questions produce clearer answers.\n\n## Continue browsing\n\n- Store information: `/weed-dispensary-toronto`\n- Flower: `/budget`, `/aa`, `/aaa`, `/premium`, `/exotic`\n- Pre-rolls: `/items/prerolls`\n- Edibles: `/items/edibles`\n- THC vapes: `/items/vapes`\n- Concentrates: `/items/concentrates`\n- Specialty products: `/items/magic`",
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
      "/budget",
      "/aa",
      "/aaa",
      "/premium",
      "/exotic",
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
        "href": "/budget",
        "description": "Browse the current Budget flower section."
      },
      {
        "title": "AA flower",
        "href": "/aa",
        "description": "Browse the current AA flower section."
      },
      {
        "title": "AAA+ flower",
        "href": "/aaa",
        "description": "Browse the current AAA+ flower section."
      },
      {
        "title": "Premium flower",
        "href": "/premium",
        "description": "Browse the current Premium flower section."
      },
      {
        "title": "Exotic flower",
        "href": "/exotic",
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
        "title": "THC vapes",
        "href": "/items/vapes",
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
      }
    ],
    "cards": [
      {
        "title": "Cannabis 101: Start With the Menu, Not the Noise",
        "href": "/resources/cannabis-101",
        "description": "Cannabis terminology can become complicated long before it becomes useful. This section keeps the starting point simple: understand the product format, read the current listing, and know which details belong to the menu,",
        "category": "Resource category",
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
    "parentRoute": "/resources/flower-guides",
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
    "body": "AA, AAA+, Premium, and Exotic are menu sections that help shoppers narrow a flower selection. They are most useful when treated as starting points rather than automatic verdicts.\n\nQueen Lansdowne Cannabis also includes a Budget section, giving the flower menu five distinct entry points. Each section can organize browsing, but the current listing still decides what is available and what details can be compared.\n\n## AA: a separate value-oriented browse\n\nAA gives shoppers a flower section outside the Budget page while remaining distinct from AAA+, Premium, and Exotic. The section name tells you where you are browsing. It does not replace the need to check the individual item.\n\nRead the listed weight, price, product name, and notes together.\n\n## AAA+: another step in the menu structure\n\nAAA+ is presented as its own flower lane. Shoppers using this section should compare current AAA+ listings with one another before jumping into a different tier.\n\nThis keeps the comparison clean. Like-for-like comparisons are easier to understand than mixing several sections and several sizes at once.\n\n## Premium: a focused section, not a guarantee\n\nPremium is a useful starting point for shoppers who specifically want to review that part of the flower menu. The word itself should not be stretched into unsupported promises about every item.\n\nThe current product listing remains the evidence. Check what is shown now.\n\n## Exotic: the top browsing section in the menu\n\nExotic receives strong attention because the name suggests rarity and distinction. That makes careful reading more important, not less.\n\nA memorable strain name or an attractive photo can draw the eye, but the full listing still matters: product name, type where shown, weight, price, and current notes.\n\n## Where Budget fits\n\nBudget is the value-first flower path. It belongs in the same menu system, but it answers a different first question from Premium or Exotic.\n\nA shopper focused on spending may begin with Budget. A shopper interested in another section may begin elsewhere. Neither approach requires declaring one section universally better.\n\n## A cleaner comparison method\n\n1. Choose the section that matches the reason for browsing.\n2. Compare current items inside that section.\n3. Keep weight and price together.\n4. Read item notes where available.\n5. Move to another section only when a cross-section comparison is genuinely useful.",
    "secondTake": {
      "label": "A Second Take",
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization",
      "body": "Section names organize the flower menu. Current product pages provide the changing information, including listed sizes, prices, and availability."
    },
    "linkRoutes": [
      "/budget",
      "/aa",
      "/aaa",
      "/premium",
      "/exotic"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/flower-guides",
      "/resources/flower-guides/budget-vs-premium-flower"
    ],
    "commercialLinks": [
      {
        "title": "Budget flower",
        "href": "/budget",
        "description": "Browse the current Budget flower section."
      },
      {
        "title": "AA flower",
        "href": "/aa",
        "description": "Browse the current AA flower section."
      },
      {
        "title": "AAA+ flower",
        "href": "/aaa",
        "description": "Browse the current AAA+ flower section."
      },
      {
        "title": "Premium flower",
        "href": "/premium",
        "description": "Browse the current Premium flower section."
      },
      {
        "title": "Exotic flower",
        "href": "/exotic",
        "description": "Browse the current Exotic flower section."
      }
    ],
    "cards": [
      {
        "title": "Flower Guides: Understand the Sections Before Comparing Strains",
        "href": "/resources/flower-guides",
        "description": "Queen Lansdowne Cannabis organizes flower into Budget, AA, AAA+, Premium, and Exotic sections. Those labels help shoppers decide where to begin, but the current listing still carries the details that complete the compari",
        "category": "Resource category",
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
    "parentRoute": "/resources/flower-guides",
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
    "body": "Budget and Premium flower do not need a winner. They serve different browsing priorities.\n\nAt Queen Lansdowne Cannabis, Budget is the obvious place to begin when spending and quantity are leading the decision. Premium is a separate flower section for shoppers who want to review that part of the menu. The useful comparison begins after the section is chosen.\n\n## When Budget makes sense as the first click\n\nBudget is built for value-focused browsing. That does not mean every current Budget listing is identical or that the lowest visible number tells the whole story.\n\nCheck:\n\n- Listed weight\n- Current price\n- Product name\n- Item notes\n- Whether the comparison uses the same quantity\n\nBudget shopping becomes clearer when the entire listing is read instead of isolating one number.\n\n## When Premium becomes the better starting point\n\nPremium is useful when the shopper specifically wants to see the current Premium flower section. It narrows the menu without asking the shopper to inspect every tier first.\n\nThe label does not need exaggerated copy around it. Open the section and compare the products actually listed there.\n\n## Cross-section comparisons\n\nA Budget item and a Premium item may use different weights or pricing structures. Before comparing them, make sure the numbers describe comparable quantities.\n\nA practical comparison might ask:\n\n- Are these the same weight?\n- Are both prices current?\n- Do the item notes add relevant context?\n- Is the shopper comparing value, section preference, or both?\n\n## Queen West value searches\n\nPeople commonly use direct phrases such as cheap weed, affordable weed, Budget flower, and weed deals. Those searches should lead to information that respects the shoppers intent.\n\nThe answer is not generic hype. It is a clear path into the current Budget page, followed by an honest comparison.\n\n## Browse the sections\n\n- Budget: `/budget`\n- Premium: `/premium`",
    "secondTake": {
      "label": "A Second Take",
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization",
      "body": "A well-designed menu lets Budget and Premium keep their own identities. The comparison becomes useful when the reader knows which priority brought them to the page."
    },
    "linkRoutes": [
      "/budget",
      "/premium"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/flower-guides",
      "/resources/flower-guides/aa-vs-aaa-vs-premium-vs-exotic"
    ],
    "commercialLinks": [
      {
        "title": "Budget flower",
        "href": "/budget",
        "description": "Browse the current Budget flower section."
      },
      {
        "title": "Premium flower",
        "href": "/premium",
        "description": "Browse the current Premium flower section."
      }
    ],
    "cards": [
      {
        "title": "Flower Guides: Understand the Sections Before Comparing Strains",
        "href": "/resources/flower-guides",
        "description": "Queen Lansdowne Cannabis organizes flower into Budget, AA, AAA+, Premium, and Exotic sections. Those labels help shoppers decide where to begin, but the current listing still carries the details that complete the compari",
        "category": "Resource category",
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
    "body": "Pre-rolls and flower can contain the same broad type of cannabis product, but they create different shopping experiences.\n\nFlower gives the shopper more control over quantity and preparation. Pre-rolls arrive in a ready-rolled format. The better choice depends on what the shopper wants from the format, not on a universal rule.\n\n## Flower offers more control\n\nLoose flower lets shoppers compare different weights, flower sections, and individual listings. It suits someone who wants to choose the flower first and handle preparation separately.\n\nAt Queen Lansdowne Cannabis, flower also includes Budget, AA, AAA+, Premium, and Exotic sections. That gives the flower shopper more menu paths to explore.\n\n## Pre-rolls prioritize convenience\n\nPre-rolls reduce the preparation step. The important listing details may include:\n\n- Single item or pack\n- Pack count\n- Size\n- Standard or infused format where shown\n- Current price\n- Item notes\n\nA pre-roll page should be read as a pre-roll page, not as a shortcut to the flower menu.\n\n## Do not mix the comparison too early\n\nA shopper who already knows the preferred format can save time by going directly to that category.\n\nA shopper who is undecided should first ask what matters more:\n\n- Control over quantity and preparation\n- A ready-rolled format\n- Pack convenience\n- A specific current product listing\n\nOnce that question is answered, the menu becomes much smaller.\n\n## Current categories\n\n- Pre-rolls: `/items/prerolls`\n- Flower sections: `/budget`, `/aa`, `/aaa`, `/premium`, `/exotic`",
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
      "/budget",
      "/aa",
      "/aaa",
      "/premium",
      "/exotic"
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
        "href": "/budget",
        "description": "Browse the current Budget flower section."
      },
      {
        "title": "AA flower",
        "href": "/aa",
        "description": "Browse the current AA flower section."
      },
      {
        "title": "AAA+ flower",
        "href": "/aaa",
        "description": "Browse the current AAA+ flower section."
      },
      {
        "title": "Premium flower",
        "href": "/premium",
        "description": "Browse the current Premium flower section."
      },
      {
        "title": "Exotic flower",
        "href": "/exotic",
        "description": "Browse the current Exotic flower section."
      }
    ],
    "cards": [
      {
        "title": "Pre-Roll Guides",
        "href": "/resources/pre-roll-guides",
        "description": "Pre-rolls have a straightforward appeal: the flower is already rolled. The menu comparison still deserves attention. Pack count, size, product notes, and whether an item is standard or infused can change what the listing",
        "category": "Resource category",
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
    "metaDescription": "Edible cannabis may take 30 minutes to 2 hours to be felt and up to 4 hours for full effects. Read the package and avoid consuming more too quickly.",
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
    "excerpt": "Health Canada advises that edible cannabis effects may be felt within 30 minutes to 2 hours and can take up to 4 hours to reach their full effect. Consuming more before the first serving has taken full effect increases t",
    "body": "Health Canada advises that edible cannabis effects may be felt within 30 minutes to 2 hours and can take up to 4 hours to reach their full effect. Consuming more before the first serving has taken full effect increases the risk of overconsumption.\n\n## Why edible timing is different\n\nEdible cannabis is processed differently from inhaled cannabis. That delayed timeline is the reason an edible should not be judged by the first few minutes after consumption.\n\nResponses can vary from person to person. Food, individual metabolism, product strength, and other factors can affect timing and intensity.\n\n## Read the package, not only the menu title\n\nThe menu helps shoppers identify a current edible product. The package carries the information needed before consumption.\n\nCheck:\n\n- Total THC in the package\n- THC per serving where shown\n- Number of servings\n- Package directions\n- Health warnings\n- Product format\n\nDo not assume that two gummies, chocolates, beverages, or baked products contain the same amount simply because they look similar.\n\n## Start low and go slow\n\nHealth Canadas public guidance recommends starting with a low amount of THC and waiting to feel the effects before taking more. The delayed onset of edible cannabis is one of the main reasons patience matters.\n\nThis resource is general information and does not replace package directions or advice from a qualified health professional.\n\n## Current edible menu\n\nUse `/items/edibles` to review currently listed edible products at Queen Lansdowne Cannabis.",
    "secondTake": {
      "label": "A Second Take",
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization",
      "body": "The most important edible detail is not the flavour name. It is the amount shown on the package and the patience to let the first serving take effect."
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
        "description": "Edible cannabis works on a different timeline from inhaled products, which makes careful label reading especially important. This section focuses on product type, package information, THC content where shown, serving inf",
        "category": "Resource category",
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
    "body": "THC vapes and flower belong to different menu categories because the product format changes the shopping questions.\n\nFlower is a plant product sold in listed weights and organized into flower sections. THC vapes are extract-based products that may be listed as cartridges, disposables, or other vape formats.\n\n## Flower questions\n\nA flower comparison commonly includes:\n\n- Flower section\n- Product name\n- Weight\n- Current price\n- Type or item notes where shown\n\nThe shopper may also consider how the flower will be prepared after purchase.\n\n## THC vape questions\n\nA THC vape comparison often begins with format:\n\n- Cartridge or disposable\n- Device compatibility\n- Listed volume or amount\n- Product notes\n- Current price\n- Whether a battery is required\n\nCompatibility is especially important when the item is not a self-contained disposable product.\n\n## Why the categories should stay separate\n\nComparing a vape price directly with a flower price usually does not answer much. The units, formats, and use requirements are different.\n\nThe better approach is:\n\n1. Choose the format.\n2. Open the matching category.\n3. Compare current items within that category.\n4. Ask a compatibility question when the listing does not make it clear.\n\n## Current categories\n\n- THC vapes: `/items/vapes`\n- Disposable THC vapes: `/items/vape-disposables`\n- Flower: `/budget`, `/aa`, `/aaa`, `/premium`, `/exotic`",
    "secondTake": {
      "label": "A Second Take",
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization",
      "body": "THC vape and flower availability can change. Check the current menu before planning a visit around one product or device format."
    },
    "linkRoutes": [
      "/items/vapes",
      "/items/vape-disposables",
      "/budget",
      "/aa",
      "/aaa",
      "/premium",
      "/exotic"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/vape-guides"
    ],
    "commercialLinks": [
      {
        "title": "THC vapes",
        "href": "/items/vapes",
        "description": "Browse current THC vape listings."
      },
      {
        "title": "Disposable vapes",
        "href": "/items/vape-disposables",
        "description": "Browse current disposable vape listings."
      },
      {
        "title": "Budget flower",
        "href": "/budget",
        "description": "Browse the current Budget flower section."
      },
      {
        "title": "AA flower",
        "href": "/aa",
        "description": "Browse the current AA flower section."
      },
      {
        "title": "AAA+ flower",
        "href": "/aaa",
        "description": "Browse the current AAA+ flower section."
      },
      {
        "title": "Premium flower",
        "href": "/premium",
        "description": "Browse the current Premium flower section."
      },
      {
        "title": "Exotic flower",
        "href": "/exotic",
        "description": "Browse the current Exotic flower section."
      }
    ],
    "cards": [
      {
        "title": "THC Vape Guides",
        "href": "/resources/vape-guides",
        "description": "THC vapes have their own menu logic. The first question is usually the format: cartridge, disposable, or another listed type. Compatibility may matter for cartridge products, while disposable products are sold as self-co",
        "category": "Resource category",
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
    "body": "A flower price only makes sense beside the amount attached to it.\n\nTwo listings can show different prices because they represent different weights, different sections, or different current offers. The useful comparison begins by reading the full line.\n\n## Keep price and weight together\n\nBefore deciding which listing offers stronger value, confirm:\n\n- The weight of each listing\n- The current posted price\n- Whether both listings use the same quantity\n- The flower section\n- Any current item notes\n\nComparing a smaller quantity with a larger quantity as if they were equal creates a false result.\n\n## Use price per gram carefully\n\nPrice per gram can make different quantities easier to compare. It is a calculation tool, not the only measure of value.\n\nA clear listing may already show a per-gram figure. When it does not, divide the total price by the listed number of grams.\n\nEven then, current product details still matter. The lowest calculated number does not automatically answer every shoppers priorities.\n\n## Compare within a section first\n\nBudget listings are easiest to compare against other current Budget listings. The same principle applies to AA, AAA+, Premium, and Exotic.\n\nCross-section comparisons can still be useful, but the shopper should understand that the section itself is part of the browsing decision.\n\n## Search language can stay direct\n\nCheap weed, affordable weed, Budget flower, and weed deals are normal shopper phrases. A page targeting those terms should answer the value question directly instead of hiding behind vague language.\n\nThe practical answer is current price, current weight, and the correct category page.\n\n## Browse current flower sections\n\n- `/budget`\n- `/aa`\n- `/aaa`\n- `/premium`\n- `/exotic`",
    "secondTake": {
      "label": "A Second Take",
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization",
      "body": "Price comparison is a layout problem as much as a math problem. When weight, section, and current price are visible together, the decision becomes much easier to read."
    },
    "linkRoutes": [
      "/budget",
      "/aa",
      "/aaa",
      "/premium",
      "/exotic"
    ],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/value-guides"
    ],
    "commercialLinks": [
      {
        "title": "Budget flower",
        "href": "/budget",
        "description": "Browse the current Budget flower section."
      },
      {
        "title": "AA flower",
        "href": "/aa",
        "description": "Browse the current AA flower section."
      },
      {
        "title": "AAA+ flower",
        "href": "/aaa",
        "description": "Browse the current AAA+ flower section."
      },
      {
        "title": "Premium flower",
        "href": "/premium",
        "description": "Browse the current Premium flower section."
      },
      {
        "title": "Exotic flower",
        "href": "/exotic",
        "description": "Browse the current Exotic flower section."
      }
    ],
    "cards": [
      {
        "title": "Value Guides: Compare the Full Listing, Not One Number",
        "href": "/resources/value-guides",
        "description": "Value shopping is not simply finding the lowest number on the page. A useful comparison includes the listed weight, product section, current price, and item details. A lower price attached to a different size is not the ",
        "category": "Resource category",
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
    "body": "Queen Lansdowne Cannabis is located at 1472 Queen St W, near Lansdowne in Toronto. For shoppers searching around Queen West or Parkdale, the most useful first step is the store page, followed by the category that matches the product question.\n\n## Start with the exact store\n\nBroad searches can return several similarly named stores and listings. Use the Queen Lansdowne Cannabis store page to confirm the address, current hours, phone number, and visit information.\n\nStore page: `/weed-dispensary-toronto`\n\n## Queen West and nearby area context\n\nQueen Street West and Lansdowne place the store near Parkdale and the west side neighbourhoods that many local shoppers already recognize, including Little Portugal, Roncesvalles, Brockton Village, and Dundas West.\n\nThe neighbourhood names should help orientation. They should not be used as a pasted list in every sentence.\n\n## Move from location to category\n\nAfter confirming the store, use the menu category that matches the visit:\n\n- Flower sections\n- Pre-rolls\n- Edibles\n- THC vapes\n- Concentrates\n- Accessories\n- Native smokes\n- Specialty products\n\nThis keeps local intent connected to a practical next step.\n\n## Check current details before travelling for one item\n\nProduct availability can change. Store information can also change over time. When one item, price, or hour determines the visit, verify it on the current page or contact the store.\n\n## Local links\n\n- Store page: `/weed-dispensary-toronto`\n- FAQ: `/faq`\n- Resource Centre: `/resources/`\n- Pre-rolls: `/items/prerolls`\n- Edibles: `/items/edibles`\n- THC vapes: `/items/vapes`",
    "secondTake": {
      "label": "A Second Take",
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization",
      "body": "A local guide works best when it removes one layer of uncertainty: the right store, the right category, and the current page."
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
        "title": "THC vapes",
        "href": "/items/vapes",
        "description": "Browse current THC vape listings."
      }
    ],
    "cards": [
      {
        "title": "Queen West and Lansdowne Local Guides",
        "href": "/resources/local-guides",
        "description": "Queen Street West is busy enough without turning a store visit into a scavenger hunt. These local guides connect Queen Lansdowne Cannabis to the neighbourhood in a useful way: the address, the store page, the correct men",
        "category": "Resource category",
        "author": "Quinn West",
        "updated": "2026-07-11"
      },
      {
        "title": "Queen Lansdowne Cannabis Resource Centre",
        "href": "/resources",
        "description": "The Queen Lansdowne Cannabis Resource Centre brings our most useful guides into one organized place. Instead of sorting through a dated stream of posts, adults 19+ can begin with the topic that matches their question: fl",
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
    "metaDescription": "An informational guide to checking current native cigarette selection, packs, cartons, varieties, and Queen West store details at Queen Lansdowne Cannabis.",
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
    "excerpt": "Adults 19+ looking for native cigarettes in Toronto usually need current answers: which brands or varieties are listed, whether the item is sold as a pack or carton, the current price, and whether the selection is availa",
    "body": "Adults 19+ looking for native cigarettes in Toronto usually need current answers: which brands or varieties are listed, whether the item is sold as a pack or carton, the current price, and whether the selection is available at this location.\n\nQueen Lansdowne Cannabis has an existing native-cigarette information page, but current selection should still be confirmed before visiting for one specific product.\n\n## Brand and variety can change\n\nA long brand list can become inaccurate quickly. A better resource explains which details to check:\n\n- Brand\n- Variety\n- Pack or carton\n- Quantity\n- Current price\n- Current availability\n- Store location\n\nWhen a specific brand or variety matters, confirm it through the current store information.\n\n## Native smokes and native cigarettes\n\nBoth phrases are commonly used by shoppers. The Resource Centre uses Native Smokes as the category name while naturally including native cigarettes in page titles and descriptions.\n\nThat allows the section to match real search language without forcing the same phrase into every paragraph.\n\n## Queen West location\n\nQueen Lansdowne Cannabis is located at 1472 Queen St W near Lansdowne. Use the main store page to confirm current hours and contact details.\n\n## Tobacco health note\n\nSmoking and nicotine use carry serious health risks. This guide provides store and menu-navigation information only. It does not make safety or health claims about tobacco products.\n\n## Current links\n\n- Native cigarette information: `/info/native-cigarettes-york`\n- Store page: `/weed-dispensary-toronto`\n- Resource hub: `/resources/native-smokes/`",
    "secondTake": {
      "label": "A Second Take",
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization",
      "body": "Current brand, variety, package, and price information should be confirmed before visiting for a specific cigarette product."
    },
    "linkRoutes": [
      "/info/native-cigarettes-york",
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
        "href": "/info/native-cigarettes-york",
        "description": "Read the current native-cigarette information page."
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
        "description": "This section helps adults 19+ understand how native cigarettes may be organized on the Queen Lansdowne Cannabis menu and what details to check before visiting. Selection can rotate, so brand, variety, pack, carton, and p",
        "category": "Resource category",
        "author": "Quinn West",
        "updated": "2026-07-11"
      },
      {
        "title": "Cigarette Packs vs Cartons: What the Listing Means",
        "href": "/resources/native-smokes/packs-vs-cartons",
        "description": "A pack and a carton are different sales units. That sounds obvious, but menu comparisons become confusing when the package type is not read beside the current price.",
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
    "metaDescription": "Understand how cigarette packs and cartons differ as listing units, and why quantity, variety, current price, and availability should be checked together.",
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
    "excerpt": "A pack and a carton are different sales units. That sounds obvious, but menu comparisons become confusing when the package type is not read beside the current price.",
    "body": "A pack and a carton are different sales units. That sounds obvious, but menu comparisons become confusing when the package type is not read beside the current price.\n\nThe purpose of this guide is not to recommend one format. It is to make the listing easier to understand.\n\n## Pack listings\n\nA pack listing refers to an individual retail pack. The listing should be checked for:\n\n- Brand\n- Variety\n- Pack size where shown\n- Current price\n- Current availability\n\n## Carton listings\n\nA carton contains multiple packs. The exact number and packaging details should be confirmed from the current listing or store information rather than assumed.\n\nCarton price and pack price should not be compared as if they describe the same quantity.\n\n## Compare the same unit\n\nWhen comparing current products:\n\n1. Confirm pack or carton.\n2. Confirm quantity.\n3. Confirm brand and variety.\n4. Read the current posted price.\n5. Ask the store when the listing does not show enough detail.\n\n## Why current information matters\n\nNative cigarette selection can rotate. A static resource should explain the terminology without locking a brand or price into the page.\n\n## Tobacco health note\n\nSmoking and nicotine use carry serious health risks. This page is informational and intended for adults 19+.",
    "secondTake": {
      "label": "A Second Take",
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization",
      "body": "Most confusion disappears once the unit is clear. Pack and carton are not two prices for the same amount."
    },
    "linkRoutes": [],
    "childRoutes": [],
    "relatedRoutes": [
      "/resources/native-smokes",
      "/resources/native-smokes/native-cigarettes-guide"
    ],
    "commercialLinks": [],
    "cards": [
      {
        "title": "Native Smokes and Cigarette Guides",
        "href": "/resources/native-smokes",
        "description": "This section helps adults 19+ understand how native cigarettes may be organized on the Queen Lansdowne Cannabis menu and what details to check before visiting. Selection can rotate, so brand, variety, pack, carton, and p",
        "category": "Resource category",
        "author": "Quinn West",
        "updated": "2026-07-11"
      },
      {
        "title": "Native Cigarettes in Toronto: What to Check Before Visiting",
        "href": "/resources/native-smokes/native-cigarettes-guide",
        "description": "Adults 19+ looking for native cigarettes in Toronto usually need current answers: which brands or varieties are listed, whether the item is sold as a pack or carton, the current price, and whether the selection is availa",
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
    "excerpt": "Magic mushroom and specialty-product menus may use several formats. The format tells the shopper how the product is packaged; it does not answer every question about the product.",
    "body": "Magic mushroom and specialty-product menus may use several formats. The format tells the shopper how the product is packaged; it does not answer every question about the product.\n\nQueen Lansdowne Cannabis currently uses a Magic Stuff category for specialty items. The live page should be checked because the selection can change.\n\n## Dried products\n\nDried mushroom listings may identify the product by name, weight, and package information. Do not assume the listed weight or variety from a photo alone.\n\n## Chocolates\n\nChocolate products may be sold as bars or divided portions. Read the package information carefully and confirm what any listed number refers to.\n\n## Gummies\n\nGummy products may be listed by package amount, count, or another strength notation. The menu title is not a substitute for the full label.\n\n## Capsules\n\nCapsule products may organize the package by capsule count and listed amount. Current package information should determine the comparison.\n\n## Other specialty items\n\nMenus may include products that do not fit neatly into one standard format. When the format or label is unclear, use the current listing and ask a specific question rather than guessing.\n\n## Important boundary\n\nThis guide explains menu formats only. It does not provide dosing, consumption, therapeutic, medical, or legal advice.",
    "secondTake": {
      "label": "A Second Take",
      "name": "Queen Lansdowne Cannabis Team",
      "handle": "@QueenLansdowneTeam",
      "role": "Official Store Team",
      "type": "Organization",
      "body": "Specialty-product availability can vary. Use the current Magic Stuff category before planning a visit around a specific item."
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
        "description": "Specialty-product menus can include different formats, package sizes, and label conventions. This section explains how to read those listings without making assumptions based on a product name alone.",
        "category": "Resource category",
        "author": "Lana Queen",
        "updated": "2026-07-11"
      },
      {
        "title": "How to Read a Magic Mushroom Menu Without Guessing",
        "href": "/resources/magic-mushroom-guides/how-to-read-a-magic-mushroom-menu",
        "description": "A specialty-product listing should be read in layers: format, package, listed amount, product notes, and current availability.",
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
    "h1": "How to Read a Magic Mushroom Menu Without Guessing",
    "seoTitle": "How to Read a Magic Mushroom Menu | Queen Lansdowne",
    "metaDescription": "Read magic mushroom menu listings by checking format, package amount, listed strength, serving information, product notes, and current availability.",
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
    "excerpt": "A specialty-product listing should be read in layers: format, package, listed amount, product notes, and current availability.",
    "body": "A specialty-product listing should be read in layers: format, package, listed amount, product notes, and current availability.\n\nThe biggest mistake is assuming that one large number in a product title means the same thing across every chocolate, gummy, capsule, or dried product.\n\n## Identify the format first\n\nStart by confirming what the product is:\n\n- Dried product\n- Chocolate\n- Gummy\n- Capsule\n- Beverage\n- Another specialty format\n\nDifferent formats use different packaging and label conventions.\n\n## Find out what the number describes\n\nA number may refer to:\n\n- Total package amount\n- A listed ingredient amount\n- Amount per piece\n- Number of pieces\n- Product weight\n\nThe page or package should clarify which one applies. When it does not, do not invent the answer.\n\n## Read serving and package information\n\nWhere serving information is shown, read it together with the total package information. A front-facing title may not explain how the package is divided.\n\n## Check current availability\n\nSpecialty-product listings can rotate. Use the live category at `/items/magic` for current products.\n\n## Keep the question specific\n\nUseful questions include:\n\n- Is the listed amount for the whole package or one piece?\n- How many pieces are in the package?\n- What format is this product?\n- Is this item currently listed at Queen Lansdowne Cannabis?\n\n## Important boundary\n\nThis resource is menu-navigation information for adults 19+. It does not provide dosing, consumption, medical, therapeutic, or legal advice.",
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
        "description": "Specialty-product menus can include different formats, package sizes, and label conventions. This section explains how to read those listings without making assumptions based on a product name alone.",
        "category": "Resource category",
        "author": "Lana Queen",
        "updated": "2026-07-11"
      },
      {
        "title": "Magic Mushroom Formats Explained at the Menu Level",
        "href": "/resources/magic-mushroom-guides/magic-mushroom-formats-explained",
        "description": "Magic mushroom and specialty-product menus may use several formats. The format tells the shopper how the product is packaged; it does not answer every question about the product.",
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
    "body": "Queen Lansdowne Cannabis has launched a new Resource Centre for adults 19+ who want clearer information before browsing the current menu or planning a visit.\n\nThe new section organizes practical guides by topic instead of placing every article in one dated feed.\n\n## What the Resource Centre covers\n\nThe first release includes:\n\n- Cannabis 101\n- Flower Guides\n- Pre-Roll Guides\n- Edibles Guides\n- THC Vape Guides\n- Value Guides\n- Queen West Local Guides\n- Native Smokes\n- Magic Mushroom and Specialty-Product Guides\n- Official Store Updates\n\n## Why we changed the structure\n\nSome questions stay useful for a long time. A guide to flower sections, edible timing, or menu terminology should remain easy to find instead of disappearing beneath newer posts.\n\nThe Resource Centre keeps permanent guides organized by subject while current product information remains on the live menu.\n\n## Where to begin\n\nVisit `/resources/` and choose the category that matches your question.\n\nUse the store page for current location, hours, contact information, and visit planning. Use the live menu for current products, prices, weights, and availability.\n\n## What happens next\n\nNew resources will be added when there is a real customer question, a useful search opportunity, a confirmed store change, or a topic that needs a complete answer.\n\nThe Resource Centre will not be filled with daily posts simply to keep a schedule.",
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
        "category": "Resource category",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      },
      {
        "title": "Queen Lansdowne Cannabis Resource Centre",
        "href": "/resources",
        "description": "The Queen Lansdowne Cannabis Resource Centre brings our most useful guides into one organized place. Instead of sorting through a dated stream of posts, adults 19+ can begin with the topic that matches their question: fl",
        "category": "Resource Centre landing page",
        "author": "Queen Lansdowne Cannabis Team",
        "updated": "2026-07-11"
      }
    ]
  }
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
