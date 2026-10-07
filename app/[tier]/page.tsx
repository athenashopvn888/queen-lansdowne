import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FlowerCard from "../components/FlowerCard";
import {
  fetchLiveProducts,
  getTierFromSlug,
  TIER_CONFIG,
} from "../lib/products";
import { TIER_SEO } from "../lib/tierSeoContent";
import { JsonLd } from "../lib/jsonLd";
import { STORE_ORIGIN, STORE_ID, faqPageJsonLd } from "../lib/gbp-location";
import { getTierGuideLinks } from "../lib/guideRegistry";
import { formatAsLowAsAfterPromos, formatPerGram, isBogoDeal, type BoardDeal } from "../lib/flowerDeals";
import styles from "./tier.module.css";

/* -- Generate all tier pages at build -- */
export function generateStaticParams() {
  return Object.values(TIER_CONFIG).map((t) => ({ tier: t.slug }));
}

/* -- Dynamic SEO metadata -- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ tier: string }>;
}): Promise<Metadata> {
  const { tier: tierSlug } = await params;
  const tierInfo = getTierFromSlug(tierSlug);
  if (!tierInfo) return {};
  const { flowers: liveFlowers } = await fetchLiveProducts();
  const flowers = liveFlowers.filter((flower) => flower.tier.toUpperCase() === tierInfo.key.toUpperCase());
  const seo = TIER_SEO[tierInfo.key];

  return {
    title: seo?.seoTitle
      ? { absolute: seo.seoTitle }
      : `${tierInfo.config.name} Cannabis Flower — ${flowers.length} Strains`,
    description: seo?.metaDescription || `Shop ${flowers.length} ${tierInfo.config.name.toLowerCase()} cannabis strains at Queen Lansdowne Cannabis.`,
    alternates: {
      canonical: `${STORE_ORIGIN}/${tierSlug}`,
    },
    openGraph: {
      title: `${tierInfo.config.name} Flower | Queen Lansdowne Cannabis`,
      description: `Explore the ${tierInfo.config.name} & Cannabis Flower collection from Queen Lansdowne Cannabis in Toronto.`,
    },
  };
}

/* -- Page component -- */
export default async function TierPage({
  params,
}: {
  params: Promise<{ tier: string }>;
}) {
  const { tier: tierSlug } = await params;
  const tierInfo = getTierFromSlug(tierSlug);
  if (!tierInfo) notFound();

  const { flowers: liveFlowers } = await fetchLiveProducts();
  const flowers = liveFlowers.filter((flower) => flower.tier.toUpperCase() === tierInfo.key.toUpperCase());
  const { config } = tierInfo;
  const seo = TIER_SEO[tierInfo.key];
  const guideLinks = getTierGuideLinks(`/${tierSlug}`);

  const saleFlowers = flowers.filter((f) => f.isSale);
  const regularFlowers = flowers.filter((f) => !f.isSale);
  const hotFlowers = flowers.filter((f) => f.isHot);

  // Check if banner file exists in the public folder
  const bannerExists = config.banner
    ? fs.existsSync(path.join(process.cwd(), "public", config.banner))
    : false;

  const pageUrl = `${STORE_ORIGIN}/${tierSlug}`;
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: seo?.h1 || config.name,
    description: seo?.metaDescription || `${config.name} flower at Queen Lansdowne Cannabis on Queen West.`,
    isPartOf: { "@type": "WebSite", "@id": `${STORE_ORIGIN}/#website` },
    about: { "@id": STORE_ID },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: flowers.length,
      itemListElement: flowers.map((flower, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: flower.name,
        url: `${STORE_ORIGIN}/flower/${flower.slug}`,
      })),
    },
  };

  return (
    <main className={styles.main}>
      <JsonLd data={collectionJsonLd} />
      {seo?.faqs?.length ? <JsonLd data={faqPageJsonLd(seo.faqs, pageUrl)} /> : null}
      <Navbar />

      {/* ── Banner Image (standalone, no overlay text) ── */}
      {bannerExists && (
        <section className={styles.bannerSection}>
          <img
            src={config.banner}
            alt={`${config.name} Cannabis Flower — ${config.tagline}`}
            className={styles.bannerImg}
          />
        </section>
      )}

      {/* ── Hero Content BELOW banner ── */}
      <section
        className={styles.heroInfo}
        style={{ "--tier-color": config.color } as React.CSSProperties}
      >
        <div className={styles.heroInfoInner}>
          <div className={styles.heroLeft}>
            <div className={styles.heroTitleRow}>
              <span className={styles.heroIcon}>{config.icon}</span>
              <h1 className={styles.heroTitle}>
                <span style={{ color: config.color }}>{seo?.h1 || config.name}</span>
              </h1>
            </div>
            <p className={styles.heroTagline}>{config.tagline}</p>
            <div className={styles.heroStats}>
              <span className={styles.stat}>
                <strong>{flowers.length}</strong> strains
              </span>
              {saleFlowers.length > 0 && (
                <span className={styles.statSale}>
                  🔥 {saleFlowers.length} on sale
                </span>
              )}
              {hotFlowers.length > 0 && (
                <span className={styles.statHot}>
                  ⚡ {hotFlowers.length} hot picks
                </span>
              )}
            </div>
          </div>

          <div className={styles.heroRight}>
            {isBogoDeal(config.deal6g) ? <><p className={styles.asLowAsBanner}>{formatAsLowAsAfterPromos(config.deal6g.price, config.deal6g.grams)}</p><p className={styles.listAnchor}>List ${config.unitPrice}/g</p></> : <div className={styles.unitPriceBox}><span className={styles.unitPriceLabel}>Starting at</span><span className={styles.unitPriceValue}>${config.unitPrice}/g</span></div>}

            {(config.deal3g || config.deal6g) && (
            <div className={styles.dealRow}>
              {[config.deal3g, config.deal6g].filter((deal): deal is BoardDeal => deal !== null).map((deal) => <div className={styles.dealBox} key={deal.total}><div className={styles.dealLabel}>{isBogoDeal(deal) ? deal.label : `🎁 ${deal.label}`}</div><div className={styles.dealPrice}>{isBogoDeal(deal) ? <>Pay <strong>${deal.price}</strong> = {deal.grams}g</> : <>= <strong>${deal.price}</strong> / {deal.total}</>}</div>{isBogoDeal(deal) ? <div className={styles.dealMeta}>{formatPerGram(deal.price, deal.grams)} · {deal.equals}</div> : null}</div>)}
            </div>
            )}
          </div>
        </div>
      </section>

      {guideLinks.length > 0 && (
        <nav className={styles.guideStrip} aria-label={`Popular ${config.name} strain guides`}>
          <h2>Popular strain guides</h2>
          <div className={styles.guideLinks}>
            {guideLinks.map((guide) => <Link key={guide.slug} href={`/guides/${guide.slug}`}>{guide.name}</Link>)}
          </div>
        </nav>
      )}

      {/* ── Product grid ── */}
      <section className={styles.products}>
        <div className={styles.container}>
          {saleFlowers.length > 0 && (
            <>
              <h2 className={styles.sectionTitle}>
                🔥 <span style={{ color: "#f43f5e" }}>On Sale</span>
              </h2>
              <div className={styles.grid}>
                {saleFlowers.map((f) => (
                  <FlowerCard
                    key={`${f.sku}-${f.slug}`}
                    flower={f}
                    tierKey={tierInfo.key}
                  />
                ))}
              </div>
            </>
          )}

          <h2 className={styles.sectionTitle}>
            All{" "}
            <span style={{ color: config.color }}>{config.name}</span>{" "}
            Strains
          </h2>
          <div className={styles.grid}>
            {regularFlowers.map((f) => (
              <FlowerCard
                key={`${f.sku}-${f.slug}`}
                flower={f}
                tierKey={tierInfo.key}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO Content ── */}
      {seo && (
        <section className={styles.seoSection}>
          <div className={styles.container}>
            <p className={styles.seoIntro}>{seo.intro}</p>

            {seo.sections.map((s, i) => (
              <div key={i} className={styles.seoBlock}>
                <h3 className={styles.seoHeading}>{s.heading}</h3>
                <p className={styles.seoBody}>{s.body}</p>
              </div>
            ))}

            <nav className={styles.relatedLinks} aria-label={`${config.name} weed and flower links`}>
              {seo.relatedLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
            </nav>

            {/* FAQ Accordion */}
            {seo.faqs.length > 0 && (
              <div className={styles.faqSection}>
                <h3 className={styles.seoHeading}>Frequently Asked Questions</h3>
                {seo.faqs.map((faq, i) => (
                  <details key={i} className={styles.faqItem}>
                    <summary className={styles.faqQuestion}>{faq.q}</summary>
                    <p className={styles.faqAnswer}>{faq.a}</p>
                  </details>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
