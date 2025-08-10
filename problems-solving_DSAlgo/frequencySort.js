// 451. Sort Characters By Frequency
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

// Example 1:

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input: s = "Aabb"
// Output: "bbAa"
// Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.

// Constraints:

// 1 <= s.length <= 5 * 105
// s consists of uppercase and lowercase English letters and digits.

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let result = '';
  const map = new Map();
  for (let character of s) {
    map.set(character, (map.get(character) || 0) + 1);
  }

  const keys = Array.from(map.keys()).sort((a, b) => {
    const first = map.get(a);
    const second = map.get(b);
    if (first !== second) return second - first;
    else return a.localeCompare(b);
  });

  for (let i = 0; i < keys.length; i++) {
    const current = keys[i];
    let occurrence = map.get(current);
    while (occurrence > 0) {
      result += current;
      occurrence--;
    }
  }

  return result;
};
