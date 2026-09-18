import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { StoreMeshNav } from "../components/StoreMeshNav";
import { JsonLd } from "../lib/jsonLd";
import {
  STORE_ORIGIN,
  VISIT_FAQS,
  faqPageJsonLd,
  gbpLocation,
} from "../lib/gbp-location";
import styles from "./visit.module.css";

export const metadata: Metadata = {
  title: { absolute: "Visit Queen Lansdowne Cannabis on Queen West" },
  description:
    "How to reach Queen Lansdowne Cannabis at 1472 Queen St W: 501 Queen streetcar at Lansdowne, Queen Street parking, south-side entrance, and ID for adults 19+.",
  alternates: {
    canonical: `${STORE_ORIGIN}/visit`,
  },
  openGraph: {
    title: "Visit Queen Lansdowne Cannabis on Queen West",
    description:
      "Streetcar, parking, and entrance notes for 1472 Queen St W at the Parkdale edge of Queen West.",
    url: `${STORE_ORIGIN}/visit`,
  },
};

export default function VisitPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(VISIT_FAQS, `${STORE_ORIGIN}/visit`)} />
      <main className={styles.main}>
        <Navbar />
        <article className={styles.content}>
          <p className={styles.kicker}>Queen West · Parkdale edge</p>
          <h1 className={styles.pageTitle}>How to visit Queen Lansdowne Cannabis at 1472 Queen St W</h1>
          <p className={styles.lede}>
            This page is the street-level arrival guide for one storefront on Queen Street West.
            The homepage remains the visit hub with the same name, address, phone, and hours.
          </p>

          <section className={styles.nap} aria-labelledby="visit-nap-title">
            <h2 id="visit-nap-title" className={styles.sectionTitle}>Name, address, phone, hours</h2>
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
              <a
                className={styles.primary}
                href={gbpLocation.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open directions
              </a>
              <Link className={styles.secondary} href="/">
                Homepage visit hub
              </Link>
              <a className={styles.secondary} href={`tel:${gbpLocation.phoneIntl}`}>
                Call the store
              </a>
            </div>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>Streetcar and the Dufferin–Lansdowne approach</h2>
            <p>
              Queen Lansdowne Cannabis faces Queen Street West at 1472, on the Parkdale side of the
              Queen West strip. The closest TTC stop is Queen Street West at Lansdowne Avenue on the
              501 Queen streetcar. After you step off, stay on Queen Street and look for the store
              sign at sidewalk level on the south side of the street. Overnight, the 301 Queen Blue
              Night follows the same Queen Street corridor when the daytime 501 is not running.
            </p>
            <p>
              Dufferin Street is the next major north-south crossing to the east. If you are coming
              from Exhibition Place or Liberty Village, you typically meet Queen Street at Dufferin
              first, then continue west along Queen toward Lansdowne. From the west, the 501 runs
              through Roncesvalles before this block. Live stop times change; check a current TTC
              trip planner rather than treating this page as a timetable.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>Finding the Queen Street door</h2>
            <p>
              The shop is a street-level retail bay, not a plaza unit or a rear alley entrance. Use
              1472 Queen St W as the pin. The door opens to the Queen Street sidewalk. There is no
              appointment window — walk in during listed hours, which are 24 hours daily. For
              overnight / open-now questions, use the{" "}
              <Link href="/24-hour-queen-west-dispensary">24-hour Queen West dispensary</Link> page.
              Staff can help you compare the current in-store menu. Adults 19+ must show
              government-issued photo ID before purchase.
            </p>
            <p>
              If you are using a rideshare, the drop-off is on Queen Street West at the civic number
              1472. Ask the driver to stop on Queen, not on a parallel side street, so the
              storefront sign is in view when you get out.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>Parking on this stretch of Queen West</h2>
            <p>
              Queen Street West uses posted on-street parking. Rules change by time of day and by
              block, including rush-hour restrictions on some segments. Read the signs on the curb
              in front of 1472 before you leave the car. This page does not list a private customer
              lot for the store.
            </p>
            <p>
              A public Green P surface lot, Carpark 158, is several blocks east at 1325 Queen Street
              West. That lot is city parking, not a Queen Lansdowne Cannabis lot, and spaces are not
              guaranteed. If you cannot find legal curb space, use the streetcar or a rideshare
              rather than guessing at an unmarked lane.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>What to bring, and what this page does not promise</h2>
            <p>
              Bring photo ID. Debit and cash are accepted in store. Browse flower tiers, pre-rolls,
              edibles, vapes, and concentrates on the homepage menu before you travel; listings can
              change and this guide does not claim inventory, prices, or wait times. Delivery
              ordering from this store is a separate path, available daily from 10:00 a.m. to 10:00
              p.m. through the delivery menu, with details confirmed by the dispatcher.
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

          <StoreMeshNav currentPath="/visit" />

          <section>
            <h2 className={styles.sectionTitle}>Queen West visit questions</h2>
            {VISIT_FAQS.map((faq) => (
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
