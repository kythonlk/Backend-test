import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PurchasingService } from "./purchasing.service";
import { PurchasingControllerBase } from "./base/purchasing.controller.base";

@swagger.ApiTags("purchasings")
@common.Controller("purchasings")
export class PurchasingController extends PurchasingControllerBase {
  constructor(
    protected readonly service: PurchasingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
