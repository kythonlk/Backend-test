import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InventoryWhereUniqueInput } from "../inventory/InventoryWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FinancialWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  inventory?: InventoryWhereUniqueInput;
  transactionDate?: DateTimeNullableFilter;
  transactionType?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
