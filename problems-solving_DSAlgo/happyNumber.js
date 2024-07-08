/**
 * 
 * 202. Happy Number
Easy
Topics
Companies
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

 

Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
Example 2:

Input: n = 2
Output: false
 

Constraints:

1 <= n <= 231 - 1
 * 
 * 
 * 
 * 
 */

const getDigits = (num) => {
  const digits = [];
  if (num < 10) {
    return [num];
  }
  while (Math.floor(num / 10) > 0) {
    num = Math.floor(num / 10);
    digits.push(num % 10);
  }
  return digits;
};

var isHappy = function (n) {
  if (n === 1) {
    return true;
  }
  let sum = 0;
  let num = n;
  let numberArray = [];
  while (numberArray.indexOf(num) === -1) {
    const digits = getDigits(num);
    sum = digits.reduce(
      (accumulator, element) => accumulator + Math.pow(element, 2),
      0
    );
    if (sum === 1) {
      return true;
    }
    debugger;
    numberArray.push(num);
    num = sum;
    sum = 0;
  }
  console.log(numberArray);
  return false;
};

// console.log(isHappy(19));
// console.log(isHappy(2));
// console.log(isHappy(1));
console.log(isHappy(7));
