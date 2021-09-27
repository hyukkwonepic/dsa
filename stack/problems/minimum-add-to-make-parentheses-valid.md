# 921. Minimum Add to Make Parentheses Valid

https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/

## Solution

```js
/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  const stack = [];
  [...s].forEach((char) => {
    if (char === '(') {
      stack.push('(');
    }

    if (char === ')') {
      const top = stack[stack.length - 1];
      if (top === '(') {
        stack.pop();
      } else {
        stack.push(')');
      }
    }
  });

  return stack.length;
};
```
