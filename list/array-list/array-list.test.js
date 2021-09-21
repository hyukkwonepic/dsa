import {
  init,
  insert,
  first,
  next,
  remove,
  count,
  LIST_LENGTH,
} from './array-list.js';
import { pipe } from '../../util';

describe('ArrayList', () => {
  it('should initialize list', () => {
    const list = {};
    init(list);
    expect(list.array.length).toBe(LIST_LENGTH);
    expect(list.numberOfData).toBe(0);
    expect(list.currentPosition).toBe(-1);
  });

  describe('ArrayList > insert', () => {
    it('should insert data to the list', () => {
      const list = {};
      init(list);

      insert(list, 1);
      insert(list, 2);
      insert(list, 3);

      expect(list.numberOfData).toBe(3);
    });

    it('should throw an error if the list exceeds the memory', () => {
      const list = {};
      init(list);

      for (let i = 0; i < LIST_LENGTH; i += 1) {
        insert(list, i);
      }
      expect(() => {
        insert(list, 100);
      }).toThrow('UNABLE TO INSERT');
    });
  });

  describe('ArrayList > first', () => {
    it('should return the first data', () => {
      const list = {};
      init(list);

      insert(list, 1);
      insert(list, 2);
      insert(list, 3);

      expect(first(list)).toBe(1);
    });

    it('should return undefined when nothing was inserted into the list', () => {
      const list = {};
      init(list);

      expect(first(list)).toBe(undefined);
    });
  });

  describe('ArrayList > next', () => {
    it('should return the next of last looked up data', () => {
      const list = {};
      init(list);

      insert(list, 1);
      insert(list, 2);
      insert(list, 3);

      first(list);
      expect(next(list)).toBe(2);
      expect(next(list)).toBe(3);
    });

    it('should return undefined when next data does not exist', () => {
      const list = {};
      init(list);

      insert(list, 1);
      insert(list, 2);
      insert(list, 3);

      first(list);
      next(list);
      next(list);
      expect(next(list)).toBe(undefined);
      expect(list.currentPosition).toBe(2);
    });

    it('should not increment currentPosition when next data does not exist', () => {
      const list = {};
      init(list);

      insert(list, 1);
      insert(list, 2);
      insert(list, 3);

      first(list);
      next(list);
      next(list);
      expect(list.currentPosition).toBe(2);
    });
  });

  describe('ArrayList > remove', () => {
    it('should remove last looked up data', () => {
      const list = {};
      init(list);

      insert(list, 1);
      insert(list, 2);
      insert(list, 3);
      insert(list, 4);
      insert(list, 5);

      first(list);
      remove(list);
      expect(list.array[0]).toBe(2);
      expect(list.array[1]).toBe(3);
      expect(list.array[2]).toBe(4);
      expect(list.array[3]).toBe(5);

      first(list);
      next(list);
      next(list);
      remove(list);
      expect(list.array[0]).toBe(2);
      expect(list.array[1]).toBe(3);
      expect(list.array[2]).toBe(5);
    });

    it('should return removed data', () => {
      const list = {};
      init(list);

      insert(list, 1);
      insert(list, 2);

      first(list);
      next(list);

      expect(remove(list)).toBe(2);
    });
  });

  describe('ArrayList > count', () => {
    it('should return the number of data', () => {
      const list = {};
      init(list);

      insert(list, 1);
      insert(list, 2);
      insert(list, 3);

      expect(count(list)).toBe(3);
    });
  });
});
