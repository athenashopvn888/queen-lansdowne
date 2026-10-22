import type { Metadata } from "next";
import Link from "next/link";
import { notFound, unstable_rethrow } from "next/navigation";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { loadFleetArticles, mergeArticleLinks } from "../lib/fleet/articles";
import { FLEET_ARTICLES_PATH, FLEET_ORIGIN, resourceRouteSlugs } from "../lib/fleet/config";
import { isCigaretteHref, SHOW_CIGARETTES } from "../lib/showCigarettes";
import { RESOURCE_PAGES } from "../resources/resourceData";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Articles",
  description: "Guides and articles from Queen Lansdowne Cannabis.",
  alternates: { canonical: `${FLEET_ORIGIN}${FLEET_ARTICLES_PATH}` },
};

function codedLinks() {
  return RESOURCE_PAGES.filter((page) => page.route.startsWith("/resources/") && (SHOW_CIGARETTES || !isCigaretteHref(page.route))).map((page) => ({
    slug: page.route.slice("/resources/".length),
    title: page.h1,
    href: page.route,
  }));
}

export default async function ArticlesPage() {
  let links: ReturnType<typeof mergeArticleLinks> | null = null;
  try {
    const loaded = await loadFleetArticles();
    if (!loaded.ok) notFound();
    const reserved = resourceRouteSlugs(RESOURCE_PAGES.map((page) => page.route));
    links = mergeArticleLinks(codedLinks(), loaded.articles.filter((article) => !reserved.has(article.slug)));
  } catch (error) {
    unstable_rethrow(error);
    notFound();
  }
  if (!links) notFound();
  return (
    <>
      <Navbar />
      <main>
        <h1>Articles</h1>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
