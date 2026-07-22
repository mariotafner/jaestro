/**
 * Extracts the unique values of a given property across an array of objects.
 *
 * Order follows first occurrence; duplicates are removed via a `Set`.
 *
 * @typeParam T - The element (object) type.
 * @typeParam K - The property key to read from each element.
 * @param array - The array of objects to read from.
 * @param key - The property whose values should be collected.
 * @returns An array of the distinct values found at `key`.
 *
 * @example
 * ```ts
 * const rows = [{ city: "NY" }, { city: "LA" }, { city: "NY" }];
 * valueList(rows, "city"); // => ["NY", "LA"]
 * ```
 */
export declare function valueList<T, K extends keyof T>(array: readonly T[], key: K): T[K][];
//# sourceMappingURL=valueList.d.ts.map