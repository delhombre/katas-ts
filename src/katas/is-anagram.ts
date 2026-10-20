export function isAnagram(input: string): boolean {
	const [a, b] = input.split(",");
	return [...a].sort().join("") === [...b].sort().join("");
}
