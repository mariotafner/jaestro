/**
 * Compresses a string with Snappy and returns a base64 string.
 *
 * Requires the optional `snappy` dependency (a native module); it is loaded
 * lazily so importing the rest of the library never pulls it in.
 *
 * @param data - The string to compress.
 * @returns A promise resolving to the compressed data, base64-encoded.
 *
 * @example
 * ```ts
 * const packed = await snappyCompress("hello world");
 * ```
 */
export declare function snappyCompress(data: string): Promise<string>;
/**
 * Reverses {@link snappyCompress}, returning the base64 payload that was
 * compressed.
 *
 * Requires the optional `snappy` dependency, loaded lazily.
 *
 * @param data - The base64 string produced by {@link snappyCompress}.
 * @returns A promise resolving to the decompressed, base64-encoded payload.
 *
 * @example
 * ```ts
 * const original = await snappyDecompress(packed);
 * ```
 */
export declare function snappyDecompress(data: string): Promise<string>;
//# sourceMappingURL=snappyEncoding.d.ts.map