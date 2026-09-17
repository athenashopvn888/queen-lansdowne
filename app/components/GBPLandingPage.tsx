import Link from "next/link";
import styles from "./GBPLandingPage.module.css";
import { gbpLocation } from "../lib/gbp-location";

const categoryLinks: { [key: string]: string } = {
  Flower: "/",
  "Pre-rolls": "/items/prerolls",
  Edibles: "/items/edibles",
  "THC vapes": "/items/vape-disposables",
  Concentrates: "/items/concentrates",
  Shatter: "/items/concentrates",
  "CBD oils": "/items/concentrates",
  Accessories: "/items/add-ons",
};

export function GBPLandingPage() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1 className={styles.h1}>Queen Lansdowne Cannabis on Queen West</h1>
        <p className={styles.heroTagline}>1472 Queen St W · Parkdale edge · walk-in 19+</p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.h2}>This city URL points back to the Queen West store</h2>
        <p className={styles.introText}>{gbpLocation.introVariant}</p>
        <p className={styles.infoText}>
          Broad “weed dispensary Toronto” searches land on many similar pages. Queen Lansdowne Cannabis
          is one storefront on Queen Street West at 1472, near Lansdowne, not a city-wide shop. Use the
          homepage for name, address, phone, and hours. Use the visit guide for the 501 Queen stop,
          curb parking, and the south-side door.
        </p>
        <div className={styles.btnRow}>
          <Link href="/" className={`${styles.btn} ${styles.btnPrimary}`}>Homepage visit hub</Link>
          <Link href="/visit" className={`${styles.btn} ${styles.btnSecondary}`}>Queen West visit guide</Link>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Menu categories before you walk in</h2>
        <p className={styles.infoText}>
          Adults 19+ can browse current category pages, then confirm details in store. Listings can change.
        </p>
        <div className={styles.productGrid}>
          {gbpLocation.products.map((p) => {
            const href = categoryLinks[p] || "/";
            return (
              <Link key={p} href={href} className={styles.productCard} aria-label={`Browse ${p} at ${gbpLocation.storeName}`}>
                {p}
              </Link>
            );
          })}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>NAP — same as the homepage</h2>
        <div className={styles.napGrid}>
          <div className={styles.napDetails}>
            <div className={styles.napItem}>
              <span className={styles.napLabel}>Store Name</span>
              <strong>{gbpLocation.storeName}</strong>
            </div>
            <div className={styles.napItem}>
              <span className={styles.napLabel}>Address</span>
              <span>{gbpLocation.address}</span>
            </div>
            <div className={styles.napItem}>
              <span className={styles.napLabel}>Phone</span>
              <span><a href={`tel:${gbpLocation.phoneIntl}`} style={{ color: "inherit" }}>{gbpLocation.phone}</a></span>
            </div>
            <div className={styles.napItem}>
              <span className={styles.napLabel}>Website</span>
              <span><a href={`https://${gbpLocation.domain}/`} style={{ color: "inherit" }}>https://{gbpLocation.domain}/</a></span>
            </div>
            <div className={styles.napItem}>
              <span className={styles.napLabel}>Store Hours</span>
              <span style={{ fontSize: "0.95rem" }}>{gbpLocation.hoursLabel}</span>
            </div>
          </div>
          <div className={styles.mapWrapper}>
            <iframe
              title={`Map of ${gbpLocation.storeName}`}
              src={gbpLocation.mapEmbedUrl}
              className={styles.mapIframe}
              allowFullScreen={true}
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
