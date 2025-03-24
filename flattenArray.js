let result = [];
const flattenArray = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (!Array.isArray(nums[i])) {
      result.push(nums[i]);
    } else {
      flattenArray(nums[i]);
    }
  }
  return result;
};

const nums = [1, 2, 3, [4, 5], [6, 7, [8, 9], 10], 11];
console.log(flattenArray(nums));
