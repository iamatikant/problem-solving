// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

// Constraints:

// -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x <= Math.pow(-2, 31) || x >= Math.pow(2, 31) - 1) {
    return 0;
  }
  let place = 0;
  let mul = 1;
  let res = 0;
  if (x < 0) {
    place = x.toString().split("").length - 2;
    mul = -1;
  } else {
    place = x.toString().split("").length - 1;
  }
  x = x * mul;
  while (x / 10 > 0) {
    let rem = x % 10;
    x = Math.floor(x / 10);
    res = res + Math.pow(10, place) * rem;
    place--;
  }
  if (res * mul <= Math.pow(-2, 31) || res * mul >= Math.pow(2, 31) - 1) {
    return 0;
  } else return res * mul;
};

console.log(reverse(1534236469));
