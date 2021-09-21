export const LIST_LENGTH = 100;

export const init = () => {
  return {
    array: new Array(LIST_LENGTH),
    numberOfData: 0,
    currentPosition: -1,
  };
};

export const insert = (list, data) => {
  if (list.numberOfData >= LIST_LENGTH) {
    throw new Error('UNABLE TO INSERT');
  }

  const newArray = [...list.array];
  newArray[list.numberOfData] = data;

  return {
    ...list,
    array: newArray,
    numberOfData: list.numberOfData + 1,
  };
};

export const first = (list) => {
  return [
    {
      ...list,
      array: [...list.array],
      currentPosition: 0,
    },
    list.array[0],
  ];
};

export const next = (list) => {
  const newCurrentPosition = list.currentPosition + 1;
  const data = list.array[newCurrentPosition];

  const newList = {
    ...list,
    array: [...list.array],
    currentPosition:
      data === undefined ? list.currentPosition : list.currentPosition + 1,
  };

  return [newList, data];
};

export const remove = (list) => {
  const removePosition = list.currentPosition;
  const newArray = [...list.array];
  newArray[removePosition] = undefined;

  for (let i = removePosition; i < list.numberOfData - 1; i += 1) {
    newArray[i] = newArray[i + 1];
  }

  return {
    array: newArray,
    currentPosition: list.currentPosition - 1,
    numberOfData: list.numberOfData - 1,
  };
};

export const count = (list) => {
  return list.numberOfData;
};
