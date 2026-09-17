import type { Metadata } from "next";
import HomePage from "./HomePage";
import { JsonLd } from "./lib/jsonLd";
import { STORE_ORIGIN, faqPageJsonLd, HOME_FAQS } from "./lib/gbp-location";

export const metadata: Metadata = {
  title: {
    absolute: "Queen Lansdowne Cannabis | Queen West / Parkdale Dispensary",
  },
  description:
    "Walk-in cannabis at 1472 Queen St W on Queen West at the Parkdale edge. Open 24 hours daily. Adults 19+. Phone +1 (437) 293-8580.",
  alternates: {
    canonical: STORE_ORIGIN,
  },
  openGraph: {
    title: "Queen Lansdowne Cannabis | Queen West / Parkdale Dispensary",
    description:
      "Walk-in cannabis at 1472 Queen St W on Queen West at the Parkdale edge. Open 24 hours daily. Adults 19+.",
    url: STORE_ORIGIN,
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(HOME_FAQS, `${STORE_ORIGIN}/`)} />
      <HomePage />
    </>
  );
}
