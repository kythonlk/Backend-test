import { SortOrder } from "../../util/SortOrder";

export type FinancialOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  inventoryId?: SortOrder;
  transactionDate?: SortOrder;
  transactionType?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
