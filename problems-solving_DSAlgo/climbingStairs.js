// New DSA Problem: Climbing Stairs
// Problem Statement:

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2

// Output: 2

// Explanation: There are two ways to climb to the top:

// 1 step + 1 step

// 2 steps

// Example 2:

// Input: n = 3

// Output: 3

// Explanation: There are three ways to climb to the top:

// 1 step + 1 step + 1 step

// 1 step + 2 steps

// 2 steps + 1 step

// Constraints:

// 1 <= n <= 45

// this approach is o(n) space complexity

var climbStairs = function (n) {
  const map = new Map();
  map.set(1, 1);
  map.set(2, 2);

  const calculate = (num) => {
    if (map.has(num)) {
      return map.get(num);
    }

    const twoLess = calculate(num - 2);
    const oneLess = calculate(num - 1);

    const result = twoLess + oneLess;

    map.set(num, result);

    return result;
  };

  return calculate(n);
};

// O(1) space complexity

var climbingStairs = function (n) {
  if (n <= 2) {
    return n;
  }

  let oneLessValue = 2;
  let twoLessValue = 1;
  let current = oneLessValue + twoLessValue;

  for (let i = 3; i <= n; i++) {
    current = oneLessValue + twoLessValue;
    twoLessValue = oneLessValue;
    oneLessValue = current;
  }

  return current;
};

console.log(climbStairs(45));
console.log(climbingStairs(45));
