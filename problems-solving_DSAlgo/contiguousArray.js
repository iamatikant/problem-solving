// 525. Contiguous Array
// Medium
// Topics
// Companies
// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

// Example 1:

// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
// Example 2:

// Input: nums = [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  const newArray = nums.map((ele) => (ele === 0 ? -1 : ele));
  const mapping = new Map();
  mapping.set(0, -1);
  let sum = 0;
  let result = 0;
  for (let i = 0; i < newArray.length; i++) {
    const current = newArray[i];
    sum += current;
    if (mapping.has(sum)) {
      const value = mapping.get(sum);
      result = Math.max(result, i - value);
    } else {
      mapping.set(sum, i);
    }
  }
  return result;
};

console.log(findMaxLength([0, 0, 1, 0, 1, 1, 0]));
