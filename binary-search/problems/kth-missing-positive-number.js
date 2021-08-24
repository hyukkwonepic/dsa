// Solution 1
// TODO: Improve the solution with a better binary search approach. Explanation here => https://leetcode.com/problems/kth-missing-positive-number/discuss/989661/Java-Binary-search-O(log(n))-0ms-time-O(1)-space-explained
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  const missing = [];

  let target = 1;
  while (true) {
    if (!findTargetExistence(arr, target)) {
      missing.push(target);
      if (missing[k - 1]) {
        return missing[k - 1];
      }
    }
    target += 1;
  }
};

function findTargetExistence(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.round((low + high) / 2);
    const guess = arr[mid];

    if (guess === target) {
      return true;
    }

    if (guess < target) {
      low = mid + 1;
    }

    if (target < guess) {
      high = mid - 1;
    }
  }

  return false;
}

// Test Case 1
const case1Input = [[2, 3, 4, 7, 11], 5];
const case1Output = findKthPositive(...case1Input);
console.log({ case1Output, evaluation: case1Output === 9 });
