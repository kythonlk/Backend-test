import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FinancialListRelationFilter } from "../financial/FinancialListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { InventoryListRelationFilter } from "../inventory/InventoryListRelationFilter";
import { PurchasingListRelationFilter } from "../purchasing/PurchasingListRelationFilter";
import { SalesListRelationFilter } from "../sales/SalesListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  financials?: FinancialListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  inventories?: InventoryListRelationFilter;
  lastName?: StringNullableFilter;
  purchasings?: PurchasingListRelationFilter;
  salesItems?: SalesListRelationFilter;
  username?: StringFilter;
};
