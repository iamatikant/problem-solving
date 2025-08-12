// DSA Problem: Rotate Image
// Problem Statement:

// You are given an n x n 2D matrix representing an image. Rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix.

// Example: Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]

// Output: [[7,4,1],[8,5,2],[9,6,3]]

// Hint: A 90-degree clockwise rotation can be achieved by performing two separate, simpler transformations on the matrix, one after the other. Think about transposing and then reversing.

var rotateMatrix = function (matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  //Transpose first
  for (let i = 0; i < row; i++) {
    for (let j = i; j < col; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < row; i++) {
    matrix[i] = matrix[i].reverse();
  }

  return matrix;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(rotateMatrix(matrix));
