import axios from "axios";

// єдиний axios-інстанс для всіх запитів до campers-api.goit.study
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});
