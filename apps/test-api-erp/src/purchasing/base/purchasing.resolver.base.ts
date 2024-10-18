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
import { Purchasing } from "./Purchasing";
import { PurchasingCountArgs } from "./PurchasingCountArgs";
import { PurchasingFindManyArgs } from "./PurchasingFindManyArgs";
import { PurchasingFindUniqueArgs } from "./PurchasingFindUniqueArgs";
import { CreatePurchasingArgs } from "./CreatePurchasingArgs";
import { UpdatePurchasingArgs } from "./UpdatePurchasingArgs";
import { DeletePurchasingArgs } from "./DeletePurchasingArgs";
import { Inventory } from "../../inventory/base/Inventory";
import { User } from "../../user/base/User";
import { PurchasingService } from "../purchasing.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Purchasing)
export class PurchasingResolverBase {
  constructor(
    protected readonly service: PurchasingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Purchasing",
    action: "read",
    possession: "any",
  })
  async _purchasingsMeta(
    @graphql.Args() args: PurchasingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Purchasing])
  @nestAccessControl.UseRoles({
    resource: "Purchasing",
    action: "read",
    possession: "any",
  })
  async purchasings(
    @graphql.Args() args: PurchasingFindManyArgs
  ): Promise<Purchasing[]> {
    return this.service.purchasings(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Purchasing, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Purchasing",
    action: "read",
    possession: "own",
  })
  async purchasing(
    @graphql.Args() args: PurchasingFindUniqueArgs
  ): Promise<Purchasing | null> {
    const result = await this.service.purchasing(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Purchasing)
  @nestAccessControl.UseRoles({
    resource: "Purchasing",
    action: "create",
    possession: "any",
  })
  async createPurchasing(
    @graphql.Args() args: CreatePurchasingArgs
  ): Promise<Purchasing> {
    return await this.service.createPurchasing({
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
  @graphql.Mutation(() => Purchasing)
  @nestAccessControl.UseRoles({
    resource: "Purchasing",
    action: "update",
    possession: "any",
  })
  async updatePurchasing(
    @graphql.Args() args: UpdatePurchasingArgs
  ): Promise<Purchasing | null> {
    try {
      return await this.service.updatePurchasing({
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

  @graphql.Mutation(() => Purchasing)
  @nestAccessControl.UseRoles({
    resource: "Purchasing",
    action: "delete",
    possession: "any",
  })
  async deletePurchasing(
    @graphql.Args() args: DeletePurchasingArgs
  ): Promise<Purchasing | null> {
    try {
      return await this.service.deletePurchasing(args);
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
    @graphql.Parent() parent: Purchasing
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
  async getUser(@graphql.Parent() parent: Purchasing): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
