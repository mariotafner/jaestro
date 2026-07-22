/**
 * Returns a random element from an array.
 *
 * Uses `Math.random()`, so it is **not** cryptographically secure.
 *
 * @typeParam T - The element type.
 * @param arr - The array to pick from.
 * @returns A randomly chosen element (`undefined` if the array is empty).
 *
 * @example
 * ```ts
 * randomChoice(["a", "b", "c"]); // e.g. "b"
 * ```
 */
export declare function randomChoice<T>(arr: readonly T[]): T;
//# sourceMappingURL=randomChoice.d.ts.map