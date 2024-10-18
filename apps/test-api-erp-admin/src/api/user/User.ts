import { Financial } from "../financial/Financial";
import { Inventory } from "../inventory/Inventory";
import { Purchasing } from "../purchasing/Purchasing";
import { JsonValue } from "type-fest";
import { Sales } from "../sales/Sales";

export type User = {
  createdAt: Date;
  email: string | null;
  financials?: Array<Financial>;
  firstName: string | null;
  id: string;
  inventories?: Array<Inventory>;
  lastName: string | null;
  purchasings?: Array<Purchasing>;
  roles: JsonValue;
  salesItems?: Array<Sales>;
  updatedAt: Date;
  username: string;
};
