import { FinancialWhereInput } from "./FinancialWhereInput";
import { FinancialOrderByInput } from "./FinancialOrderByInput";

export type FinancialFindManyArgs = {
  where?: FinancialWhereInput;
  orderBy?: Array<FinancialOrderByInput>;
  skip?: number;
  take?: number;
};
