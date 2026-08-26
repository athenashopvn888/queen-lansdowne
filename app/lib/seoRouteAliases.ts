export const SEO_ROUTE_REDIRECTS = [
  { source: "/info/york-weed-dispensary", destination: "/info/toronto-weed-dispensary" },
  { source: "/info/cheap-weed-york", destination: "/info/cheap-weed-toronto" },
  { source: "/info/native-cigarettes-york", destination: "/info/native-cigarettes-toronto" },
  { source: "/info/dispensary-near-me-york", destination: "/info/dispensary-near-me-toronto" },
  { source: "/info/weed-store-near-mississauga", destination: "/info/weed-store-near-toronto" },
] as const;

export const LEGACY_SEO_SLUGS = new Set(
  SEO_ROUTE_REDIRECTS.map(({ source }) => source.replace("/info/", "")),
);
