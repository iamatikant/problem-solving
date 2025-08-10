// 🧩 Problem: Longest Substring Without Repeating Characters
// Level: Medium
// Category: Strings, Sliding Window
// Company Tag: Frequently asked at Amazon

// 🔹 Prompt:
// Given a string s, find the length of the longest substring without repeating characters.

// 🔸 Examples:
// Example 1:

// js
// Copy
// Edit
// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// js
// Copy
// Edit
// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// js
// Copy
// Edit
// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// 🔹 Constraints:
// 0 <= s.length <= 5 * 10⁴

// s consists of English letters, digits, symbols, and spaces

// 🧠 Goals:
// Use a sliding window approach

// Optimize to O(n) time — brute force will not pass MAANG interviews

// Use a Set or Map to track characters

// Think about how you’ll explain: why your approach is efficient

// ⏱️ You’ve got ~25–30 min for this one.
// Reply when ready:

// Your code

// Your approach explanation — pretend I’m the interviewer

// If you want — include edge case handling

// You’re warmed up now — show me you can solve this one cleanly under pressure. Let’s go! 🔥

const longestSubstring = (str) => {
  let left = 0;
  let maxLength = 0;
  const map = new Map();

  for (let right = 0; right < str.length; right++) {
    let current = str[right];
    if (map.has(current) && map.get(current) >= left) {
      left = map.get(current) + 1;
    }

    map.set(current, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

let input = 'pwwkew';
// let input = 'abcabcab';
// let input = 'bbbb';
// let input = 'abcdec';

console.log(longestSubstring(input));
