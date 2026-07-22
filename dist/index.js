"use strict";
/**
 * jaestro — a small collection of JavaScript/TypeScript utilities.
 *
 * Public entry point. Each utility lives in its own file under `src/` and is
 * re-exported here, so consumers keep importing from the package root:
 *
 * ```ts
 * import { msort, test } from "@mariotafner/jaestro";
 * ```
 *
 * @packageDocumentation
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.msort = exports.test = void 0;
var test_js_1 = require("./test.js");
Object.defineProperty(exports, "test", { enumerable: true, get: function () { return test_js_1.test; } });
var msort_js_1 = require("./msort.js");
Object.defineProperty(exports, "msort", { enumerable: true, get: function () { return msort_js_1.msort; } });
//# sourceMappingURL=index.js.map