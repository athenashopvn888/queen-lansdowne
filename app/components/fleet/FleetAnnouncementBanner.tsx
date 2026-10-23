"use client";
import CigaretteSeasonalNotice from "../CigaretteSeasonalNotice";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCigaretteState } from "../CigaretteStateProvider";
import FlowerBogoStrip from "../FlowerBogoStrip";
import { FLEET_COLORS } from "../../lib/fleet/config";
import type { ResolvedBanner } from "../../lib/fleet/types";

const STORE_NAME = "Queen Lansdowne Cannabis";
const STORE_AREA = "Queen Street West, Toronto";
const STORE_ORIGIN = "https://www.queenlansdownecannabis.ca";
const TOP_WEED_IMAGE = "/banners/top-weed-tier-qlc01.webp";
const CIGARETTE_IMAGE = "/banners/native-cigarette-offer-20260822.webp";
const VAPE_IMAGE = "/banners/core-vapes-nicotine-thc.webp";
const PREMIUM_CIGARETTE_IMAGE = "/banners/core-premium-bb-marlboro-belmont.webp";

function bannerImageObjects(showCigarettes: boolean) {
  return [
    { name: `${STORE_NAME} top weed tiers`, description: `Exotic, Premium and AAA+ weed tiers at ${STORE_NAME} in ${STORE_AREA}.`, contentUrl: `${STORE_ORIGIN}${TOP_WEED_IMAGE}` },
    { name: `${STORE_NAME} nicotine and THC vapes`, description: `Nicotine vapes and THC vapes at ${STORE_NAME} in ${STORE_AREA}.`, contentUrl: `${STORE_ORIGIN}${VAPE_IMAGE}` },
    ...(showCigarettes ? [
      { name: `${STORE_NAME} cigarette mix and match`, description: `Two packs for $5 mix and match and $25 carton cigarette offer at ${STORE_NAME} in ${STORE_AREA}.`, contentUrl: `${STORE_ORIGIN}${CIGARETTE_IMAGE}` },
      { name: `${STORE_NAME} premium cigarette offer`, description: `BB Full Flavor and Lights two packs for $5 plus Marlboro and Belmont for $10 per pack at ${STORE_NAME} in ${STORE_AREA}.`, contentUrl: `${STORE_ORIGIN}${PREMIUM_CIGARETTE_IMAGE}` },
    ] : []),
  ].map((image) => ({ "@type": "ImageObject", ...image, caption: image.description }));
}

function isHalloweenNoticeActive(date: Date) {
  const parts = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Toronto", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(date);
  const value = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  const dateKey = Number(`${value.year}${value.month}${value.day}`);
  return dateKey >= 20261014 && dateKey <= 20261031;
}

const figureStyle = { margin: 0, width: "100%" } as const;
const imageStyle = { display: "block", width: "100%", maxWidth: "100%", height: "auto" } as const;
const linkStyle = { display: "block", width: "100%" } as const;
const captionStyle = { margin: 0, padding: "14px 18px", background: "#111827", color: "#ffffff", textAlign: "center" as const, fontSize: "clamp(17px, 1.7vw, 28px)", fontWeight: 800, lineHeight: 1.35 };
const captionLinkStyle = { color: "inherit", textDecoration: "underline", textUnderlineOffset: "3px" } as const;
const sheetCaptionStyle = { margin: 0, padding: "10px 14px", background: FLEET_COLORS.banner, color: FLEET_COLORS.bannerText, textAlign: "center" as const, fontWeight: 800, lineHeight: 1.35 };

function BannerFigure({ banner }: { banner: ResolvedBanner }) {
  const [src, setSrc] = useState(banner.image);
  const [imageFailed, setImageFailed] = useState(false);
  const showText = banner.render === "text" || imageFailed || !src;
  const applyCodedFallback = () => {
    if (banner.codedImage && src !== banner.codedImage) { setSrc(banner.codedImage); return; }
    setImageFailed(true);
  };
  const useCodedFallback = applyCodedFallback;
  return (
    <figure data-core-banner={banner.id} style={figureStyle}>
      {showText ? (
        <div data-fleet-text-banner="" style={{ ...imageStyle, minHeight: banner.imageHeight || 180, display: "flex", alignItems: "center", justifyContent: "center", background: FLEET_COLORS.banner, color: FLEET_COLORS.bannerText, fontWeight: 800, fontSize: "clamp(28px, 4vw, 48px)" }}>{banner.categoryName}</div>
      ) : (
        <Link href={banner.href} style={linkStyle}>{/* eslint-disable-next-line @next/next/no-img-element */}<img key={src} src={src} alt={banner.alt} title={banner.title} width={banner.imageWidth} height={banner.imageHeight} style={imageStyle} ref={(node) => { if (node?.complete && node.naturalWidth === 0) applyCodedFallback(); }} onError={useCodedFallback} /></Link>
      )}
      <figcaption style={sheetCaptionStyle}>{banner.textBar}</figcaption>
    </figure>
  );
}

export default function FleetAnnouncementBanner({ banners }: { title?: string; banners?: ResolvedBanner[] } = {}) {
  const showCigarettes = useCigaretteState().web;
  const [showHalloweenNotice, setShowHalloweenNotice] = useState(false);
  useEffect(() => {
    const updateVisibility = () => setShowHalloweenNotice(isHalloweenNoticeActive(new Date()));
    updateVisibility();
    const timer = window.setInterval(updateVisibility, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const sheetBanners = banners?.filter((banner) => !banner.hidden && (showCigarettes || (banner.id !== "cigarettes" && banner.id !== "premium-cigarettes")));

  return (
    <aside data-fleet-homepage-announcement="" aria-label="Store announcements" style={{ display: "flex", flexDirection: "column", width: "100%", maxWidth: "100%", overflowX: "hidden", position: "relative", zIndex: 50 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": bannerImageObjects(showCigarettes) }).replace(/</g, "\\u003c") }} />

      {banners ? (
        <>
          {showCigarettes ? <CigaretteSeasonalNotice /> : null}
          {sheetBanners?.map((banner) => <BannerFigure key={banner.id} banner={banner} />)}
        </>
      ) : (
        <>
      <figure data-core-banner="weed" data-exotic-tier-banner="" style={figureStyle}>
        <Link href="/exotic-weed" aria-label={`Shop Exotic, Premium and AAA+ weed tiers at ${STORE_NAME}`} style={linkStyle}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={TOP_WEED_IMAGE} alt={`${STORE_NAME} in ${STORE_AREA} — Exotic, Premium and AAA+ top weed tiers`} title={`${STORE_NAME} top weed tiers — Exotic, Premium and AAA+`} style={imageStyle} />
        </Link>
        <figcaption style={captionStyle}>Buy 2g Get 1g FREE · Buy 3g Get 3g FREE · <Link href="/exotic-weed" style={captionLinkStyle}>Shop weed tiers</Link></figcaption>
      </figure>

      <figure data-core-banner="vapes" data-vape-banner="" style={figureStyle}>
        <Link href="/items/vapes" aria-label={`Shop nicotine vapes and THC vapes at ${STORE_NAME}`} style={linkStyle}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={VAPE_IMAGE} alt={`${STORE_NAME} in ${STORE_AREA} — nicotine vapes and THC vapes`} title={`${STORE_NAME} nicotine vapes and THC vapes`} style={imageStyle} loading="lazy" />
        </Link>
        <figcaption style={captionStyle}>Nicotine vapes + THC vapes · <Link href="/items/vapes" style={captionLinkStyle}>Shop vapes</Link></figcaption>
      </figure>

      {showCigarettes ? <CigaretteSeasonalNotice /> : null}

      {showCigarettes ? (
      <figure data-core-banner="cigarettes" data-cig-mix-banner="" style={figureStyle}>
        <Link href="/items/cigarettes" aria-label={`Shop cigarette mix and match offers at ${STORE_NAME}`} style={linkStyle}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={CIGARETTE_IMAGE} alt={`${STORE_NAME} in ${STORE_AREA} — 2 packs for $5 mix and match and $25 carton cigarette offer`} title={`${STORE_NAME} cigarette offer — 2 packs $5 mix and match, $25 carton`} style={imageStyle} loading="lazy" />
        </Link>
        <figcaption style={captionStyle}>2 packs $5 mix &amp; match · $25 carton · <Link href="/items/cigarettes" style={captionLinkStyle}>Shop cigarettes</Link></figcaption>
      </figure>
      ) : null}

      {showCigarettes ? (
      <figure data-core-banner="premium-cigarettes" data-premium-cigarette-banner="" style={figureStyle}>
        <Link href="/items/cigarettes" aria-label={`Shop BB, Marlboro and Belmont cigarette offers at ${STORE_NAME}`} style={linkStyle}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={PREMIUM_CIGARETTE_IMAGE} alt={`${STORE_NAME} in ${STORE_AREA} — BB Full Flavor and Lights 2 packs for $5, Marlboro and Belmont $10 per pack`} title={`${STORE_NAME} premium cigarettes — BB 2 packs $5, Marlboro and Belmont $10 per pack`} style={imageStyle} loading="lazy" />
        </Link>
        <figcaption style={captionStyle}>BB Full Flavor + Lights — 2 packs $5 · Marlboro &amp; Belmont — $10/pack · <Link href="/items/cigarettes" style={captionLinkStyle}>Shop cigarettes</Link></figcaption>
      </figure>
      ) : null}
        </>
      )}

      <FlowerBogoStrip hero />
      {showHalloweenNotice ? <p data-halloween-hours-notice="">Happy Halloween! {STORE_NAME} is open regular hours on Saturday, October 31.</p> : null}
    </aside>
  );
}
