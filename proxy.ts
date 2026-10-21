import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  CIGARETTE_REDIRECT_TARGET,
  SHOW_CIGARETTES,
  isCigaretteHref,
} from "./app/lib/showCigarettes";

export function proxy(request: NextRequest) {
  if (SHOW_CIGARETTES) return NextResponse.next();
  const path = request.nextUrl.pathname.replace(/\/$/, "") || "/";
  if (path === "/items/cigarettes" || !isCigaretteHref(path)) return NextResponse.next();
  const url = request.nextUrl.clone();
  url.pathname = CIGARETTE_REDIRECT_TARGET;
  url.search = "";
  return NextResponse.redirect(url, 302);
}

export const config = {
  matcher: [
    "/cigarettes",
    "/native-cigarettes-queen-west",
    "/info/:slug",
    "/resources/native-smokes",
    "/resources/native-smokes/:path*",
    "/guides/:slug",
    "/item/:slug",
  ],
};
