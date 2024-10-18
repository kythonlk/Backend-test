import { FinancialCreateNestedManyWithoutUsersInput } from "./FinancialCreateNestedManyWithoutUsersInput";
import { InventoryCreateNestedManyWithoutUsersInput } from "./InventoryCreateNestedManyWithoutUsersInput";
import { PurchasingCreateNestedManyWithoutUsersInput } from "./PurchasingCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SalesCreateNestedManyWithoutUsersInput } from "./SalesCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  financials?: FinancialCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  inventories?: InventoryCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  purchasings?: PurchasingCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  salesItems?: SalesCreateNestedManyWithoutUsersInput;
  username: string;
};
