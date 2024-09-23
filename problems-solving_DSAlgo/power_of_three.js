// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

// Example 1:

// Input: n = 27
// Output: true
// Explanation: 27 = 33
// Example 2:

// Input: n = 0
// Output: false
// Explanation: There is no x where 3x = 0.
// Example 3:

// Input: n = -1
// Output: false
// Explanation: There is no x where 3x = (-1).

// Constraints:

// -231 <= n <= 231 - 1

// Follow up: Could you solve it without loops/recursion?

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  let i = 0;
  while (Math.pow(3, i) <= n) {
    if (Math.pow(3, i) === n) {
      return true;
    }
    i++;
  }
  return false;
  // if (n === 1) {
  //   return true;
  // }
  // let num = n.toString().split("");
  // let sum = num.reduce((prev, current) => current + prev, 0);
  // console.log("sum: ", sum);
  // if (sum > 9) {
  //   sum = sum
  //     .toString()
  //     .split("")
  //     .reduce((prev, current) => current + prev, 0);
  // }
  // if (sum === 9) {
  //   return true;
  // }
  // return false;
};
console.log(isPowerOfThree(279));

//We can also do this by keeping dividing the number by 3 and checking if the final number is 1
// Another approach is to sum the digits -- the sum should be 9

[3, 9, 27, 81, 243, 729];
