"use client";

import { useQuery } from "@tanstack/react-query";
import { getCamperById } from "@/services/campers";

// підвантажує детальну інформацію по одному кемперу за його id
export function useCamperDetails(camperId: string) {
  return useQuery({
    queryKey: ["camper", camperId],
    queryFn: () => getCamperById(camperId),
  });
}
