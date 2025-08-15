// ask 1: DSA - Bit Manipulation (15-20 mins)
// Problem: Single Number

// Problem Statement:

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity (O(n)) and use only constant extra space (O(1)).

// Example:

// Input: nums = [4, 1, 2, 1, 2]

// Output: 4

// Hint / Refresher on XOR (^):

// The XOR (exclusive OR) operator has two magical properties that are key to solving this:

// A number XOR'd with itself is 0: x ^ x = 0 (e.g., 5 ^ 5 = 0)

// A number XOR'd with 0 is itself: x ^ 0 = x (e.g., 5 ^ 0 = 5)

// Also, XOR is commutative and associative, meaning (a ^ b) ^ c is the same as a ^ (c ^ b).

// How can you use these properties to find the single number in one pass through the array? What would happen if you XOR'd all the numbers in the example [4, 1, 2, 1, 2] together?

const bitManipulation = (nums) => {
  if (!nums || nums.length === 0) {
    return null;
  }
  let result = 0;
  for (let item of nums) {
    result = result ^ item;
  }

  return result;
};
