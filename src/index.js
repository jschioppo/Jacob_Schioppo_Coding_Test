"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const item_factory_util_1 = require("./utils/item-factory.util");
const receipt_util_1 = require("./utils/receipt.util");
class testClass {
    constructor() {
        this.fs = require('fs');
        this.itemFactory = new item_factory_util_1.itemFactory();
        this.receiptUtil = new receipt_util_1.receiptUtil();
    }
    main() {
        //Break the file into string arrays
        var fileLines = this.fs.readFileSync('src/text_files/input.txt').toString().split('\n');
        //Add items to receipt object line by line
        fileLines.forEach((fileLine) => {
            var item = this.itemFactory.createItem(fileLine);
            //This handles preventing any invalid items from being entered
            if (item !== null)
                this.receiptUtil.addItemToReceipt(item);
        });
        //Final output to output.txt
        this.fs.writeFileSync('src/text_files/output.txt', this.receiptUtil.outputReceipt());
    }
}
(new testClass()).main();
//# sourceMappingURL=index.js.map