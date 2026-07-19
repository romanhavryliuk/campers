import Image from "next/image";
import Link from "next/link";
import { FaMap, FaStar } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import type { CamperListItem } from "@/types/camper";
import { formatPrice } from "@/utils/formatPrice";
import {
  ENGINE_META,
  TRANSMISSION_META,
  FORM_META,
} from "@/constants/vehicleMeta";
import Badge from "@/components/Badge/Badge";
import styles from "./CamperList.module.css";

interface CamperListProps {
  campers: CamperListItem[];
  onClearFilters: () => void;
}

// список карток кемперів у каталозі; якщо під фільтри нічого не підійшло — показуємо заглушку
export default function CamperList({
  campers,
  onClearFilters,
}: CamperListProps) {
  if (campers.length === 0) {
    return (
      <div className={styles.empty}>
        <h2 className={styles.emptyTitle}>No campers found</h2>
        <p className={styles.emptyText}>
          We couldn&apos;t find any campers that match your filters. Try
          adjusting your search or clearing some filters.
        </p>
        <div className={styles.emptyActions}>
          <button
            type="button"
            className="btn btn-outline"
            onClick={onClearFilters}
          >
            <FaXmark /> Clear filters
          </button>
          <button
            type="button"
            className="btn btn-solid"
            onClick={onClearFilters}
          >
            View all campers
          </button>
        </div>
      </div>
    );
  }

  return (
    <ul className={styles.list}>
      {campers.map((camper) => (
        <li key={camper.id}>
          <CamperCard camper={camper} />
        </li>
      ))}
    </ul>
  );
}

interface CamperCardProps {
  camper: CamperListItem;
}

// картка одного кемпера: фото, ціна, рейтинг, бейджі характеристик і кнопка "Show more"
function CamperCard({ camper }: CamperCardProps) {
  const engine = ENGINE_META[camper.engine];
  const transmission = TRANSMISSION_META[camper.transmission];
  const form = FORM_META[camper.form];

  return (
    <article className={styles.card}>
      {camper.coverImage && (
        <div className={styles.imageWrapper}>
          <Image
            src={camper.coverImage}
            alt={camper.name}
            fill
            className={styles.image}
          />
        </div>
      )}
      <div className={styles.body}>
        <div className={styles.headerRow}>
          <h3 className={styles.name}>{camper.name}</h3>
          <span className={styles.price}>{formatPrice(camper.price)}</span>
        </div>
        <div className={styles.meta}>
          <span className={styles.rating}>
            <FaStar className={styles.star} /> {camper.rating}(
            {camper.totalReviews} Reviews)
          </span>
          <span className={styles.location}>
            <FaMap /> {camper.location}
          </span>
        </div>
        <p className={styles.description}>{camper.description}</p>
        <div className={styles.badges}>
          <Badge icon={engine.icon} label={engine.label} />
          <Badge icon={transmission.icon} label={transmission.label} />
          <Badge icon={form.icon} label={form.label} />
        </div>
        <Link
          href={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-solid ${styles.showMore}`}
        >
          Show more
        </Link>
      </div>
    </article>
  );
}
