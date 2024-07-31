/**
 * 
 * 121. Best Time to Buy and Sell Stock
Easy
Topics
Companies
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104
 */

// var maxProfit = function(prices) {
//   if(prices.length <= 1) {
//     return 0;
//   }
//   let min = prices[0];
//   let max = 0;
//   let maxProfit = max - min;
//   for(let i=0; i<prices.length; i++) {
//     let current = prices[i];
//     let next = prices[i+1];
//     min = current <
//   }
// }

// Example 1:

// Input: prices = [7,8,5,15,6,18]
// Output: 5

var maxProfit = function (prices) {
  let result = 0;
  let min = prices[0];
  for (let index = 0; index < prices.length; index++) {
    const element = prices[index];
    if (element < min) {
      min = element;
    }
    if (element - min > result) {
      result = element - min;
    }
  }
  return result;
};

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
