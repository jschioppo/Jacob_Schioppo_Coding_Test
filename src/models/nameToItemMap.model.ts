import { receiptItem } from "./receipt-item.model";

//A custom dictionary like object making the name of an item on a receipt to the receipt item model
export interface nameToItemMap{
    [itemName: string]: receiptItem;
}