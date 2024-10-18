import { FinancialCreateNestedManyWithoutInventoriesInput } from "./FinancialCreateNestedManyWithoutInventoriesInput";
import { PurchasingCreateNestedManyWithoutInventoriesInput } from "./PurchasingCreateNestedManyWithoutInventoriesInput";
import { SalesCreateNestedManyWithoutInventoriesInput } from "./SalesCreateNestedManyWithoutInventoriesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InventoryCreateInput = {
  addedDate?: Date | null;
  description?: string | null;
  financials?: FinancialCreateNestedManyWithoutInventoriesInput;
  itemName?: string | null;
  price?: number | null;
  purchasings?: PurchasingCreateNestedManyWithoutInventoriesInput;
  quantity?: number | null;
  salesItems?: SalesCreateNestedManyWithoutInventoriesInput;
  updatedDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
