// DSA Problem: Jump Game II
// Problem Statement:

// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

// Each element nums[i] represents the maximum length of a forward jump from index i.

// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can always reach nums[n - 1].

// Example:

// Input: nums = [2, 3, 1, 1, 4]

// Output: 2

// Explanation:

// From index 0 (value 2), you can reach index 1 or 2.

// From index 1 (value 3), you can jump to index 4 (the end).

// This path 0 -> 1 -> 4 is 2 jumps.

// Thinking Prompt & Hints:

// This is not about checking every possible jump path. That would be too slow. It's about being greedy.

// Imagine you are at the starting line.

// The first jump (from index 0) can land you anywhere up to a certain point. Let's call this point the current_jump_end.

// While you are "in the air" during this first jump (i.e., iterating from your current position up to current_jump_end), you should be looking ahead. For every position you can land on, calculate how far that position could take you in the next jump. You want to find the position that gives you the maximum possible reach for the future. Let's call this farthest_reach.

// Once you reach the current_jump_end, you are forced to make your next jump. You increment your jump count, and your new current_jump_end becomes the farthest_reach you found during the last jump.

// You repeat this process until current_jump_end is at or beyond the end of the array.

// Let's try to formalize this with variables:

// jumps: The number of jumps you've taken. Starts at 0.

// current_jump_end: The farthest index you can reach with the current number of jumps. Starts at 0.

// farthest_reach: The farthest index you can possibly reach from any of the positions within the current jump. Starts at 0.

var jump = function (nums) {
  if (!nums || nums.length <= 1) {
    return 0;
  }
  let maxReach = 0;
  let jumps = 0;
  let current_jump_end = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxReach = Math.max(maxReach, nums[i] + i);
    if (i === current_jump_end) {
      jumps++;
      current_jump_end = maxReach;
    }
  }
  return jumps;
};
