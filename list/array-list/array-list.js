export const LIST_LENGTH = 100;

export const init = (list) => {
  list.array = new Array(LIST_LENGTH);
  list.numberOfData = 0;
  list.currentPosition = -1;
};

export const insert = (list, data) => {
  if (list.numberOfData >= LIST_LENGTH) {
    throw new Error('UNABLE TO INSERT');
  }

  list.array[list.numberOfData] = data;
  list.numberOfData += 1;
};

export const first = (list) => {
  list.currentPosition = 0;
  return list.array[list.currentPosition];
};

export const next = (list) => {
  if (!list.array[list.currentPosition + 1]) {
    return undefined;
  }

  list.currentPosition += 1;
  return list.array[list.currentPosition];
};

export const remove = (list) => {
  const data = list.array[list.currentPosition];
  list.array[list.currentPosition] = undefined;

  for (let i = list.currentPosition; i < list.numberOfData - 1; i += 1) {
    list.array[i] = list.array[i + 1];
  }

  list.currentPosition -= 1;
  list.numberOfData -= 1;

  return data;
};

export const count = (list) => {
  return list.numberOfData;
};
