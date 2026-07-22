/**
 * Left-pads a value with a fill character until it reaches the given width.
 *
 * If the string form of `n` is already at least `width` characters long, it is
 * returned unchanged.
 *
 * @param n - The value to pad (numbers are coerced to their string form).
 * @param width - The minimum desired length of the result.
 * @param z - The fill character to pad with. Defaults to `"0"`.
 * @returns The left-padded string.
 *
 * @example
 * ```ts
 * pad(7, 3);        // => "007"
 * pad(42, 5, " ");  // => "   42"
 * ```
 */
export function pad(n: number | string, width: number, z: string = "0"): string {
    const s = String(n);
    return s.length >= width ? s : new Array(width - s.length + 1).join(z) + s;
}
