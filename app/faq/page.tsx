import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: "FAQ — Queen Lansdowne Cannabis | Toronto Dispensary Questions",
  description:
    "Frequently asked questions about Queen Lansdowne Cannabis in Toronto, including location, store information, menu categories and visit planning.",
  alternates: {
    canonical: "https://www.queenlansdownecannabis.ca/faq",
  },
};

const FAQ_CATEGORIES = [
  {
    title: "📍 Location & Hours",
    faqs: [
      { q: "Where is Queen Lansdowne Cannabis located?", a: "We are located at 1472 Queen St W, Toronto, ON M6K 1M4. Use your preferred maps or transit service for current directions and travel information." },
      { q: "What are your hours?", a: "We are open 24 hours daily. Walk in anytime — no appointment needed." },
      { q: "Is parking information available for Queen Lansdowne Cannabis?", a: "Check current local parking signs and restrictions before your visit." },
      { q: "How can I plan a visit to Queen Lansdowne Cannabis?", a: "Use your preferred maps or transit service for current directions and travel information." },
    ],
  },
  {
    title: "🌿 Products & Menu",
    faqs: [
      { q: "What products do you carry?", a: "Explore Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed, plus the current edibles, pre-rolls, vape, concentrate, Native Smokes and accessory categories while you browse." },
      { q: "Do you have a current menu?", a: "Yes. The online menu at queenlansdownecannabis.ca lists current menu items and prices. Check it before visiting because listings can change." },
      { q: "What are your flower tiers?", a: "Queen Lansdowne Cannabis organizes flower into Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed collections." },
      { q: "Do you sell edibles?", a: "The menu includes an edibles category with gummies, chocolates, baked goods, and other formats when listed. Check the current menu before visiting." },
      { q: "Do you sell vapes?", a: "The menu includes categories for disposable vapes, refillable vape pens, nicotine vapes, and THC vapes. Check the current listings before visiting." },
      { q: "Where can I browse Native Smokes?", a: "Explore the Native Smokes section at Queen Lansdowne Cannabis." },
    ],
  },
  {
    title: "🌿 Product Information",
    faqs: [
      { q: "Where can I find current product information?", a: "Use the current menu, flower collections and individual product information while browsing Queen Lansdowne Cannabis." },
      { q: "Can I compare flower collections?", a: "Explore Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed, then open the individual product information that interests you." },
    ],
  },
  {
    title: "🛒 Shopping & Experience",
    faqs: [
      { q: "Do I need an appointment?", a: "No! Queen Lansdowne Cannabis is walk-in only. Just show up anytime — we are open 24 hours daily." },
      { q: "Can I order online?", a: "Yes. Browse the delivery menu and use LIVE ORDER to start your order with the dispatcher." },
      { q: "Do you offer delivery?", a: "Yes. Delivery ordering is available daily from 10:00 a.m. to 10:00 p.m. through our delivery menu. The dispatcher confirms order details and eligibility." },
      { q: "What payment methods can I use?", a: "Check the current checkout or in-store information for available payment options." },
      { q: "Can your staff help me compare flower listings?", a: "Yes. Our staff can help you compare the category, package size, and posted details shown for current flower listings." },
      { q: "Is there a minimum purchase?", a: "Refer to the current menu or in-store information for any purchase requirements that apply." },
    ],
  },
];

export default function FAQPage() {
  // JSON-LD for FAQ page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_CATEGORIES.flatMap((cat) =>
      cat.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className={styles.main}>
        <Navbar />

        {/* FAQ Banner */}
        <section style={{ width: "100%", overflow: "hidden", marginTop: "92px" }}>
          <img
            src="/banners/07_FAQ.webp"
            alt="Queen Lansdowne Cannabis FAQ — Your Questions Answered"
            style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}
          />
        </section>

        <div className={styles.content}>
          <h1 className={styles.pageTitle}>Frequently Asked Questions</h1>
          <p className={styles.pageSubtitle}>
            Everything you need to know about Queen Lansdowne Cannabis — Toronto&apos;s premium dispensary at 1472 Queen St W in Toronto.
          </p>

          {FAQ_CATEGORIES.map((cat) => (
            <div key={cat.title} className={styles.category}>
              <h2 className={styles.categoryTitle}>{cat.title}</h2>
              {cat.faqs.map((faq) => (
                <details key={faq.q} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{faq.q}</summary>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </details>
              ))}
            </div>
          ))}

          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Still have questions?</h2>
            <p className={styles.ctaText}>
              Call us at <strong>+1 (437) 293-8580</strong> or visit us at 1472 Queen St W, Toronto.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
