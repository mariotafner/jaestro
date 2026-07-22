/**
 * Collapses runs of the same character into a single occurrence.
 *
 * @param str - The input string.
 * @returns The string with consecutive duplicate characters removed.
 *
 * @example
 * ```ts
 * removeDuplicatedChars("aaabbbccc"); // => "abc"
 * removeDuplicatedChars("balloon");   // => "balon"
 * ```
 */
export function removeDuplicatedChars(str: string): string {
    return str.replace(/(.)\1+/g, "$1");
}
