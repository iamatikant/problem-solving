// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let shortest = strs[0].length;
  let result = "";
  for (let i = 0; i < strs.length; i++) {
    shortest = Math.min(shortest, strs[i].length);
  }
  for (let i = 0; i < shortest; i++) {
    const currentCharacter = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      const char = strs[j][i];
      if (currentCharacter !== char) {
        return result;
      }
    }
    result += currentCharacter;
  }
  return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

// Another approach
// var longestCommonPrefix = function (strs) {
//   if (strs.length === 0) return "";

//   let prefix = strs[0];

//   for (let i = 1; i < strs.length; i++) {
//       while (strs[i].indexOf(prefix) !== 0) {
//           prefix = prefix.slice(0, -1);
//           if (prefix === "") return "";
//       }
//   }

//   return prefix;
// };
