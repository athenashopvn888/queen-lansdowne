import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { StoreMeshNav } from "../components/StoreMeshNav";
import { JsonLd } from "../lib/jsonLd";
import {
  STORE_ORIGIN,
  HOURS_LP_PATH,
  HOURS_LP_FAQS,
  faqPageJsonLd,
  gbpLocation,
} from "../lib/gbp-location";
import styles from "../visit/visit.module.css";

const PAGE_URL = `${STORE_ORIGIN}${HOURS_LP_PATH}`;

export const metadata: Metadata = {
  title: { absolute: "24-Hour Queen West Dispensary | Queen Lansdowne Cannabis" },
  description:
    "Queen Lansdowne Cannabis at 1472 Queen St W is open 24 hours daily on Queen West at the Parkdale edge. Walk in overnight. Adults 19+. Phone +1 (437) 293-8580.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "24-Hour Queen West Dispensary | Queen Lansdowne Cannabis",
    description:
      "Walk-in cannabis at 1472 Queen St W stays open 24 hours daily. Overnight TTC uses the 301 Queen Blue Night on the same street.",
    url: PAGE_URL,
  },
};

export default function TwentyFourHourQueenWestPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(HOURS_LP_FAQS, PAGE_URL)} />
      <main className={styles.main}>
        <Navbar />
        <article className={styles.content}>
          <p className={styles.kicker}>Queen West · Open 24 hours daily</p>
          <h1 className={styles.pageTitle}>24-hour dispensary on Queen West at 1472 Queen St W</h1>
          <p className={styles.lede}>
            Queen Lansdowne Cannabis is a walk-in shop on Queen Street West at the Parkdale edge,
            and the door stays open around the clock. This page is the overnight / open-now owner
            for this storefront. The homepage remains the name, address, phone, hours, and map hub.
            Use the visit guide for streetcar stop, curb parking, and the south-side entrance.
          </p>

          <section className={styles.nap} aria-labelledby="hours-nap-title">
            <h2 id="hours-nap-title" className={styles.sectionTitle}>Same NAP as the homepage hub</h2>
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
              <a className={styles.secondary} href={`tel:${gbpLocation.phoneIntl}`}>
                Call the store
              </a>
            </div>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>Walk in any hour on Queen Street West</h2>
            <p>
              The retail bay at 1472 Queen St W does not close for a night shift. Adults 19+ can
              walk in after work, after a show on Queen West, or after midnight when the strip is
              quieter. There is no appointment desk. Bring government-issued photo ID at every hour,
              including overnight. Staff can help you compare the current flower, pre-roll, edible,
              vape, and concentrate listings in store.
            </p>
            <p>
              Open 24 hours is the in-store retail schedule. Delivery ordering from this store is a
              separate path and runs daily from 10:00 a.m. to 10:00 p.m. Do not treat this page as a
              delivery-hours claim.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>Overnight transit on the Queen corridor</h2>
            <p>
              Daytime visitors typically use the 501 Queen streetcar to Queen Street West at
              Lansdowne Avenue, then stay on Queen Street and look for the store sign on the south
              sidewalk. Overnight, the 301 Queen Blue Night covers the same Queen Street corridor
              when the 501 is not running. Live arrivals change — check a current TTC trip planner
              rather than using this page as a timetable.
            </p>
            <p>
              Rideshare drop-off is on Queen Street West at civic number 1472. Ask the driver to
              stop on Queen, not on a parallel side street, so the storefront is in view when you
              step out. On-street parking is posted and changes by time of day; read the curb signs
              at 1472 before you leave the car.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>What this page owns — and what it does not</h2>
            <p>
              Use this URL when the question is whether the Queen West shop is open now, open late,
              or open all night. Use the visit guide when the question is which stop, which door, or
              where to park. Use the homepage when you need the NAP block, the map, and the menu
              hubs in one place. Flower is grouped as Exotic, Premium, AAA+, AA, and Budget Weed on
              dedicated collection pages.
            </p>
          </section>

          <div className={styles.mapWrap}>
            <iframe
              title="Map of Queen Lansdowne Cannabis at 1472 Queen St W"
              src={gbpLocation.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <StoreMeshNav currentPath={HOURS_LP_PATH} />

          <section>
            <h2 className={styles.sectionTitle}>24-hour Queen West questions</h2>
            {HOURS_LP_FAQS.map((faq) => (
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
