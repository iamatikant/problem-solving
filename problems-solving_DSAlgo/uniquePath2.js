// 63. Unique Paths II
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

// Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The testcases are generated so that the answer will be less than or equal to 2 * 109.

// Example 1:

// Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// Output: 2
// Explanation: There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right
// Example 2:

// Input: obstacleGrid = [[0,1],[0,0]]
// Output: 1

// Constraints:

// m == obstacleGrid.length
// n == obstacleGrid[i].length
// 1 <= m, n <= 100
// obstacleGrid[i][j] is 0 or 1.

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  if (obstacleGrid[m - 1][n - 1] === 1 || obstacleGrid[0][0] === 1) {
    return 0;
  }
  let count = 0;
  const memo = new Map();
  let uniquePath = (row, col) => {
    if (row === m - 1 && col === n - 1) {
      return 1;
    }
    if (memo.has(`${row}_${col}`)) {
      return memo.get(`${row}_${col}`);
    }
    if (
      row < 0 ||
      row > m - 1 ||
      col < 0 ||
      col > n - 1 ||
      obstacleGrid[row][col] === 1
    ) {
      return 0;
    }
    const paths = uniquePath(row + 1, col) + uniquePath(row, col + 1);
    memo.set(`${row}_${col}`, paths);
    return paths;
  };

  return uniquePath(0, 0);
};

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
