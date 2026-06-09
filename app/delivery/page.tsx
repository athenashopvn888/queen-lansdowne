import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Delivery Coming Soon — Queen Lansdowne Cannabis | Toronto",
  description: "Get notified when Queen Lansdowne Cannabis launches same-day weed delivery across Toronto and surrounding areas.",
  alternates: {
    canonical: "https://queenlansdownecannabis.ca/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
