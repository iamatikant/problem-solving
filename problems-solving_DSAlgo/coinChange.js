// DSA Problem: Coin Change
// Problem Statement:

// You are given an integer array coins representing coins of different denominations and an integer amount.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Example 1:

// Input: coins = [1, 2, 5], amount = 11

// Output: 3 (5 + 5 + 1)

// Example 2:

// Input: coins = [2], amount = 3

// Output: -1

// Example 3:

// Input: coins = [1], amount = 0

// Output: 0

// (Coach mode)

// This is a classic "bottom-up" dynamic programming problem.

// Let dp[i] be the fewest number of coins needed to make the amount i. Our goal is to find dp[amount].

// 1. Initialization:

// What is the value of dp[0]? (How many coins does it take to make an amount of 0?)

// How should we initialize the rest of the dp array (from dp[1] to dp[amount]) to signify that we haven't found a solution for those amounts yet? A large number, like Infinity, is a good choice.

// 2. The Recurrence Relation (The Loops):

// To calculate dp[i] (the fewest coins for amount i), we can try to use each coin in our coins array.

// For each coin in coins:

// If we use this coin, the remaining amount we need to make is i - coin.

// We already know the fewest number of coins to make i - coin (it's dp[i - coin]).

// So, a possible solution for dp[i] is 1 + dp[i - coin] (1 for the current coin, plus the coins needed for the remainder).

// Since we want the fewest coins, we need to do this for all possible coins and take the minimum.

// So, the core logic will involve two loops: one that iterates through the amounts from 1 to amount, and an inner loop that iterates through the available coins.

// Can you describe how you would use this logic to build up your dp array?

function coinChange(coins, amount) {
  const dp = Array.from({ length: amount + 1 }).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log(coinChange([2], 3));
