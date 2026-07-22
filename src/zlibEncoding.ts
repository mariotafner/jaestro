import { deflateSync, inflateSync } from "node:zlib";

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
export function zlibCompress(data: string): string {
    return deflateSync(data).toString("base64");
}

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
export function zlibDecompress(data: string): string {
    return inflateSync(Buffer.from(data, "base64")).toString();
}
