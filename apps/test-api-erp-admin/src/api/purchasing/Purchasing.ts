import { Inventory } from "../inventory/Inventory";
import { User } from "../user/User";

export type Purchasing = {
  createdAt: Date;
  id: string;
  inventory?: Inventory | null;
  purchaseDate: Date | null;
  quantityPurchased: number | null;
  totalCost: number | null;
  updatedAt: Date;
  user?: User | null;
};
