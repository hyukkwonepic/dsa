# 933. Number of Recent Calls

https://leetcode.com/problems/number-of-recent-calls/

## Solution

```js
var RecentCounter = function () {
  this.requests = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.requests.push(t);
  const start = t - 3000;
  const end = t;

  let count = 0;
  this.requests.forEach((r) => {
    if (r >= start && r <= end) {
      count += 1;
    }
  });

  return count;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
```
