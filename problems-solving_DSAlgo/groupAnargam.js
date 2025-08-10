// roblem: Group Anagrams
// You are given an array of strings, strs. Your task is to group the anagrams together. You can return the final list of groups in any order.

// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

// Output: [["bat"], ["nat", "tan"], ["eat", "tea", "ate"]]

// Example 2:

// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 10^4

// 0 <= strs[i].length <= 100

// strs[i] consists of lowercase English letters.

// To solve this, think about: What is a common property that all anagrams share? How can you use that property as a "key" to group them?

const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

// input is never an empty array
// ['ab']

// Output: [['bat'], ['nat', 'tan'], ['eat', 'tea', 'ate']];

const groupAnagram = (strs) => {
  if (!strs || strs.length === 0) {
    return '';
  }

  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    const sortedCurrentWord = strs[i].split('').sort().join('');
    console.log(strs[i].split('').sort().join(''), 'somethig: ', map);
    if (map.has(sortedCurrentWord)) {
      const currentEntry = map.get(sortedCurrentWord);
      map.set(sortedCurrentWord, [...currentEntry, strs[i]]);
    } else {
      map.set(sortedCurrentWord, [strs[i]]);
    }
  }

  return Array.from(map.values());
};

console.log(groupAnagram(input));
