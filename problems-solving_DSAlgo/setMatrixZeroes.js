// Code
// Testcase
// Test Result
// Test Result
// 73. Set Matrix Zeroes
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

// Example 1:

// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Example 2:

// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// Constraints:

// m == matrix.length
// n == matrix[0].length
// 1 <= m, n <= 200
// -231 <= matrix[i][j] <= 231 - 1

// Follow up:

// A straightforward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let row = matrix.length;
  let col = matrix[0].length;

  let firstRowZero = false;
  let firstColZero = false;

  for (let i = 0; i < col; i++) {
    if (matrix[0][i] === 0) {
      firstRowZero = true;
      break;
    }
  }

  for (let i = 0; i < row; i++) {
    if (matrix[i][0] === 0) {
      firstColZero = true;
      break;
    }
  }

  for (let i = 1; i < row; i++) {
    for (j = 1; j < col; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < row; i++) {
    for (j = 1; j < col; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (firstColZero) {
    for (let j = 0; j < row; j++) {
      matrix[j][0] = 0;
    }
  }
  if (firstRowZero) {
    for (let j = 0; j < col; j++) {
      matrix[0][j] = 0;
    }
  }

  return matrix;
};

// console.log(
//   setZeroes([
//     [0, 1, 2, 0],
//     [3, 4, 5, 2],
//     [1, 3, 1, 5],
//   ])
// );

console.log(setZeroes([[1, 0]]));
