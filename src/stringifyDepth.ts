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
export function stringifyDepth(
    val: unknown,
    depth: number,
    replacer: StringifyReplacer | null = null,
    space: number = 0,
): string {
    depth = isNaN(+depth) ? 1 : depth;

    function _build(
        key: string,
        val: any,
        depth: number,
        o?: any,
        a?: boolean,
    ): any {
        // JSON.stringify() has its own rules, which we respect here by using it
        // for property iteration.
        return !val || typeof val != "object"
            ? val
            : ((a = Array.isArray(val)),
              JSON.stringify(val, function (k: string, v: any) {
                  if (a || depth > 0) {
                      if (replacer) v = replacer(k, v);
                      if (!k) return (a = Array.isArray(v)), (val = v);
                      !o && (o = a ? [] : {});
                      o[k] = _build(k, v, a ? depth : depth - 1);
                  }
              }),
              o || (a ? [] : {}));
    }

    if (space) return JSON.stringify(_build("", val, depth), null, space);

    return JSON.stringify(_build("", val, depth));
}
