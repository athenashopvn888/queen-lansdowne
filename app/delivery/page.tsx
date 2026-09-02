import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";
import menu from "./delivery-menu.json";

export const metadata: Metadata = {
  title: { absolute: "Weed Delivery Toronto | Queen Lansdowne Cannabis" },
  description: "Browse Queen Lansdowne Cannabis Weed Delivery in Toronto, review the existing delivery menu, and use the established ordering options.",
  alternates: { canonical: "https://www.queenlansdownecannabis.ca/weed-delivery-toronto" },
};

export default function DeliveryPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Queen Lansdowne Cannabis Weed Delivery Menu",
      url: "https://www.queenlansdownecannabis.ca/weed-delivery-toronto",
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
      name: "Queen Lansdowne Cannabis Weed Delivery",
      serviceType: "Weed delivery",
      url: "https://www.queenlansdownecannabis.ca/weed-delivery-toronto",
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
