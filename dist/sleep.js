"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = sleep;
/**
 * Returns a promise that resolves after the given number of milliseconds.
 *
 * Useful with `await` to pause execution inside an async function.
 *
 * @param ms - How long to wait, in milliseconds.
 * @returns A promise that resolves once the delay has elapsed.
 *
 * @example
 * ```ts
 * await sleep(1000); // pauses for one second
 * ```
 */
async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
//# sourceMappingURL=sleep.js.map