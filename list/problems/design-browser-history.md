# 1472. Design Browser History

https://leetcode.com/problems/design-browser-history/

## Solution

```js
/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.list = [homepage];
  this.curIndex = 0;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.list = this.list.slice(0, this.curIndex + 1);
  this.list.push(url);
  this.curIndex += 1;
  return null;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  if (this.curIndex - steps < 0) {
    this.curIndex = 0;
  } else {
    this.curIndex = this.curIndex - steps;
  }

  return this.list[this.curIndex];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  if (this.curIndex + steps > this.list.length - 1) {
    this.curIndex = this.list.length - 1;
  } else {
    this.curIndex = this.curIndex + steps;
  }

  return this.list[this.curIndex];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
```
