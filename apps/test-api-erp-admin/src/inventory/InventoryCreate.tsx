import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { FinancialTitle } from "../financial/FinancialTitle";
import { PurchasingTitle } from "../purchasing/PurchasingTitle";
import { SalesTitle } from "../sales/SalesTitle";
import { UserTitle } from "../user/UserTitle";

export const InventoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="addedDate" source="addedDate" />
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput source="financials" reference="Financial">
          <SelectArrayInput
            optionText={FinancialTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="itemName" source="itemName" />
        <NumberInput label="price" source="price" />
        <ReferenceArrayInput source="purchasings" reference="Purchasing">
          <SelectArrayInput
            optionText={PurchasingTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput step={1} label="quantity" source="quantity" />
        <ReferenceArrayInput source="salesItems" reference="Sales">
          <SelectArrayInput
            optionText={SalesTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="updatedDate" source="updatedDate" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
