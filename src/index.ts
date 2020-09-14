import { itemFactory } from './utils/item-factory.util';
import { receiptUtil } from './utils/receipt.util';

class testClass{

    private fs = require('fs');

    private receiptUtil: receiptUtil;
    public itemFactory: itemFactory;

    constructor(){
        this.itemFactory = new itemFactory();
        this.receiptUtil = new receiptUtil();
    }

    main(){
        //Break the file into string arrays
        var fileLines: string[] = this.fs.readFileSync('src/text_files/input.txt').toString().split('\n');

        //Add items to receipt object line by line
        fileLines.forEach((fileLine) => {
            var item = this.itemFactory.createItem(fileLine);
            
            //This handles preventing any invalid items from being entered
            if(item !== null) this.receiptUtil.addItemToReceipt(item);
        });

        //Final output to output.txt
        this.fs.writeFileSync('src/text_files/output.txt', this.receiptUtil.outputReceipt());
    }

}

(new testClass()).main();
