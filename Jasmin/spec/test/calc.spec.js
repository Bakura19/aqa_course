const Calculator = require("../../Calculator/calculator");

describe("Calculator", function () {
    let calc;

    beforeEach(function () {
        calc = new Calculator();
    });
// Adding tests
    it("Correct sum of two positive numbers", function () {
        expect(calc.add(2, 2)).toBe(4);
    });

    it("Correct sum of a positive and a negative number", function () {
        expect(calc.add(-1, 71)).toBe(70);
    });

    it("NaN when adding NaN", function () {
        expect(calc.add(NaN, 5)).toBeNaN();
    });

    it("Error by adding a string", function () {
        expect(() => calc.add("5", "10")).toThrow();
    });
    // Mult test
    it("Correct multiplication of two positive numbers", function () {
        expect(calc.multiply(2, 2)).toBe(4);
    });

    it("Multiplying by zero", function () {
        expect(calc.multiply(100, 0)).toBe(0);
    });

    it("Correct multiplication of negative and a positive numbers", function () {
        expect(calc.multiply(-8, 1)).toBe(-8);
    });

    it("should return NaN when multiplying by undefined", function () {
        expect(calc.multiply(undefined, 5)).toBeNaN();
    });

    // Substruction tests
    it("Correct subtraction of two positive numbers", function () {
        expect(calc.subtraction(36, 6)).toBe(30);
    });

    it("Subtracting equal numbers", function () {
        expect(calc.subtraction(-7, -7)).toBe(0);
    });

    // Division tests
    it("Correct division of two positive numbers", function () {
        expect(calc.divide(25, 5)).toBe(5);
    });

    it("Correct division of a positive and a negative number", function () {
        expect(calc.divide(33, -3)).toBe(-11);
    });

    it("Division by zero", function () {
        expect(calc.divide(10, 0)).toBe(Infinity);
    });

    it("Error when dividing by string", function () {
        expect(() => calc.divide(10, "abc")).toThrow();
    });

    // Degree tests
    it("should return correct square of a positive number", function () {
        expect(calc.exponentiation(2)).toBe(4);
    });

    it("should return correct square of a negative number", function () {
        expect(calc.exponentiation(-2)).toBe(4);
    });  

});