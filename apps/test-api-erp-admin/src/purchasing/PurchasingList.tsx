import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { INVENTORY_TITLE_FIELD } from "../inventory/InventoryTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PurchasingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Purchasings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Inventory"
          source="inventory.id"
          reference="Inventory"
        >
          <TextField source={INVENTORY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="purchaseDate" source="purchaseDate" />
        <TextField label="quantityPurchased" source="quantityPurchased" />
        <TextField label="totalCost" source="totalCost" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
