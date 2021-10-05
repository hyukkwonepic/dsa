# 1700. Number of Students Unable to Eat Lunch

https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/

## Solution

```js
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let swapped = 0;
  while (students.length > 0) {
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
      swapped = 0;
    } else {
      if (swapped === students.length) {
        return swapped;
      }
      const dequeued = students.shift();
      students.push(dequeued);
      swapped += 1;
    }
  }

  return 0;
};
```
