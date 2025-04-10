import { expect, test } from "vitest";
import { add } from "./main.js";

test('adds 1 + 2 to equal 3', () => {
    expect(add(`1,2`)).toBe(3);
})
test('adds("") to equal 0', () => {
    expect(add(``)).toBe(0);
})
test('adds 1 + 2 to equal 3', () => {
    expect(add(`1
        2`)).toBe(3);
})
test('adds 1 + 2 to equal 3', () => {
    expect(add(`//;1;2`)).toBe(3);
})
test('negative number is not alowed', () => {
    expect(add(`//;1;-2`)).toBe("negatives not allowed: -2");
})
test('multiple negative number', () => {
    expect(add(`-1,-2,-3`)).toBe("negatives not allowed: -1,-2,-3");
})

test('ignore number > 1000', () => {
    expect(add(`1,2,1001`)).toBe(3);
})