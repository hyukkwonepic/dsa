import { init, push, pop, peek, isEmpty } from './linked-list-stack';

describe('ArrayStack', () => {
  it('should initialize stack', () => {
    const stack = {};
    init(stack);

    expect(stack.head).toBe(null);
  });

  describe('ArrayStack > push', () => {
    it('should push data to the stack', () => {
      const stack = {};
      init(stack);

      push(stack, 1);
      expect(stack.head.data).toBe(1);

      push(stack, 2);
      expect(stack.head.data).toBe(2);
      expect(stack.head.next.data).toBe(1);
    });
  });

  describe('ArrayStack > pop', () => {
    it('should pop data from the stack', () => {
      const stack = {};
      init(stack);

      push(stack, 1);
      push(stack, 2);
      push(stack, 3);

      expect(pop(stack)).toBe(3);
      expect(pop(stack)).toBe(2);
      expect(pop(stack)).toBe(1);
      expect(pop(stack)).toBe(undefined);
    });
  });

  describe('ArrayStack > peek', () => {
    it('should return top data of the stack', () => {
      const stack = {};
      init(stack);

      push(stack, 1);
      push(stack, 2);
      push(stack, 3);
      expect(peek(stack)).toBe(3);

      pop(stack);
      expect(peek(stack)).toBe(2);
    });
  });

  describe('ArrayStack > isEmpty', () => {
    it('should return true when the stack is empty', () => {
      const stack = {};
      init(stack);

      expect(isEmpty(stack)).toBe(true);
    });

    it('should return false when the stack has any data', () => {
      const stack = {};
      init(stack);

      push(stack, 1);
      push(stack, 2);
      expect(isEmpty(stack)).toBe(false);
    });
  });
});
