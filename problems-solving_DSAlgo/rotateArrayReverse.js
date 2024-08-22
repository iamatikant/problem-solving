// The following code is supposed to rotate the array A by B positions.

// So, for example,

// A : [1 2 3 4 5 6]
// B : 1

// The output :

// [2 3 4 5 6 1]
// However, there is a small bug in the problem. Fix the bug and submit the problem.

/******  block reversal algorithm  *********/

function swap(A, i, j) {
  var temp;
  while (i <= j) {
    temp = A[i];
    A[i] = A[j];
    A[j] = temp;
    i++;
    j--;
  }
}

const rotateArray = (A, B) => {
  if (B < 1) {
    return A;
  } else {
    B = B % A.length;
  }
  swap(A, B, A.length - 1);
  swap(A, 0, B - 1);
  swap(A, 0, A.length - 1);
  return A;
};
// console.log(
//   rotateArray(
//     [14, 5, 14, 34, 42, 63, 17, 25, 39, 61, 97, 55, 33, 96, 62, 32, 98, 77, 35],
//     56
//   )
// );

console.log(rotateArray([1, 2, 3, 4], 3));
