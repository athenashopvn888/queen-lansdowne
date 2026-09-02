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
    seoTitle: "Exotic Weed & Cannabis Flower in Toronto | Queen Lansdowne Cannabis",
    metaDescription: "Explore the Exotic weed and cannabis flower tier at Queen Lansdowne Cannabis in Toronto, with a dedicated page separate from the broader Weed store guide.",
    h1: "Exotic Weed & Cannabis Flower in Toronto",
    intro: "Queen Lansdowne Cannabis gives Exotic its own focused flower page so shoppers can browse this tier without mixing it into the rest of the flower structure. The broader Weed Dispensary in Toronto page remains the main destination for general Weed information.",
    sections: [
      { heading: "Explore the Exotic Flower Tier", body: "Exotic is kept separate from Premium, AAA+, AA and Budget within the Queen Lansdowne flower structure. This page stays specific to that tier rather than repeating the broader store-level Weed topic." },
      { heading: "Where Exotic Fits in the Flower Menu", body: "The tier pages provide distinct paths through the existing flower categories. Exotic is one of those dedicated paths, while broader Weed discovery stays with the main Weed page." },
    ],
    faqs: [
      { q: "What is the Exotic tier at Queen Lansdowne Cannabis?", a: "Exotic is one of Queen Lansdowne Cannabis’s dedicated cannabis flower tiers." },
      { q: "Is this the main Queen Lansdowne Weed page?", a: "No. This page is specific to the Exotic tier; the Weed Dispensary in Toronto page remains the broad Weed owner." },
    ],
    relatedLinks: [
      { label: "Premium Weed & Flower", href: "/premium" }, { label: "AAA+ Weed & Flower", href: "/aaa" }, { label: "AA Weed & Flower", href: "/aa" }, { label: "Budget Weed & Flower", href: "/budget" }, { label: "Explore Queen Lansdowne Weed in Toronto", href: "/weed-dispensary-toronto/" },
    ],
  },
  PREMIUM: {
    seoTitle: "Premium Weed & Cannabis Flower in Toronto | Queen Lansdowne Cannabis",
    metaDescription: "Explore the Premium weed and cannabis flower tier at Queen Lansdowne Cannabis in Toronto as a dedicated part of its flower category structure.",
    h1: "Premium Weed & Cannabis Flower in Toronto",
    intro: "The Premium page gives Queen Lansdowne Cannabis a dedicated place for Premium weed and cannabis flower. It serves a narrower category role than the site’s broad Weed owner and remains focused on this single tier.",
    sections: [
      { heading: "Browse the Premium Flower Tier", body: "Premium is organized separately from Exotic, AAA+, AA and Budget so this category has a clear place within the existing flower structure." },
      { heading: "Premium Within Queen Lansdowne’s Tier Structure", body: "Each tier page supports a specific flower category rather than duplicating the general Weed page. Premium remains one focused route within that system." },
    ],
    faqs: [
      { q: "What is the Premium tier at Queen Lansdowne Cannabis?", a: "Premium is one of Queen Lansdowne Cannabis’s dedicated cannabis flower tiers." },
      { q: "Does the Premium page replace the broader Weed page?", a: "No. It is a tier-specific page, while the Weed Dispensary in Toronto page remains the broad Weed destination." },
    ],
    relatedLinks: [
      { label: "Exotic Weed & Flower", href: "/exotic" }, { label: "AAA+ Weed & Flower", href: "/aaa" }, { label: "AA Weed & Flower", href: "/aa" }, { label: "Budget Weed & Flower", href: "/budget" }, { label: "Queen Lansdowne Weed Dispensary in Toronto", href: "/weed-dispensary-toronto/" },
    ],
  },
  "AAA+": {
    seoTitle: "AAA+ Weed & Cannabis Flower in Toronto | Queen Lansdowne Cannabis",
    metaDescription: "Explore the AAA+ weed and cannabis flower tier at Queen Lansdowne Cannabis in Toronto through its dedicated flower category page.",
    h1: "AAA+ Weed & Cannabis Flower in Toronto",
    intro: "Queen Lansdowne Cannabis separates AAA+ into its own flower page so this tier can be explored independently from the rest of the category structure. The page remains narrow and subordinate to the broader Weed owner.",
    sections: [
      { heading: "Explore the AAA+ Flower Category", body: "AAA+ sits alongside Exotic, Premium, AA and Budget as a distinct flower tier. The page keeps that role clear without expanding into general store-level Weed content." },
      { heading: "AAA+ in Queen Lansdowne’s Flower Structure", body: "The existing tier routes divide flower into focused category pages. AAA+ is one part of that structure rather than a replacement for the broad Weed page." },
    ],
    faqs: [
      { q: "What is AAA+ on the Queen Lansdowne site?", a: "AAA+ is the name of one of Queen Lansdowne Cannabis’s dedicated cannabis flower tiers." },
      { q: "Why does AAA+ have a separate page?", a: "The separate page keeps AAA+-specific flower browsing distinct from the other tiers and from the broader Weed owner." },
    ],
    relatedLinks: [
      { label: "Exotic Weed & Flower", href: "/exotic" }, { label: "Premium Weed & Flower", href: "/premium" }, { label: "AA Weed & Flower", href: "/aa" }, { label: "Budget Weed & Flower", href: "/budget" }, { label: "See the broader Toronto Weed guide", href: "/weed-dispensary-toronto/" },
    ],
  },
  AA: {
    seoTitle: "AA Weed & Cannabis Flower in Toronto | Queen Lansdowne Cannabis",
    metaDescription: "Explore the AA weed and cannabis flower tier at Queen Lansdowne Cannabis in Toronto as a focused part of its existing flower structure.",
    h1: "AA Weed & Cannabis Flower in Toronto",
    intro: "The AA page gives Queen Lansdowne Cannabis a focused destination for the AA flower tier. It stays separate from the broader Weed owner and from the other existing flower tiers.",
    sections: [
      { heading: "A Dedicated AA Flower Tier", body: "AA is organized independently from Exotic, Premium, AAA+ and Budget so this category has a distinct role within the Queen Lansdowne flower structure." },
      { heading: "How AA Fits the Tier System", body: "The tier pages separate different parts of the flower menu into their own category paths. AA remains one narrow destination inside that larger architecture." },
    ],
    faqs: [
      { q: "What is the AA tier at Queen Lansdowne Cannabis?", a: "AA is one of Queen Lansdowne Cannabis’s dedicated cannabis flower tiers." },
      { q: "Is the AA page intended to be the broad Weed page?", a: "No. The AA page serves tier-specific intent, while the Weed Dispensary in Toronto page remains the broad Weed owner." },
    ],
    relatedLinks: [
      { label: "Exotic Weed & Flower", href: "/exotic" }, { label: "Premium Weed & Flower", href: "/premium" }, { label: "AAA+ Weed & Flower", href: "/aaa" }, { label: "Budget Weed & Flower", href: "/budget" }, { label: "Explore Weed at Queen Lansdowne Cannabis", href: "/weed-dispensary-toronto/" },
    ],
  },
  BUDGET: {
    seoTitle: "Budget Weed & Cannabis Flower in Toronto | Queen Lansdowne Cannabis",
    metaDescription: "Explore the Budget cannabis flower tier at Queen Lansdowne Cannabis in Toronto without implying current prices, promotions or availability.",
    h1: "Budget Weed & Cannabis Flower in Toronto",
    intro: "Queen Lansdowne Cannabis uses Budget as a dedicated flower tier within its existing category structure. The page identifies that tier without making claims about current prices, promotions, stock or availability.",
    sections: [
      { heading: "Explore the Budget Flower Tier", body: "Budget is separated from Exotic, Premium, AAA+ and AA so it has its own role within the Queen Lansdowne flower structure." },
      { heading: "Budget Within the Flower Category System", body: "The Budget page is one of several focused tier destinations. Broader Weed intent remains with the established Weed Dispensary in Toronto page." },
    ],
    faqs: [
      { q: "What is the Budget tier at Queen Lansdowne Cannabis?", a: "Budget is the name of one of Queen Lansdowne Cannabis’s dedicated cannabis flower tiers." },
      { q: "Does the Budget label confirm a current price or deal?", a: "No. The tier name identifies the category and does not establish a current price, promotion or availability claim." },
    ],
    relatedLinks: [
      { label: "Exotic Weed & Flower", href: "/exotic" }, { label: "Premium Weed & Flower", href: "/premium" }, { label: "AAA+ Weed & Flower", href: "/aaa" }, { label: "AA Weed & Flower", href: "/aa" }, { label: "Queen Lansdowne Weed Dispensary in Toronto", href: "/weed-dispensary-toronto/" },
    ],
  },
};
