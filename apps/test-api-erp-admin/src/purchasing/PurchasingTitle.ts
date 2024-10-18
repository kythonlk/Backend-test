import { Purchasing as TPurchasing } from "../api/purchasing/Purchasing";

export const PURCHASING_TITLE_FIELD = "id";

export const PurchasingTitle = (record: TPurchasing): string => {
  return record.id?.toString() || String(record.id);
};
