import { api } from "./api";
import type {
  CamperDetails,
  CamperListItem,
  CamperReview,
} from "@/types/camper";
import type { CamperFilters } from "@/types/filters";

export interface GetCampersParams extends CamperFilters {
  page: number;
  perPage: number;
}

export interface GetCampersResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: CamperListItem[];
}

// список кемперів з пагінацією і фільтрами (page/perPage + form/engine/transmission/location)
export async function getCampers(
  params: GetCampersParams
): Promise<GetCampersResponse> {
  const { data } = await api.get<GetCampersResponse>("/campers", {
    params,
  });
  return data;
}

// повна інформація про одного кемпера (галерея, характеристики тощо)
export async function getCamperById(id: string): Promise<CamperDetails> {
  const { data } = await api.get<CamperDetails>(`/campers/${id}`);
  return data;
}

// відгуки по конкретному кемперу — окремий ендпоінт, не входить у getCamperById
export async function getCamperReviews(id: string): Promise<CamperReview[]> {
  const { data } = await api.get<CamperReview[]>(`/campers/${id}/reviews`);
  return data;
}
