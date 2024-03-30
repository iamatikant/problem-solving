/**
 * @param {number}
 * @return {number}
 */
var climbStairs = function(n) {
  const stairs = [];
  stairs[0] = 0;
  stairs[1] = 1;
  stairs[2] = 2;
  let i = 3;
  while(i <= n) {
    stairs[i] = stairs[i-2] + stairs[i-1];
    i+=1;
  }
  return stairs[n];
};

console.log(climbStairs(5));