import { salesTaxCalculator } from "../src/utils/sales-tax-calculator.util";
import { taxTestObjects } from "./test_objects/tax.test-objects";

const taxCalc = new salesTaxCalculator();
const testObjs = new taxTestObjects();

test('Tax Calculations, Non Exempt Non Import', () => {
    expect(taxCalc.calculateSalesTax(testObjs.receiptItemNonExemptNonImport)).toBe(testObjs.receiptItemNonExemptNonImportSol);
});

test('Tax Calculation, Non Exempt Import', () => {
    expect(taxCalc.calculateSalesTax(testObjs.receiptItemNonExemptImport)).toBe(testObjs.receiptItemNonExemptImportSol);
});

test('Tax Calculation, Exempt Non Import', () => {
    expect(taxCalc.calculateSalesTax(testObjs.receiptItemExemptNonImport)).toBe(testObjs.receiptItemExemptNonImportSol);
});

test('Tax Calculation, Exempt Import', () => {
    expect(taxCalc.calculateSalesTax(testObjs.receiptItemExemptImport)).toBe(testObjs.receiptItemExemptImportSol);
});

test('Tax Calculation, Odd Cost Import', () => {
    expect(taxCalc.calculateSalesTax(testObjs.receiptItemOddCostImport)).toBe(testObjs.receiptItemOddCostImportSol);
});

test('Tax Calculation, Odd Cost Non Import', () => {
    expect(taxCalc.calculateSalesTax(testObjs.receiptItemOddCostNonImport)).toBe(testObjs.receiptItemOddCostNonImportSol);
});