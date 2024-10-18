/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SalesWhereInput } from "./SalesWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SalesOrderByInput } from "./SalesOrderByInput";

@ArgsType()
class SalesFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SalesWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SalesWhereInput, { nullable: true })
  @Type(() => SalesWhereInput)
  where?: SalesWhereInput;

  @ApiProperty({
    required: false,
    type: [SalesOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SalesOrderByInput], { nullable: true })
  @Type(() => SalesOrderByInput)
  orderBy?: Array<SalesOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SalesFindManyArgs as SalesFindManyArgs };
