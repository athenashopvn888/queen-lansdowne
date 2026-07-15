import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: "FAQ — Queen Lansdowne Cannabis | Toronto Dispensary Questions",
  description:
    "Frequently asked questions about Queen Lansdowne Cannabis in Toronto. Hours, location, products, pricing, bundle offers, and everything you need to know before visiting.",
  alternates: {
    canonical: "https://www.queenlansdownecannabis.ca/faq",
  },
};

const FAQ_CATEGORIES = [
  {
    title: "📍 Location & Hours",
    faqs: [
      { q: "Where is Queen Lansdowne Cannabis located?", a: "We are located at 1472 Queen St W, Toronto, ON M6K 1M4. We're easily accessible by TTC bus routes and close to major highways like the 401." },
      { q: "What are your hours?", a: "We are open daily from 10:00 AM to 03:00 AM. Walk in anytime — no appointment needed." },
      { q: "Is there parking nearby?", a: "Yes. Free street parking is available nearby on surrounding streets in the evenings. We're also easily accessible by local transit." },
      { q: "How far are you from Mississauga?", a: "We're just 5 minutes from the highways and central transit routes. We are centrally located and easy to reach." },
      { q: "What's the best way to get to Queen Lansdowne Cannabis?", a: "We're easily accessible by car, bus, or foot. We are easily accessible by car, local transit, or bus routes. Free parking is available on surrounding streets." },
    ],
  },
  {
    title: "🌿 Products & Menu",
    faqs: [
      { q: "What products do you carry?", a: "We carry over 200 strains of cannabis flower across 5 quality tiers (Exotic, Premium, AAA+, AA, Budget), plus edibles (gummies, chocolates, baked goods), vape pens, disposable vapes, concentrates (shatter, wax, hash, diamonds, live resin), pre-rolled joints, native cigarettes, and accessories." },
      { q: "Do you have a current menu?", a: "Yes. The online menu at queenlansdownecannabis.ca lists current menu items and prices. Check it before visiting because listings can change." },
      { q: "What are your flower tiers?", a: "The menu groups flower into Exotic, Premium, AAA+, AA, and Budget tiers. Each tier page shows its current prices and menu items." },
      { q: "Do you sell edibles?", a: "The menu includes an edibles category with gummies, chocolates, baked goods, and other formats when listed. Check the current menu before visiting." },
      { q: "Do you sell vapes?", a: "The menu includes categories for disposable vapes, refillable vape pens, nicotine vapes, and THC vapes. Check the current listings before visiting." },
      { q: "Do you sell native cigarettes?", a: "Yes! We carry one of the widest selections of native cigarettes in downtown Toronto, including premium and value brands in multiple varieties." },
    ],
  },
  {
    title: "💰 Pricing & Bundle Offers",
    faqs: [
      { q: "What is the cheapest weed you sell?", a: "Our Budget tier starts at $3/g with value ounces from $40. Our AA tier is $4/g. These are the most competitive prices you'll find in Toronto." },
      { q: "What bundle pricing do you offer?", a: "Flower bundle pricing includes a 3g total option — the 3g total is shown clearly before purchase. Our Exotic, Premium, and AAA+ tiers also offer 6g bundle pricing, with 6g total pricing." },
      { q: "Do you have ounce options?", a: "The menu lists ounce options and prices when offered. Check the relevant flower tier for current details." },
      { q: "How does bundle pricing work?", a: "The 3g bundle pricing applies to every tier automatically. The 6g bundle pricing applies to Exotic, Premium, and AAA+ tiers. These are our standard everyday bundle offers." },
      { q: "How does the tier pricing work?", a: "Each flower strain is graded into one of five quality tiers. The tier determines the per-gram price. This transparent system means you always know exactly what you're paying — no confusing markups or inconsistent pricing." },
    ],
  },
  {
    title: "🛒 Shopping & Experience",
    faqs: [
      { q: "Do I need an appointment?", a: "No! Queen Lansdowne Cannabis is walk-in only. Just show up anytime — we are open daily from 10:00 AM to 03:00 AM." },
      { q: "Can I order online?", a: "Currently, Queen Lansdowne Cannabis is an in-store shopping experience only. You can browse the current menu online before visiting." },
      { q: "Do you offer delivery?", a: "Delivery is coming soon! Visit our delivery page to sign up for email notifications when we launch our delivery service." },
      { q: "What payment methods do you accept?", a: "We accept cash and debit. No credit cards at this time." },
      { q: "Can your staff help me compare flower listings?", a: "Yes. Our staff can help you compare the category, package size, and posted details shown for current flower listings." },
      { q: "Is there a minimum purchase?", a: "No minimum purchase required. You can buy as little as 1 gram." },
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
              Call us at <strong>(647) 553-1472</strong> or visit us at 1472 Queen St W, Toronto.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
