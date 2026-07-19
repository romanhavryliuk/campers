import {
  AMENITY_META,
  ENGINE_META,
  FORM_META,
  TRANSMISSION_META,
} from "@/constants/vehicleMeta";
import Badge from "@/components/Badge/Badge";
import type { CamperDetails } from "@/types/camper";
import styles from "./VehicleDetails.module.css";

interface VehicleDetailsProps {
  camper: CamperDetails;
}

// блок "Vehicle details": бейджі характеристик (трансмісія/двигун/опції/кузов) + таблиця розмірів
export default function VehicleDetails({ camper }: VehicleDetailsProps) {
  const transmission = TRANSMISSION_META[camper.transmission];
  const engine = ENGINE_META[camper.engine];
  const form = FORM_META[camper.form];

  return (
    <div className={styles.card}>
      <h2 className={styles.heading}>Vehicle details</h2>

      <div className={styles.badges}>
        <Badge icon={transmission.icon} label={transmission.label} />
        <Badge icon={engine.icon} label={engine.label} />
        {camper.amenities.map((amenity) => {
          const meta = AMENITY_META[amenity];
          return <Badge key={amenity} icon={meta.icon} label={meta.label} />;
        })}
        <Badge icon={form.icon} label={form.label} />
      </div>

      <dl className={styles.details}>
        <div className={styles.detailRow}>
          <dt>Form</dt>
          <dd>{form.label}</dd>
        </div>
        <div className={styles.detailRow}>
          <dt>Length</dt>
          <dd>{camper.length}</dd>
        </div>
        <div className={styles.detailRow}>
          <dt>Width</dt>
          <dd>{camper.width}</dd>
        </div>
        <div className={styles.detailRow}>
          <dt>Height</dt>
          <dd>{camper.height}</dd>
        </div>
        <div className={styles.detailRow}>
          <dt>Tank</dt>
          <dd>{camper.tank}</dd>
        </div>
        <div className={styles.detailRow}>
          <dt>Consumption</dt>
          <dd>{camper.consumption}</dd>
        </div>
      </dl>
    </div>
  );
}
