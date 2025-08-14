// DSA Problem #13: Daily Temperatures
// Problem Statement:

// Given an array of integers temperatures representing the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the i-th day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

// Example 1:

// Input: temperatures = [73, 74, 75, 71, 69, 72, 76, 73]

// Output: [1, 1, 4, 2, 1, 1, 0, 0]

// Explanation:

// On day 0 (temp 73), you wait 1 day to get a warmer temp (74).

// On day 1 (temp 74), you wait 1 day to get a warmer temp (75).

// On day 2 (temp 75), you wait 4 days to get a warmer temp (76).

// On day 3 (temp 71), you wait 2 days to get a warmer temp (72).

// On day 4 (temp 69), you wait 1 day to get a warmer temp (72).

// On day 5 (temp 72), you wait 1 day to get a warmer temp (76).

// On day 6 (temp 76), there is no warmer temperature.

// On day 7 (temp 73), there is no warmer temperature.

// Example 2:

// Input: temperatures = [30, 40, 50, 60]

// Output: [1, 1, 1, 0]

// Example 3:

// Input: temperatures = [30, 60, 90]

// Output: [1, 1, 0]

// Constraints:

// 1 <= temperatures.length <= 10^5

// 30 <= temperatures[i] <= 100

// const nextWarmerDay = (temperatures) => {
//   const stack = [];
//   const result = Array.from({ length: temperatures.length }).fill(0);
//   for (let i = 0; i < temperatures.length; i++) {
//     const currentTemperature = temperatures[i];
//     if (
//       stack.length > 0 &&
//       temperatures[stack[stack.length - 1]] > currentTemperature
//     ) {
//       result[i] = i - stack[stack.length - 1];
//       stack.push[i];
//     }

//     while (currentTemperature > temperatures[stack[stack.length - 1]]) {
//       stack.pop();
//     }
//     stack.push(i);
//   }

//   return result;
// };

var nextWarmerDay = function (temperatures) {
  const n = temperatures.length;
  const answer = new Array(n).fill(0);

  const stack = [];

  for (let i = 0; i < n; i++) {
    const currentTemp = temperatures[i];
    while (
      stack.length > 0 &&
      currentTemp > temperatures[stack[stack.length - 1]]
    ) {
      const previousDayIndex = stack.pop();
      answer[previousDayIndex] = i - previousDayIndex;
    }
    stack.push(i);
  }

  return answer;
};

const temp = [73, 74, 75, 71, 69, 72, 76, 73];

console.log(nextWarmerDay(temp));

stack = [0];
