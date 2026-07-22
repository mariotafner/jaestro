"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomString = randomString;
/**
 * Generates a random alphanumeric string of the given length.
 *
 * Characters are drawn uniformly from `A-Z`, `a-z` and `0-9`.
 *
 * Note: this uses `Math.random()` and is **not** cryptographically secure — do
 * not use it for tokens, passwords or anything security-sensitive.
 *
 * @param length - How many characters the resulting string should have.
 * @returns A random string of the requested length (empty string if `length <= 0`).
 *
 * @example
 * ```ts
 * randomString(8); // e.g. "a9Kf0Zqu"
 * ```
 */
function randomString(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
//# sourceMappingURL=randomString.js.map