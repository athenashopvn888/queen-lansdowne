import { HOME_TITLE } from "./lib/homeDelivery";
import type { Metadata } from "next";
import HomePage from "./HomePage";
import { JsonLd } from "./lib/jsonLd";
import { STORE_ORIGIN, faqPageJsonLd, HOME_FAQS } from "./lib/gbp-location";

export const metadata: Metadata = {
  title: { absolute: HOME_TITLE },
  description:
    "Walk-in cannabis at 1472 Queen St W on Queen West at the Parkdale edge. Open 24 hours daily. Adults 19+. Phone +1 (437) 293-8580.",
  alternates: {
    canonical: STORE_ORIGIN,
  },
  openGraph: {
    title: HOME_TITLE,
    description:
      "Walk-in cannabis at 1472 Queen St W on Queen West at the Parkdale edge. Open 24 hours daily. Adults 19+.",
    url: STORE_ORIGIN,
  },

  twitter: { card: "summary_large_image", title: HOME_TITLE },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(HOME_FAQS, `${STORE_ORIGIN}/`)} />
      <HomePage />
    </>
  );
}
