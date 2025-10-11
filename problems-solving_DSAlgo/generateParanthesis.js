// 22. Generate Parentheses
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

// Constraints:

// 1 <= n <= 8

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  const backtrack = (current, openCount, closeCount) => {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }
    if (openCount < n) {
      backtrack(current + '(', openCount + 1, closeCount);
    }
    if (closeCount < openCount) {
      backtrack(current + ')', openCount, closeCount + 1);
    }
  };

  backtrack('', 0, 0);

  return result;
};

console.log(generateParenthesis(3));
