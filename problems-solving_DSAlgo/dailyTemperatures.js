// 739. Daily Temperatures
// Medium
// Topics
// Companies
// Hint
// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1,1,0]

// Constraints:

// 1 <= temperatures.length <= 105
// 30 <= temperatures[i] <= 100

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const monoStaticStack = [];
  const map = new Map();
  for (let i = temperatures.length - 1; i >= 0; i--) {
    let ele = temperatures[i];
    const k = monoStaticStack.length - 1 || -1;
    while (k >= 0 && ele > monoStaticStack[k]) {
      monoStaticStack.pop();
      k--;
    }
  }
};
