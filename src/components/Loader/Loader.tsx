import styles from "./Loader.module.css";

// повноекранний лоадер на час завантаження всієї сторінки
export default function Loader() {
  return (
    <div className={styles.overlay} role="status" aria-label="Loading">
      <div className={styles.card}>
        <span className={styles.spinner} />
        <p className={styles.title}>Loading tracks...</p>
        <p className={styles.subtitle}>
          Please wait while we fetch the best travel trucks for you
        </p>
      </div>
    </div>
  );
}
