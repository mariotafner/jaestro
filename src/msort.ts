/**
 * Returns a new array of primitive values sorted in ascending order.
 *
 * The input array is not modified.
 *
 * @typeParam T - The element type (e.g. `number` or `string`).
 * @param arr - The array to sort. It is left untouched.
 * @returns A new, sorted array.
 *
 * @example
 * ```ts
 * msort([3, 1, 2]); // => [1, 2, 3]
 * ```
 */
export function msort<T>(arr: readonly T[]): T[];

/**
 * Returns a new array of objects sorted by one or more keys.
 *
 * The input array is not modified.
 *
 * When `key` is an array, the keys are applied as a tie-breaking sequence:
 * the first key decides the order, and each subsequent key only breaks ties
 * left by the previous ones.
 *
 * @typeParam T - The element (object) type.
 * @param arr - The array to sort. It is left untouched.
 * @param key - A single property name, or an ordered list of property names to
 *              sort by (primary key first).
 * @returns A new array sorted ascending by the given key(s).
 *
 * @example
 * ```ts
 * const people = [
 *   { last: "Smith", first: "Bob" },
 *   { last: "Smith", first: "Ann" },
 *   { last: "Adams", first: "Cy" },
 * ];
 * msort(people, ["last", "first"]);
 * // => Adams/Cy, Smith/Ann, Smith/Bob
 * ```
 */
export function msort<T>(
    arr: readonly T[],
    key: keyof T | (keyof T)[],
): T[];

export function msort<T>(
    arr: readonly T[],
    key: keyof T | (keyof T)[] | null = null,
): T[] {
    function compare(a: T, b: T): boolean {
        if (key === null) {
            return a < b;
        }

        if (Array.isArray(key)) {
            for (const k of key) {
                if (a[k] < b[k]) {
                    return true;
                } else if (a[k] > b[k]) {
                    return false;
                }
            }
            return false;
        }

        return a[key] < b[key];
    }

    const result = [...arr];

    while (true) {
        let swapped = false;
        for (let i = 1; i < result.length; i++) {
            if (compare(result[i], result[i - 1])) {
                [result[i], result[i - 1]] = [result[i - 1], result[i]];
                swapped = true;
                break;
            }
        }
        if (!swapped) {
            return result;
        }
    }
}
