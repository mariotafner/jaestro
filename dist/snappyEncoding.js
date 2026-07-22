"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.snappyCompress = snappyCompress;
exports.snappyDecompress = snappyDecompress;
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
async function snappyCompress(data) {
    const snappy = require("snappy");
    const base64String = btoa(data);
    const buffer = Buffer.from(base64String, "base64");
    const compressed = await snappy.compress(buffer);
    return compressed.toString("base64");
}
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
async function snappyDecompress(data) {
    const snappy = require("snappy");
    const input = Buffer.from(data, "base64");
    const decompressed = (await snappy.uncompress(input, {
        asBuffer: true,
    }));
    return decompressed.toString("base64");
}
//# sourceMappingURL=snappyEncoding.js.map