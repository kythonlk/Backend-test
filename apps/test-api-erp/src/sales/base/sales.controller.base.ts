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
import { SalesService } from "../sales.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SalesCreateInput } from "./SalesCreateInput";
import { Sales } from "./Sales";
import { SalesFindManyArgs } from "./SalesFindManyArgs";
import { SalesWhereUniqueInput } from "./SalesWhereUniqueInput";
import { SalesUpdateInput } from "./SalesUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SalesControllerBase {
  constructor(
    protected readonly service: SalesService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Sales })
  @nestAccessControl.UseRoles({
    resource: "Sales",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSales(@common.Body() data: SalesCreateInput): Promise<Sales> {
    return await this.service.createSales({
      data: {
        ...data,

        inventory: data.inventory
          ? {
              connect: data.inventory,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Sales] })
  @ApiNestedQuery(SalesFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Sales",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async salesItems(@common.Req() request: Request): Promise<Sales[]> {
    const args = plainToClass(SalesFindManyArgs, request.query);
    return this.service.salesItems({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Sales })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Sales",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async sales(
    @common.Param() params: SalesWhereUniqueInput
  ): Promise<Sales | null> {
    const result = await this.service.sales({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Sales })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Sales",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSales(
    @common.Param() params: SalesWhereUniqueInput,
    @common.Body() data: SalesUpdateInput
  ): Promise<Sales | null> {
    try {
      return await this.service.updateSales({
        where: params,
        data: {
          ...data,

          inventory: data.inventory
            ? {
                connect: data.inventory,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Sales })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Sales",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSales(
    @common.Param() params: SalesWhereUniqueInput
  ): Promise<Sales | null> {
    try {
      return await this.service.deleteSales({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
