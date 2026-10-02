"use client";
import CohortDeliveryActions from "./CohortDeliveryActions";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { HOURS_LP_PATH, storeClaimsOpen24Hours } from "../lib/gbp-location";
import styles from "./Navbar.module.css";
import FlowerBogoStrip from "./FlowerBogoStrip";

const ALL_LINKS = [
  { href: "/exotic-weed", label: "Exotic Weed" },
  { href: "/premium-weed", label: "Premium Weed" },
  { href: "/aaa-weed", label: "AAA+ Weed" },
  { href: "/aa-weed", label: "AA Weed" },
  { href: "/budget-weed", label: "Budget Weed" },
  { href: "/items/edibles", label: "Edibles" },
  { href: "/items/prerolls", label: "Pre-Rolls" },
  { href: "/items/vapes", label: "Nicotine Vape" },
  { href: "/items/vape-disposables", label: "THC Vape" },
  { href: "/items/concentrates", label: "Concentrates" },
  { href: "/items/magic", label: "Magic Stuff" },
  { href: "/items/cigarettes", label: "Cigarettes" },
  { href: "/items/add-ons", label: "Accessories" },
  { href: "/weed-delivery-toronto", label: "🚗 Weed Delivery" },
  { href: "/visit", label: "Visit Queen West" },
  { href: "/24-hour-queen-west-dispensary", label: "Open Now · 24 Hours" },
  { href: "/careers/budtender", label: "Hiring" },
  { href: "/resources", label: "Resources" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ALL_LINKS.filter((link) => link.href !== HOURS_LP_PATH || storeClaimsOpen24Hours());
  const storeMenuLinks = ALL_LINKS.filter((link) => link.href.startsWith("/items/") || ["/exotic-weed", "/premium-weed", "/aaa-weed", "/aa-weed", "/budget-weed"].includes(link.href));
  const isStoreMenuActive = storeMenuLinks.some((link) => pathname === link.href);
  const isDeliveryActive = pathname === "/weed-delivery-toronto" || pathname === "/cannabis-delivery-queen-west";
  const scrollBarRef = useRef<HTMLDivElement>(null);
  const [canAdvance, setCanAdvance] = useState(false);
  const updateScrollState = useCallback(() => { const scrollBar = scrollBarRef.current; if (!scrollBar) return; setCanAdvance(scrollBar.scrollWidth - scrollBar.clientWidth - scrollBar.scrollLeft > 2); }, []);
  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => { const scrollBar = scrollBarRef.current; if (!scrollBar) return; updateScrollState(); scrollBar.addEventListener("scroll", updateScrollState, { passive: true }); window.addEventListener("resize", updateScrollState); const resizeObserver = new ResizeObserver(updateScrollState); resizeObserver.observe(scrollBar); if (scrollBar.firstElementChild) resizeObserver.observe(scrollBar.firstElementChild); return () => { scrollBar.removeEventListener("scroll", updateScrollState); window.removeEventListener("resize", updateScrollState); resizeObserver.disconnect(); }; }, [pathname, updateScrollState]);
  const advanceScrollBar = () => { const scrollBar = scrollBarRef.current; if (!scrollBar) return; const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches; scrollBar.scrollBy({ left: Math.max(180, scrollBar.clientWidth * 0.75), behavior: reduceMotion ? "auto" : "smooth" }); };

  return (
    <nav className={styles.navbar} id="main-nav">
      {/* Top bar — logo + hiring CTA */}
      <div className={styles.topBar}>
        <Link href="/" className={styles.logo} aria-label="Queen Lansdowne Cannabis" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
          <img src="/storeFavicon.webp" alt="Queen Lansdowne Cannabis Logo" style={{ height: "30px", width: "30px", objectFit: "contain", borderRadius: "4px" }} />
          <span className={styles.brand} style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "18px",
            letterSpacing: "0.04em",
            color: "white",
            textShadow: "0 0 12px rgba(255,255,255,0.2)"
          }}>
            QUEEN LANSDOWNE CANNABIS
          </span>
        </Link>
        <button
          type="button"
          className={styles.menuToggle}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-store-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg className={styles.menuToggleIcon} viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
            <path d="M4 6h16M4 12h16M4 18h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <div className={styles.topBarRight}>
          <div className={styles.menuChoices} aria-label="Choose a menu">
            <Link
              href="/exotic-weed"
              className={`${styles.menuChoice} ${isStoreMenuActive ? styles.menuChoiceActive : ""}`}
              aria-current={isStoreMenuActive ? "page" : undefined}
            >
              STORE MENU
            </Link>
            <Link
              href="/weed-delivery-toronto"
              className={`${styles.menuChoice} ${styles.deliveryMenuChoice} ${isDeliveryActive ? styles.menuChoiceActive : ""}`}
              aria-current={isDeliveryActive ? "page" : undefined}
            >
              WEED DELIVERY
            </Link>
          </div>
          <Link href="/careers/budtender" className={styles.open} aria-label="Join the Queen Lansdowne Cannabis team">
            <span className={styles.dot}></span>
            Join Team
          </Link>
        </div>
      </div>

      {/* Scrollable link bar */}
      <div className={styles.scrollShell}>
        <div ref={scrollBarRef} id="store-menu-scrollbar" className={styles.scrollBar}>
          <div className={styles.scrollInner}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.pill} ${isActive ? styles.pillActive : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
          </div>
        </div>
        {canAdvance && <button type="button" className={styles.scrollAdvance} aria-label="Show more navigation links" aria-controls="store-menu-scrollbar" onClick={advanceScrollBar}><span aria-hidden="true">›</span></button>}
      </div>
      <div id="mobile-store-menu" className={`${styles.mobilePanel} ${menuOpen ? styles.mobilePanelOpen : ""}`} hidden={!menuOpen}>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className={styles.mobileLink} aria-current={pathname === link.href ? "page" : undefined}>
            {link.label}
          </Link>
        ))}
      </div>
      <CohortDeliveryActions />
      {pathname !== "/" ? <FlowerBogoStrip /> : null}
    </nav>
  );
}
