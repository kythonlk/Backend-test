import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FinancialServiceBase } from "./base/financial.service.base";

@Injectable()
export class FinancialService extends FinancialServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
