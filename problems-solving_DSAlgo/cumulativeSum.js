// 560. Subarray Sum Equals K
// Medium
// Topics
// Companies
// Hint
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

// Constraints:

// 1 <= nums.length <= 2 * 104
// -1000 <= nums[i] <= 1000
// -107 <= k <= 107

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let sum = 0;
  let count = 0;
  let map = { 0: 1 };
  for (let num of nums) {
    sum += num;
    if (map[sum - k] !== undefined) {
      count += map[sum - k];
    }
    map[sum] = (map[sum] || 0) + 1;
  }
  return count;
};

console.log(subarraySum([1], 0));
