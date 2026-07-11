"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./blog.module.css";
import { STATIC_POSTS } from "./staticPosts";

export default function BlogContent() {
  return (
    <main className={styles.main}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroH1}>
            Queen Lansdowne Cannabis <span className={styles.heroAccent}>Blog</span>
          </h1>
          <p className={styles.heroSub}>
            Real-world menu tips for Queen West shoppers who want the right page, the right category, and fewer wasted clicks.
          </p>
        </div>
      </section>

      <section className={styles.postsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Menu Guides for Real Shoppers</h2>
          <div className={styles.postsGrid}>
            {[...STATIC_POSTS].sort((a, b) => b.date.localeCompare(a.date)).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.postCard}>
                <div className={styles.postEmoji}>Read</div>
                <div className={styles.postMeta}>
                  <span className={styles.postCategory}>{post.category}</span>
                  <span className={styles.postDot}>-</span>
                  <span className={styles.postTime}>{post.readTime}</span>
                </div>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <div className={styles.postDate}>
                  {new Date(post.date).toLocaleDateString("en-CA", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Shop the Live Menu</h2>
          <p className={styles.ctaSub}>
            Check current categories, prices, and listings before heading over. If one item makes the trip, ask the store first.
          </p>
          <div className={styles.ctaBtns}>
            <Link href="/weed-dispensary-toronto" className={styles.ctaBtn}>
              Store Page
            </Link>
            <Link href="/faq" className={styles.ctaBtnSecondary}>
              FAQ
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
