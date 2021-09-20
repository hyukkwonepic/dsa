export const init = (node) => {
  node.data = null;
  node.next = null;
};

export const setData = (node, data) => {
  node.data = data;
};

export const link = (node, nextNode) => {
  node.next = nextNode;
};
