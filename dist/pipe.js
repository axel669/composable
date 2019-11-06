"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const pipe = (...functions) => value => functions.reduce((current, func) => func(current), value);

pipe.async = (...functions) => value => functions.reduce(async (current, func) => func((await current)), value);

var _default = pipe;
exports.default = _default;