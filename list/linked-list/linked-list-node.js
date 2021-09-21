export const init = (node) => {
  node.data = null;
  node.next = null;
};

export const setData = (node, data) => {
  node.data = data;
};

export const setNext = (node, nextNode) => {
  node.next = nextNode;
};

export const getData = (node) => {
  return node.data;
};

export const getNext = (node) => {
  return node.next;
};
