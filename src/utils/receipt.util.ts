import { receipt } from "../models/receipt.model";
import { receiptItem } from "../models/receipt-item.model";

export class receiptUtil{

    private receipt: receipt;

    constructor(){
        this.receipt = {
            totalSalesTax: 0,
            totalCost: 0,
            receiptItems: {}
        }
    }

    //Check dictionary for pre-existing item with the same name. If it doesn't exist add it, otherwise update quantity. Then update cost and tax
    addItemToReceipt(item: receiptItem){
        var mappedReceiptItem = this.receipt.receiptItems[item.itemName];

        if(mappedReceiptItem == null){
            this.receipt.receiptItems[item.itemName] = item;
        }
        else{
            mappedReceiptItem.quantity++;
        }

        this.receipt.totalCost += item.baseCost;
        this.receipt.totalSalesTax += item.salesTax;
    }

    //Controls the final output
    outputReceipt(): string{
        var output = '';
        for(let key in this.receipt.receiptItems){
            output += this.receiptItemToString(this.receipt.receiptItems[key]).trim() + '\n';
        }

        //Prevents a blank receipt with a sales and total value of 0
        if(output == '') return '';

        output += `Sales Taxes: ${(this.receipt.totalSalesTax).toFixed(2)}\n`;
        output += `Total: ${(this.receipt.totalCost + this.receipt.totalSalesTax).toFixed(2)}`;

        return output;
    }

    //Helper function for each receipt line item
    private receiptItemToString(item: receiptItem): string{
        return `${item.itemName}: ${((item.baseCost + item.salesTax) * item.quantity).toFixed(2)}${(item.quantity > 1 ? 
            ' (' + item.quantity + ' @ ' + (item.baseCost + item.salesTax).toFixed(2) + ')'
            : '')}`;
    }
}