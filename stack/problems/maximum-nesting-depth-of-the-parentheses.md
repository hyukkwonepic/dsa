# 1614. Maximum Nesting Depth of the Parentheses

https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/

## Solution

```js
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let maxCount = 0;
  const stack = [];

  [...s].forEach((char) => {
    if (char === '(') {
      stack.push('(');
    }

    if (char === ')') {
      stack.pop();
    }

    if (stack.length > maxCount) {
      maxCount = stack.length;
    }
  });

  return maxCount;
};
```
