export function countVowels(input: string): number {
	const vowels = new Set("aeiou");
	let result = 0;
	for (const char of input.toLowerCase()) {
		if (vowels.has(char)) result++;
	}

	return result;
}
