import { InventoryWhereUniqueInput } from "../inventory/InventoryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FinancialUpdateInput = {
  amount?: number | null;
  inventory?: InventoryWhereUniqueInput | null;
  transactionDate?: Date | null;
  transactionType?: string | null;
  user?: UserWhereUniqueInput | null;
};
