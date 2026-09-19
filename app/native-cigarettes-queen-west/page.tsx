import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { StoreMeshNav } from "../components/StoreMeshNav";
import { JsonLd } from "../lib/jsonLd";
import {
  STORE_ORIGIN,
  CIGARETTES_LP_PATH,
  CIGARETTES_LP_FAQS,
  faqPageJsonLd,
  gbpLocation,
} from "../lib/gbp-location";
import styles from "../visit/visit.module.css";

const PAGE_URL = `${STORE_ORIGIN}${CIGARETTES_LP_PATH}`;

export const metadata: Metadata = {
  title: { absolute: "Native Cigarettes Queen West | Queen Lansdowne Cannabis" },
  description:
    "Native cigarettes at Queen Lansdowne Cannabis, 1472 Queen St W on Queen West at the Parkdale edge. Check the current cigarette category for brand, unit, and posted price. Adults 19+.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Native Cigarettes Queen West | Queen Lansdowne Cannabis",
    description:
      "Retail cigarette category at 1472 Queen St W. Compare pack or carton listings on the current menu. Walk-in open 24 hours daily.",
    url: PAGE_URL,
  },
};

export default function NativeCigarettesQueenWestPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(CIGARETTES_LP_FAQS, PAGE_URL)} />
      <main className={styles.main}>
        <Navbar />
        <article className={styles.content}>
          <p className={styles.kicker}>Queen West · Retail cigarettes · Adults 19+</p>
          <h1 className={styles.pageTitle}>Native cigarettes at Queen Lansdowne Cannabis on Queen West</h1>
          <p className={styles.lede}>
            Queen Lansdowne Cannabis sells Native cigarettes at the walk-in shop on Queen Street
            West at 1472, on the Parkdale edge near Lansdowne. This page is the neighbourhood
            owner for that category. The current listed brands, pack or carton units, and posted
            prices live on the cigarette menu. The homepage remains the name, address, phone,
            hours, and map hub.
          </p>

          <section className={styles.nap} aria-labelledby="cigarettes-nap-title">
            <h2 id="cigarettes-nap-title" className={styles.sectionTitle}>Same NAP as the homepage hub</h2>
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
            </dl>
            <div className={styles.actions}>
              <Link className={styles.primary} href="/items/cigarettes">
                Open the cigarette category
              </Link>
              <Link className={styles.secondary} href="/visit">
                Queen West visit guide
              </Link>
              <Link className={styles.secondary} href="/">
                Homepage visit hub
              </Link>
            </div>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>How to read the Queen West cigarette listings</h2>
            <p>
              Use the cigarette category as a current snapshot. Compare brand, variety, pack or
              carton unit, quantity, and the posted price on the same line. A carton is a
              different sales unit from a pack — do not compare a pack price with a carton price
              as if they were the same item.
            </p>
            <p>
              This page does not name a locked-in brand list or invent a price. If one brand or
              unit matters, check{" "}
              <Link href="/items/cigarettes">/items/cigarettes</Link> or call{" "}
              <a href={`tel:${gbpLocation.phoneIntl}`}>{gbpLocation.phone}</a> before you leave.
              Listings can change.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>Walk in on the Lansdowne corridor</h2>
            <p>
              Adults 19+ show government-issued photo ID at the Queen Street door. The shop is
              open 24 hours daily, including overnight. There is no appointment desk. Staff can
              help you read the current cigarette shelf the same way they help with flower, vapes,
              and other in-store categories.
            </p>
            <p>
              Arrival notes — 501 Queen at Lansdowne, 301 Queen Blue Night overnight, curb
              parking, and the south-side entrance — live on the{" "}
              <Link href="/visit">visit guide</Link>. Open-now questions live on the{" "}
              <Link href="/24-hour-queen-west-dispensary">24-hour Queen West dispensary</Link>{" "}
              page. Nicotine vapes are a separate category.
            </p>
          </section>

          <StoreMeshNav currentPath={CIGARETTES_LP_PATH} />

          <section>
            <h2 className={styles.sectionTitle}>Queen West cigarette questions</h2>
            {CIGARETTES_LP_FAQS.map((faq) => (
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
