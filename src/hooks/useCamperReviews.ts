"use client";

import { useQuery } from "@tanstack/react-query";
import { getCamperReviews } from "@/services/campers";

// тягне відгуки конкретного кемпера (окремий ендпоінт бекенду)
export function useCamperReviews(camperId: string) {
  return useQuery({
    queryKey: ["camper-reviews", camperId],
    queryFn: () => getCamperReviews(camperId),
  });
}
