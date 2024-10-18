import { InventoryWhereInput } from "./InventoryWhereInput";
import { InventoryOrderByInput } from "./InventoryOrderByInput";

export type InventoryFindManyArgs = {
  where?: InventoryWhereInput;
  orderBy?: Array<InventoryOrderByInput>;
  skip?: number;
  take?: number;
};
