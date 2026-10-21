import type { Metadata } from "next";
import ResourceView from "./ResourceView";
import { getResourcePageByRoute, resourceCanonical } from "./resourceData";
import { stripCigarettePhrases } from "../lib/showCigarettes";

const page = getResourcePageByRoute("/resources");

export function generateMetadata(): Metadata {
  if (!page) return {};
  return {
    title: { absolute: stripCigarettePhrases(page.seoTitle) },
    description: stripCigarettePhrases(page.metaDescription),
    alternates: { canonical: resourceCanonical(page) },
    openGraph: {
      title: stripCigarettePhrases(page.seoTitle),
      description: stripCigarettePhrases(page.metaDescription),
      url: resourceCanonical(page),
      type: "website",
    },
  };
}

export default function ResourcesPage() {
  if (!page) return null;
  return <ResourceView page={page} />;
}
