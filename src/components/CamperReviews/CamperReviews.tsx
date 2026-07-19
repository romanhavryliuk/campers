"use client";

import { useCamperReviews } from "@/hooks/useCamperReviews";
import Spinner from "@/components/Spinner/Spinner";
import RatingStars from "@/components/RatingStars/RatingStars";
import type { CamperReview } from "@/types/camper";
import styles from "./CamperReviews.module.css";

interface CamperReviewsProps {
  camperId: string;
}

// підвантажує відгуки конкретного кемпера і показує їх списком
export default function CamperReviews({ camperId }: CamperReviewsProps) {
  const { data: reviews, isLoading, isError } = useCamperReviews(camperId);

  return (
    <div className={styles.section}>
      <h2 className={styles.heading}>Reviews</h2>
      {isLoading && <Spinner />}
      {isError && <p>Failed to load reviews.</p>}
      {!isLoading && !isError && !reviews?.length && <p>No reviews yet.</p>}
      {!isLoading && !isError && Boolean(reviews?.length) && (
        <ul className={styles.list}>
          {reviews!.map((review) => (
            <li key={review.id}>
              <ReviewItem review={review} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

interface ReviewItemProps {
  review: CamperReview;
}

// картка одного відгуку: аватарка з першою літерою імені, рейтинг зірочками і текст
function ReviewItem({ review }: ReviewItemProps) {
  return (
    <div className={styles.review}>
      <div className={styles.header}>
        <span className={styles.avatar}>
          {review.reviewer_name.charAt(0).toUpperCase()}
        </span>
        <div>
          <p className={styles.name}>{review.reviewer_name}</p>
          <RatingStars rating={review.reviewer_rating} />
        </div>
      </div>
      <p className={styles.comment}>{review.comment}</p>
    </div>
  );
}
