const sharePrice = [5, 10, 30, 6, 12, 40, 60, 4, 59, 1, 58];
// const sharePrice =  [2, 3, 10, 2, 4, 8, 1];

const findMaxProfit = () => {
  let max = 0;
  let low = sharePrice[0];
  let high = sharePrice[0];
  for (let i = 0; i < sharePrice.length; i++) {
    low = sharePrice[i] < low ? sharePrice[i] : low;
    if (high < sharePrice[i]) {
      high = sharePrice[i];
    } else {
      low = sharePrice[i];
      high = sharePrice[i];
    }
    max = high - low > max ? high - low : max;
  }
  console.log(max, high, low);
  return max;
};

console.log(findMaxProfit());
