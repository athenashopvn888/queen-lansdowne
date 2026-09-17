import { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { GBPLandingPage } from "@/app/components/GBPLandingPage";
import { gbpLocation, STORE_ORIGIN } from "@/app/lib/gbp-location";

export const metadata: Metadata = {
  title: { absolute: gbpLocation.seoTitle },
  description: gbpLocation.metaDescription,
  alternates: {
    canonical: STORE_ORIGIN,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <GBPLandingPage />
      <Footer />
    </>
  );
}
