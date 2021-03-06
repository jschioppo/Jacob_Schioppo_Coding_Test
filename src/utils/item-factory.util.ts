import { salesTaxCalculator } from "./sales-tax-calculator.util";
import { receiptItem } from "../models/receipt-item.model";

//Creates a receipt item from a single input line
export class itemFactory{
    private salesTaxCalc: salesTaxCalculator;

    constructor(){
        this.salesTaxCalc = new salesTaxCalculator();
    }

    //Converts the string from the input file to 
    public createItem(itemInput: string): receiptItem{
        var strSplit: string[] = itemInput.split(' ');

        //Make sure the input is at least the minimum, Quantity, a 1 word name, the price, and the word 'at'
        if(strSplit.length < 4) return null;

        //Parse the string to a number with the + operator
        var price: number = +strSplit.pop();

        //Checks if the item is tax exempt. This assumes any book, medicine, or food item includes the word chocolate, book, or pill
        var taxExemptItem: boolean = (['chocolate', 'Chocolate','book', 'Book', 'pills', 'Pills', 'pill', 'Pill', 'Chocolates', 'chocolates', 'Books', 'books'])
            .some(taxExemptItem => strSplit.includes(taxExemptItem));

        //Checks if the item is imported by looking for keyword imported
        var importItem: boolean = (['imported', 'Imported']).some(importedKeyWord => strSplit.includes(importedKeyWord));
        
        //Get rid of the word 'at' and the quantity, since the quantity is 1. We can handle situations where quantity > 1, but that
        //would lead to unexpected results as well because of the grammer (1 book vs 2 books)
        strSplit.pop();
        var quantity: number = +strSplit.shift();

        var name = '';
        //At this point we should have only the product name left in the array, so we build the name out of the left over array members
        strSplit.forEach(str => name += str + ' ');

        //Handle the case where the length is the proper length but the only word in the name would be imported, i.e 1 imported at 10.
        if(name.toLowerCase().trim() === 'imported') return null;

        var item: receiptItem =  {
            baseCost: price,
            salesTax: 0,
            taxExempt: taxExemptItem,
            import: importItem,
            itemName: name.trim(),
            quantity: quantity
        };

        item.salesTax = this.salesTaxCalc.calculateSalesTax(item);

        return item;
    }

    //Equality comparison used for unit tests
    public itemEquals(itemOne: receiptItem, itemTwo: receiptItem): boolean{
        return itemOne.baseCost === itemTwo.baseCost 
            && itemOne.import === itemTwo.import
            && itemOne.itemName === itemTwo.itemName
            && itemOne.quantity === itemTwo.quantity
            && itemOne.salesTax === itemTwo.salesTax
            && itemOne.taxExempt === itemTwo.taxExempt;
    }

    //Used for internal testing only
    public toString(item: receiptItem){
        return `Base_Cost: ${item.baseCost}, Import: ${item.import}, Exempt: ${item.taxExempt}, Name: ${item.itemName}, Quantity: ${item.quantity}, Tax: ${item.salesTax}`;
    }
}