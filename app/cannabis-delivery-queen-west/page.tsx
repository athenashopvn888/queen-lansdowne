import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { StoreMeshNav } from "../components/StoreMeshNav";
import { JsonLd } from "../lib/jsonLd";
import {
  STORE_ORIGIN,
  DELIVERY_LP_PATH,
  DELIVERY_LP_FAQS,
  faqPageJsonLd,
  gbpLocation,
} from "../lib/gbp-location";
import styles from "../visit/visit.module.css";

const PAGE_URL = `${STORE_ORIGIN}${DELIVERY_LP_PATH}`;

export const metadata: Metadata = {
  title: { absolute: "Cannabis Delivery Queen West | Queen Lansdowne Cannabis" },
  description:
    "Cannabis delivery coordinated from Queen Lansdowne Cannabis at 1472 Queen St W on Queen West. Ordering daily 10:00 a.m. to 10:00 p.m. $60 product minimum. $10 delivery fee. Adults 19+.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Cannabis Delivery Queen West | Queen Lansdowne Cannabis",
    description:
      "Delivery from the Queen West storefront at 1472 Queen St W. Dispatcher confirms eligibility. Walk-in retail stays open 24 hours daily.",
    url: PAGE_URL,
  },
};

export default function CannabisDeliveryQueenWestPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(DELIVERY_LP_FAQS, PAGE_URL)} />
      <main className={styles.main}>
        <Navbar />
        <article className={styles.content}>
          <p className={styles.kicker}>Queen West · Parkdale edge · Lansdowne corridor</p>
          <h1 className={styles.pageTitle}>Cannabis delivery from Queen West at 1472 Queen St W</h1>
          <p className={styles.lede}>
            This page is the neighbourhood owner for cannabis delivery from Queen Lansdowne
            Cannabis. Orders are coordinated from the walk-in shop at 1472 Queen St W, on Queen
            Street West where the Queen West strip meets Parkdale. The city delivery menu remains
            the place to browse products and start LIVE ORDER. The homepage remains the name,
            address, phone, hours, and map hub.
          </p>

          <section className={styles.nap} aria-labelledby="delivery-nap-title">
            <h2 id="delivery-nap-title" className={styles.sectionTitle}>Same NAP as the homepage hub</h2>
            <dl className={styles.napList}>
              <div>
                <dt>Store</dt>
                <dd>{gbpLocation.storeName}</dd>
              </div>
              <div>
                <dt>Address</dt>
                <dd>{gbpLocation.address}</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={`tel:${gbpLocation.phoneIntl}`}>{gbpLocation.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Walk-in hours</dt>
                <dd>{gbpLocation.hoursLabel}</dd>
              </div>
              <div>
                <dt>Delivery hours</dt>
                <dd>Daily 10:00 a.m. to 10:00 p.m.</dd>
              </div>
            </dl>
            <div className={styles.actions}>
              <Link className={styles.primary} href="/weed-delivery-toronto">
                Open the delivery menu
              </Link>
              <Link className={styles.secondary} href="/">
                Homepage visit hub
              </Link>
              <Link className={styles.secondary} href="/24-hour-queen-west-dispensary">
                Open now · 24-hour Queen West
              </Link>
            </div>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>What this Queen West page states — and what it does not</h2>
            <p>
              Delivery ordering from this store runs daily from 10:00 a.m. to 10:00 p.m. The live
              delivery menu states a $60 product minimum and a $10 delivery fee. The dispatcher
              confirms availability, destination eligibility, and checkout details. New customers
              complete private selfie-with-ID verification in Web Chat. Adults 19+ only.
            </p>
            <p>
              This page does not invent a neighbourhood-only zone, a city-wide radius, or extra
              fees. If a destination is unclear, ask the dispatcher before you rely on a drop-off
              time. Listings on the delivery menu can change.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>Queen West walk-in versus delivery</h2>
            <p>
              The street-level door at 1472 Queen St W stays open 24 hours daily for walk-in
              retail. Delivery is a separate schedule. Use the{" "}
              <Link href="/24-hour-queen-west-dispensary">24-hour Queen West dispensary</Link> page
              when the question is open now or overnight. Use the{" "}
              <Link href="/visit">Queen West visit guide</Link> for the 501 Queen stop, curb
              parking, and the south-side entrance.
            </p>
            <p>
              Flower collections stay on Exotic, Premium, AAA+, AA, and Budget Weed. Native
              cigarettes and nicotine vapes are sold in store — use those Queen West pages, then
              the current category listings, rather than treating delivery as the only path.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>How to order from this Lansdowne-corridor shop</h2>
            <p>
              Open the delivery menu, note product names and weights, then select LIVE ORDER to
              reach the Queen Lansdowne Cannabis dispatcher. The dispatcher confirms the order
              before it is packed. Do not treat the city delivery URL as a second store — it is
              the ordering surface for this Queen West shop.
            </p>
          </section>

          <StoreMeshNav currentPath={DELIVERY_LP_PATH} />

          <section>
            <h2 className={styles.sectionTitle}>Queen West delivery questions</h2>
            {DELIVERY_LP_FAQS.map((faq) => (
              <details key={faq.q} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>{faq.q}</summary>
                <p className={styles.faqAnswer}>{faq.a}</p>
              </details>
            ))}
          </section>
        </article>
        <Footer />
      </main>
    </>
  );
}
