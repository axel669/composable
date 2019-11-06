const pipe = (...functions) =>
    (value) => functions.reduce(
        (current, func) => func(current),
        value
    )
pipe.async = (...functions) =>
    (value) => functions.reduce(
        async (current, func) => func(await current),
        value
    )

export default pipe
