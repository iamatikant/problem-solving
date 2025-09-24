// 1160. Find Words That Can Be Formed by Characters
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given an array of strings words and a string chars.

// A string is good if it can be formed by characters from chars (each character can only be used once for each word in words).

// Return the sum of lengths of all good strings in words.

// Example 1:

// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
// Example 2:

// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

// Constraints:

// 1 <= words.length <= 1000
// 1 <= words[i].length, chars.length <= 100
// words[i] and chars consist of lowercase English letters.

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  const map = new Map();
  let result = 0;
  for (let letter of chars) {
    map.set(letter, (map.get(letter) || 0) + 1);
  }

  for (let word of words) {
    let wordMap = new Map();
    let hasCharacters = true;
    for (let letter of word) {
      wordMap.set(letter, (wordMap.get(letter) || 0) + 1);
    }

    for (let [key, value] of wordMap) {
      if (!map.has(key) || map.get(key) < value) {
        hasCharacters = false;
        break;
      }
    }

    if (hasCharacters) {
      result += word.length;
    }
  }
  return result;
};

let words = ['cat', 'bt', 'hat', 'tree'],
  chars = 'atach';

console.log(countCharacters(words, chars));
