import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Cannabis Flower | Queen Lansdowne Cannabis Toronto",
  description:
    "Browse Queen Lansdowne Cannabis flower category pages in Toronto. Use this overview to choose Exotic, Premium, AAA+, AA, or Budget flower tiers and review store details before visiting.",
  alternates: {
    canonical: "https://queenlansdownecannabis.ca/flower",
  },
};

const faqs = [
  {
    question: "How is cannabis flower organized on this website?",
    answer:
      "Queen Lansdowne Cannabis organizes flower into tier pages, including Exotic, Premium, AAA+, AA, and Budget. Use this overview to choose the flower category page you want to review.",
  },
  {
    question: "Does this page show every current flower product?",
    answer:
      "This overview links to flower tier pages. Product selection can change, so review the linked category pages and confirm current store details before visiting.",
  },
  {
    question: "Which flower tier should I browse first?",
    answer:
      "Start with the tier page that matches the category you want to review. Each tier page gives adult shoppers a separate way to browse Queen Lansdowne Cannabis flower information.",
  },
];

export default function FlowerOverviewPage() {
  return (
    <main style={styles.page}>
      <Navbar />

      <section style={styles.hero}>
        <div style={styles.inner}>
          <p style={styles.eyebrow}>Queen Lansdowne Cannabis</p>
          <h1 style={styles.title}>Cannabis Flower Categories</h1>
          <p style={styles.lede}>
            Browse Queen Lansdowne Cannabis flower tier pages, including Exotic,
            Premium, AAA+, AA, and Budget. Use the linked category pages to
            review flower information and confirm current store details before
            visiting.
          </p>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.inner}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.heading}>Browse Flower Tiers</h2>
            <p style={styles.copy}>
              This overview helps adult shoppers choose the current flower tier
              page that matches the category they want to review. It does not
              promise exact product selection.
            </p>
          </div>

          <div style={styles.grid}>
            <Link href="/exotic" style={{ ...styles.card, borderColor: "#f59e0b" }}>
              <span style={styles.cardLabel}>Exotic Flower</span>
              <span style={styles.cardText}>Browse the Exotic flower tier page.</span>
            </Link>
            <Link href="/premium" style={{ ...styles.card, borderColor: "#a78bfa" }}>
              <span style={styles.cardLabel}>Premium Flower</span>
              <span style={styles.cardText}>Browse the Premium flower tier page.</span>
            </Link>
            <Link href="/aaa" style={{ ...styles.card, borderColor: "#22d3ee" }}>
              <span style={styles.cardLabel}>AAA+ Flower</span>
              <span style={styles.cardText}>Browse the AAA+ flower tier page.</span>
            </Link>
            <Link href="/aa" style={{ ...styles.card, borderColor: "#34d399" }}>
              <span style={styles.cardLabel}>AA Flower</span>
              <span style={styles.cardText}>Browse the AA flower tier page.</span>
            </Link>
            <Link href="/budget" style={{ ...styles.card, borderColor: "#94a3b8" }}>
              <span style={styles.cardLabel}>Budget Flower</span>
              <span style={styles.cardText}>Browse the Budget flower tier page.</span>
            </Link>
          </div>
        </div>
      </section>

      <section style={styles.sectionAlt}>
        <div style={styles.inner}>
          <h2 style={styles.heading}>Flower Overview</h2>
          <p style={styles.copy}>
            Queen Lansdowne Cannabis uses flower tier pages to organize cannabis
            flower information for adult shoppers in Toronto. This flower
            overview page helps visitors choose between the tier pages without
            making product, review, or unsupported route claims.
          </p>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.inner}>
          <h2 style={styles.heading}>Flower Questions</h2>
          <div style={styles.faqList}>
            <details style={styles.faqItem}>
              <summary style={styles.faqQuestion}>{faqs[0].question}</summary>
              <p style={styles.faqAnswer}>{faqs[0].answer}</p>
            </details>
            <details style={styles.faqItem}>
              <summary style={styles.faqQuestion}>{faqs[1].question}</summary>
              <p style={styles.faqAnswer}>{faqs[1].answer}</p>
            </details>
            <details style={styles.faqItem}>
              <summary style={styles.faqQuestion}>{faqs[2].question}</summary>
              <p style={styles.faqAnswer}>{faqs[2].answer}</p>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#020617",
    color: "#f8fafc",
  },
  hero: {
    padding: "150px 20px 72px",
    borderBottom: "1px solid rgba(148, 163, 184, 0.16)",
    background: "linear-gradient(180deg, #020617 0%, #07111f 100%)",
  },
  inner: {
    width: "min(1120px, 100%)",
    margin: "0 auto",
  },
  eyebrow: {
    margin: "0 0 14px",
    color: "#c084fc",
    fontSize: "14px",
    fontWeight: 800,
    textTransform: "uppercase",
  },
  title: {
    margin: 0,
    fontSize: "clamp(42px, 8vw, 86px)",
    lineHeight: 0.95,
    letterSpacing: 0,
  },
  lede: {
    margin: "24px 0 0",
    maxWidth: "760px",
    color: "#cbd5e1",
    fontSize: "clamp(18px, 2.6vw, 24px)",
    lineHeight: 1.55,
  },
  section: {
    padding: "64px 20px",
  },
  sectionAlt: {
    padding: "64px 20px",
    background: "#07111f",
    borderTop: "1px solid rgba(148, 163, 184, 0.16)",
    borderBottom: "1px solid rgba(148, 163, 184, 0.16)",
  },
  sectionHeader: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "28px",
    alignItems: "start",
    marginBottom: "28px",
  },
  heading: {
    margin: 0,
    fontSize: "clamp(28px, 5vw, 48px)",
    lineHeight: 1.05,
    letterSpacing: 0,
  },
  copy: {
    margin: 0,
    color: "#cbd5e1",
    fontSize: "17px",
    lineHeight: 1.7,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
    gap: "16px",
  },
  card: {
    display: "flex",
    minHeight: "150px",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "24px",
    padding: "22px",
    border: "1px solid rgba(148, 163, 184, 0.26)",
    borderRadius: "8px",
    background: "#0f172a",
    color: "#f8fafc",
    textDecoration: "none",
  },
  cardLabel: {
    fontSize: "22px",
    fontWeight: 900,
  },
  cardText: {
    color: "#cbd5e1",
    fontSize: "15px",
    lineHeight: 1.45,
  },
  faqList: {
    display: "grid",
    gap: "12px",
    marginTop: "24px",
  },
  faqItem: {
    border: "1px solid rgba(148, 163, 184, 0.22)",
    borderRadius: "8px",
    background: "#0f172a",
    padding: "18px 20px",
  },
  faqQuestion: {
    cursor: "pointer",
    fontWeight: 900,
    fontSize: "17px",
  },
  faqAnswer: {
    margin: "14px 0 0",
    color: "#cbd5e1",
    lineHeight: 1.65,
  },
};
