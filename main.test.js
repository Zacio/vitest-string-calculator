import { expect, test } from "vitest";
import { add } from "./main.js";

test('adds 1 + 2 to equal 6', () => {
    expect(add(1, 2)).toBe(6)
  })