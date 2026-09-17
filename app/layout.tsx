import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import AgeGate from "./components/AgeGate";
import { cannabisStoreJsonLd, gbpLocation, jsonLdScript } from "./lib/gbp-location";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.queenlansdownecannabis.ca"),
  title: {
    default: "Queen Lansdowne Cannabis | Queen West / Parkdale Dispensary",
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

const jsonLd = cannabisStoreJsonLd();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
        {children}
        <AgeGate />
      </body>
    </html>
  );
}
