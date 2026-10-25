import CigaretteStateProvider from "./components/CigaretteStateProvider";
import FleetContentProvider from "./components/fleet/FleetContentProvider";
import FullNameNap from "./components/FullNameNap";
import MobileBottomBar from "./components/MobileBottomBar";
import PinnedNavClearance from "./components/PinnedNavClearance";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { getCigaretteSnapshot, toPublicCigaretteState } from "./lib/cigaretteFeed";
import { getFleetContent } from "./lib/fleetContent";
import { cannabisStoreJsonLd, gbpLocation, jsonLdScript } from "./lib/gbp-location";
import { SHOW_CIGARETTES } from "./lib/showCigarettes";

// Sheet content is read with the page. A missing manifest keeps this coded metadata.
export const revalidate = 60;

const ROOT_METADATA: Metadata = {
  metadataBase: new URL("https://www.queenlansdownecannabis.ca"),
  title: {
    default: "Queen Lansdowne Cannabis | Queen West / Parkdale Dispensary",
    // Child titles that already include the brand must use resolveDocumentTitle()
    // so this template does not append "Queen Lansdowne Cannabis" a second time.
    template: "%s | Queen Lansdowne Cannabis",
  },
  description: gbpLocation.metaDescription,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.queenlansdownecannabis.ca",
    siteName: "Queen Lansdowne Cannabis",
    title: "Queen Lansdowne Cannabis | Queen West / Parkdale Dispensary",
    description: gbpLocation.metaDescription,
    images: [
      {
        url: "https://www.queenlansdownecannabis.ca/wp-content/uploads/2026/04/46Oi5.jpg",
        width: 1200,
        height: 630,
        alt: "Queen Lansdowne Cannabis — Queen West dispensary at 1472 Queen St W",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Queen Lansdowne Cannabis | Queen West / Parkdale Dispensary",
    description: gbpLocation.metaDescription,
    images: ["https://www.queenlansdownecannabis.ca/wp-content/uploads/2026/04/46Oi5.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.queenlansdownecannabis.ca",
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const fleet = await getFleetContent();
  if (!fleet.active) return ROOT_METADATA;
  const description = fleet.pages.Home?.metaDescription || "";
  if (!description || description === ROOT_METADATA.description) return ROOT_METADATA;
  return {
    ...ROOT_METADATA,
    description,
    openGraph: { ...ROOT_METADATA.openGraph, description },
    twitter: { ...ROOT_METADATA.twitter, description },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [fleet, cigaretteSnapshot] = await Promise.all([getFleetContent(), getCigaretteSnapshot()]);
  const cigarettes = toPublicCigaretteState(cigaretteSnapshot);
  const jsonLd = cannabisStoreJsonLd();
  return (
    <html lang="en">
      <head>
        <meta name="fleet-content-version" content={fleet.version} />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Queen West, Parkdale, Toronto" />
        <meta name="geo.position" content="43.6406611;-79.4370110" />
        <meta name="ICBM" content="43.6406611, -79.4370110" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FHSXN74T4Y"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FHSXN74T4Y');
            `
          }}
        />
      </head>
      <body>
        <Link className="deliveryAnnouncement" href="/weed-delivery-toronto">
          NEW WEED DELIVERY IS HERE — CLICK TO EXPLORE
        </Link>
        <FleetContentProvider value={{ active: fleet.active, version: fleet.version, nap: fleet.nap }}>
          <CigaretteStateProvider value={{ ...cigarettes, web: SHOW_CIGARETTES ? cigarettes.web : false }}>
            {children}
            <FullNameNap />
            <PinnedNavClearance />
            <MobileBottomBar />
          </CigaretteStateProvider>
        </FleetContentProvider>
      </body>
    </html>
  );
}
