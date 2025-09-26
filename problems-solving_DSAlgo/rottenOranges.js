// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Example 1:

// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4
// Example 2:

// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
// Example 3:

// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let freshOranges = 0;
  let row = grid.length;
  let col = grid[0].length;
  let queue = [];
  for (let i = 0; i < row; i++) {
    for (j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        freshOranges++;
      } else if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }
  if (!freshOranges) {
    return 0;
  }

  let minutes = 0;
  while (queue.length > 0) {
    let levelSize = queue.length;
    let didRotThisMinute = false;
    for (let i = 0; i < levelSize; i++) {
      const [x, y] = queue.shift();
      [
        [x + 1, y],
        [x - 1, y],
        [x, y - 1],
        [x, y + 1],
      ].map(([m, n]) => {
        if (m >= 0 && m < row && n >= 0 && n < col && grid[m][n] === 1) {
          grid[m][n] = 2;
          freshOranges--;
          queue.push([m, n]);
          didRotThisMinute = true;
        }
      });
    }

    if (didRotThisMinute) {
      minutes++;
    }
  }
  if (freshOranges > 0) {
    return -1;
  }
  return minutes;
};
