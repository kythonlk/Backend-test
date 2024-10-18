import { SalesWhereInput } from "./SalesWhereInput";
import { SalesOrderByInput } from "./SalesOrderByInput";

export type SalesFindManyArgs = {
  where?: SalesWhereInput;
  orderBy?: Array<SalesOrderByInput>;
  skip?: number;
  take?: number;
};
