import { receiptUtil } from "../src/utils/receipt.util";
import { itemCostTestObjects } from "./test_objects/item-costs.test-objects";
import { itemFactory } from "../src/utils/item-factory.util";

var receiptTestUtil: receiptUtil = null;
const itemFactoryUtil: itemFactory = new itemFactory();
const itemCostsTestObjs: itemCostTestObjects = new itemCostTestObjects();

beforeEach(() => {
    receiptTestUtil = new receiptUtil();
});

test('Receipt Creation Input One', () => {
    itemCostsTestObjs.inputOne.forEach((input: string) => {
        var testItem = itemFactoryUtil.createItem(input)
        if(testItem !== null) receiptTestUtil.addItemToReceipt(testItem);
    });

    var output = receiptTestUtil.outputReceipt();
    expect(output).toBe(itemCostsTestObjs.inputOneSol);
});

test('Receipt Creation Input Two', () => {
    itemCostsTestObjs.inputTwo.forEach((input: string) => {
        var testItem = itemFactoryUtil.createItem(input)
        if(testItem !== null) receiptTestUtil.addItemToReceipt(testItem);
    });

    var output = receiptTestUtil.outputReceipt();
    expect(output).toBe(itemCostsTestObjs.inputTwoSol);
});

test('Receipt Creation Input Three', () => {
    itemCostsTestObjs.inputThree.forEach((input: string) => {
        var testItem = itemFactoryUtil.createItem(input)
        if(testItem !== null) receiptTestUtil.addItemToReceipt(testItem);
    });

    var output = receiptTestUtil.outputReceipt();
    expect(output).toBe(itemCostsTestObjs.inputThreeSol);
});

test('Receipt Creation All Valid But One', () => {
    itemCostsTestObjs.allValidButOne.forEach((input: string) => {
        var testItem = itemFactoryUtil.createItem(input)
        if(testItem !== null) receiptTestUtil.addItemToReceipt(testItem);
    });

    var output = receiptTestUtil.outputReceipt();
    expect(output).toBe(itemCostsTestObjs.allValidButOneSol);
});

test('Receipt Creation Blank', () => {
    itemCostsTestObjs.blank.forEach((input: string) => {
        var testItem = itemFactoryUtil.createItem(input)
        if(testItem !== null) receiptTestUtil.addItemToReceipt(testItem);
    });

    var output = receiptTestUtil.outputReceipt();
    expect(output).toBe(itemCostsTestObjs.invalidSol);
});

test('Receipt Creation Only Invalid', () => {
    itemCostsTestObjs.onlyInvalid.forEach((input: string) => {
        var testItem = itemFactoryUtil.createItem(input)
        if(testItem !== null) receiptTestUtil.addItemToReceipt(testItem);
    });

    var output = receiptTestUtil.outputReceipt();
    expect(output).toBe(itemCostsTestObjs.invalidSol);
});

test('Receipt Creation Only Invalid Imported', () => {
    itemCostsTestObjs.onlyInvalidImported.forEach((input: string) => {
        var testItem = itemFactoryUtil.createItem(input)
        if(testItem !== null) receiptTestUtil.addItemToReceipt(testItem);
    });

    var output = receiptTestUtil.outputReceipt();
    expect(output).toBe(itemCostsTestObjs.invalidSol);
});




