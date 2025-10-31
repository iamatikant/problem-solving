// 131. Palindrome Partitioning
// Medium
// Topics
// premium lock icon
// Companies
// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:

// Input: s = "a"
// Output: [["a"]]

// Constraints:

// 1 <= s.length <= 16
// s contains only lowercase English letters.

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const isPalindrome = (left, right) => {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };

  const result = [];

  const backtrack = (curr, start) => {
    if (start > s.length - 1) {
      result.push([...curr]);
    }

    for (let i = start; i < s.length; i++) {
      if (!isPalindrome(start, i)) {
        continue;
      } else {
        const temp = s.substring(start, i + 1);
        curr.push(temp);
        backtrack(curr, i + 1);
        curr.pop();
      }
    }
  };

  backtrack([], 0);

  return result;
};

console.log(partition('aab'));
