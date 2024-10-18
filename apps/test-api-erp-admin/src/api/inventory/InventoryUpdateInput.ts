import { FinancialUpdateManyWithoutInventoriesInput } from "./FinancialUpdateManyWithoutInventoriesInput";
import { PurchasingUpdateManyWithoutInventoriesInput } from "./PurchasingUpdateManyWithoutInventoriesInput";
import { SalesUpdateManyWithoutInventoriesInput } from "./SalesUpdateManyWithoutInventoriesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InventoryUpdateInput = {
  addedDate?: Date | null;
  description?: string | null;
  financials?: FinancialUpdateManyWithoutInventoriesInput;
  itemName?: string | null;
  price?: number | null;
  purchasings?: PurchasingUpdateManyWithoutInventoriesInput;
  quantity?: number | null;
  salesItems?: SalesUpdateManyWithoutInventoriesInput;
  updatedDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
