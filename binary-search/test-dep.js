const {
  findTargetIndexIterative,
  findTargetIndexRecursive,
} = require("./index");

const findTargetIndex = findTargetIndexIterative;
// const findTargetIndex = findTargetIndexRecursive;

/* Tests */

// Case 1
const case1Array = [1, 3, 5, 7, 9];
const case1Target = 3;
const case1TargetIndex = findTargetIndex(case1Array, case1Target);
console.log({
  case1Array,
  case1Target,
  case1TargetIndex,
  evaluation: case1Array[case1TargetIndex] === case1Target,
});

// Case 2
const case2Array = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];
case2Array.sort((a, b) => a - b);
case2Target = case2Array[Math.floor(Math.random() * case2Array.length)];
const case2TargetIndex = findTargetIndex(case2Array, case2Target);
console.log({
  case2Array,
  case2Target,
  case2TargetIndex,
  evaluation: case2Array[case2TargetIndex] === case2Target,
});

// Case 3
const case3Array = [1, 3, 5, 7, 9];
const case3Target = 7;
const case3TargetIndex = findTargetIndex(case3Array, case3Target);
console.log({
  case3Array,
  case3Target,
  case3TargetIndex,
  evaluation: case3Array[case3TargetIndex] === case3Target,
});

// Case 4
const case4Array = [1, 3, 5, 7, 9];
const case4Target = 45;
const case4TargetIndex = findTargetIndex(case4Array, case4Target);
console.log({
  case4Array,
  case4Target,
  case4TargetIndex,
  evaluation: case4TargetIndex === undefined,
});
