/*** Find the next greater element in the given array */

const nextLargestElement = (arr) => {
  const result = Array.from({ length: arr.length }).fill(-1);
  const stack = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    const current = arr[i];
    while (stack.length && stack[stack.length - 1] <= current) {
      stack.pop();
    }

    if (stack.length && stack[stack.length - 1] > current) {
      result[i] = stack[stack.length - 1];
    }

    stack.push(current);
  }

  return result;
};

const test = [2, 1, 2, 4, 3];
const test1 = [4, 3, 8, 9, 5, 7, 2];

console.log(nextLargestElement(test));
// console.log(nextLargestElement(test1));
