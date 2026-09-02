import type { NextConfig } from "next";
import { SEO_ROUTE_REDIRECTS } from "./app/lib/seoRouteAliases";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev" },
      { protocol: "https", hostname: "queenlansdownecannabis.ca" },
      { protocol: "https", hostname: "kennedyloudcannabis.com" },
      { protocol: "https", hostname: "stclaircannabis.com" },
      {
        protocol: "https",
        hostname: "athena-cannabis-images.vercel.app",
        pathname: "/products/delivery/v1/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/exotic", destination: "/exotic-weed", permanent: true },
      { source: "/premium", destination: "/premium-weed", permanent: true },
      { source: "/aaa", destination: "/aaa-weed", permanent: true },
      { source: "/aa", destination: "/aa-weed", permanent: true },
      { source: "/budget", destination: "/budget-weed", permanent: true },
      { source: "/delivery", destination: "/weed-delivery-toronto", permanent: true },
      { source: "/resources/flower-guides", destination: "/resources/weed-flower-guide", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/:path*", destination: "/", permanent: true },
      { source: "/cannabis-flower-strains/", destination: "/flower", permanent: true },
      { source: "/product-category/vape-pens", destination: "/items/vapes", permanent: true },
      { source: "/product-category/accessories", destination: "/items/add-ons", permanent: true },
      { source: "/product-category/edibles", destination: "/items/edibles", permanent: true },
      { source: "/edibles", destination: "/items/edibles", permanent: true },
      { source: "/vapes", destination: "/items/vapes", permanent: true },
      { source: "/vape-disposables", destination: "/items/vape-disposables", permanent: true },
      { source: "/concentrates", destination: "/items/concentrates", permanent: true },
      { source: "/prerolls", destination: "/items/prerolls", permanent: true },
      { source: "/add-ons", destination: "/items/add-ons", permanent: true },
      { source: "/cigarettes", destination: "/items/cigarettes", permanent: true },
      { source: "/magic", destination: "/items/magic", permanent: true },
      ...SEO_ROUTE_REDIRECTS.map((redirect) => ({
        ...redirect,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
