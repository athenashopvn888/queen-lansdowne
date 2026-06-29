import type { Metadata } from "next";
import "./globals.css";
import AgeGate from "./components/AgeGate";

export const metadata: Metadata = {
  metadataBase: new URL("https://queenlansdownecannabis.ca"),
  title: {
    default: "Queen Lansdowne Cannabis | Queen West Dispensary",
    template: "%s | Queen Lansdowne Cannabis",
  },
  description:
    "Queen Lansdowne Cannabis is a Toronto dispensary on Queen St W near Lansdowne and Parkdale with flower, pre-rolls, vapes, edibles, concentrates, accessories, and adult 19+ info.",
  keywords: [
    "cannabis dispensary Toronto",
    "weed store Toronto",
    "exotic flower Toronto",
    "premium cannabis",
    "Queen Lansdowne Cannabis",
    "cheap weed Toronto",
    "dispensary near me",
    "THC flower",
    "indica sativa hybrid",
    "edibles Toronto",
    "vapes",
    "pre-rolls",
    "native cigarettes Toronto",
    "weed store Mississauga",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://queenlansdownecannabis.ca",
    siteName: "Queen Lansdowne Cannabis",
    title: "Queen Lansdowne Cannabis | Queen West Dispensary",
    description:
      "Queen Lansdowne Cannabis is a Toronto dispensary on Queen St W near Lansdowne and Parkdale with flower, pre-rolls, vapes, edibles, concentrates, accessories, and adult 19+ info.",
    images: [
      {
        url: "https://queenlansdownecannabis.ca/wp-content/uploads/2026/04/46Oi5.jpg",
        width: 1200,
        height: 630,
        alt: "Queen Lansdowne Cannabis — Premium Cannabis Dispensary Toronto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Queen Lansdowne Cannabis | Queen West Dispensary",
    description: "Queen Lansdowne Cannabis is a Toronto dispensary on Queen St W near Lansdowne and Parkdale with flower, pre-rolls, vapes, edibles, concentrates, accessories, and adult 19+ info.",
    images: ["https://queenlansdownecannabis.ca/wp-content/uploads/2026/04/46Oi5.jpg"],
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
    canonical: "https://queenlansdownecannabis.ca",
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  additionalType: "https://schema.org/Store",
  "@id": "https://queenlansdownecannabis.ca",
  name: "Queen Lansdowne Cannabis",
  description: "Cannabis dispensary at 1472 Queen St W in Toronto, ON. Shop exotic, premium, AAA+, AA, and budget flower tiers plus edibles, prerolls, and vapes. Open Daily: 10:00 AM - 03:00 AM.",
  url: "https://queenlansdownecannabis.ca",
  telephone: "+16475531472",
  image: "https://queenlansdownecannabis.ca/wp-content/uploads/2026/04/7Clmh.jpg",
  priceRange: "$3 - $12/g",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1472 Queen St W",
    addressLocality: "Toronto",
    addressRegion: "ON",
    postalCode: "M6K 1M4",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.6406611,
    longitude: -79.4370110,
  },
  openingHoursSpecification: [
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "10:00",
    "closes": "03:00"
  }
],
  sameAs: [
    "https://queenlansdownecannabis.ca/",
    "https://queenlansdownecannabis.ca/",
  ],
  hasMap: "https://queenlansdownecannabis.ca/",
  areaServed: {
    "@type": "City",
    name: "Toronto",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Toronto" />
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
        {children}
        <AgeGate />
      </body>
    </html>
  );
}
