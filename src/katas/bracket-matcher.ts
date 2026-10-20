export function bracketMatcher(input: string): boolean {
	const pairs: Record<string, string> = { ")": "(", "]": "[", "}": "{" };

	const stack: string[] = [];
	for (const char of input) {
		if ("([{".includes(char)) stack.push(char);
		else if (char in pairs && stack.pop() !== pairs[char]) return false;
	}
	return stack.length === 0;
}
