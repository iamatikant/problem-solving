// DSA Problem: Maximum Subarray
// Problem Statement:

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example 1:

// Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// Output: 6

// Explanation: The contiguous subarray [4, -1, 2, 1] has the largest sum, which is 6.

// Example 2:

// Input: nums = [1]

// Output: 1

// Example 3:

// Input: nums = [5, 4, -1, 7, 8]

// Output: 23

// Explanation: The subarray [5, 4, -1, 7, 8] itself is the answer.

// Constraints:

// 1 <= nums.length <= 10^5

// -10^4 <= nums[i] <= 10^4

function maxSum(nums) {
  let maxSum = -Infinity;
  let currentSum = 0;
  for (let num of nums) {
    currentSum += num;
    maxSum = Math.max(currentSum, maxSum);
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
}
