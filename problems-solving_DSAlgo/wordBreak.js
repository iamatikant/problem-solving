// 139. Word Break
// Medium
// Topics
// premium lock icon
// Companies
// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

// Constraints:

// 1 <= s.length <= 300
// 1 <= wordDict.length <= 1000
// 1 <= wordDict[i].length <= 20
// s and wordDict[i] consist of only lowercase English letters.
// All the strings of wordDict are unique.

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// var wordBreak = function (s, wordDict) {
//   const map = new Map();
//   const wordSet = new Set(wordDict);
//   const wordParser = (word) => {
//     if (word.length === 0) {
//       return true;
//     }
//     if (map.has(word)) {
//       return map.get(sub);
//     }
//     let i = 0;
//     let char = '';
//     while (i < word.length) {
//       char += word[i];
//       if (map.has(char)) {
//         if (i === word.length - 1 && word.length < s.length) {
//           return true;
//         } else {
//           wordParser(word.substring(i + 1));
//         }
//       }
//       if (wordSet.has(char)) {
//         map.set(char, true);
//         wordParser(word.substring(i + 1));
//       }
//       i++;
//     }

//     map.set(word, false);
//     return false;
//   };
//   return wordParser(s);
// };

var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict);

  const memo = new Map();
  function canBreak(sub) {
    if (sub.length === 0) {
      return true;
    }
    if (memo.has(sub)) {
      return memo.get(sub);
    }
    for (let i = 1; i <= sub.length; i++) {
      const prefix = sub.substring(0, i);
      if (wordSet.has(prefix)) {
        const suffix = sub.substring(i);
        if (canBreak(suffix)) {
          memo.set(sub, true); // Cache the result for the current sub
          return true;
        }
      }
    }
    memo.set(sub, false); // Cache the failure
    return false;
  }

  return canBreak(s);
};
