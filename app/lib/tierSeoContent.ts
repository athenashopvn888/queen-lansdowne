export interface TierSeoData {
  seoTitle: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

function tierContent(name: string, price: string): TierSeoData {
  return {
    seoTitle: `${name} Cannabis Flower Toronto | Queen Lansdowne Cannabis`,
    seoIntro: `Browse the ${name} flower tier at Queen Lansdowne Cannabis and compare current product names, weights, and posted prices.`,
    sections: [
      { heading: `${name} Flower Menu`, body: `${name} is one of the flower sections used to organize the menu. Current listings can change, so open the tier page before visiting.` },
      { heading: "Compare Current Details", body: `Listed pricing starts at ${price}. Compare the same weight and package format when reviewing options.` },
    ],
    faqs: [
      { q: `What is the ${name} tier?`, a: `${name} is a flower section that helps shoppers compare current listings and prices.` },
      { q: `Where can I see current ${name} flower?`, a: `Use the current ${name} tier page before visiting.` },
    ],
  };
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: tierContent("Exotic", "$20/g"),
  PREMIUM: tierContent("Premium", "$15/g"),
  "AAA+": tierContent("AAA+", "$10/g"),
  AA: tierContent("AA", "$5/g"),
  BUDGET: tierContent("Budget", "$3/g"),
};
