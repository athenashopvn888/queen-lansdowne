import { isRealCigaretteItem } from "../lib/cigMarkers.ts";

export const WRAPS_AND_POUCHES_TITLE = "🍂 WRAPS & POUCHES";

export const VAPES_PROMO_POSTER = {
  title: "💨 VAPES PROMO",
  src: "/banners/cannabis_banner_mashup_variation_01_600x600.webp",
  alt: "Ultimate Cannabis Collection Promo",
} as const;

type ShelfItem = { category?: string; name?: string; slug?: string };

/** Drop real cigarettes when the TV flag is off. Wraps, papers, Backwoods, and pouches stay. */
export function filterBoardItems<T extends ShelfItem>(items: T[], showCigarettes: boolean): T[] {
  if (showCigarettes) return items;
  return items.filter((item) => !isRealCigaretteItem(item));
}

export function cigaretteCardTitle(
  showCigarettes: boolean,
  wording: { tv2BoardTitle?: string; wrapsTitle?: string },
): string {
  if (showCigarettes) return wording.tv2BoardTitle || "🚬 CIGARETTES";
  return wording.wrapsTitle || WRAPS_AND_POUCHES_TITLE;
}

/** Empty wraps shelf keeps the vapes promo poster. A live cigarette board does not. */
export function showsVapesPromoPoster(cardId: string, showCigarettes: boolean, shelfCount: number): boolean {
  return cardId === "CIGARETTES" && !showCigarettes && shelfCount === 0;
}
