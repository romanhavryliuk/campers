import type { IconType } from "react-icons";
import {
  FaGasPump,
  FaBolt,
  FaCodeBranch,
  FaCar,
  FaBroadcastTower,
} from "react-icons/fa";
import {
  FaSnowflake,
  FaShower,
  FaUtensils,
  FaTv,
  FaTemperatureLow,
  FaFireBurner,
  FaFaucet,
} from "react-icons/fa6";
import { MdMicrowave } from "react-icons/md";
import type {
  CamperAmenity,
  CamperEngine,
  CamperForm,
  CamperTransmission,
} from "@/types/camper";

// іконки підібрані наближено з react-icons — якщо в макеті буде свій набір іконок, замінити тут
// іконка+підпис для типу двигуна
export const ENGINE_META: Record<CamperEngine, { label: string; icon: IconType }> = {
  diesel: { label: "Diesel", icon: FaGasPump },
  petrol: { label: "Petrol", icon: FaGasPump },
  hybrid: { label: "Hybrid", icon: FaGasPump },
  electric: { label: "Electric", icon: FaBolt },
};

// іконка+підпис для типу трансмісії
export const TRANSMISSION_META: Record<
  CamperTransmission,
  { label: string; icon: IconType }
> = {
  automatic: { label: "Automatic", icon: FaCodeBranch },
  manual: { label: "Manual", icon: FaCodeBranch },
};

// іконка+підпис для типу кузова
export const FORM_META: Record<CamperForm, { label: string; icon: IconType }> = {
  alcove: { label: "Alcove", icon: FaCar },
  panel_van: { label: "Panel Van", icon: FaCar },
  integrated: { label: "Integrated", icon: FaCar },
  semi_integrated: { label: "Semi Integrated", icon: FaCar },
};

// іконка+підпис для кожної опції з масиву amenities
export const AMENITY_META: Record<
  CamperAmenity,
  { label: string; icon: IconType }
> = {
  ac: { label: "AC", icon: FaSnowflake },
  bathroom: { label: "Bathroom", icon: FaShower },
  kitchen: { label: "Kitchen", icon: FaUtensils },
  tv: { label: "TV", icon: FaTv },
  radio: { label: "Radio", icon: FaBroadcastTower },
  refrigerator: { label: "Refrigerator", icon: FaTemperatureLow },
  microwave: { label: "Microwave", icon: MdMicrowave },
  gas: { label: "Gas", icon: FaFireBurner },
  water: { label: "Water Supply", icon: FaFaucet },
};
