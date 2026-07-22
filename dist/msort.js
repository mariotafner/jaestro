"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msort = msort;
function msort(arr, key = null) {
    function compare(a, b) {
        if (key === null) {
            return a < b;
        }
        if (Array.isArray(key)) {
            for (const k of key) {
                if (a[k] < b[k]) {
                    return true;
                }
                else if (a[k] > b[k]) {
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
//# sourceMappingURL=msort.js.map