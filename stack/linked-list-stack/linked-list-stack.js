import {
  init as linkedListNodeInit,
  setData,
  setNext,
  getNext,
  getData,
} from '../../list/linked-list/linked-list-node';

export const init = (stack) => {
  stack.head = null;
};

export const push = (stack, data) => {
  const node = {};
  linkedListNodeInit(node);

  setData(node, data);
  setNext(node, stack.head);

  stack.head = node;
};

export const pop = (stack) => {
  if (stack.head === null) {
    return;
  }

  const data = getData(stack.head);
  stack.head = getNext(stack.head);
  return data;
};

export const peek = (stack) => {
  return getData(stack.head);
};

export const isEmpty = (stack) => {
  return stack.head === null;
};
