export function capitalize(input: string): string {
	return input
		.split(" ")
		.map((w) => w[0].toUpperCase() + w.slice(1))
		.join(" ");
}
