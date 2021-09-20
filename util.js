// REF: https://medium.com/javascript-scene/reduce-composing-software-fe22f0c39a1d
export const pipe =
  (...funcs) =>
  (value) =>
    funcs.reduce((acc, func) => func(acc), value);
