import { InventoryWhereUniqueInput } from "../inventory/InventoryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PurchasingUpdateInput = {
  inventory?: InventoryWhereUniqueInput | null;
  purchaseDate?: Date | null;
  quantityPurchased?: number | null;
  totalCost?: number | null;
  user?: UserWhereUniqueInput | null;
};
