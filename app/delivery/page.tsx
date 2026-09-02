import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";
import menu from "./delivery-menu.json";

export const metadata: Metadata = {
  title: { absolute: "Weed Delivery in Toronto | Queen Lansdowne Cannabis" },
  description: "Explore the Queen Lansdowne Cannabis Weed Delivery page in Toronto and review the existing delivery menu and ordering information.",
  alternates: { canonical: "https://www.queenlansdownecannabis.ca/delivery" },
};

export default function DeliveryPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Queen Lansdowne Cannabis Delivery Menu",
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: menu.products.length,
        itemListElement: menu.products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: product.name,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Queen Lansdowne Cannabis Delivery",
      serviceType: "Cannabis delivery",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "10:00",
        closes: "22:00",
      },
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <DeliveryContent />
    </>
  );
}
