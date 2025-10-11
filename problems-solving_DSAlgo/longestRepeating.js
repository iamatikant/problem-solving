// DSA Problem: Longest Repeating Character Replacement
// Problem Statement:

// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:

// Input: s = "ABAB", k = 2

// Output: 4

// Explanation: Replace the two 'A's with two 'B's or vice-versa. The longest substring is "BBBB" or "AAAA", with length 4.

// Example 2:

// Input: s = "AABABBA", k = 1

// Output: 4

// Explanation: Replace the 'B' at index 2 with an 'A' to form "AAAABBA". The substring "AAAA" has length 4.

// Constraints:

// 1 <= s.length <= 10^5

// s consists of only uppercase English letters.

// 0 <= k <= s.length

// Thinking Prompt & Hints:

// This is a classic Sliding Window problem, similar to "Longest Substring Without Repeating Characters," but with a different condition for shrinking the window.

// The Window: Imagine a window defined by a left and right pointer. The length of this window is right - left + 1.

// The Condition: For any given window, how do you know if it's "valid"? A window is valid if the number of characters you need to change to make them all the same is less than or equal to k.

// The number of characters to change is: (length of the window) - (count of the most frequent character in the window).

// So, the condition is: (right - left + 1) - maxFrequency <= k

// The Algorithm:

// Initialize left = 0, maxLength = 0, and a frequency map (an array of 26 zeros or a hash map) to store character counts within your current window.

// Use a for loop to move your right pointer from 0 to the end of the string.

// In each step:

// Add the new character s[right] to your window and update its frequency in the map.

// Keep track of the frequency of the most frequent character in the current window.

// Now, check if your window is invalid (i.e., (windowLength - maxFrequency) > k).

// If it is invalid, what should you do? You need to shrink the window from the left. How do you do that? (Hint: Decrement the frequency of the character at the left pointer and then move left one step to the right).

// After each valid step, update your maxLength.

// This is a medium-to-hard problem that really tests your command of the sliding window pattern. Give it a shot.

// const longestSubstring = (str, k) => {
//   let map = new Map();
//   let maxLength = 0;
//   let left = 0;
//   let right = 0;
//   let maxFreq = 0;
//   while (right < str.length) {
//     let current = str[right];
//     map.set(current, (map.get(current) ?? 0) + 1);
//     let windowSize = right - left + 1;
//     maxFreq = Math.max(maxFreq, map.get(current));
//     if (windowSize - maxFreq > k) {
//       map.set(str[left], map.get(str[left]) - 1);
//       left += 1;
//     } else {
//       maxLength = Math.max(maxLength, right - left + 1);
//     }
//     right++;
//   }

//   return maxLength;
// };

const longestSubstring = (str, k) => {
  let left = 0;
  let right = 0;
  let maxLength = 0;
  let map = new Map(); // for storing character counts
  let maxFreq = 0; // most freq element count
  while (right < str.length) {
    let char = str[right];
    const windowLength = right - left + 1;
    map.set(char, (map.get(char) || 0) + 1);
    maxFreq = Math.max(maxFreq, map.get(char));
    if (windowLength - maxFreq > k) {
      map.set(str[left], map.get(str[left]) - 1);
      left += 1;
    }
    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }

  return maxLength;
};

console.log(longestSubstring('AABABBA', 2));
