import { describe, expect, it } from "vitest";
import { groupWords } from "./group-words";

describe("groupWords", () => {
	it("groups words by length, shortest group first", () => {
		expect(groupWords("a bb cc d eee")).toBe("a d|bb cc|eee");
	});
});
