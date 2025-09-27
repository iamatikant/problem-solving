// 516. Longest Palindromic Subsequence
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given a string s, find the longest palindromic subsequence's length in s.

// A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

// Example 1:

// Input: s = "bbbab"
// Output: 4
// Explanation: One possible longest palindromic subsequence is "bbbb".
// Example 2:

// Input: s = "cbbd"
// Output: 2
// Explanation: One possible longest palindromic subsequence is "bb".

// Constraints:

// 1 <= s.length <= 1000
// s consists only of lowercase English letters.

//Recursion with memoization
// var longestPalindromeSubsequence = function (s) {
//   let memo = new Map();
//   const findLPS = (left, right) => {
//     const key = `${left}_${right}`;
//     let length = 0;
//     if (memo.has(key)) {
//       return memo.get(key);
//     }
//     if (left > right) {
//       return 0;
//     }
//     if (left === right) {
//       return 1;
//     }
//     if (s[left] === s[right]) {
//       length = 2 + findLPS(left + 1, right - 1);
//     } else {
//       length = Math.max(findLPS(left, right - 1), findLPS(left + 1, right));
//     }
//     memo.set(key, length);
//     return length;
//   };

//   return findLPS(0, s.length - 1);
// };

//2D DP

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const n = s.length;
  let dp = Array.from({ length: n })
    .fill(0)
    .map(() => Array.from({ length: n }).fill(0));

  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }

  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      let j = i + len - 1;
      if (s[i] === s[j]) {
        dp[i][j] = 2 + dp[i + 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[0][n - 1];
};

console.log(longestPalindromeSubseq('bbbab'));
