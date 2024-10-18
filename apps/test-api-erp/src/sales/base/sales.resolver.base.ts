/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Sales } from "./Sales";
import { SalesCountArgs } from "./SalesCountArgs";
import { SalesFindManyArgs } from "./SalesFindManyArgs";
import { SalesFindUniqueArgs } from "./SalesFindUniqueArgs";
import { CreateSalesArgs } from "./CreateSalesArgs";
import { UpdateSalesArgs } from "./UpdateSalesArgs";
import { DeleteSalesArgs } from "./DeleteSalesArgs";
import { Inventory } from "../../inventory/base/Inventory";
import { User } from "../../user/base/User";
import { SalesService } from "../sales.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Sales)
export class SalesResolverBase {
  constructor(
    protected readonly service: SalesService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Sales",
    action: "read",
    possession: "any",
  })
  async _salesItemsMeta(
    @graphql.Args() args: SalesCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Sales])
  @nestAccessControl.UseRoles({
    resource: "Sales",
    action: "read",
    possession: "any",
  })
  async salesItems(@graphql.Args() args: SalesFindManyArgs): Promise<Sales[]> {
    return this.service.salesItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Sales, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Sales",
    action: "read",
    possession: "own",
  })
  async sales(
    @graphql.Args() args: SalesFindUniqueArgs
  ): Promise<Sales | null> {
    const result = await this.service.sales(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Sales)
  @nestAccessControl.UseRoles({
    resource: "Sales",
    action: "create",
    possession: "any",
  })
  async createSales(@graphql.Args() args: CreateSalesArgs): Promise<Sales> {
    return await this.service.createSales({
      ...args,
      data: {
        ...args.data,

        inventory: args.data.inventory
          ? {
              connect: args.data.inventory,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Sales)
  @nestAccessControl.UseRoles({
    resource: "Sales",
    action: "update",
    possession: "any",
  })
  async updateSales(
    @graphql.Args() args: UpdateSalesArgs
  ): Promise<Sales | null> {
    try {
      return await this.service.updateSales({
        ...args,
        data: {
          ...args.data,

          inventory: args.data.inventory
            ? {
                connect: args.data.inventory,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Sales)
  @nestAccessControl.UseRoles({
    resource: "Sales",
    action: "delete",
    possession: "any",
  })
  async deleteSales(
    @graphql.Args() args: DeleteSalesArgs
  ): Promise<Sales | null> {
    try {
      return await this.service.deleteSales(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Inventory, {
    nullable: true,
    name: "inventory",
  })
  @nestAccessControl.UseRoles({
    resource: "Inventory",
    action: "read",
    possession: "any",
  })
  async getInventory(
    @graphql.Parent() parent: Sales
  ): Promise<Inventory | null> {
    const result = await this.service.getInventory(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Sales): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
