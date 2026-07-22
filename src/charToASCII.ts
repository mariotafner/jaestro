/**
 * Returns the ASCII/UTF-16 code of the first character of a string.
 *
 * @param c - The string whose first character will be read.
 * @returns The numeric code point (`charCodeAt(0)`), or `NaN` for an empty string.
 *
 * @example
 * ```ts
 * charToASCII("A"); // => 65
 * ```
 */
export function charToASCII(c: string): number {
    return c.charCodeAt(0);
}
