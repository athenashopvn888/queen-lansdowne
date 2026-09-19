"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import FleetAnnouncementBanner from "./components/FleetAnnouncementBanner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { StoreMeshNav } from "./components/StoreMeshNav";
import FlowerCard from "./components/FlowerCard";
import { allFlowers } from "./lib/products";
import {
  gbpLocation,
  HOME_CORRIDOR_COPY,
  HOME_FAQS,
} from "./lib/gbp-location";
import Papa from "papaparse";

/* ── Bento Mosaic Config ── */
const BENTO_TIERS = [
  {
    name: "EXOTIC WEED",
    slug: "exotic-weed",
    price: "Explore Collection",
    banner: "/banners/exotics_banner.webp",
    className: styles.bentoExotic,
  },
  {
    name: "PREMIUM WEED",
    slug: "premium-weed",
    price: "Explore Collection",
    banner: "/banners/premium_banner.webp",
    className: styles.bentoPremium,
  },
  {
    name: "AAA+ WEED",
    slug: "aaa-weed",
    price: "Explore Collection",
    banner: "/banners/aaa_plus_banner.webp",
    className: styles.bentoTile,
  },
  {
    name: "AA WEED",
    slug: "aa-weed",
    price: "Explore Collection",
    banner: "/banners/aa_banner.webp",
    className: styles.bentoTile,
  },
  {
    name: "BUDGET WEED",
    slug: "budget-weed",
    price: "Explore Collection",
    banner: "/banners/budget_banner.webp",
    className: styles.bentoTile,
  },
  {
    name: "EDIBLES • PREROLLS • MORE",
    slug: "items/edibles",
    price: "Shop Tiers",
    banner: "/banners/edibles_prerolls_more_banner.webp",
    className: styles.bentoEdibles,
  },
];

/* ── Explore Categories Config (New Banners) ── */
const EXPLORE_CATEGORIES = [
  { name: "Nicotine Vapes", slug: "items/vapes", banner: "/banners/01_Vape_Pens.webp", icon: "💨" },
  { name: "THC Vapes", slug: "items/vape-disposables", banner: "/banners/02_Vape_Disposable.webp", icon: "💨" },
  { name: "Concentrates", slug: "items/concentrates", banner: "/banners/03_Concentrates.webp", icon: "💎" },
  { name: "Pre-Rolls", slug: "items/prerolls", banner: "/banners/04_Pre_Rolls.webp", icon: "🚬" },
  { name: "Accessories", slug: "items/add-ons", banner: "/banners/05_Accessories.webp", icon: "➕" },
  { name: "Cigarettes", slug: "items/cigarettes", banner: "/banners/native-cigarette-offer-20260822.webp", icon: "🏷️" },
  { name: "Magic Stuff", slug: "items/magic", banner: "/banners/09_Magic_Stuff.webp", icon: "🍄" },
];

const LOCAL_FAQS = HOME_FAQS;

interface Review {
  name: string;
  comment: string;
  date: string;
}

interface ReviewStats {
  total: number;
  avg: number;
}

export default function HomePage() {
  const [featuredStrains, setFeaturedStrains] = useState<any[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewsStats, setReviewsStats] = useState<ReviewStats | null>(null);
  const [reviewsLoading, setReviewsLoading] = useState(true);

  /* ── 1. Fetch Client-Side Review Comments ── */
  useEffect(() => {
    const STORE_KEY = "QLC01";
    const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSu6iy9W3YKRzBYo_r96rXcbJsAOzlkzn5Rw9QMFnE0NbYSBgPxKX8kPRZNC9QcffZYj57155esmnqH/pub?gid=1555782756&single=true&output=csv";

    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`Review feed returned ${r.status}`);
        return r.text();
      })
      .then((raw) => {
        const rows = Papa.parse<Record<string, string>>(raw, {
          header: true,
          skipEmptyLines: true,
        }).data;

        const reviewsPool: Review[] = [];
        let totalVal: number | null = null;
        let avgVal: number | null = null;
        let hasStats = false;

        rows.forEach((row) => {
          if (row.StoreKey !== STORE_KEY) return;

          const rn = row.ReviewerName || "";
          if (rn === "__STATS__") {
            const parsedTotal = parseInt(row.Comment || "", 10);
            const parsedAvg = parseFloat(row.CreateTime || "");
            if (Number.isFinite(parsedTotal) && Number.isFinite(parsedAvg)) {
              totalVal = parsedTotal;
              avgVal = parsedAvg;
              hasStats = true;
            }
            return;
          }

          const comment = row.Comment || "";
          if (!comment || comment.length < 10) return;
          const name = rn || "Customer";
          const dateStr = row.CreateTime || "";
          reviewsPool.push({ name, comment, date: dateStr });
        });

        setReviews(reviewsPool.slice(0, 6));
        if (hasStats && totalVal !== null && avgVal !== null) {
          setReviewsStats({ total: totalVal, avg: avgVal });
        }
        setReviewsLoading(false);
      })
      .catch((err) => {
        console.warn("Reviews fetch failed:", err);
        setReviewsLoading(false);
      });
  }, []);

  /* ── 2. Build Featured Strains ── */
  useEffect(() => {
    const pool = [...allFlowers].filter((f) => f.image);
    // Shuffle pool securely
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    const picked: typeof pool = [];
    const tierCounts: Record<string, number> = {};

    for (const f of pool) {
      if (picked.length >= 8) break;
      const tc = tierCounts[f.tier] || 0;
      if (tc >= 2) continue; // max 2 per tier
      if (picked.some((p) => p.name === f.name)) continue; // avoid exact duplicates
      picked.push(f);
      tierCounts[f.tier] = tc + 1;
    }

    setFeaturedStrains(picked);
  }, []);

  return (
    <main className={styles.main}>
      <FleetAnnouncementBanner />
      {/* ── NAVBAR ── */}
      <Navbar />

      <section className={styles.deliveryBannerSection} aria-label="Queen Lansdowne Weed Delivery">
        <Link href="/weed-delivery-toronto" className={styles.deliveryBannerLink} aria-label="Open Queen Lansdowne Weed Delivery">
          <Image
            src="/qlc-home-delivery-banner.webp"
            alt="Queen Lansdowne Cannabis Weed Delivery"
            width={1774}
            height={887}
            priority
            sizes="(max-width: 1248px) calc(100vw - 24px), 1200px"
            className={styles.deliveryBannerImage}
          />
        </Link>
      </section>

      {/* ── BENTO MOSAIC HERO ── */}
      <section className={styles.hiringBannerSection} aria-label="Queen Lansdowne Cannabis hiring">
        <div className={styles.hiringBanner}>
          <div className={styles.hiringBannerCopy}>
            <span className={styles.hiringBannerLabel}>Now Hiring</span>
            <h2 className={styles.hiringBannerTitle}>Budtenders / Managers Wanted At Queen Lansdowne Cannabis</h2>
            <p className={styles.hiringBannerText}>
              Love talking cannabis, helping people shop smarter, and keeping a busy retail floor sharp? Online applications only. If we think you may be a good fit, we will contact you.
            </p>
          </div>
          <Link href="/careers/budtender" className={styles.hiringBannerButton}>
            Apply Online
          </Link>
        </div>
      </section>

      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroStars} />

        <div className={styles.heroContent}>
          {/* Brand branding */}
          <div className={styles.brandBlock}>
            <img src="/storeFavicon.webp" alt="Queen Lansdowne Cannabis Icon" style={{ height: "60px", width: "60px", objectFit: "contain", borderRadius: "8px", marginBottom: "8px" }} />
            <h1 className={styles.brandTitle}>QUEEN LANSDOWNE CANNABIS</h1>
            <p className={styles.brandSub}>Queen West dispensary at the Parkdale edge — 1472 Queen St W</p>
            <div className={styles.brandBadge}>Open 24 Hours Daily</div>
            <aside className={styles.homeDeliveryNotice} aria-labelledby="home-delivery-title">
              <h2 id="home-delivery-title">NEW WEED DELIVERY AVAILABLE</h2>
              <p>Browse the Queen Lansdowne Cannabis Weed Delivery menu daily from 10 a.m. to 10 p.m. Use LIVE ORDER to connect with the QLC dispatcher after choosing your products and weights.</p>
            </aside>
            <div className={styles.homeMenuActions} aria-label="Choose a Queen Lansdowne menu">
              <Link href="/exotic-weed" className={styles.homeMenuCta}>STORE MENU</Link>
              <Link href="/weed-delivery-toronto" className={`${styles.homeMenuCta} ${styles.homeDeliveryCta}`}>WEED DELIVERY</Link>
              <Link href="/visit" className={styles.homeMenuCta}>VISIT QUEEN WEST</Link>
            </div>
          </div>

          {/* Bento Grid */}
          <div className={styles.bentoGrid}>
            {BENTO_TIERS.map((tier) => (
              <Link
                key={tier.slug}
                href={`/${tier.slug}`}
                className={`${styles.bentoTile} ${tier.className}`}
              >
                <div
                  className={styles.bentoTileBg}
                  style={{ backgroundImage: `url('${tier.banner}')` }}
                />
                <div className={styles.bentoTileOverlay} />
                <div className={styles.bentoTileContent}>
                  <span className={styles.bentoLabel}>{tier.name}</span>
                  <span className={styles.bentoPrice}>{tier.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPLORE CATEGORIES ── */}
      <section className={styles.categoriesSection} id="menu">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Explore Categories</h2>
            <p className={styles.sectionSubtitle}>
              Browse current Queen West menu categories at 1472 Queen St W — flower, vapes, edibles, concentrates, pre-rolls, and accessories. Listings can change.
            </p>
          </div>

          <div className={styles.categoriesGrid}>
            {EXPLORE_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className={styles.categoryCard}
              >
                <div
                  className={styles.categoryCardBg}
                  style={{ backgroundImage: `url('${cat.banner}')` }}
                />
                <div className={styles.categoryCardOverlay} />
                <div className={styles.categoryCardContent}>
                  <h3 className={styles.categoryCardName}>
                    {cat.icon} {cat.name} <span className={styles.categoryCardArrow}>→</span>
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUEEN WEST CORRIDOR COPY AROUND THE MENU ── */}
      <section className={styles.seoSection}>
        <div className={styles.container}>
          <div className={styles.seoPanel}>
            <h2 className={styles.seoPanelTitle}>Queen West cannabis at 1472 Queen St W — Parkdale edge, open 24 hours</h2>
            {HOME_CORRIDOR_COPY.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className={styles.seoPanelText}>
                {paragraph}
              </p>
            ))}
            <p className={styles.seoPanelText}>
              <Link href="/visit" className={styles.storeLink}>Read the Queen West visit guide</Link>
              {" · "}
              <Link href="/24-hour-queen-west-dispensary" className={styles.storeLink}>24-hour Queen West dispensary</Link>
              {" · "}
              <Link href="/cannabis-delivery-queen-west" className={styles.storeLink}>Cannabis delivery Queen West</Link>
              {" · "}
              <Link href="/native-cigarettes-queen-west" className={styles.storeLink}>Native cigarettes Queen West</Link>
              {" · "}
              <Link href="/nicotine-vape-queen-west" className={styles.storeLink}>Nicotine vape Queen West</Link>
              {" · "}
              <a href={`tel:${gbpLocation.phoneIntl}`} className={styles.storeLink}>{gbpLocation.phone}</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Strains</h2>
            <p className={styles.sectionSubtitle}>
              A rotating sample from the current flower menu.
            </p>
          </div>

          <div className={styles.featuredScroll}>
            {featuredStrains.map((strain, i) => (
              <div key={`${strain.sku}-${i}`} className={styles.scrollItem}>
                <FlowerCard flower={strain} tierKey={strain.tier} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT-SIDE CUSTOMER FEEDBACK SHOWCASE ── */}
      <section className={styles.reviewsSection}>
        <div className={styles.container}>
          <div className={styles.reviewsHeader}>
            <h2 className={styles.sectionTitle}>Customer Feedback</h2>
            {reviewsStats && (
              <div className={styles.reviewsStarsSummary}>
                <span className={styles.reviewsStars}>★★★★★</span>
                <span className={styles.reviewsAvg}>
                  {reviewsStats.avg.toFixed(1)}
                </span>
                <span className={styles.reviewsCount}>
                  ({reviewsStats.total} reviews)
                </span>
              </div>
            )}
          </div>

          <div className={styles.reviewsGrid}>
            {reviewsLoading ? (
              <div className={styles.reviewsLoading}>Loading customer feedback...</div>
            ) : reviews.length === 0 ? (
              <div className={styles.reviewsLoading}>
                Customer feedback is unavailable right now.
              </div>
            ) : (
              reviews.map((rv, idx) => (
                <div key={idx} className={styles.rvCard}>
                  <div className={styles.rvTop}>
                    <div className={styles.rvAvatar}>
                      {rv.name.charAt(0).toUpperCase()}
                    </div>
                    <div className={styles.rvMeta}>
                      <span className={styles.rvName}>{rv.name}</span>
                      {rv.date && (
                        <span className={styles.rvDate}>
                          {new Date(rv.date).toLocaleDateString("en-CA", {
                            year: "numeric",
                            month: "short",
                          })}
                        </span>
                      )}
                    </div>
                    <span className={styles.rvStars}>★★★★★</span>
                  </div>
                  <p className={styles.rvText}>
                    {rv.comment.length > 180 ? `${rv.comment.substring(0, 177)}...` : rv.comment}
                  </p>
                </div>
              ))
            )}
          </div>

          <div className={styles.reviewCtaRow}>
          </div>
        </div>
      </section>

      {/* ── FAQS SECTION ── */}
      <section className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <h2 className={styles.sectionTitle} style={{ textAlign: "center", marginBottom: "32px" }}>
            Frequently Asked Questions
          </h2>
          {LOCAL_FAQS.map((faq, i) => (
            <details key={i} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>{faq.q}</summary>
              <p className={styles.faqAnswer}>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── STORE LOCATION GRID (homepage NAP hub) ── */}
      <section className={styles.storeSection} id="contact" aria-labelledby="home-nap-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 id="home-nap-title" className={styles.sectionTitle}>Visit Queen Lansdowne Cannabis</h2>
            <p className={styles.sectionSubtitle}>
              Homepage NAP hub for this Queen West storefront. Same name, address, phone, and hours as the footer.
            </p>
          </div>
          <div className={styles.storeGrid}>
            <div className={styles.storeCard}>
              <span className={styles.storeIcon}>📍</span>
              <h3 className={styles.storeCardTitle}>Location</h3>
              <p className={styles.storeCardText}>
                Queen Lansdowne Cannabis
                <br />
                1472 Queen St W
                <br />
                Toronto, ON M6K 1M4
              </p>
            </div>
            <div className={styles.storeCard}>
              <span className={styles.storeIcon}>📞</span>
              <h3 className={styles.storeCardTitle}>Phone</h3>
              <p className={styles.storeCardText}>
                <a href={`tel:${gbpLocation.phoneIntl}`} className={styles.storeLink}>{gbpLocation.phone}</a>
              </p>
            </div>
            <div className={styles.storeCard}>
              <span className={styles.storeIcon}>🕒</span>
              <h3 className={styles.storeCardTitle}>Hours</h3>
              <p className={styles.storeCardText}>
                Open 7 Days a Week
                <br />
                <span className={styles.storeHighlight}>Open 24 Hours Daily</span>
              </p>
            </div>
            <div className={styles.storeCard}>
              <span className={styles.storeIcon}>🔥</span>
              <h3 className={styles.storeCardTitle}>Walk In</h3>
              <p className={styles.storeCardText}>
                Adults 19+ · government photo ID
                <br />
                <span className={styles.storeHighlight}>Queen Street West at the Parkdale edge</span>
              </p>
            </div>
          </div>

          <div className={styles.storeActions}>
            <Link href="/visit" className={styles.visitCta}>Queen West visit guide</Link>
            <Link href="/24-hour-queen-west-dispensary" className={styles.visitCtaSecondary}>24-hour Queen West hours</Link>
            <Link href="/cannabis-delivery-queen-west" className={styles.visitCtaSecondary}>Cannabis delivery Queen West</Link>
            <Link href="/native-cigarettes-queen-west" className={styles.visitCtaSecondary}>Native cigarettes Queen West</Link>
            <Link href="/nicotine-vape-queen-west" className={styles.visitCtaSecondary}>Nicotine vape Queen West</Link>
            <a
              href={gbpLocation.directionsUrl}
              className={styles.visitCtaSecondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Directions to 1472 Queen St W
            </a>
          </div>
          <StoreMeshNav currentPath="/" />

          <div className={styles.mapWrap}>
            <iframe
              title="Map of Queen Lansdowne Cannabis at 1472 Queen St W, Queen West"
              src={gbpLocation.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer />
    </main>
  );
}
