import { describe, expect, it } from "vitest";
import { mostFrequent } from "./most-frequent";

describe("mostFrequent", () => {
	it("returns the character that appears the most", () => {
		expect(mostFrequent("aabbbc")).toBe("b");
	});
});
