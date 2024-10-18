import { PurchasingWhereInput } from "./PurchasingWhereInput";
import { PurchasingOrderByInput } from "./PurchasingOrderByInput";

export type PurchasingFindManyArgs = {
  where?: PurchasingWhereInput;
  orderBy?: Array<PurchasingOrderByInput>;
  skip?: number;
  take?: number;
};
