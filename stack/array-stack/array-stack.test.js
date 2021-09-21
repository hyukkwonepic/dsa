import { init, isEmpty, peek, pop, push, STACK_LENGTH } from './array-stack';

describe('ArrayStack', () => {
  it('should initialize stack', () => {
    const stack = {};
    init(stack);

    expect(stack.array.length).toBe(STACK_LENGTH);
    expect(stack.topIndex).toBe(-1);
  });

  describe('ArrayStack > push', () => {
    it('should push data to the stack', () => {
      const stack = {};
      init(stack);

      push(stack, 1);
      expect(stack.topIndex).toBe(0);
      expect(stack.array[0]).toBe(1);

      push(stack, 2);
      expect(stack.topIndex).toBe(1);
      expect(stack.array[1]).toBe(2);
    });

    it('should throw an error when the stack is full', () => {
      const stack = {};
      init(stack);

      for (let i = 0; i < STACK_LENGTH; i += 1) {
        push(stack, i);
      }

      expect(() => {
        push(stack, 100);
      }).toThrow('UNABLE TO PUSH');
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
      expect(stack.topIndex).toBe(1);

      expect(pop(stack)).toBe(2);
      expect(stack.topIndex).toBe(0);
    });
  });

  describe('ArrayStack > pop', () => {
    it('should return top data of the stack', () => {
      const stack = {};
      init(stack);

      expect(peek(stack)).toBe(undefined);

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
