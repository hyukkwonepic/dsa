import * as linkedListNode from './linked-list-node';

export const init = (list) => {
  const node = {};
  linkedListNode.init(node);
  list.head = node;
  list.current = null;
  list.before = null;
  list.numberOfData = 0;
  list.comparisonFunc = null;
};

const sortInsert = (list, data) => {
  const node = {};
  linkedListNode.init(node);
  linkedListNode.setData(node, data);

  let predictionNode = list.head;

  while (
    predictionNode.next !== null &&
    list.comparisonFunc(predictionNode.next.data, data) < 0
  ) {
    predictionNode = predictionNode.next;
  }

  node.next = predictionNode.next;
  predictionNode.next = node;

  list.numberOfData += 1;
};

const firstInsert = (list, data) => {
  const node = {};
  linkedListNode.init(node);
  linkedListNode.setData(node, data);

  node.next = list.head.next;
  list.head.next = node;
  list.numberOfData += 1;
};

export const insert = (list, data) => {
  if (list.comparisonFunc) {
    sortInsert(list, data);
    return;
  }
  firstInsert(list, data);
};

export const first = (list) => {
  if (list.head.next === null) {
    return null;
  }

  list.before = list.head;
  list.current = list.head.next;

  return list.current.data;
};

export const next = (list) => {
  if (list.current.next === null) {
    return null;
  }

  list.before = list.current;
  list.current = list.current.next;

  return list.current.data;
};

export const remove = (list) => {
  if (list.current === null) {
    return null;
  }

  const removedNode = list.current;
  list.current = list.before;
  list.current.next = removedNode.next;
  list.numberOfData -= 1;

  return removedNode.data;
};

export const count = (list) => {
  return list.numberOfData;
};

export const setSortRule = (list, func) => {
  list.comparisonFunc = func;
};
