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
