// 300. Longest Increasing Subsequence
// Medium
// Topics
// premium lock icon
// Companies
// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1

// Constraints:

// 1 <= nums.length <= 2500
// -104 <= nums[i] <= 104

// Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?

// var lengthOfLIS = function (nums) {
//   const dp = [];
//   for (let i = 0; i < nums.length; i++) {
//     let maxSubValue = 0;
//     for (let j = 0; j < i; j++) {
//       if (nums[j] < nums[i]) {
//         maxSubValue = Math.max(dp[j], maxSubValue);
//       }
//     }
//     dp[i] = 1 + maxSubValue;
//   }

//   return Math.max(...dp);
// // };

// var lengthOfLIS = function (nums) {
//   const dp = [];
//   for (let i = 0; i < nums.length; i++) {
//     let maxSubValue = 0;
//     for (let j = 0; j < i; j++) {
//       if (nums[j] < nums[i]) {
//         maxSubValue = Math.max(dp[j], maxSubValue);
//       }
//     }
//     dp[i] = 1 + maxSubValue;
//   }

//   return Math.max(...dp);
// };

// const nums = [10, 9, 2, 5, 3, 7, 101, 18];

const LIS = (nums) => {
  const dp = Array.from({ length: nums.length }).fill(1);
  for (let i = 0; i < nums.length; i++) {
    let j = 0;
    while (j < i) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
      }
      j++;
    }
  }

  return Math.max(...dp);
};
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(LIS(nums));

const LIS2 = (nums) => {};
