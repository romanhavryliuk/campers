import styles from "./Spinner.module.css";

// маленький спінер для завантаження окремого блоку (наприклад відгуків)
export default function Spinner() {
  return (
    <div className={styles.wrapper} role="status" aria-label="Loading">
      <span className={styles.spinner} />
    </div>
  );
}
