const hasDuplicateElement = (array) => {
  const set = new Set(array);
  if (set.length < array.length) {
    return true;
  }
  return false;
};
