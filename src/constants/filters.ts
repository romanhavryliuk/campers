import type {
  CamperEngine,
  CamperForm,
  CamperTransmission,
} from "@/types/camper";

// скільки карток довантажувати за одне натискання Load more
export const PAGE_SIZE = 4;

// варіанти для радіо-групи "Camper form" у фільтрах (значення співпадають з енумом бекенду)
export const FORM_OPTIONS: { value: CamperForm; label: string }[] = [
  { value: "alcove", label: "Alcove" },
  { value: "panel_van", label: "Panel Van" },
  { value: "integrated", label: "Integrated" },
  { value: "semi_integrated", label: "Semi Integrated" },
];

// варіанти для радіо-групи "Engine"
export const ENGINE_OPTIONS: { value: CamperEngine; label: string }[] = [
  { value: "diesel", label: "Diesel" },
  { value: "petrol", label: "Petrol" },
  { value: "hybrid", label: "Hybrid" },
  { value: "electric", label: "Electric" },
];

// варіанти для радіо-групи "Transmission"
export const TRANSMISSION_OPTIONS: {
  value: CamperTransmission;
  label: string;
}[] = [
  { value: "automatic", label: "Automatic" },
  { value: "manual", label: "Manual" },
];
