import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PurchasingModuleBase } from "./base/purchasing.module.base";
import { PurchasingService } from "./purchasing.service";
import { PurchasingController } from "./purchasing.controller";
import { PurchasingResolver } from "./purchasing.resolver";

@Module({
  imports: [PurchasingModuleBase, forwardRef(() => AuthModule)],
  controllers: [PurchasingController],
  providers: [PurchasingService, PurchasingResolver],
  exports: [PurchasingService],
})
export class PurchasingModule {}
