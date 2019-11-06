# Composable

Simple library with a pipe and compose function. Includes async versions.

## API

### compose

```
compose(...functions) ->
    (value) -> any
```

Returns a single function that calls the given functions successively (starting
with the last function in the list and working backwards) using the return value
of the previous being passed as the argument for the next call.

### compose.async

```
compose.async(...functions) ->
    (value) -> any
```

Async version of compose. `await`s the previous call before using it as the
argument for the next.


### pipe

```
pipe(...functions) ->
    (value) -> any
```

Returns a single function that calls the given functions successively (starting
with the first function in the list and working forwards) using the return value
of the previous being passed as the argument for the next call.

### pipe.async

```
pipe.async(...functions) ->
    (value) -> any
```

Async version of pipe. `await`s the previous call before using it as the
argument for the next.
