/**
 * Site-wide cigarette and tobacco visibility.
 *
 * SHOW_CIGARETTES defaults to false. Set NEXT_PUBLIC_SHOW_CIGARETTES=true
 * to recall every gated surface. An explicit env value wins; otherwise
 * SHOW_CIGARETTES_CONFIG is used.
 */
const SHOW_CIGARETTES_CONFIG = false;

function readShowCigarettesEnv(): boolean | undefined {
  const raw = process.env.NEXT_PUBLIC_SHOW_CIGARETTES;
  if (raw == null || raw.trim() === "") return undefined;
  if (raw === "true" || raw === "1") return true;
  if (raw === "false" || raw === "0") return false;
  return undefined;
}

export const SHOW_CIGARETTES = readShowCigarettesEnv() ?? SHOW_CIGARETTES_CONFIG;

/** Neighbourhood vape page. Hidden cigarette URLs 302 here. */
export const CIGARETTE_REDIRECT_TARGET = "/vape-shop-queen-west";

/** Rolling papers, Backwoods, and cigarillos stay on the menu either way. */
const KEPT_SLUG_MARKERS = ["backwood", "cigarillo", "rolling-paper", "rolling paper", "raw-paper", "raw paper"];

const HIDDEN_ITEM_SLUGS = [
  "canadian-lights",
  "canadian-full",
  "putters",
  "canadian-goose-full",
  "canadian-goose-lights",
  "canadian-menthol",
  "canadian-classics-original",
  "canadian-classics-silver",
  "rolled-gold-lights",
  "nexus-full",
  "nexus-lights",
  "time-full",
  "grabba",
  "grabba-shaker-redrose-red-herring",
  "grabba-redrose-redherring",
  "grabba-shaker-redrose-red-herring-x2-available",
  "10-x-premium-mix-cigarettes",
  "bb-full-carton",
  "bb-lights-carton",
  "belmont-king-size-pack-only",
] as const;

const HIDDEN_GUIDE_SLUGS = [
  "canadian-classics",
  "nexus-cigarettes",
  "canadian-goose",
  "putters",
  "time-cigarettes",
  "rolled-gold",
  "canadian-cigarettes",
  "grabba",
  "playfares",
  "bb-cigarettes",
  "dks-cigarettes",
  "belmont-king-size",
] as const;

const HIDDEN_PAGE_PATHS = [
  "/cigarettes",
  "/native-cigarettes-queen-west",
  "/info/native-cigarettes-toronto",
  "/info/native-cigarettes-york",
  "/resources/native-smokes",
  "/resources/native-smokes/native-cigarettes-guide",
  "/resources/native-smokes/packs-vs-cartons",
] as const;

export function isKeptWrapOrPaper(value: { slug?: string; name?: string }): boolean {
  const hay = `${value.slug ?? ""} ${value.name ?? ""}`.toLowerCase();
  return KEPT_SLUG_MARKERS.some((marker) => hay.includes(marker));
}

export function isHiddenCigaretteItem(item: { slug?: string; name?: string; category?: string }): boolean {
  if (SHOW_CIGARETTES) return false;
  if (isKeptWrapOrPaper(item)) return false;
  const hay = `${item.slug ?? ""} ${item.name ?? ""}`.toLowerCase();
  if (/\b(pouch|pouches|velo|zyn)\b/.test(hay)) return false;
  if ((HIDDEN_ITEM_SLUGS as readonly string[]).includes(item.slug ?? "")) return true;
  if ((item.category ?? "").toUpperCase() === "CIGARETTES") return true;
  return /\b(cigarette|cigarettes|tobacco|marlboro|belmont|grabba)\b/.test(hay);
}

export function isHiddenCigaretteGuideSlug(slug: string): boolean {
  if (SHOW_CIGARETTES) return false;
  if (slug === "backwoods" || slug.startsWith("backwoods-") || slug.startsWith("grabba-delivery")) return false;
  return (HIDDEN_GUIDE_SLUGS as readonly string[]).includes(slug);
}

export function isHiddenCigaretteItemPath(slug: string): boolean {
  if (SHOW_CIGARETTES) return false;
  const normalized = decodeURIComponent(slug).toLowerCase();
  if (isKeptWrapOrPaper({ slug: normalized, name: normalized.replace(/-/g, " ") })) return false;
  if (normalized.includes("pouch") || normalized.includes("velo")) return false;
  if ((HIDDEN_ITEM_SLUGS as readonly string[]).includes(normalized)) return true;
  return /(cigarette|marlboro|belmont|grabba|carton|rolled-gold|canadian-classic|nexus-|putter|playfare|dks-)/i.test(normalized);
}

function normalizePath(pathname: string): string {
  const path = pathname.split("?")[0].split("#")[0];
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

export function isCigaretteHref(href: string): boolean {
  if (SHOW_CIGARETTES) return false;
  if (!href.startsWith("/")) return false;
  const path = normalizePath(href);
  if (path === "/items/cigarettes" || path === "/cigarettes") return true;
  if (path.startsWith("/resources/native-smokes")) return true;
  if ((HIDDEN_PAGE_PATHS as readonly string[]).includes(path)) return true;
  const guide = path.match(/^\/guides\/([^/]+)$/);
  if (guide && isHiddenCigaretteGuideSlug(guide[1])) return true;
  const item = path.match(/^\/item\/([^/]+)$/);
  if (item && isHiddenCigaretteItemPath(item[1])) return true;
  return false;
}

export function filterPublicItems<T extends { slug?: string; name?: string; category?: string }>(items: T[]): T[] {
  if (SHOW_CIGARETTES) return items;
  return items.filter((item) => !isHiddenCigaretteItem(item));
}

export function stripCigarettePhrases(text: string): string {
  if (SHOW_CIGARETTES || !text) return text;
  return text
    .replace(/, native smokes,/gi, ",")
    .replace(/, native smokes\b/gi, "")
    .replace(/\bnative smokes\b,?/gi, "")
    .replace(/, Native Cigarettes,/g, ",")
    .replace(/\bNative Cigarettes\b,?/g, "")
    .replace(/\bnative cigarettes\b,?/gi, "")
    .replace(/, Native Smokes\b/g, "")
    .replace(/\bNative Smokes\b/g, "")
    .replace(/, cigarettes,/gi, ",")
    .replace(/, cigarettes\b/gi, "")
    .replace(/\bcigarettes\b/gi, "")
    .replace(/\bcigarette\b/gi, "")
    .replace(/`?\/items\/cigarettes`?/g, "")
    .replace(/\/native-cigarettes-queen-west/g, "")
    .replace(/\/info\/native-cigarettes-toronto/g, "")
    .replace(/\/resources\/native-smokes\S*/g, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+,/g, ",")
    .replace(/,\s*,/g, ",")
    .trim();
}

export function cigaretteHideRedirects(): Array<{ source: string; destination: string; statusCode: 302 }> {
  const sources = [
    ...HIDDEN_PAGE_PATHS,
    "/resources/native-smokes/:path*",
    ...HIDDEN_GUIDE_SLUGS.map((slug) => `/guides/${slug}`),
    ...HIDDEN_ITEM_SLUGS.map((slug) => `/item/${slug}`),
  ];
  return sources.map((source) => ({
    source,
    destination: CIGARETTE_REDIRECT_TARGET,
    statusCode: 302 as const,
  }));
}

export function suppressPermanentCigaretteRedirect(source: string): boolean {
  return source === "/cigarettes" || source === "/info/native-cigarettes-york";
}
