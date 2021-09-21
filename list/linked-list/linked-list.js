import {
  init as linkedListNodeInit,
  setData,
  setNext,
  getData,
  getNext,
} from './linked-list-node.js';

export const init = (list) => {
  const node = {};
  linkedListNodeInit(node);
  list.head = node;
  list.current = null;
  list.before = null;
  list.numberOfData = 0;
  list.comparisonFunc = null;
};

const sortInsert = (list, data) => {
  const node = {};
  linkedListNodeInit(node);
  setData(node, data);

  let predictionNode = list.head;

  while (
    getNext(predictionNode) !== null &&
    list.comparisonFunc(getData(getNext(predictionNode)), data) < 0
  ) {
    predictionNode = getNext(predictionNode);
  }

  setNext(node, getNext(predictionNode));
  setNext(predictionNode, node);

  list.numberOfData += 1;
};

const firstInsert = (list, data) => {
  const node = {};
  linkedListNodeInit(node);
  setData(node, data);

  setNext(node, list.head.next);
  setNext(list.head, node);
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
  if (getNext(list.head) === null) {
    return null;
  }

  list.before = list.head;
  list.current = getNext(list.head);

  return getData(list.current);
};

export const next = (list) => {
  if (getNext(list.current) === null) {
    return null;
  }

  list.before = list.current;
  list.current = getNext(list.current);

  return getData(list.current);
};

export const remove = (list) => {
  if (list.current === null) {
    return null;
  }

  const removedNode = list.current;
  list.current = list.before;
  setNext(list.current, getNext(removedNode));
  list.numberOfData -= 1;

  return getData(removedNode);
};

export const count = (list) => {
  return list.numberOfData;
};

export const setSortRule = (list, func) => {
  list.comparisonFunc = func;
};
