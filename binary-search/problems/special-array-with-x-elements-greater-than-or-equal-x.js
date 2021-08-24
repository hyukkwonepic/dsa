// REF: https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/

// Solution 2
// Binary Search
// REF: https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/discuss/882910/Java-Beats-100-Two-Binary-Search-methods-and-detailed-explanation
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  nums.sort((a, b) => a - b);
  const { length } = nums;
  for (let x = 0; x <= nums[length - 1]; x += 1) {
    const firstGTEIndex = findFirstGreaterThanOrEqualIndex(nums, x);
    if (length - firstGTEIndex === x) {
      return x;
    }
  }

  return -1;
};

function findFirstGreaterThanOrEqualIndex(arr, target) {
  let lowIndex = 0;
  let highIndex = arr.length - 1;

  while (lowIndex + 1 < highIndex) {
    const midIndex = Math.round((lowIndex + highIndex) / 2);
    const guess = arr[midIndex];
    if (target <= guess) {
      highIndex = midIndex;
    } else {
      lowIndex = midIndex;
    }
  }

  return target <= arr[lowIndex] ? lowIndex : highIndex;
}

// // Solution 1
// // Linear Search
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var specialArray = function (nums) {
//   for (let i = 0; i <= nums.length; i += 1) {
//     let count = 0;
//     nums.forEach((num) => {
//       if (i <= num) {
//         count += 1;
//       }
//     });
//     if (i === count) {
//       return i;
//     }
//   }

//   return -1;
// };

// Test Case 1
const case1Input = [0, 4, 3, 0, 4];
const case1Output = specialArray(case1Input);
console.log({ case1Output, evaluation: case1Output === 3 });
