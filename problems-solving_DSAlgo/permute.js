// DSA Problem: Permutations
// Problem Statement:

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Example 1:

// Input: nums = [1,2,3]

// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:

// Input: nums = [0,1]

// Output: [[0,1],[1,0]]

// Example 3:

// Input: nums = [1]

// Output: [[1]]

// Constraints:

// 1 <= nums.length <= 6

// -10 <= nums[i] <= 10

// All the integers of nums are unique.

// Thinking Prompt:

// This is a classic problem for recursion and backtracking.

// Think about building a permutation step-by-step.

// For the first position, you can choose any of the numbers (1, 2, or 3).

// Let's say you pick 1. Now you need to find all permutations of the remaining numbers (2, 3).

// Let's say you pick 2. Now you need to find all permutations of the remaining number (3).

// How would you structure a recursive function to explore these choices? You'll likely need a helper function that keeps track of the current permutation you're building and the numbers you still have left to use.

var permute = function (nums) {
  let result = [];

  const backtrack = (path, used) => {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }
      path.push(nums[i]);
      used[i] = true;
      backtrack(path, used);
      path.pop();
      used[i] = false;
    }
  };

  backtrack([], Array.from({ length: nums.length }).fill(false));
  return result;
};

console.log(permute([1, 2, 3]));
