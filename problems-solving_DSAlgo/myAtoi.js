// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

// The algorithm for myAtoi(string s) is as follows:

// Whitespace: Ignore any leading whitespace (" ").
// Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity is neither present.
// Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
// Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
// Return the integer as the final result.

// Example 1:

// Input: s = "42"

// Output: 42

// Explanation:

// The underlined characters are what is read in and the caret is the current reader position.
// Step 1: "42" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "42" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "42" ("42" is read in)
//            ^
// Example 2:

// Input: s = " -042"

// Output: -42

// Explanation:

// Step 1: "   -042" (leading whitespace is read and ignored)
//             ^
// Step 2: "   -042" ('-' is read, so the result should be negative)
//              ^
// Step 3: "   -042" ("042" is read in, leading zeros ignored in the result)
//                ^
// Example 3:

// Input: s = "1337c0d3"

// Output: 1337

// Explanation:

// Step 1: "1337c0d3" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "1337c0d3" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "1337c0d3" ("1337" is read in; reading stops because the next character is a non-digit)
//              ^
// Example 4:

// Input: s = "0-1"

// Output: 0

// Explanation:

// Step 1: "0-1" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "0-1" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "0-1" ("0" is read in; reading stops because the next character is a non-digit)
//           ^
// Example 5:

// Input: s = "words and 987"

// Output: 0

// Explanation:

// Reading stops at the first non-digit character 'w'.

// Constraints:

// 0 <= s.length <= 200
// s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.

/**
 * @param {string} s
 * @return {number}
 */
// var myAtoi = function (s) {
//   const INT_MAX = 2 ** 31 - 1;
//   const INT_MIN = -(2 ** 31);
//   let number = "";
//   let result = 0;
//   let pow = 0;
//   let sign = 1;
//   s = s.trim();
//   if (s[0] === "-" || s[0] === "+") {
//     sign = s[0] === "-" ? -1 : 1;
//     s = s.split("").slice(1);
//   }
//   for (let index = 0; index < s.length; index++) {
//     const element = s[index];
//     if (element.match(/[0-9]/)) {
//       number += element;
//     } else break;
//   }
//   for (let i = number.length - 1; i >= 0; i--) {
//     let element = number[i];
//     result = result + element * Math.pow(10, pow);
//     pow++;
//   }
//   if (sign * result < INT_MIN) {
//     return INT_MIN;
//   }
//   if (sign * result > INT_MAX) {
//     return INT_MAX;
//   }
//   return result * sign;
// };

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  s = s.trim();
  const MAX_INT = 2 ** 31 - 1;
  const MIN_INT = -(2 ** 31);
  const regExp = /[0-9+-]/;
  let numberString = '';
  let result = 0;
  if (!s[0].match(regExp)) {
    return 0;
  } else {
    numberString += s[0];
  }
  let index = 1;
  while (s[index] && s[index].match(/[0-9]/)) {
    numberString += s[index];
    index++;
  }

  let sign = undefined;
  if (numberString[0] === '-' || numberString[0] === '+') {
    sign = numberString[0] === '-' ? -1 : undefined;
    numberString = numberString.slice(1);
  }
  index = 0;
  while (index < numberString.length) {
    const temp = parseInt(numberString[index]);
    if (sign) {
      if (-(result * 10 + temp) <= MIN_INT) {
        return MIN_INT;
      }
    }
    if (result * 10 + temp >= MAX_INT) {
      return MAX_INT;
    }
    result = result * 10 + temp;
    index++;
  }

  if (sign === -1) {
    return -result;
  }
  return result;
};

// -,+,a,2

console.log(myAtoi('-2adsfa00'));
console.log(myAtoi('+1'));
console.log(myAtoi('asnva 24'));
