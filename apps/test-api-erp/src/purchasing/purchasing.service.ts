import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PurchasingServiceBase } from "./base/purchasing.service.base";

@Injectable()
export class PurchasingService extends PurchasingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
