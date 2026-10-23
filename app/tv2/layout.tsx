import type { Metadata } from "next";
import CigaretteStateProvider from "../components/CigaretteStateProvider";
import { getCigaretteSnapshot, toPublicCigaretteState } from "../lib/cigaretteFeed";
import { SHOW_CIGARETTES } from "../lib/showCigarettes";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Queen Lansdowne In-Store Accessories Display",
  description: "Operational in-store accessories menu display for Queen Lansdowne Cannabis.",
  robots: { index: false, follow: false },
};

export default async function TvTwoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const cigarettes = toPublicCigaretteState(await getCigaretteSnapshot());
  return <CigaretteStateProvider value={{ ...cigarettes, web: SHOW_CIGARETTES ? cigarettes.web : false }}>{children}</CigaretteStateProvider>;
}
