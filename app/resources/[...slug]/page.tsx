import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResourceView from "../ResourceView";
import { getResourcePageBySlugParts, getResourceStaticParams, resourceCanonical } from "../resourceData";
import { TRICHOMES_FROST_EXPLAINED_ROUTE } from "../trichomesFrostExplained.ts";
import { stripCigarettePhrases } from "../../lib/showCigarettes";

type ResourceRouteProps = {
  params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
  return getResourceStaticParams();
}

export async function generateMetadata({ params }: ResourceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getResourcePageBySlugParts(slug);
  if (!page) return {};
  return {
    title: { absolute: stripCigarettePhrases(page.seoTitle) },
    description: stripCigarettePhrases(page.metaDescription),
    alternates: { canonical: resourceCanonical(page) },
    ...(page.route === TRICHOMES_FROST_EXPLAINED_ROUTE
      ? {
          robots: {
            index: true,
            follow: true,
            googleBot: {
              index: true,
              follow: true,
              "max-image-preview": "large" as const,
              "max-snippet": -1,
              "max-video-preview": -1,
            },
          },
        }
      : {}),
    openGraph: {
      title: stripCigarettePhrases(page.seoTitle),
      description: stripCigarettePhrases(page.metaDescription),
      url: resourceCanonical(page),
      type: page.kind === "article" || page.kind === "update" ? "article" : "website",
    },
  };
}

export default async function ResourceRoute({ params }: ResourceRouteProps) {
  const { slug } = await params;
  const page = getResourcePageBySlugParts(slug);
  if (!page) notFound();
  return <ResourceView page={page} />;
}
