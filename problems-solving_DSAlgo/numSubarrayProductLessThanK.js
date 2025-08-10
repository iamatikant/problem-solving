// Code
// Testcase
// Test Result
// Test Result
// 713. Subarray Product Less Than K
// Medium
// Topics
// Companies
// Hint
// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

// Example 1:

// Input: nums = [10,5,2,6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
// Example 2:

// Input: nums = [1,2,3], k = 0
// Output: 0

// Constraints:

// 1 <= nums.length <= 3 * 104
// 1 <= nums[i] <= 1000
// 0 <= k <= 106

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var numSubarrayProductLessThanK = function (nums, k) {
//   let count = 0;
//   let left = 0;
//   let right = 0;
//   let cumProd = 1;
//   while (right < nums.length && left <= right) {
//     cumProd = cumProd * nums[right];
//     if (cumProd < k) {
//       count = right - left + 1;
//     } else {
//       cumProd = cumProd / nums[left];
//       left++;
//       right--;
//     }
//     right++;
//   }
//   return count;
// };

var numSubarrayProductLessThanK = function (nums, k) {};

console.log(numSubarrayProductLessThanK([1, 1, 1], 2));
console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
