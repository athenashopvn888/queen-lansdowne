import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { StoreMeshNav } from "../components/StoreMeshNav";
import { JsonLd } from "../lib/jsonLd";
import {
  STORE_ORIGIN,
  VAPE_LP_PATH,
  VAPE_LP_FAQS,
  faqPageJsonLd,
  gbpLocation,
} from "../lib/gbp-location";
import styles from "../visit/visit.module.css";

const PAGE_URL = `${STORE_ORIGIN}${VAPE_LP_PATH}`;

export const metadata: Metadata = {
  title: { absolute: "Nicotine Vape Queen West | Queen Lansdowne Cannabis" },
  description:
    "Nicotine vapes at Queen Lansdowne Cannabis, 1472 Queen St W on Queen West at the Parkdale edge. Check /items/vapes for the current category. Adults 19+. Nicotine is addictive.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Nicotine Vape Queen West | Queen Lansdowne Cannabis",
    description:
      "Neighbourhood nicotine vape page for 1472 Queen St W. Current listings live on /items/vapes. THC vapes are a separate category.",
    url: PAGE_URL,
  },
};

export default function NicotineVapeQueenWestPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(VAPE_LP_FAQS, PAGE_URL)} />
      <main className={styles.main}>
        <Navbar />
        <article className={styles.content}>
          <p className={styles.kicker}>Queen West · Nicotine vapes · Adults 19+</p>
          <h1 className={styles.pageTitle}>Nicotine vapes at the Parkdale edge of Queen West</h1>
          <p className={styles.lede}>
            Queen Lansdowne Cannabis lists nicotine vapes at 1472 Queen St W, the walk-in shop on
            Queen Street West at the Parkdale edge near Lansdowne. This page is the neighbourhood
            owner for that category. Current devices, pods, and posted details live on{" "}
            <Link href="/items/vapes">/items/vapes</Link>. This page does not invent SKUs or
            prices. Nicotine is addictive.
          </p>

          <section className={styles.nap} aria-labelledby="vape-nap-title">
            <h2 id="vape-nap-title" className={styles.sectionTitle}>Same NAP as the homepage hub</h2>
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
              <Link className={styles.primary} href="/items/vapes">
                Open the nicotine vape category
              </Link>
              <Link className={styles.secondary} href="/items/vape-disposables">
                THC vape category
              </Link>
              <Link className={styles.secondary} href="/">
                Homepage visit hub
              </Link>
            </div>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>Keep nicotine and cannabis vape routes separate</h2>
            <p>
              The nicotine vape category is <Link href="/items/vapes">/items/vapes</Link>. THC or
              cannabis vapes are listed under{" "}
              <Link href="/items/vape-disposables">/items/vape-disposables</Link>. A city
              information page also exists for nicotine vapes; this Queen West URL is the
              neighbourhood owner for the same storefront.
            </p>
            <p>
              When a listing name includes a puff count or a kit versus pod label, use that text
              only to tell products apart. Open the individual item page for the details attached
              to that listing. Do not copy one format onto another item.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>Visit 1472 Queen St W for the current shelf</h2>
            <p>
              Adults 19+ walk in with government-issued photo ID. The Queen Street door is open
              24 hours daily. Staff can help you compare the current nicotine vape category in
              store. For streetcar, parking, and the south-side entrance, use the{" "}
              <Link href="/visit">Queen West visit guide</Link>. For open-now questions, use the{" "}
              <Link href="/24-hour-queen-west-dispensary">24-hour Queen West dispensary</Link>{" "}
              page.
            </p>
            <p>
              Delivery ordering from this store is a separate path, daily from 10:00 a.m. to
              10:00 p.m. Native cigarettes are a separate retail category on this same Queen West
              block.
            </p>
          </section>

          <p>Adults 19+. Nicotine is addictive.</p>

          <StoreMeshNav currentPath={VAPE_LP_PATH} />

          <section>
            <h2 className={styles.sectionTitle}>Queen West nicotine vape questions</h2>
            {VAPE_LP_FAQS.map((faq) => (
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
