import { SortOrder } from "../../util/SortOrder";

export type SalesOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  inventoryId?: SortOrder;
  quantitySold?: SortOrder;
  saleDate?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
