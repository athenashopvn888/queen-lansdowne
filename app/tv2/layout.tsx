import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Queen Lansdowne In-Store Accessories Display",
  description: "Operational in-store accessories menu display for Queen Lansdowne Cannabis.",
  robots: { index: false, follow: false },
};

export default function TvTwoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
