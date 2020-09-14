import { itemFactory } from "../src/utils/item-factory.util";
import { itemTestObjects } from "./test_objects/receipt-items.test-objects";

const itemFactoryUtil: itemFactory = new itemFactory();
const itemTestObjs: itemTestObjects = new itemTestObjects();

test('Item Factory, Exempt Import', () => {
    var testItem = itemFactoryUtil.createItem(itemTestObjs.exemptImport);
    expect(itemFactoryUtil.itemEquals(testItem, itemTestObjs.exemptImportSol)).toBe(true);
});

test('Item Factory, Exempt Non Import', () => {
    var testItem = itemFactoryUtil.createItem(itemTestObjs.exemptNonImport);
    expect(itemFactoryUtil.itemEquals(testItem, itemTestObjs.exemptNonImportSol)).toBe(true);
});

test('Item Factory, Non Exempt Import', () => {
    var testItem = itemFactoryUtil.createItem(itemTestObjs.nonExemptImport);
    expect(itemFactoryUtil.itemEquals(testItem, itemTestObjs.nonExemptImportSol)).toBe(true);
});

test('Item Factory, Non Exempt Non Import', () => {
    var testItem = itemFactoryUtil.createItem(itemTestObjs.nonExemptNonImport);
    expect(itemFactoryUtil.itemEquals(testItem, itemTestObjs.nonExemptNonImportSol)).toBe(true);
});

test('Item Factory, Invalid String', () => {
    var testItem = itemFactoryUtil.createItem(itemTestObjs.invalidString);
    expect(testItem).toBe(null);
});

test('Item Factory, Invalid Imported', () => {
    var testItem = itemFactoryUtil.createItem(itemTestObjs.invalidImportedOnly);
    expect(testItem).toBe(null);
});