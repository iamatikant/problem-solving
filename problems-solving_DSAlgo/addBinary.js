/*
67. Add Binary
Easy
Topics
Companies
Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
*/

// var addBinary = function(a, b) {
//   let result = '';
//   let carry = 0;
//   let i = a.length - 1;
//   let j = b.length - 1;
  
//   // Iterate through both strings from right to left
//   while (i >= 0 || j >= 0) {
//       const digitA = i >= 0 ? parseInt(a[i]) : 0;
//       const digitB = j >= 0 ? parseInt(b[j]) : 0;
      
//       // Sum the current digits and carry
//       const sum = digitA + digitB + carry;
      
//       // Append the sum modulo 2 to the result
//       result = (sum % 2) + result;
      
//       // Update the carry for the next iteration
//       carry = Math.floor(sum / 2);
      
//       // Move to the next digits
//       i--;
//       j--;
//   }
  
//   // If there's a remaining carry, append it to the result
//   if (carry > 0) {
//       result = carry + result;
//   }
  
//   return result;
// };

var addBinary = function(a, b) {
  a = "0b" + a;
  b = "0b" + b;
  let c = BigInt(a) + BigInt(b);
  return c.toString(2);
};

console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101", "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"));