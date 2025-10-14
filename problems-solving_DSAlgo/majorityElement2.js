// 229. Majority Element II
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]

// Constraints:

// 1 <= nums.length <= 5 * 104
// -109 <= nums[i] <= 109

// Follow up: Could you solve the problem in linear time and in O(1) space?

var majorityElement = function (nums) {
  const map = new Map();
  let i = 0;
  const third = Math.floor(nums.length / 3);
  let result = new Set();
  while (i < nums.length) {
    let curr = nums[i];
    if (map.size < 2) {
      const count = map.get(curr) || 0;
      map.set(curr, count + 1);
      i++;
      continue;
    }
    if (map.has(curr)) {
      const count = map.get(curr);
      map.set(curr, count + 1);
    } else {
      for (let [key, value] of map) {
        if (value === 1) {
          map.delete(key);
        } else map.set(key, value - 1);
      }
    }
    i++;
  }
  if (!map.size) {
    return null;
  }
  const keys = map.keys();
  for (let element of nums) {
    let count0 = 0;
    let count1 = 0;
    if (element === keys[0] && !result.has(keys[0])) {
      count0++;
    } else if (element === keys[1] && !result.has(keys[1])) {
      count1++;
    }
    if (count0 > third) {
      result.add(keys[0]);
    }
    if (count1 > third) {
      result.add(keys[1]);
    }
  }

  return result;
};

console.log(majorityElement([3, 2, 3]));

var subarraySum = function (nums, k) {
  const map = new Map();
  map.set(0, 1);
  let count = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    sum += curr;
    const diff = sum - k;
    if (map.has(diff)) {
      let ins = map.get(diff) || 0;
      count += ins;
    }
    let currentEntry = map.get(sum) || 0;
    map.set(sum, currentEntry + 1);
  }

  return count;
};

console.log(subarraySum([1, -1, 0], 0));
