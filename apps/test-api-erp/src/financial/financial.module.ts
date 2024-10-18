import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FinancialModuleBase } from "./base/financial.module.base";
import { FinancialService } from "./financial.service";
import { FinancialController } from "./financial.controller";
import { FinancialResolver } from "./financial.resolver";

@Module({
  imports: [FinancialModuleBase, forwardRef(() => AuthModule)],
  controllers: [FinancialController],
  providers: [FinancialService, FinancialResolver],
  exports: [FinancialService],
})
export class FinancialModule {}
