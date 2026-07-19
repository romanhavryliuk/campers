import { z } from "zod";

// лише літери, пробіли, дефіс і апостроф — щоб "12345" не проходило як ім'я
const NAME_PATTERN = /^[\p{L}][\p{L}\s'-]*$/u;

// схема валідації форми бронювання (name/email)
export const bookingSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your full name.")
    .regex(NAME_PATTERN, "Please enter your full name."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email.")
    .email("Please enter your email."),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;
