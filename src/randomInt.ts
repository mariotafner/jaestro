/**
 * Returns a random integer between `min` and `max`, both inclusive.
 *
 * Uses `Math.random()`, so it is **not** cryptographically secure.
 *
 * @param min - The lower bound (inclusive).
 * @param max - The upper bound (inclusive).
 * @returns A random integer in the range `[min, max]`.
 *
 * @example
 * ```ts
 * randomInt(1, 6); // e.g. 4 (like rolling a die)
 * ```
 */
export function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
