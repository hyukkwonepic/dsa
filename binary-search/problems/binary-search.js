// REF: https://leetcode.com/problems/binary-search/

// Solution 2
// REF: https://leetcode.com/problems/binary-search/discuss/423162/Binary-Search-101
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    const guess = nums[mid];

    if (guess === target) {
      return mid;
    }

    if (guess < target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return -1;
};

// Solution 1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.round((low + high) / 2);
    const guess = nums[mid];

    if (guess === target) {
      return mid;
    }

    if (guess < target) {
      low = mid + 1;
    }

    if (target < guess) {
      high = mid - 1;
    }
  }

  return -1;
};

// Test Case 1
const case1Input = [[-1, 0, 3, 5, 9, 12], 9];
const case1Output = search(...case1Input);
console.log({ case1Output, evaluation: case1Output === 4 });
