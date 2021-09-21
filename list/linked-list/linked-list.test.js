import * as linkedListNode from './linked-list-node';
import {
  init,
  insert,
  first,
  next,
  remove,
  count,
  setSortRule,
} from './linked-list.js';

describe('LinkedList', () => {
  it('should initialize list', () => {
    const list = {};
    init(list);
    expect(list.head.next).toBe(null);
    expect(list.current).toBe(null);
    expect(list.before).toBe(null);
    expect(list.numberOfData).toBe(0);
    expect(list.comparisonFunc).toBe(null);
  });

  it('should insert node to the list', () => {
    const node = {};
    linkedListNode.init(node);
    linkedListNode.setData(node, 1);

    const list = {};
    init(list);
    const nextNodeOfHead = list.head.next;

    insert(list, 1);
    expect(list.numberOfData).toBe(1);
    expect(list.head.next.data).toBe(1);
    expect(list.head.next.next).toBe(nextNodeOfHead);
  });

  it('should return the first node data', () => {
    const list = {};
    init(list);

    expect(first(list)).toBe(null);
    expect(list.before).toBe(null);
    expect(list.current).toBe(null);

    const list2 = {};
    init(list2);
    insert(list2, 1);
    insert(list2, 2);
    insert(list2, 3);
    expect(first(list2)).toBe(3);
  });

  it('should return the next of last looked up data', () => {
    const list = {};
    init(list);
    insert(list, 1);

    first(list);
    expect(next(list)).toBe(null);

    const list2 = {};
    init(list2);
    insert(list2, 1);
    insert(list2, 2);
    insert(list2, 3);
    insert(list2, 4);

    first(list2);
    expect(next(list2)).toBe(3);
    expect(next(list2)).toBe(2);
    expect(next(list2)).toBe(1);
    expect(next(list2)).toBe(null);
  });

  it('should remove last looked up data', () => {
    const list = {};
    init(list);
    expect(remove(list)).toBe(null);

    const list2 = {};
    init(list2);
    insert(list2, 1);
    first(list2);
    expect(remove(list2)).toBe(1);
    expect(list2.numberOfData).toBe(0);

    const list3 = {};
    init(list3);
    insert(list3, 1);
    insert(list3, 2);
    insert(list3, 3);
    first(list3);
    next(list3);
    expect(remove(list3)).toBe(2);
    expect(next(list3)).toBe(1);
    expect(list3.numberOfData).toBe(2);

    const list4 = {};
    init(list4);
    insert(list4, 1);
    insert(list4, 2);
    insert(list4, 3);
    first(list4);
    next(list4);
    next(list4);
    next(list4);
    next(list4);
    expect(remove(list4)).toBe(1);
    expect(list3.numberOfData).toBe(2);
  });

  it('should return the number of data', () => {
    const list = {};
    init(list);
    expect(count(list)).toBe(0);
    insert(list, 1);
    expect(count(list)).toBe(1);
    first(list);
    remove(list);
    expect(count(list)).toBe(0);
  });

  it('should set sort rule', () => {
    const list = {};
    init(list);
    setSortRule(list, (a, b) => {
      return a - b;
    });

    insert(list, 1);
    insert(list, 2);
    insert(list, 3);
    insert(list, 4);
    insert(list, 5);

    expect(first(list)).toBe(1);
    expect(next(list)).toBe(2);
    expect(next(list)).toBe(3);
    expect(next(list)).toBe(4);
    expect(next(list)).toBe(5);
  });
});
