import type { IconType } from "react-icons";
import styles from "./Badge.module.css";

interface BadgeProps {
  icon: IconType;
  label: string;
}

// невелика пігулка з іконкою і підписом (двигун, трансмісія, тип кузова, опції)
export default function Badge({ icon: Icon, label }: BadgeProps) {
  return (
    <span className={styles.badge}>
      <Icon /> {label}
    </span>
  );
}
