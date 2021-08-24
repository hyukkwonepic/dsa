// While
function findTargetIndexIterative(array, target) {
  let lowIndex;
  let highIndex;

  lowIndex = 0;
  highIndex = array.length - 1;

  while (lowIndex <= highIndex) {
    const midIndex = Math.round((lowIndex + highIndex) / 2);
    const guess = array[midIndex];

    if (guess === target) {
      return midIndex;
    }

    if (guess > target) {
      highIndex = midIndex - 1;
      continue;
    }

    if (guess < target) {
      lowIndex = midIndex + 1;
      continue;
    }
    console.log({ midIndex, lowIndex, highIndex });
  }

  return;
}

// Recursive
function findTargetIndexRecursive(array, target, offset = 0) {
  const midIndex = Math.round((array.length - 1) / 2);
  const midValue = array[midIndex];

  if (midValue === target) {
    return offset + midIndex;
  }

  if (midValue < target) {
    const rightSideArray = array.slice(midIndex + 1);
    return findTargetIndex(rightSideArray, target, offset + midIndex + 1);
  }

  if (midValue > target) {
    const leftSideArray = array.slice(0, midIndex);
    return findTargetIndex(leftSideArray, target, offset);
  }
}

module.exports = {
  findTargetIndexIterative,
  findTargetIndexRecursive
}