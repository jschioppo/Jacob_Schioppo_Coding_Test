import { receiptItem } from "../../src/models/receipt-item.model";

export class itemTestObjects{

    public exemptNonImport: string = '1 Book at 12.49';

    public exemptNonImportSol: receiptItem = {
        baseCost: 12.49,
        import: false,
        taxExempt: true,
        salesTax: 0,
        itemName: "Book",
        quantity: 1
    };

    public exemptImport: string = "1 imported box of chocolates at 10.00";

    public exemptImportSol: receiptItem = {
        baseCost: 10,
        import: true,
        taxExempt: true,
        salesTax: 0.5,
        itemName: "imported box of chocolates",
        quantity: 1
    };

    public nonExemptImport: string = '1 imported bottle of perfume at 47.50';

    public nonExemptImportSol = {
        baseCost: 47.50,
        import: true,
        taxExempt: false,
        salesTax: 7.15,
        itemName: "imported bottle of perfume",
        quantity: 1
    };

    public nonExemptNonImport: string = '1 bottle of perfume at 18.99';

    public nonExemptNonImportSol = {
        baseCost: 18.99,
        import: false,
        taxExempt: false,
        salesTax: 1.90,
        itemName: "bottle of perfume",
        quantity: 1
    };

    public invalidString: string = '1 bike at';

    public invalidImportedOnly: string = '1 imported at 10';
}