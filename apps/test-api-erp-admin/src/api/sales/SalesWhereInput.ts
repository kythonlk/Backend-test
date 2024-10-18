import { StringFilter } from "../../util/StringFilter";
import { InventoryWhereUniqueInput } from "../inventory/InventoryWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SalesWhereInput = {
  id?: StringFilter;
  inventory?: InventoryWhereUniqueInput;
  quantitySold?: IntNullableFilter;
  saleDate?: DateTimeNullableFilter;
  totalAmount?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
