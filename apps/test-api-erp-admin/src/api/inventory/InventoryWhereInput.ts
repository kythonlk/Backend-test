import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FinancialListRelationFilter } from "../financial/FinancialListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { PurchasingListRelationFilter } from "../purchasing/PurchasingListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SalesListRelationFilter } from "../sales/SalesListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InventoryWhereInput = {
  addedDate?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  financials?: FinancialListRelationFilter;
  id?: StringFilter;
  itemName?: StringNullableFilter;
  price?: FloatNullableFilter;
  purchasings?: PurchasingListRelationFilter;
  quantity?: IntNullableFilter;
  salesItems?: SalesListRelationFilter;
  updatedDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
