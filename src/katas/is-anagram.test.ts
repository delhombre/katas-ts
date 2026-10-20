import { describe, expect, it } from "vitest";
import { isAnagram } from "./is-anagram";

describe("isAnagram", () => {
	it("accepts two words with the same letters", () => {
		expect(isAnagram("listen,silent")).toBeTruthy();
	});

	it("rejects a different letter", () => {
		expect(isAnagram("abc,abd")).toBeFalsy();
	});

	it("rejects the same letters in different amounts", () => {
		expect(isAnagram("aab,abb")).toBeFalsy();
	});
});
