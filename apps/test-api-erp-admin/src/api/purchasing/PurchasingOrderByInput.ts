import { SortOrder } from "../../util/SortOrder";

export type PurchasingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  inventoryId?: SortOrder;
  purchaseDate?: SortOrder;
  quantityPurchased?: SortOrder;
  totalCost?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
