var composable = (function (exports) {
    'use strict';

    const compose = (...functions) =>
        (value) => functions.reduceRight(
            (current, func) => func(current),
            value
        );
    compose.async = (...functions) =>
        (value) => functions.reduceRight(
            async (current, func) => func(await current),
            value
        );

    const pipe = (...functions) =>
        (value) => functions.reduce(
            (current, func) => func(current),
            value
        );
    pipe.async = (...functions) =>
        (value) => functions.reduce(
            async (current, func) => func(await current),
            value
        );

    exports.compose = compose;
    exports.pipe = pipe;

    return exports;

}({}));
