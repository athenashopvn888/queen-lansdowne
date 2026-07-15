import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Application Review",
  description: "Redirects to the private hiring application dashboard.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BudtenderApplicationReviewPage() {
  redirect(process.env.ATHENA_HIRING_DASHBOARD_URL || "https://athena-hiring.vercel.app");
}
