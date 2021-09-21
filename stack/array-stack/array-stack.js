export const STACK_LENGTH = 100;

export const init = (stack) => {
  stack.array = Array(STACK_LENGTH);
  stack.topIndex = -1;
};

export const push = (stack, data) => {
  if (stack.topIndex >= STACK_LENGTH - 1) {
    throw new Error('UNABLE TO PUSH');
  }

  stack.topIndex += 1;
  stack.array[stack.topIndex] = data;
};

export const pop = (stack) => {
  const data = stack.array[stack.topIndex];
  stack.topIndex -= 1;
  return data;
};

export const peek = (stack) => {
  return stack.array[stack.topIndex];
};

export const isEmpty = (stack) => {
  return stack.topIndex === -1;
};
