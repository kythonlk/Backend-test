import { Financial } from "../financial/Financial";
import { Purchasing } from "../purchasing/Purchasing";
import { Sales } from "../sales/Sales";
import { User } from "../user/User";

export type Inventory = {
  addedDate: Date | null;
  createdAt: Date;
  description: string | null;
  financials?: Array<Financial>;
  id: string;
  itemName: string | null;
  price: number | null;
  purchasings?: Array<Purchasing>;
  quantity: number | null;
  salesItems?: Array<Sales>;
  updatedAt: Date;
  updatedDate: Date | null;
  user?: User | null;
};
