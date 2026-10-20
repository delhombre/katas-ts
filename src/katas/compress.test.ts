import { describe, expect, it } from "vitest";
import { compress, decompress } from "./compress";

describe("compress", () => {
	it("encodes a single character", () => {
		expect(compress("a")).toBe("1a");
	});

	it("counts a repeated character", () => {
		expect(compress("aa")).toBe("2a");
	});

	it("counts a longer run", () => {
		expect(compress("aaa")).toBe("3a");
	});

	it("encodes each change of character", () => {
		expect(compress("ab")).toBe("1a1b");
	});

	it("encodes several runs of different lengths", () => {
		expect(compress("aaabccdddd")).toBe("3a1b2c4d");
	});

	it("writes counts of two digits or more", () => {
		expect(compress("zzzzzzzzzzzz")).toBe("12z");
	});

	it("encodes characters that never repeat", () => {
		expect(compress("abc")).toBe("1a1b1c");
	});
});

describe("decompress", () => {
	it("reads counts of two digits or more", () => {
		expect(decompress("12z")).toBe("zzzzzzzzzzzz");
	});

	it("expands several runs", () => {
		expect(decompress("1a1b1c")).toBe("abc");
	});
});
