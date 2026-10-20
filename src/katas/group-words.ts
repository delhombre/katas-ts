export function groupWords(input: string): string {
	const groups = new Map<number, string[]>();

	for (const word of input.split(" ")) {
		const group = groups.get(word.length) ?? [];
		group.push(word);
		groups.set(word.length, group);
	}

	return [...groups.keys()]
		.sort((a, b) => a - b)
		.map((len) => groups.get(len)!.join(" "))
		.join("|");
}
