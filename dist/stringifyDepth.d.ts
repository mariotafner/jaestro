/**
 * A replacer function compatible with the one accepted by `JSON.stringify`.
 */
export type StringifyReplacer = (key: string, value: any) => any;
/**
 * Like `JSON.stringify`, but only serializes nested objects down to a maximum
 * depth. Deeper objects are omitted, which is handy for logging large or
 * circular-ish structures without dumping everything.
 *
 * Arrays do not count against the depth budget — only nested plain objects do.
 *
 * @param val - The value to serialize.
 * @param depth - Maximum object nesting depth to include (defaults to `1` if not a number).
 * @param replacer - Optional `JSON.stringify`-style replacer applied while walking.
 * @param space - Indentation passed through to `JSON.stringify` for pretty printing.
 * @returns The JSON string, truncated at the requested depth.
 *
 * @example
 * ```ts
 * stringifyDepth({ a: { b: { c: 1 } } }, 1); // => '{"a":{}}'
 * ```
 */
export declare function stringifyDepth(val: unknown, depth: number, replacer?: StringifyReplacer | null, space?: number): string;
//# sourceMappingURL=stringifyDepth.d.ts.map