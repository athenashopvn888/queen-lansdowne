import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { StoreMeshNav } from "../components/StoreMeshNav";
import { JsonLd } from "../lib/jsonLd";
import {
  STORE_ORIGIN,
  WEED_LP_PATH,
  WEED_LP_FAQS,
  faqPageJsonLd,
  gbpLocation,
} from "../lib/gbp-location";
import styles from "../visit/visit.module.css";

const PAGE_URL = `${STORE_ORIGIN}${WEED_LP_PATH}`;

export const metadata: Metadata = {
  title: { absolute: "Weed Dispensary Queen West | Queen Lansdowne Cannabis" },
  description:
    "Weed dispensary at Queen Lansdowne Cannabis, 1472 Queen St W on Queen West at the Parkdale edge near Lansdowne. Walk-in retail. Adults 19+. Homepage holds name, address, phone, and hours.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Weed Dispensary Queen West | Queen Lansdowne Cannabis",
    description:
      "Neighbourhood weed dispensary page for 1472 Queen St W on Queen West, the Parkdale edge, and the Lansdowne corridor. Adults 19+.",
    url: PAGE_URL,
  },
};

export default function WeedDispensaryQueenWestPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(WEED_LP_FAQS, PAGE_URL)} />
      <main className={styles.main}>
        <Navbar />
        <article className={styles.content}>
          <p className={styles.kicker}>Queen West · Parkdale edge · Lansdowne corridor</p>
          <h1 className={styles.pageTitle}>
            Weed dispensary on Queen West at the Parkdale–Lansdowne edge
          </h1>
          <p className={styles.lede}>
            This page is the neighbourhood owner for weed dispensary searches around Queen
            West, the Parkdale edge, and Lansdowne. Queen Lansdowne Cannabis is the walk-in
            shop at 1472 Queen St W, on Queen Street West where the strip meets Parkdale.
            The homepage remains the name, address, phone, hours, and map hub. The Toronto
            weed dispensary URL is a thin city pointer to this same door — not a second store.
          </p>

          <section className={styles.nap} aria-labelledby="weed-nap-title">
            <h2 id="weed-nap-title" className={styles.sectionTitle}>Same NAP as the homepage hub</h2>
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
                <dt>Hours</dt>
                <dd>{gbpLocation.hoursLabel}</dd>
              </div>
              <div>
                <dt>Website</dt>
                <dd>
                  <Link href="/">{STORE_ORIGIN}/</Link>
                </dd>
              </div>
            </dl>
            <div className={styles.actions}>
              <Link className={styles.primary} href="/">
                Homepage visit hub
              </Link>
              <Link className={styles.secondary} href="/visit">
                Queen West visit guide
              </Link>
              <Link className={styles.secondary} href="/24-hour-queen-west-dispensary">
                Open now · 24-hour Queen West
              </Link>
            </div>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>What this Queen West page owns</h2>
            <p>
              Use this URL when the question is a weed dispensary, weed store, or dispensary
              on Queen West, at the Parkdale edge, or on the Lansdowne corridor. It names one
              street-level shop at 1472 Queen St W. Adults 19+ walk in with government-issued
              photo ID. There is no appointment desk and no medical clinic.
            </p>
            <p>
              This page does not invent a stock list, a price, or a neighbourhood-only menu.
              Flower collections, category listings, and in-store shelves can change. Confirm
              details on the current collection page or in the shop.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>Queen West, Parkdale-edge, and Lansdowne context</h2>
            <p>
              The storefront faces Queen Street West at civic number 1472, near the Queen
              Street West at Lansdowne Avenue streetcar stop. Parkdale is the edge of the
              strip on this block. Dufferin is the next major crossing to the east. Those
              names help someone already on the west side find the door. They are not extra
              shops.
            </p>
            <p>
              Arrival notes — 501 Queen at Lansdowne, 301 Queen Blue Night overnight, curb
              parking, and the south-side entrance — live on the{" "}
              <Link href="/visit">Queen West visit guide</Link>. Open-now and overnight
              walk-in questions live on the{" "}
              <Link href="/24-hour-queen-west-dispensary">24-hour Queen West dispensary</Link>{" "}
              page. The homepage keeps the NAP block and map together.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>Flower collections and the rest of this shop</h2>
            <p>
              Flower is grouped as{" "}
              <Link href="/exotic-weed">Exotic Weed</Link>,{" "}
              <Link href="/premium-weed">Premium Weed</Link>,{" "}
              <Link href="/aaa-weed">AAA+ Weed</Link>,{" "}
              <Link href="/aa-weed">AA Weed</Link>, and{" "}
              <Link href="/budget-weed">Budget Weed</Link>. Those collection pages are browsing
              owners. They do not lock in a price or promise that one jar will still be on
              the shelf when you arrive.
            </p>
            <p>
              Delivery from this store is a separate path. Use the{" "}
              <Link href="/cannabis-delivery-queen-west">cannabis delivery Queen West</Link>{" "}
              page for ordering context, then the delivery menu to start LIVE ORDER.{" "}
              <Link href="/native-cigarettes-queen-west">Native cigarettes</Link> and{" "}
              <Link href="/nicotine-vape-queen-west">nicotine vapes</Link> are in-store
              categories with their own Queen West pages. If you landed on the city weed
              dispensary URL, that page points back here.
            </p>
          </section>

          <p>Adults 19+. Adult-use retail only.</p>

          <StoreMeshNav currentPath={WEED_LP_PATH} />

          <section>
            <h2 className={styles.sectionTitle}>Queen West weed dispensary questions</h2>
            {WEED_LP_FAQS.map((faq) => (
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
