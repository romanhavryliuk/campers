import type { Metadata } from "next";
import CamperDetailsPage from "@/components/CamperDetailsPage/CamperDetailsPage";
import { getCamperById } from "@/services/campers";

interface CamperDetailsRouteProps {
  params: Promise<{ camperId: string }>;
}

// підтягує реальну назву й опис кемпера для <title>/<meta description> сторінки
export async function generateMetadata({
  params,
}: CamperDetailsRouteProps): Promise<Metadata> {
  const { camperId } = await params;

  try {
    const camper = await getCamperById(camperId);
    return {
      title: `${camper.name} — TravelTrucks`,
      description: camper.description,
    };
  } catch {
    return {
      title: "Camper — TravelTrucks",
    };
  }
}

// маршрут /catalog/[camperId] — сама сторінка живе в CamperDetailsPage
export default async function CamperDetailsRoute({
  params,
}: CamperDetailsRouteProps) {
  const { camperId } = await params;
  return <CamperDetailsPage camperId={camperId} />;
}
