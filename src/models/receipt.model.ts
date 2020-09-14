import { nameToItemMap } from "./nameToItemMap.model";

//Holds data for the entire receipt
export interface receipt{
    receiptItems: nameToItemMap;
    totalCost: number;
    totalSalesTax: number;
}