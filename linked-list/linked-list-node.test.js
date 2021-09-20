import { init, setData, link } from './linked-list-node';

describe('LinkedList Node', () => {
  it('should initialize node', () => {
    const node = {};
    init(node);

    expect(node.data).toBe(null);
    expect(node.next).toBe(null);
  });

  it('should set data to node', () => {
    const node = {};
    init(node);

    setData(node, 1);
    expect(node.data).toBe(1);
  });

  it('should link a node to a node', () => {
    const node = {};
    init(node);

    const node2 = {};
    init(node2);

    link(node, node2);
    expect(node.next).toBe(node2);
  });
});
