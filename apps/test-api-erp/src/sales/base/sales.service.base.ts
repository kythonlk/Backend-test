/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Sales as PrismaSales,
  Inventory as PrismaInventory,
  User as PrismaUser,
} from "@prisma/client";

export class SalesServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SalesCountArgs, "select">): Promise<number> {
    return this.prisma.sales.count(args);
  }

  async salesItems(args: Prisma.SalesFindManyArgs): Promise<PrismaSales[]> {
    return this.prisma.sales.findMany(args);
  }
  async sales(args: Prisma.SalesFindUniqueArgs): Promise<PrismaSales | null> {
    return this.prisma.sales.findUnique(args);
  }
  async createSales(args: Prisma.SalesCreateArgs): Promise<PrismaSales> {
    return this.prisma.sales.create(args);
  }
  async updateSales(args: Prisma.SalesUpdateArgs): Promise<PrismaSales> {
    return this.prisma.sales.update(args);
  }
  async deleteSales(args: Prisma.SalesDeleteArgs): Promise<PrismaSales> {
    return this.prisma.sales.delete(args);
  }

  async getInventory(parentId: string): Promise<PrismaInventory | null> {
    return this.prisma.sales
      .findUnique({
        where: { id: parentId },
      })
      .inventory();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.sales
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
