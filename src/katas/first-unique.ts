export function firstUnique(input: string): string {
	const counts = new Map<string, number>();

	for (const char of input) {
		counts.set(char, (counts.get(char) ?? 0) + 1);
	}

	for (const char of input) {
		if (counts.get(char) === 1) return char;
	}
	return "-";
}
