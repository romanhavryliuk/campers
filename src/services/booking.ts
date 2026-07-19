import { api } from "./api";
import type { BookingPayload, BookingResponse } from "@/types/booking";

// відправляє заявку на бронювання; бекенд приймає лише name+email, більше нічого
export async function createBooking(
  camperId: string,
  payload: BookingPayload
): Promise<BookingResponse> {
  const { data } = await api.post<BookingResponse>(
    `/campers/${camperId}/booking-requests`,
    payload
  );
  return data;
}
