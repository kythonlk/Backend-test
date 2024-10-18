import { SortOrder } from "../../util/SortOrder";

export type InventoryOrderByInput = {
  addedDate?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  itemName?: SortOrder;
  price?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
  updatedDate?: SortOrder;
  userId?: SortOrder;
};
