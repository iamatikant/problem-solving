// 643. Maximum Average Subarray I
// Easy
// Topics
// Companies
// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000

// Constraints:

// n == nums.length
// 1 <= k <= n <= 105
// -104 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let left = 0;
  let right = k - 1;
  let sum = nums[0];
  for (let i = 1; i <= k - 1; i++) {
    sum += nums[i];
  }
  let result = sum;
  while (right < nums.length - 1) {
    left += 1;
    right += 1;
    sum = sum + nums[right] - nums[left - 1];
    result = Math.max(sum, result);
  }
  return result / k;
};

const nums = [1, 12, -5, -6, 50, 3];
const nums1 = [-1];
const nums2 = [
  8860, -853, 6534, 4477, -4589, 8646, -6155, -5577, -1656, -5779, -2619, -8604,
  -1358, -8009, 4983, 7063, 3104, -1560, 4080, 2763, 5616, -2375, 2848, 1394,
  -7173, -5225, -8244, -809, 8025, -4072, -4391, -9579, 1407, 6700, 2421, -6685,
  5481, -1732, -8892, -6645, 3077, 3287, -4149, 8701, -4393, -9070, -1777, 2237,
  -3253, -506, -4931, -7366, -8132, 5406, -6300, -275, -1908, 67, 3569, 1433,
  -7262, -437, 8303, 4498, -379, 3054, -6285, 4203, 6908, 4433, 3077, 2288,
  9733, -8067, 3007, 9725, 9669, 1362, -2561, -4225, 5442, -9006, -429, 160,
  -9234, -4444, 3586, -5711, -9506, -79, -4418, -4348, -5891,
];

let k = 4;
let k1 = 1;
let k2 = 93;

console.log(findMaxAverage(nums1, k1));
console.log(findMaxAverage(nums, k));
console.log(findMaxAverage(nums2, k2));
