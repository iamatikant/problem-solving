// Given an integer n, return the number of prime numbers that are strictly less than n.
// Solve it in minimum time complexity.

// Example 1:

// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
// Example 2:

// Input: n = 0
// Output: 0
// Example 3:

// Input: n = 1
// Output: 0

// Constraints:

// 0 <= n <= 5 * 106

/**
 * @param {number} n
 * @return {number}
 */

// const map = new Map();
// const checkPrime = (n) => {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// var countPrimes = function (n) {
//   console.log(map);
//   if (map.has(n)) {
//     return map.get(n);
//   }
//   if (n === 0 || n === 1 || n === 2) {
//     return 0;
//   }
//   if (n === 3) {
//     return 1;
//   }
//   let i = 3;
//   let result = 0;
//   while (i < n) {
//     result = checkPrime(i) ? result + 1 : result;
//     i += 2;
//   }
//   map.set(n, result);
//   return result;
// };

var countPrimes = function (n) {
  if (n <= 2) return 0; // No primes below 2

  let isPrime = new Array(n).fill(true);
  isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime

  for (let i = 2; i * i < n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false; // Mark multiples of i as non-prime
      }
    }
  }

  return isPrime.reduce((count, prime) => count + prime, 0); // Count true values (primes)
};

console.log(countPrimes(100000));
// console.log(countPrimes(100000));
// console.log(countPrimes(100));
// console.log(countPrimes(1000));
console.log(countPrimes(7));
// console.log(countPrimes(499979));
// console.log(countPrimes(2));
