import { receiptItem } from "../models/receipt-item.model";

//This class is only responsible for calculating the sales tax for any given store item
export class salesTaxCalculator{

    private IMPORT_TAX: number = 0.05;
    private SALES_TAX: number = 0.1;

    calculateSalesTax(item: receiptItem): number{
        var salesTax = 0;

        //Tax exempt calculation for food, books, and medicine
        if(!item.taxExempt){
            salesTax += item.baseCost * this.SALES_TAX;
        }

        //Tax calculation for imported items
        if(item.import){
            salesTax += item.baseCost * this.IMPORT_TAX;
        }

        //Get the next highest 5 cent point
        salesTax = Math.ceil(salesTax / 0.05) * 0.05;

        //Round to two decimal places (converts to string) and use + operator to convert back to number
        return +salesTax.toFixed(2);
    }
}