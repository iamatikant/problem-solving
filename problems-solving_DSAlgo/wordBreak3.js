// Code
// Testcase
// Test Result
// Test Result
// 139. Word Break
// Solved
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

function wordBreak(s, wordDict) {
  const dictionary = new Set(wordDict);
  // console.log('dict: ', dictionary);
  const map = new Map();
  const finder = (word) => {
    if (word.length === 0 || dictionary.has(word)) {
      return true;
    }
    if (map.has(word)) {
      return map.get(word);
    }
    let prefix = '';
    for (let i = 0; i < word.length; i++) {
      prefix += word[i];
      if (dictionary.has(prefix)) {
        const suffix = word.slice(i + 1);
        const found = finder(suffix);
        map.set(suffix, found);
        if (found) {
          return true;
        }
      }
    }
    return false;
  };
  return finder(s);
}

console.log(
  wordBreak('dogsandcat', ['leet', 'code', 'dog', 'dogs', 'and', 'cat'])
);
