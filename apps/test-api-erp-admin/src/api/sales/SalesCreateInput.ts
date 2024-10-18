import { InventoryWhereUniqueInput } from "../inventory/InventoryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SalesCreateInput = {
  inventory?: InventoryWhereUniqueInput | null;
  quantitySold?: number | null;
  saleDate?: Date | null;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
