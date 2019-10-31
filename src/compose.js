const compose = (...functions) =>
    (value) => functions.reduceRight(
        (current, func) => func(current),
        value
    )
compose.async = (...functions) =>
    (value) => functions.reduceRight(
        async (current, func) => func(await current),
        value
    )

module.exports = compose
