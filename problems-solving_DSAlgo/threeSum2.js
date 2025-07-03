// 15. 3Sum
// Solved
// Medium
// Topics
// Companies
// Hint
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let target = 0;
  let required = 0;
  let result = [];
  const map = new Map();
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    target = 0 - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      required = target - nums[j];
      if (map.has(required)) {
        let key = [nums[i], nums[j], required].sort((a, b) => a - b).toString();
        if (!set.has(key)) {
          result.push([nums[i], nums[j], required]);
          set.add(key);
        }
      } else map.set(nums[j], true);
    }
    map.clear();
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
