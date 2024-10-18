import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SalesModuleBase } from "./base/sales.module.base";
import { SalesService } from "./sales.service";
import { SalesController } from "./sales.controller";
import { SalesResolver } from "./sales.resolver";

@Module({
  imports: [SalesModuleBase, forwardRef(() => AuthModule)],
  controllers: [SalesController],
  providers: [SalesService, SalesResolver],
  exports: [SalesService],
})
export class SalesModule {}
