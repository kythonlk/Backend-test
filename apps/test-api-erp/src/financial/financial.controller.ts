import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FinancialService } from "./financial.service";
import { FinancialControllerBase } from "./base/financial.controller.base";

@swagger.ApiTags("financials")
@common.Controller("financials")
export class FinancialController extends FinancialControllerBase {
  constructor(
    protected readonly service: FinancialService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
