/**
 * Compresses a string with pako (zlib deflate) and returns a base64 string.
 *
 * The input is base64-encoded first, then deflated. Requires the optional
 * `pako` dependency to be installed; it is loaded lazily so importing the rest
 * of the library never pulls it in.
 *
 * @param data - The string to compress.
 * @returns The compressed data, base64-encoded.
 *
 * @example
 * ```ts
 * const packed = pakoCompress("hello world");
 * ```
 */
export declare function pakoCompress(data: string): string;
/**
 * Reverses {@link pakoCompress}: inflates then base64-decodes back to a string.
 *
 * Requires the optional `pako` dependency, loaded lazily.
 *
 * @param data - The base64 string produced by {@link pakoCompress}.
 * @returns The original, decompressed string.
 *
 * @example
 * ```ts
 * pakoDecompress(packed); // => "hello world"
 * ```
 */
export declare function pakoDecompress(data: string): string;
//# sourceMappingURL=pakoEncoding.d.ts.map