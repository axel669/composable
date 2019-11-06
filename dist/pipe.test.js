"use strict";

var _pipe = _interopRequireDefault(require("./pipe"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const pipe = require("./pipe")
const wait = time => new Promise(resolve => setTimeout(resolve, time));

suite("pipe", suite("sync", test("math", () => {
  const f = (0, _pipe.default)(n => n + 1, n => n ** 2);
  expect(f(1)).toBe(4);
}), test("objects", () => {
  const f = (0, _pipe.default)(source => ({
    test: source.test * 2
  }), source => source.test);
  const value = f({
    test: 10
  });
  expect(value).toBe(20);
})), suite("async", test("math", async () => {
  const f = _pipe.default.async(n => n + 1, async n => {
    await wait(500);
    return n;
  }, n => n ** 2);

  expect((await f(1))).toBe(4);
}), test("objects", async () => {
  const f = _pipe.default.async(source => ({
    test: source.test * 2
  }), async source => {
    await wait(500);
    return source;
  }, source => source.test);

  const value = await f({
    test: 10
  });
  expect(value).toBe(20);
})));