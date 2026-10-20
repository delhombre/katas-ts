import { describe, expect, it } from "vitest";
import { countVowels } from "./count-vowels";

describe("countVowels", () => {
	it("counts the vowels across words", () => {
		expect(countVowels("Hello World")).toBe(3);
	});

	it("returns 0 when there is no vowel", () => {
		expect(countVowels("xyz")).toBe(0);
	});

	it("counts the vowels in a single word", () => {
		expect(countVowels("Bruno")).toBe(2);
	});
});
