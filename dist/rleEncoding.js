"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rleEncode = rleEncode;
exports.rleDecode = rleDecode;
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
function rleEncode(str) {
    let encoded = "";
    let count = 1;
    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        }
        else {
            encoded += count + str[i - 1];
            count = 1;
        }
    }
    encoded += count + str[str.length - 1];
    return encoded;
}
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
function rleDecode(str) {
    let decoded = "";
    for (let i = 0; i < str.length; i += 2) {
        const count = parseInt(str[i]);
        const char = str[i + 1];
        decoded += char.repeat(count);
    }
    return decoded;
}
//# sourceMappingURL=rleEncoding.js.map