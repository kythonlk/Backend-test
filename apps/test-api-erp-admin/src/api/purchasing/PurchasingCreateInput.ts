import { InventoryWhereUniqueInput } from "../inventory/InventoryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PurchasingCreateInput = {
  inventory?: InventoryWhereUniqueInput | null;
  purchaseDate?: Date | null;
  quantityPurchased?: number | null;
  totalCost?: number | null;
  user?: UserWhereUniqueInput | null;
};
