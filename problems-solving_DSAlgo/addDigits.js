// 258. Add Digits
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.
// Example 2:

// Input: num = 0
// Output: 0

// Constraints:

// 0 <= num <= 231 - 1

// Follow up: Could you do it without any loop/recursion in O(1) runtime?

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let result = 0;
  while (num !== 0) {
    result += num % 10;
    num = Math.floor(num / 10);
  }

  if (result > 9) {
    return addDigits(result);
  }

  return result;
};

console.log(addDigits(38));

var addDigitsSimple = function (num) {
  if (num < 10) {
    return num;
  }
  return (num % 10) + addDigits(Math.floor(num / 10));
};

console.log(addDigits(38));
