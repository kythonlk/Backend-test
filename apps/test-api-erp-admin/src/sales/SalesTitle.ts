import { Sales as TSales } from "../api/sales/Sales";

export const SALES_TITLE_FIELD = "id";

export const SalesTitle = (record: TSales): string => {
  return record.id?.toString() || String(record.id);
};
