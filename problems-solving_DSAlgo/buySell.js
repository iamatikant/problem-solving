/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let result = 0;
  let min = prices[0];
  for (let index = 0; index < prices.length; index++) {
    const element = prices[index];
    min = Math.min(prices[index], min);
    result = Math.max(prices[index] - min, result);
  }
  return result;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4, 5]));
