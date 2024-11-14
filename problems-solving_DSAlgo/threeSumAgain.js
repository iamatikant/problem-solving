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

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function (nums) {
//   let result = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     const target = 0 - nums[i];
//     const obj = {};
//     for (let j = i + 1; j < nums.length; j++) {
//       const current = nums[j];
//       const required = target - current;
//       if (obj[required] === undefined) {
//         obj[current] = true;
//       } else {
//         const triplet = [nums[i], current, required]
//           .sort((a, b) => a - b)
//           .join(",");
//         result.add(triplet);
//       }
//     }
//   }
//   return Array.from(result, (triplet) => {
//     return triplet.split(",").map(Number);
//   });
// };

var threeSum = function (nums) {
  nums.sort((a, b) => a - b); // Step 1: Sort the array
  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate values for `i`
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let target = -nums[i]; // The target is the negation of nums[i]
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum === target) {
        // If we found a triplet, push it into the result
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates for `left` and `right`
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        // Move the pointers inward after finding a valid triplet
        left++;
        right--;
      } else if (sum < target) {
        // If the sum is too small, move the `left` pointer to the right to increase the sum
        left++;
      } else {
        // If the sum is too large, move the `right` pointer to the left to decrease the sum
        right--;
      }
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
