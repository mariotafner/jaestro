/**
 * Collapses any run of whitespace into a single space and trims the ends.
 *
 * @param str - The input string.
 * @returns The normalized string with single spaces and no leading/trailing whitespace.
 *
 * @example
 * ```ts
 * removeDuplicatedSpaces("  hello    world  "); // => "hello world"
 * ```
 */
export function removeDuplicatedSpaces(str: string): string {
    return str.replace(/\s+/g, " ").trim();
}
