import type { Metadata } from "next";
import GamesContent from "./GamesContent";

export const metadata: Metadata = {
  title: "Cannabis Arcade Games — Queen Lansdowne Cannabis | Toronto",
  description: "Play free online cannabis-themed games like Flappy Bud and Snake Munchies while you wait at Queen Lansdowne Cannabis.",
  alternates: {
    canonical: "https://queenlansdownecannabis.ca/games",
  },
};

export default function GamesPage() {
  return <GamesContent />;
}
