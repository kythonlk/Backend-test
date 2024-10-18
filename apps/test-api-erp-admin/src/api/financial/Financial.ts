import { Inventory } from "../inventory/Inventory";
import { User } from "../user/User";

export type Financial = {
  amount: number | null;
  createdAt: Date;
  id: string;
  inventory?: Inventory | null;
  transactionDate: Date | null;
  transactionType: string | null;
  updatedAt: Date;
  user?: User | null;
};
