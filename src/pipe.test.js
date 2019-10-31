const pipe = require("./pipe")

const wait = time => new Promise(
    resolve => setTimeout(resolve, time)
)

suite(
    "pipe",
    suite(
        "sync",
        test(
            "math",
            () => {
                const f = pipe(
                    n => n + 1,
                    n => n ** 2,
                )

                expect(f(1))
                    .toBe(4)
            }
        ),
        test(
            "objects",
            () => {
                const f = pipe(
                    source => ({test: source.test * 2}),
                    source => source.test,
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
                const f = pipe.async(
                    n => n + 1,
                    async n => {
                        await wait(500)
                        return n
                    },
                    n => n ** 2,
                )

                expect(await f(1))
                    .toBe(4)
            }
        ),
        test(
            "objects",
            async () => {
                const f = pipe.async(
                    source => ({test: source.test * 2}),
                    async source => {
                        await wait(500)
                        return source
                    },
                    source => source.test,
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
