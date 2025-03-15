const Calculator = require("../../Calculator/calculator");

describe("Calculator", function () {
    let calc;

    beforeEach(function () {
        calc = new Calculator();
    });

    it("Adding of positive and negative numbers", function () {
        expect(calc.add(2, 2)).toBe(4);
        expect(calc.add(-1, 71)).toBe(70);
    });

    it("Multiplication of positive and negative numbers", function () {
        expect(calc.multiply(2, 2)).toBe(4);
        expect(calc.multiply(100, 0)).toBe(0);
        expect(calc.multiply(-8, 1)).toBe(-8);
    });

    it("Substraction of positive and negative numbers", function () {
        expect(calc.subtraction(36, 6)).toBe(30);
        expect(calc.subtraction(-7, -7)).toBe(0);
    });

    it("Divide of positive and negative numbers", function () {
        expect(calc.divide(25, 5)).toBe(5);
        expect(calc.divide(33, -3)).toBe(-11);
    });

    it("Degree of positive and negative numbers", function () {
        expect(calc.exponentiation(2)).toBe(4);
        expect(calc.exponentiation(-2)).toBe(4);
    });
});