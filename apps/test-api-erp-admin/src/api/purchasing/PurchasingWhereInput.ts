import { StringFilter } from "../../util/StringFilter";
import { InventoryWhereUniqueInput } from "../inventory/InventoryWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PurchasingWhereInput = {
  id?: StringFilter;
  inventory?: InventoryWhereUniqueInput;
  purchaseDate?: DateTimeNullableFilter;
  quantityPurchased?: IntNullableFilter;
  totalCost?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
