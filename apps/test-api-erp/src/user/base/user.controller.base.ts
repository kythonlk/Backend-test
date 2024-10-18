/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { UserService } from "../user.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserCreateInput } from "./UserCreateInput";
import { User } from "./User";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserUpdateInput } from "./UserUpdateInput";
import { FinancialFindManyArgs } from "../../financial/base/FinancialFindManyArgs";
import { Financial } from "../../financial/base/Financial";
import { FinancialWhereUniqueInput } from "../../financial/base/FinancialWhereUniqueInput";
import { InventoryFindManyArgs } from "../../inventory/base/InventoryFindManyArgs";
import { Inventory } from "../../inventory/base/Inventory";
import { InventoryWhereUniqueInput } from "../../inventory/base/InventoryWhereUniqueInput";
import { PurchasingFindManyArgs } from "../../purchasing/base/PurchasingFindManyArgs";
import { Purchasing } from "../../purchasing/base/Purchasing";
import { PurchasingWhereUniqueInput } from "../../purchasing/base/PurchasingWhereUniqueInput";
import { SalesFindManyArgs } from "../../sales/base/SalesFindManyArgs";
import { Sales } from "../../sales/base/Sales";
import { SalesWhereUniqueInput } from "../../sales/base/SalesWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserControllerBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createUser(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.createUser({
      data: data,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async users(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.users({
      ...args,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async user(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.user({
      where: params,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateUser(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.updateUser({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          roles: true,
          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUser(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.deleteUser({
        where: params,
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          roles: true,
          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/financials")
  @ApiNestedQuery(FinancialFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Financial",
    action: "read",
    possession: "any",
  })
  async findFinancials(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Financial[]> {
    const query = plainToClass(FinancialFindManyArgs, request.query);
    const results = await this.service.findFinancials(params.id, {
      ...query,
      select: {
        amount: true,
        createdAt: true,
        id: true,

        inventory: {
          select: {
            id: true,
          },
        },

        transactionDate: true,
        transactionType: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/financials")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectFinancials(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: FinancialWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      financials: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/financials")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateFinancials(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: FinancialWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      financials: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/financials")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectFinancials(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: FinancialWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      financials: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/inventories")
  @ApiNestedQuery(InventoryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Inventory",
    action: "read",
    possession: "any",
  })
  async findInventories(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Inventory[]> {
    const query = plainToClass(InventoryFindManyArgs, request.query);
    const results = await this.service.findInventories(params.id, {
      ...query,
      select: {
        addedDate: true,
        createdAt: true,
        description: true,
        id: true,
        itemName: true,
        price: true,
        quantity: true,
        updatedAt: true,
        updatedDate: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/inventories")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectInventories(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: InventoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inventories: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/inventories")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateInventories(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: InventoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inventories: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/inventories")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectInventories(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: InventoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inventories: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/purchasings")
  @ApiNestedQuery(PurchasingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Purchasing",
    action: "read",
    possession: "any",
  })
  async findPurchasings(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Purchasing[]> {
    const query = plainToClass(PurchasingFindManyArgs, request.query);
    const results = await this.service.findPurchasings(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        inventory: {
          select: {
            id: true,
          },
        },

        purchaseDate: true,
        quantityPurchased: true,
        totalCost: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/purchasings")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectPurchasings(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: PurchasingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      purchasings: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/purchasings")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updatePurchasings(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: PurchasingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      purchasings: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/purchasings")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectPurchasings(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: PurchasingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      purchasings: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/salesItems")
  @ApiNestedQuery(SalesFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Sales",
    action: "read",
    possession: "any",
  })
  async findSalesItems(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Sales[]> {
    const query = plainToClass(SalesFindManyArgs, request.query);
    const results = await this.service.findSalesItems(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        inventory: {
          select: {
            id: true,
          },
        },

        quantitySold: true,
        saleDate: true,
        totalAmount: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/salesItems")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectSalesItems(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: SalesWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      salesItems: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/salesItems")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateSalesItems(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: SalesWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      salesItems: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/salesItems")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectSalesItems(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: SalesWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      salesItems: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }
}
