// DSA Problem: Number of Islands
// Problem Statement:

// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:

// grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Example 2:

// Input:

// grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

// Constraints:

// m == grid.length

// n == grid[i].length

// 1 <= m, n <= 300

// grid[i][j] is '0' or '1'.

var numIslands = function (grid) {
  let visited = new Set();
  let rows = grid.length;
  let cols = grid[0].length;
  let count = 0;
  const nextValidCells = (x, y) => {
    const rootCells = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    let availableCells = rootCells
      .map(([dx, dy]) => [x + dx, y + dy])
      .filter(
        ([m, n]) =>
          m < rows &&
          m >= 0 &&
          n < cols &&
          n >= 0 &&
          !visited.has([m, n].toString())
      )
      .filter(([r, c]) => grid[r][c] === '1');
    availableCells.forEach(([m, n]) => visited.add([m, n].toString()));
    return availableCells;
  };

  const doBFS = (x, y) => {
    const queue = [[x, y]];
    visited.add([x, y].toString());
    while (queue.length > 0) {
      let [m, n] = queue.shift();
      queue.push(...nextValidCells(m, n));
    }
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let currentCell = grid[i][j];
      if (currentCell === '1' && !visited.has([i, j].toString())) {
        count++;
        doBFS(i, j);
      }
    }
  }

  return count;
};

let grid1 = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];

let grid2 = [
  ['1', '1', '0', '0', '0'], // Part of Island 1
  ['1', '1', '0', '0', '0'], // Part of Island 1
  ['0', '0', '1', '0', '0'], // This is Island 2, all by itself
  ['0', '0', '0', '1', '1'], // These two '1's are connected, forming Island 3
];

console.log(numIslands(grid2));
