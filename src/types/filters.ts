import type { CamperEngine, CamperForm, CamperTransmission } from "./camper";

export interface CamperFilters {
  location?: string;
  form?: CamperForm;
  transmission?: CamperTransmission;
  engine?: CamperEngine;
}
