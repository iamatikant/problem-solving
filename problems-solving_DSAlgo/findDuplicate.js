// ip: [1,2,3,4,5,3];
// op: true since there is a copy

// the second approach is faster
const hasDuplicateElement = (array) => {
  const set = new Set(array);
  if (set.length < array.length) {
    return true;
  }
  return false;
};

const hasDuplicate2 = (nums) => {
  const set = new Set();
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (set.has(element)) {
      return true;
    } else {
      set.add(element);
    }
  }
  return false;
};
