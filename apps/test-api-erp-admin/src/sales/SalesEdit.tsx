import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { InventoryTitle } from "../inventory/InventoryTitle";
import { UserTitle } from "../user/UserTitle";

export const SalesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="inventory.id"
          reference="Inventory"
          label="Inventory"
        >
          <SelectInput optionText={InventoryTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="quantitySold" source="quantitySold" />
        <DateTimeInput label="saleDate" source="saleDate" />
        <NumberInput label="totalAmount" source="totalAmount" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
