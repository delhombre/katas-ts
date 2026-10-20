import { describe, expect, it } from "vitest";
import { sumNumbers } from "./sum-numbers";

describe("sumNumbers", () => {
	it("adds multi-digit numbers", () => {
		expect(sumNumbers("abc12de3f")).toBe(15);
	});

	it("adds single digits", () => {
		expect(sumNumbers("a1b2c3")).toBe(6);
	});

	it("returns 0 when there is no number", () => {
		expect(sumNumbers("hello")).toBe(0);
	});

	it("reads a number at the end of the string", () => {
		expect(sumNumbers("x100")).toBe(100);
	});
});
