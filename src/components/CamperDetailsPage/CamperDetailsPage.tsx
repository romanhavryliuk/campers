"use client";

import { FaMap, FaStar } from "react-icons/fa";
import { useCamperDetails } from "@/hooks/useCamperDetails";
import Loader from "@/components/Loader/Loader";
import { formatPrice } from "@/utils/formatPrice";
import type { CamperDetails as CamperDetailsType } from "@/types/camper";
import CamperGallery from "@/components/CamperGallery/CamperGallery";
import VehicleDetails from "@/components/VehicleDetails/VehicleDetails";
import CamperReviews from "@/components/CamperReviews/CamperReviews";
import BookingForm from "@/components/BookingForm/BookingForm";
import styles from "./CamperDetailsPage.module.css";

interface CamperDetailsPageProps {
  camperId: string;
}

// сторінка кемпера: тягне дані по id і розкладає галерею/інфо/бронювання в дві колонки
export default function CamperDetailsPage({
  camperId,
}: CamperDetailsPageProps) {
  const { data: camper, isLoading, isError } = useCamperDetails(camperId);

  if (isLoading) return <Loader />;
  if (isError || !camper) return <p>Failed to load camper details.</p>;

  return (
    <section className={styles.page}>
      <div className={styles.grid}>
        <div className={styles.leftCol}>
          <CamperGallery gallery={camper.gallery} name={camper.name} />
          <CamperReviews camperId={camper.id} />
        </div>
        <div className={styles.rightCol}>
          <CamperInfo camper={camper} />
          <VehicleDetails camper={camper} />
          <BookingForm camperId={camper.id} />
        </div>
      </div>
    </section>
  );
}

interface CamperInfoProps {
  camper: CamperDetailsType;
}

// блок вгорі правої колонки: назва, рейтинг, локація, ціна й опис кемпера
function CamperInfo({ camper }: CamperInfoProps) {
  return (
    <div className={styles.info}>
      <h1 className={styles.name}>{camper.name}</h1>
      <div className={styles.meta}>
        <span className={styles.rating}>
          <FaStar className={styles.star} /> {camper.rating}(
          {camper.totalReviews} Reviews)
        </span>
        <span className={styles.location}>
          <FaMap /> {camper.location}
        </span>
      </div>
      <p className={styles.price}>{formatPrice(camper.price)}</p>
      <p className={styles.description}>{camper.description}</p>
    </div>
  );
}
