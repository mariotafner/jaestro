/**
 * Encodes a string using a simple run-length encoding (RLE).
 *
 * Each run is written as its count followed by the character. Note that this
 * naive scheme assumes single-digit counts and no digits in the input; it round
 * trips with {@link rleDecode} under those assumptions.
 *
 * @param str - The string to encode.
 * @returns The run-length encoded string.
 *
 * @example
 * ```ts
 * rleEncode("aaabbc"); // => "3a2b1c"
 * ```
 */
export declare function rleEncode(str: string): string;
/**
 * Decodes a run-length encoded string produced by {@link rleEncode}.
 *
 * Expects `count`/`character` pairs with single-digit counts.
 *
 * @param str - The run-length encoded string.
 * @returns The decoded, expanded string.
 *
 * @example
 * ```ts
 * rleDecode("3a2b1c"); // => "aaabbc"
 * ```
 */
export declare function rleDecode(str: string): string;
//# sourceMappingURL=rleEncoding.d.ts.map