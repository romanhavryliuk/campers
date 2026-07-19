"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaExclamationCircle } from "react-icons/fa";
import toast from "react-hot-toast";
import {
  bookingSchema,
  type BookingFormValues,
} from "@/schemas/bookingSchema";
import { createBooking } from "@/services/booking";
import styles from "./BookingForm.module.css";

interface BookingFormProps {
  camperId: string;
}

// форма бронювання: валідує ім'я й email наживо і відправляє заявку на бекенд
export default function BookingForm({ camperId }: BookingFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    mode: "onChange",
  });

  // відправляє заявку на бронювання і показує повідомлення бекенду в тості
  const onSubmit = async (values: BookingFormValues) => {
    try {
      const { message } = await createBooking(camperId, values);
      toast.success(message);
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <h3 className={styles.title}>Book your campervan now</h3>
      <p className={styles.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <label className={styles.field}>
        <span
          className={`${styles.inputWrapper} ${
            errors.name ? styles.inputWrapperError : ""
          }`}
        >
          <input type="text" placeholder="Name*" {...register("name")} />
          {errors.name && (
            <FaExclamationCircle className={styles.errorIcon} />
          )}
        </span>
        {errors.name && (
          <span className={styles.error}>{errors.name.message}</span>
        )}
      </label>

      <label className={styles.field}>
        <span
          className={`${styles.inputWrapper} ${
            errors.email ? styles.inputWrapperError : ""
          }`}
        >
          <input type="email" placeholder="Email*" {...register("email")} />
          {errors.email && (
            <FaExclamationCircle className={styles.errorIcon} />
          )}
        </span>
        {errors.email && (
          <span className={styles.error}>{errors.email.message}</span>
        )}
      </label>

      <button
        type="submit"
        className="btn btn-solid btn-block"
        disabled={isSubmitting}
      >
        Send
      </button>
    </form>
  );
}
