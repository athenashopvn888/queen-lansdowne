import { FULL_NAME_NAP } from "./fullNameNap.ts";
import { GBP_MAPS_URL, gbpLocation } from "./gbp-location.ts";

/** Routes checked against the app router. `/delivery` is a permanent redirect, so Delivery uses the page that renders. */
export const MOBILE_BAR_HOURS_HREF = "/hours";
export const MOBILE_BAR_MENU_HREF = "/exotic-weed";
export const MOBILE_BAR_DELIVERY_HREF = "/weed-delivery-toronto";

const MAP_CANDIDATES = [FULL_NAME_NAP.mapsUrl, GBP_MAPS_URL, gbpLocation.directionsUrl] as const;

/**
 * Prefer a maps.app.goo.gl short link, then this store's GBP pin,
 * then a Google Maps directions URL to the store address.
 */
export function storeDirectionsHref(candidates: readonly string[] = MAP_CANDIDATES): string {
  const short = candidates.find((url) => url.includes("maps.app.goo.gl"));
  if (short) return short;
  const pin = candidates.find((url) => /place_id[=:]/.test(url) || /\/maps\/place(?:\/|\?|$)/.test(url));
  if (pin) return pin;
  const directions = candidates.find((url) => url.includes("/maps/dir/"));
  if (directions) return directions;
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(gbpLocation.address)}`;
}

/** In-store boards. Exact paths only, so `/tv-theme` is left alone. */
export function hideMobileBottomBar(pathname: string): boolean {
  return pathname === "/tv" || pathname === "/tv2" || pathname.startsWith("/tv/") || pathname.startsWith("/tv2/");
}
