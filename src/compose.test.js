const compose = require("./compose")

const wait = time => new Promise(
    resolve => setTimeout(resolve, time)
)

suite(
    "compose",
    suite(
        "sync",
        test(
            "math",
            () => {
                const f = compose(
                    n => n ** 2,
                    n => n + 1
                )

                expect(f(1))
                    .toBe(4)
            }
        ),
        test(
            "objects",
            () => {
                const f = compose(
                    source => source.test,
                    source => ({test: source.test * 2})
                )

                const value = f({
                    test: 10,
                })

                expect(value)
                    .toBe(20)
            }
        )
    ),
    suite(
        "async",
        test(
            "math",
            async () => {
                const f = compose.async(
                    n => n ** 2,
                    async n => {
                        await wait(500)
                        return n
                    },
                    n => n + 1
                )

                expect(await f(1))
                    .toBe(4)
            }
        ),
        test(
            "objects",
            async () => {
                const f = compose.async(
                    source => source.test,
                    async source => {
                        await wait(500)
                        return source
                    },
                    source => ({test: source.test * 2})
                )

                const value = await f({
                    test: 10,
                })

                expect(value)
                    .toBe(20)
            }
        )
    )
)
