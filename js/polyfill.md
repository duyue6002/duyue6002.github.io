# Polyfill

## apply

```js
Function.prototype,
  (myApply = function (context = window, arr) {
    context.fn = this;
    let result = void 0;
    if (!arr) {
      result = context.fn();
    } else {
      result = context.fn(...arr);
    }
    context.fn = void 0;
    return result;
  });
```

## call

```js
Function.prototype.myCall = function (context = window) {
  context.fn = this;
  let args = arguments.slice(1);
  let result = context.fn(...args);
  context.fn = void 0;
  return result;
};
```

## bind

```js
Function.prototype.myBind = function(context)
```
