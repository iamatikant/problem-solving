/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

// (]

var isValid = function (s) {
  const parsedBrackets = [];
  const openBrackets = ["(", "{", "["];
  const closedBrackets = [")", "}", "]"];
  for (let i = 0; i < s.length; i++) {
    const tempBracket = s[i];
    if (openBrackets.indexOf(tempBracket) !== -1) {
      parsedBrackets.push(tempBracket);
    } else if (closedBrackets.indexOf(tempBracket) !== -1) {
      const lastBracket = parsedBrackets[parsedBrackets.length - 1];
      const index = closedBrackets.indexOf(tempBracket);
      if (lastBracket !== openBrackets[index]) {
        return false;
      } else {
        parsedBrackets.pop();
      }
    } else {
      return false;
    }
  }
  return parsedBrackets.length === 0 ? true : false;
};

console.log(isValid("()"));
console.log(isValid("(]"));
console.log(isValid("()[]{}"));
