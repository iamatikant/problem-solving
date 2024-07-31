// ip: [1,2,3,4,5,3];
// op: true since there is a copy

const hasDuplicateElement = (array) => {
  const set = new Set(array);
  if (set.length < array.length) {
    return true;
  }
  return false;
};

const hasDuplicate2 = (array) => {
  const set = new Set();
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (set.has(element)) {
      return true;
    } else {
      set.add(element);
    }
  }
  return false;
};
