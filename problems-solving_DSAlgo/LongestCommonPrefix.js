
/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

*/

var longestCommonPrefix = function(strs) {
  const firstWord = strs[0];
  let commonPrefix = '';
  
  for(let i=0; i<firstWord.length; i++) {
    const checkLetter = firstWord[i];
    for(let j =0; j<strs.length; j++) {
      if(strs[j][i] !== checkLetter) {
        return commonPrefix;
      }
    }
    commonPrefix += checkLetter;
  }
  return commonPrefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix([""]));
console.log(longestCommonPrefix(["a"]));