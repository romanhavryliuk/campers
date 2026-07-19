import { FaStar, FaRegStar } from "react-icons/fa";
import styles from "./RatingStars.module.css";

interface RatingStarsProps {
  rating: number;
  max?: number;
}

// малює рейтинг зірочками: округлюємо до цілого і зафарбовуємо потрібну кількість
export default function RatingStars({ rating, max = 5 }: RatingStarsProps) {
  return (
    <span
      className={styles.stars}
      aria-label={`Rating: ${rating} out of ${max}`}
    >
      {Array.from({ length: max }, (_, index) => {
        const filled = index < Math.round(rating);
        return filled ? (
          <FaStar key={index} className={styles.filled} />
        ) : (
          <FaRegStar key={index} className={styles.empty} />
        );
      })}
    </span>
  );
}
