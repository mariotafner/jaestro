/**
 * Compresses a string with zlib (deflate) and returns a base64 string.
 *
 * Relies on Node's built-in `zlib` module, so it runs under Node and Bun.
 *
 * @param data - The string to compress.
 * @returns The deflated data, base64-encoded.
 *
 * @example
 * ```ts
 * const packed = zlibCompress("hello world");
 * ```
 */
export declare function zlibCompress(data: string): string;
/**
 * Reverses {@link zlibCompress}: base64-decodes then inflates back to a string.
 *
 * @param data - The base64 string produced by {@link zlibCompress}.
 * @returns The original, decompressed string.
 *
 * @example
 * ```ts
 * zlibDecompress(packed); // => "hello world"
 * ```
 */
export declare function zlibDecompress(data: string): string;
//# sourceMappingURL=zlibEncoding.d.ts.map