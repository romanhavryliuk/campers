import type { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner/HeroBanner";

export const metadata: Metadata = {
  title: "TravelTrucks — Camper Rental",
};

// головна сторінка — просто банер із закликом до дії
export default function HomePage() {
  return <HeroBanner />;
}
