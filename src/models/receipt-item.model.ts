//Contains info for any given receipt line item
export interface receiptItem{
    import: boolean;
    taxExempt: boolean;
    baseCost: number;
    salesTax: number;
    itemName: string;
    quantity: number;
}