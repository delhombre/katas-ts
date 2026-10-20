import { describe, expect, it } from "vitest";
import { longestRun } from "./longest-run";

describe("longestRun", () => {
	it("returns the character of the longest run and its length", () => {
		expect(longestRun("aabbbcc")).toBe("b:3");
	});

	it("returns the first character when nothing repeats", () => {
		expect(longestRun("abc")).toBe("a:1");
	});

	it("keeps the first run on a tie", () => {
		expect(longestRun("aabb")).toBe("a:2");
	});
});
