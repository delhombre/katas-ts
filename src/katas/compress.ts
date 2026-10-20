export function compress(input: string): string {
	let result = "";
	let current = input[0];
	let count = 0;

	for (const char of input) {
		if (char === current) {
			count++;
		} else {
			result += count + current;
			current = char;
			count = 1;
		}
	}
	result += count + current;

	return result;
}

export function decompress(input: string): string {
	let result = "";
	let digits = "";

	for (const char of input) {
		if (char >= "0" && char <= "9") {
			digits += char;
		} else {
			result += char.repeat(Number(digits));
			digits = "";
		}
	}

	return result;
}
