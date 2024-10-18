import { Financial as TFinancial } from "../api/financial/Financial";

export const FINANCIAL_TITLE_FIELD = "transactionType";

export const FinancialTitle = (record: TFinancial): string => {
  return record.transactionType?.toString() || String(record.id);
};
