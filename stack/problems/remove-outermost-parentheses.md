# 1021. Remove Outermost Parentheses

https://leetcode.com/problems/remove-outermost-parentheses/

## Solution

```js
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  const stack = [];
  let subStr = '';
  const collections = [];

  [...s].forEach((char) => {
    if (char === '(') {
      if (stack.length === 0) {
        stack.push('(');
      } else {
        stack.push('(');
        subStr += '(';
      }
    }

    if (char === ')') {
      stack.pop();

      if (stack.length === 0) {
        collections.push(subStr);
        subStr = '';
      } else {
        subStr += ')';
      }
    }
  });

  return collections.join('');
};
```
