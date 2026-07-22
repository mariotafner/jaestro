"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDuplicatedChars = removeDuplicatedChars;
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
function removeDuplicatedChars(str) {
    return str.replace(/(.)\1+/g, "$1");
}
//# sourceMappingURL=removeDuplicatedChars.js.map