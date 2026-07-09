import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Cannabis Blog & Guides — Queen Lansdowne Cannabis | Toronto",
  description: "Read the latest strain reviews, dosing guides, and cannabis news from Queen Lansdowne Cannabis in Toronto.",
  alternates: {
    canonical: "https://www.queenlansdownecannabis.ca/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
