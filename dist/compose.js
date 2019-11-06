"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const compose = (...functions) => value => functions.reduceRight((current, func) => func(current), value);

compose.async = (...functions) => value => functions.reduceRight(async (current, func) => func((await current)), value);

var _default = compose;
exports.default = _default;