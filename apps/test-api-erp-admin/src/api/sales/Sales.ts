import { Inventory } from "../inventory/Inventory";
import { User } from "../user/User";

export type Sales = {
  createdAt: Date;
  id: string;
  inventory?: Inventory | null;
  quantitySold: number | null;
  saleDate: Date | null;
  totalAmount: number | null;
  updatedAt: Date;
  user?: User | null;
};
