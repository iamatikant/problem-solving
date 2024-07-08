/***
 * 
 * 
 * 
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
 */

/**
  @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
  // console.log(s.match(/[a-b|A-B|0-9]+/));
  const testString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const length = testString.length;
  const isEvenLength = length % 2 === 0 ? true : false;
  let midLeft = isEvenLength ? length / 2 - 1 : Math.floor(length / 2);
  let midRight = isEvenLength ? length / 2 : Math.floor(length / 2);
  let palindromeFlag = true;
  while (midLeft >= 0 && midRight < length) {
    console.log("testString[midLeft]: ", testString[midLeft]);
    if (testString[midLeft] !== testString[midRight]) {
      palindromeFlag = false;
      break;
    }
    midLeft -= 1;
    midRight += 1;
  }
  return palindromeFlag;
};

console.log(isPalindrome("ab"));
