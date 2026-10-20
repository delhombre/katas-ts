export function sumNumbers(input: string): number {
	let result = 0;
	let digits = "";

	for (const char of input) {
		if (char >= "0" && char <= "9") {
			digits += char;
		} else {
			result += Number(digits);
			digits = "";
		}
	}
	result += Number(digits);
	return result;
}
