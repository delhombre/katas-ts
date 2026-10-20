export function longestRun(input: string): string {
	let current = input[0],
		count = 0;
	let best = input[0],
		bestCount = 0;
	for (const char of input) {
		if (char === current) count++;
		else {
			current = char;
			count = 1;
		}
		if (count > bestCount) {
			best = current;
			bestCount = count;
		}
	}
	return `${best}:${bestCount}`;
}
