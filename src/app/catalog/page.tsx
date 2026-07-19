import type { Metadata } from "next";
import CatalogPage from "@/components/CatalogPage/CatalogPage";

export const metadata: Metadata = {
  title: "Catalog — TravelTrucks",
  description:
    "Browse and filter available campers by location, body type, engine, and transmission.",
};

// маршрут /catalog — вся логіка живе в CatalogPage
export default function Catalog() {
  return <CatalogPage />;
}
