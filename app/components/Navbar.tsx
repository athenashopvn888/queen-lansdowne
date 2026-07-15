"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Navbar.module.css";

const ALL_LINKS = [
  { href: "/exotic", label: "Exotic" },
  { href: "/premium", label: "Premium" },
  { href: "/aaa", label: "AAA+" },
  { href: "/aa", label: "AA" },
  { href: "/budget", label: "Budget" },
  { href: "/items/edibles", label: "Edibles" },
  { href: "/items/prerolls", label: "Pre-Rolls" },
  { href: "/items/vapes", label: "Nic Vape" },
  { href: "/items/vape-disposables", label: "THC Vape" },
  { href: "/items/concentrates", label: "Concentrates" },
  { href: "/items/magic", label: "Magic Stuff" },
  { href: "/items/cigarettes", label: "Cigarettes" },
  { href: "/items/add-ons", label: "Accessories" },
  { href: "/delivery", label: "🚗 Delivery" },
  { href: "/careers/budtender", label: "Hiring" },
  { href: "/resources", label: "Resources" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar} id="main-nav">
      {/* Top bar — logo + hiring CTA */}
      <div className={styles.topBar}>
        <Link href="/" className={styles.logo} style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
          <img src="/storeFavicon.webp" alt="Queen Lansdowne Cannabis Logo" style={{ height: "30px", width: "30px", objectFit: "contain", borderRadius: "4px" }} />
          <span style={{
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
        <div className={styles.topBarRight}>
          <Link href="/careers/budtender" className={styles.open} aria-label="Join the Queen Lansdowne Cannabis team">
            <span className={styles.dot}></span>
            Join Team
          </Link>
        </div>
      </div>

      {/* Scrollable link bar */}
      <div className={styles.scrollBar}>
        <div className={styles.scrollInner}>
          {ALL_LINKS.map((link) => {
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
    </nav>
  );
}
