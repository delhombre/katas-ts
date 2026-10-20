import { describe, expect, it } from "vitest";
import { firstUnique } from "./first-unique";

describe("firstUnique", () => {
	it("returns the only character that appears once", () => {
		expect(firstUnique("aabcc")).toBe("b");
	});

	it("returns the first one when several appear once", () => {
		expect(firstUnique("abcabd")).toBe("c");
	});
});
