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
export async function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
