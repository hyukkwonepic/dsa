# 1381. Design a Stack With Increment Operation

https://leetcode.com/problems/design-a-stack-with-increment-operation/

## Solution

```js
/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
  this.maxSize = maxSize;
  this.stack = [];
  this.topIndex = -1;
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  if (this.topIndex + 1 >= this.maxSize) {
    return;
  }

  this.topIndex += 1;
  this.stack[this.topIndex] = x;
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  if (this.topIndex === -1) {
    return -1;
  }

  const data = this.stack[this.topIndex];
  this.topIndex -= 1;
  return data;
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  for (let i = 0; i < k; i += 1) {
    this.stack[i] += val;
  }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
```
