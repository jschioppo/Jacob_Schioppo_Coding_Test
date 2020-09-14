import { receiptItem } from "../../src/models/receipt-item.model";

export class taxTestObjects{
    public receiptItemExemptImport: receiptItem = {
        baseCost: 15,
        import: true,
        taxExempt: true,
        salesTax: 0,
        itemName: "",
        quantity: 1
    };

    public receiptItemExemptImportSol: number = 0.75;



    public receiptItemNonExemptImport: receiptItem = {
        baseCost: 15,
        import: true,
        taxExempt: false,
        salesTax: 0,
        itemName: "",
        quantity: 1
    };

    public receiptItemNonExemptImportSol: number = 2.25;



    public receiptItemNonExemptNonImport: receiptItem = {
        baseCost: 15,
        import: false,
        taxExempt: false,
        salesTax: 0,
        itemName: "",
        quantity: 1
    };

    public receiptItemNonExemptNonImportSol: number = 1.50;


    public receiptItemExemptNonImport: receiptItem = {
        baseCost: 15,
        import: false,
        taxExempt: true,
        salesTax: 0,
        itemName: "",
        quantity: 1
    };

    public receiptItemExemptNonImportSol: number = 0;


    public receiptItemOddCostImport: receiptItem = {
        baseCost: 12.84,
        import: false,
        taxExempt: false,
        salesTax: 0,
        itemName: "",
        quantity: 1
    };


    public receiptItemOddCostImportSol: number = 1.30;


    public receiptItemOddCostNonImport: receiptItem = {
        baseCost: 12.84,
        import: true,
        taxExempt: false,
        salesTax: 0,
        itemName: "",
        quantity: 1
    };


    public receiptItemOddCostNonImportSol: number = 1.95;
}