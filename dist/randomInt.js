"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomInt = randomInt;
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
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//# sourceMappingURL=randomInt.js.map