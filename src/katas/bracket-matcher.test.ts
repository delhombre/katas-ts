import { describe, expect, it } from "vitest";
import { bracketMatcher } from "./bracket-matcher";

describe("bracketMatcher", () => {
	it("accepts a string with no brackets", () => {
		expect(bracketMatcher("abc")).toBe(true);
	});

	it("accepts correctly nested brackets of every kind", () => {
		expect(bracketMatcher("(a[b]c){d}")).toBe(true);
	});

	it("rejects brackets closed in the wrong order", () => {
		expect(bracketMatcher("([)]")).toBe(false);
	});

	it("rejects a bracket that is never closed", () => {
		expect(bracketMatcher("((a)")).toBe(false);
	});

	it("rejects a bracket closed before it is opened", () => {
		expect(bracketMatcher("a)b(")).toBe(false);
	});
});
