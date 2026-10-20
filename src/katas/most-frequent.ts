export function mostFrequent(input: string): string {
	const counts = new Map<string, number>();
	let best = "";
	let bestCount = 0;

	for (const char of input) {
		counts.set(char, (counts.get(char) ?? 0) + 1);
	}

	for (const [char, count] of counts) {
		if (count > bestCount) {
			best = char;
			bestCount = count;
		}
	}
	return best;
}
