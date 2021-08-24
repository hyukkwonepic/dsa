// Solution 3
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let lowIndex = 0;
  let highIndex = arr.length - 1;

  while (lowIndex < highIndex) {
    const midIndex = Math.round((lowIndex + highIndex) / 2);

    if (arr[midIndex] < arr[midIndex + 1]) {
      lowIndex = midIndex + 1;
    } else {
      highIndex = midIndex;
    }
  }
  return lowIndex;
};

// Solution 2
// /**
//  * @param {number[]} arr
//  * @return {number}
//  */
// var peakIndexInMountainArray = function(arr) {
//     let highestIndex;

//     function lookup(lookupArr, offset = 0) {
//         if (lookupArr.length === 0) {
//             return;
//         }

//         const midIndex = Math.round((lookupArr.length - 1) / 2);

//         if (!highestIndex) {
//             highestIndex = offset + midIndex;
//         }

//         if (lookupArr[midIndex] > arr[highestIndex]) {
//             highestIndex = offset + midIndex;
//         }

//         const leftSide = lookupArr.slice(0, midIndex);
//         const rightSide = lookupArr.slice(midIndex + 1);
//         lookup(leftSide, offset);
//         lookup(rightSide, offset + midIndex + 1);
//     }

//     lookup(arr);

//     return highestIndex;
// };

// Solution 1
// /**
//  * @param {number[]} arr
//  * @return {number}
//  */
// var peakIndexInMountainArray = function(arr) {
//     let highestValueIndex = 0;
//     arr.forEach((value, index) => {
//         if (value > arr[highestValueIndex]) {
//             highestValueIndex = index;
//         }
//     });
//     return highestValueIndex;
// };

// Test Case 1
const case1Input = [24,69,100,99,79,78,67,36,26,19]
const case1Output = peakIndexInMountainArray(case1Input);
console.log({ case1Output, evaluation: case1Output === 2 });
