import { init, setData, setNext, getData, getNext } from './linked-list-node';

describe('LinkedListNode', () => {
  it('should initialize node', () => {
    const node = {};
    init(node);

    expect(node.data).toBe(null);
    expect(node.next).toBe(null);
  });
  describe('LinkedListNode > setData', () => {
    it('should set data to node', () => {
      const node = {};
      init(node);

      setData(node, 1);
      expect(node.data).toBe(1);
    });
  });

  describe('LinkedListNode > setNext', () => {
    it('should set next node to a node', () => {
      const node = {};
      init(node);

      const node2 = {};
      init(node2);

      setNext(node, node2);
      expect(node.next).toBe(node2);
    });
  });

  describe('LinkedListNode > getData', () => {
    it('should get data of a node', () => {
      const node = {};
      init(node);

      setData(node, 1);

      expect(getData(node)).toBe(1);
    });
  });

  describe('LinkedListNode > getNext', () => {
    it('should get next node of a node', () => {
      const node = {};
      init(node);

      const node2 = {};
      init(node2);

      setNext(node, node2);
      expect(getNext(node)).toBe(node2);
    });
  });
});
