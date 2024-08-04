// this has to be solved

const prices = [7, 1, 5, 3, 6, 4];
const prices2 = [1, 2, 3, 4, 5];

var maxProfit = function (prices) {
  let profit = 0;
  for (let index = 0; index < prices.length - 1; index++) {
    const element = prices[index];
    const nextElement = prices[index + 1];
    if (nextElement > element) {
      profit += nextElement - element;
    }
  }
  return profit;
};

console.log(maxProfit(prices));
console.log(maxProfit(prices2));
