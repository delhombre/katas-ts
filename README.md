# Katas

Exercices d'algorithmique en TypeScript, faits en TDD (red → green → refactor) avec [Vitest](https://vitest.dev).

Chaque kata vit dans `src/katas/` : `nom-du-kata.ts` pour le code, `nom-du-kata.test.ts` pour ses tests.

## Lancer

```sh
pnpm install
pnpm test          # mode watch, pour la boucle TDD
pnpm test:run      # un seul passage
pnpm typecheck
```

## Katas

| Kata | Énoncé |
| --- | --- |
| `compress` / `decompress` | `"aab"` → `"2a1b"`, et l'inverse |
| `sumNumbers` | somme des nombres d'une chaîne : `"abc12de3f"` → `15` |
| `firstUnique` | premier caractère qui n'apparaît qu'une fois, sinon `"-"` |
| `countVowels` | nombre de voyelles |
| `capitalize` | majuscule au début de chaque mot |
| `mostFrequent` | caractère le plus fréquent |
| `isAnagram` | `"abc,cab"` → `true` |
| `longestRun` | plus longue suite d'un même caractère : `"aaab"` → `"a:3"` |
| `groupWords` | mots groupés par longueur, séparés par `\|` |
| `bracketMatcher` | `()`, `[]` et `{}` bien ouverts, fermés et imbriqués |
