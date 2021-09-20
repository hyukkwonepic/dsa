import {
  init,
  insert,
  first,
  next,
  remove,
  count,
  LIST_LENGTH,
} from './list.js';
import { pipe } from '../util';

describe('List', () => {
  it('should initialize list', () => {
    const list = init();
    expect(list.array.length).toBe(LIST_LENGTH);
    expect(list.numberOfData).toBe(0);
    expect(list.currentPosition).toBe(-1);
  });

  it('should insert data to the list', () => {
    const insertData = (data) => (list) => insert(list, data);
    const insert1 = insertData(1);
    const insert2 = insertData(2);
    const insert3 = insertData(3);

    const list = pipe(init, insert1, insert2, insert3)();
    expect(list.numberOfData).toBe(3);
    expect(list.currentPosition).toBe(-1);
  });

  it('should throw an error when the list exceeds the memory', () => {
    const insertData = (data) => (list) => insert(list, data);
    const functions = [];
    for (let i = 0; i < LIST_LENGTH; i += 1) {
      functions.push(insertData(i));
    }
    const list = pipe(init, ...functions)();
    expect(list.numberOfData).toBe(100);
    expect(() => {
      insert(list, 1);
    }).toThrow('UNABLE TO INSERT');
  });

  it('should return the first data', () => {
    const insertData = (data) => (list) => insert(list, data);
    const insert1 = insertData(1);
    const insert2 = insertData(2);
    const insert3 = insertData(3);

    const [list, data] = pipe(init, insert1, insert2, insert3, first)();
    expect(data).toBe(1);
    expect(list.numberOfData).toBe(3);
    expect(list.currentPosition).toBe(0);
  });

  it('should return undefined when nothing was inserted into the list', () => {
    const [_, data] = pipe(init, first)();
    expect(data).toBe(undefined);
  });

  it('should return the next of last looked up data', () => {
    const insertData = (data) => (list) => insert(list, data);
    const insert1 = insertData(1);
    const insert2 = insertData(2);
    const insert3 = insertData(3);
    const list = pipe(init, insert1, insert2, insert3)();

    const getListOfFunc = (func) => (list) => func(list)[0];
    const getListOfFirst = getListOfFunc(first);
    const getListOfNext = getListOfFunc(next);

    expect(pipe(getListOfFirst, next)(list)[1]).toBe(2);
    expect(pipe(getListOfFirst, getListOfNext, next)(list)[1]).toBe(3);
  });

  it('should return undefined when next data does not exist', () => {
    const insertData = (data) => (list) => insert(list, data);
    const insert1 = insertData(1);
    const insert2 = insertData(2);
    const insert3 = insertData(3);
    const list = pipe(init, insert1, insert2, insert3)();

    const getListOfFunc = (func) => (list) => func(list)[0];
    const getListOfFirst = getListOfFunc(first);
    const getListOfNext = getListOfFunc(next);

    expect(
      pipe(getListOfFirst, getListOfNext, getListOfNext, next)(list)[1]
    ).toBe(undefined);
  });

  it('should not increment currentPosition when next data does not exist', () => {
    const insertData = (data) => (list) => insert(list, data);
    const insert1 = insertData(1);
    const insert2 = insertData(2);
    const insert3 = insertData(3);
    const list = pipe(init, insert1, insert2, insert3)();

    const getListOfFunc = (func) => (list) => func(list)[0];
    const getListOfFirst = getListOfFunc(first);
    const getListOfNext = getListOfFunc(next);

    const [lookedupList] = pipe(
      getListOfFirst,
      getListOfNext,
      getListOfNext,
      next
    )(list);
    expect(lookedupList.currentPosition).toBe(2);
  });

  it('should remove last looked up data', () => {
    const insertData = (data) => (list) => insert(list, data);
    const insert1 = insertData(1);
    const insert2 = insertData(2);
    const insert3 = insertData(3);
    const insert4 = insertData(4);
    const insert5 = insertData(5);
    const insert6 = insertData(6);

    const getListOfFunc = (func) => (list) => func(list)[0];
    const getListOfFirst = getListOfFunc(first);
    const getListOfNext = getListOfFunc(next);

    const insertedList = pipe(
      init,
      insert1,
      insert2,
      insert3,
      insert4,
      insert5,
      insert6
    )();
    const lookedupList = pipe(
      getListOfFirst,
      getListOfNext,
      getListOfNext,
      next
    )(insertedList)[0];

    expect(pipe(remove)(lookedupList).currentPosition).toBe(2);
    expect(pipe(remove, remove, remove)(lookedupList).currentPosition).toBe(0);
  });

  it('should return the number of data', () => {
    const list = init();
    expect(count(list)).toBe(0);

    const insertData = (data) => (list) => insert(list, data);
    const insert1 = insertData(1);
    const insert2 = insertData(2);
    const insert3 = insertData(3);
    const insert4 = insertData(4);
    const insert5 = insertData(5);
    const insert6 = insertData(6);

    const insertedList = pipe(
      insert1,
      insert2,
      insert3,
      insert4,
      insert5,
      insert6
    )(list);
    expect(count(insertedList)).toBe(6);
  });
});
