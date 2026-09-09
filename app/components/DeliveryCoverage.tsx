import Link from "next/link";

const areas = ["Toronto", "Etobicoke", "Mississauga", "Vaughan", "Brampton"];

export function DeliveryCoverage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.queenlansdownecannabis.ca/weed-dispensary-toronto#delivery-service",
    name: "Queen Lansdowne Cannabis delivery coverage",
    serviceType: "Cannabis delivery information",
    provider: { "@id": "https://www.queenlansdownecannabis.ca/#store" },
    url: "https://www.queenlansdownecannabis.ca/weed-delivery-toronto",
    areaServed: [
      { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: 43.6406911, longitude: -79.4370061 }, geoRadius: 50000 },
      ...areas.map((name) => ({ "@type": "City", name })),
    ],
  };

  return <section style={{ maxWidth: 1040, margin: "0 auto", padding: "24px 24px 64px" }}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <h2>Delivery Coverage from Queen Lansdowne Cannabis</h2>
    <p>Delivery is coordinated from the Queen Street West store and confirmed when an order is placed. A practical planning area is approximately 50 km from the store, including Toronto, Etobicoke, Mississauga, Vaughan and Brampton.</p>
    <p>Longer trips toward Barrie, Kitchener or Hamilton may be available when a driver is already positioned in that area. Extended coverage is not guaranteed, so confirm the destination and timing with the dispatcher before relying on delivery.</p>
    <p><Link href="/weed-delivery-toronto">Check current Toronto delivery information</Link></p>
  </section>;
}
