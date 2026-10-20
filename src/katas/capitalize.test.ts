import { describe, expect, it } from "vitest";
import { capitalize } from "./capitalize";

describe("capitalize", () => {
	it("uppercases the first letter of each word", () => {
		expect(capitalize("hello world")).toBe("Hello World");
	});

	it("handles single-letter words", () => {
		expect(capitalize("x y z")).toBe("X Y Z");
	});
});
