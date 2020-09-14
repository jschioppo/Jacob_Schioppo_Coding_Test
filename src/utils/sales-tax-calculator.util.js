"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.salesTaxCalculator = void 0;
//This class is only responsible for calculating the sales tax for any given store item
class salesTaxCalculator {
    constructor() {
        this.IMPORT_TAX = 0.05;
        this.SALES_TAX = 0.1;
    }
    calculateSalesTax(item) {
        var salesTax = 0;
        //Tax exempt calculation for food, books, and medicine
        if (!item.taxExempt) {
            salesTax += item.baseCost * this.SALES_TAX;
        }
        //Tax calculation for imported items
        if (item.import) {
            salesTax += item.baseCost * this.IMPORT_TAX;
        }
        //Get the next highest 5 cent point
        salesTax = Math.ceil(salesTax / 0.05) * 0.05;
        //Round to two decimal places (converts to string) and use + operator to convert back to number
        return +salesTax.toFixed(2);
    }
}
exports.salesTaxCalculator = salesTaxCalculator;
//# sourceMappingURL=sales-tax-calculator.util.js.map