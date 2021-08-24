// REF: https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
/**
 * @param {number[][]} grid
 * @return {number}
 */

// Solution 1
// var countNegatives = function(grid) {
//     let totalCount = 0;

//     grid.forEach((row) => {
//         row.forEach((column) => {
//             if (column < 0) {
//                 totalCount += 1;
//             }
//         })
//     });

//     return totalCount;
// };

// Solution 2
var countNegatives = function (grid) {
  return grid.reduce((acc, cv) => {
    const index = findFirstNegativeIndex(cv);
    return acc + cv.length - index;
  }, 0);
};

function findFirstNegativeIndex(array) {
  let highestIndex = 0;
  let lowestIndex = array.length - 1;

  while (highestIndex <= lowestIndex) {
    const middleIndex = Math.floor((highestIndex + lowestIndex) / 2);
    const middleValue = array[middleIndex];
    if (middleValue < 0) {
      lowestIndex = middleIndex - 1;
    } else {
      highestIndex = middleIndex + 1;
    }
  }

  return highestIndex;
}

// Test Case 1
const case1Grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];
const count = countNegatives(case1Grid);
console.log({ count, evaluation: count === 8 });
