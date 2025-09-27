// 1143. Longest Common Subsequence
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.

// Example 1:

// Input: text1 = "abcde", text2 = "ace"
// Output: 3
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.

// Constraints:

// 1 <= text1.length, text2.length <= 1000
// text1 and text2 consist of only lowercase English characters.

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// var longestCommonSubsequence = function (text1, text2) {
//   const m = text1.length;
//   const n = text2.length;
//   const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (text1[i] === text2[j]) {
//         dp[i][j] = 1 + dp[i - 1][j - 1];
//       } else {
//         dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
//       }
//     }
//   }
//   return dp[m][n];
// };
function lcsRecursiveMemo(text1, text2) {
  const memo = new Map();

  function dfs(i, j) {
    if (i === text1.length || j === text2.length) return 0;
    const key = `${i},${j}`;
    if (memo.has(key)) return memo.get(key);

    let result;
    if (text1[i] === text2[j]) {
      result = 1 + dfs(i + 1, j + 1);
    } else {
      result = Math.max(dfs(i + 1, j), dfs(i, j + 1));
    }
    memo.set(key, result);
    return result;
  }

  return dfs(0, 0);
}

// Try with complex strings
const text1 = 'AGGTABCTGACGTAGCTAGCTGACTGATCGTACGTAGCTAGT';
const text2 = 'GXTXAYBCGTCGATGCTAGCTAGATCGTACGTAGCTAGCTA';

console.log('LCS length:', lcsRecursiveMemo(text1, text2));

// const text1 = 'abcde',
//   text2 = 'ace';
// console.log(longestCommonSubsequence(text1, text2));
