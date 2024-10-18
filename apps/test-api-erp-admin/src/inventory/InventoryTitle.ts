import { Inventory as TInventory } from "../api/inventory/Inventory";

export const INVENTORY_TITLE_FIELD = "itemName";

export const InventoryTitle = (record: TInventory): string => {
  return record.itemName?.toString() || String(record.id);
};
