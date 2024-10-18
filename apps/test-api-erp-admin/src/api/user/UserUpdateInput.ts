import { FinancialUpdateManyWithoutUsersInput } from "./FinancialUpdateManyWithoutUsersInput";
import { InventoryUpdateManyWithoutUsersInput } from "./InventoryUpdateManyWithoutUsersInput";
import { PurchasingUpdateManyWithoutUsersInput } from "./PurchasingUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SalesUpdateManyWithoutUsersInput } from "./SalesUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  financials?: FinancialUpdateManyWithoutUsersInput;
  firstName?: string | null;
  inventories?: InventoryUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  purchasings?: PurchasingUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  salesItems?: SalesUpdateManyWithoutUsersInput;
  username?: string;
};
