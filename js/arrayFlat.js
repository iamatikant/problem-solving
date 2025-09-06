// This is a JavaScript coding problem from BFE.dev
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) {
      continue;
    }
    if (Array.isArray(arr[i]) && depth >= 0) {
      depth -= 1;
      result = [...result, ...flat(arr[i], depth)];
    } else {
      result.push(arr[i]);
    }
  }
  // function parser(arr, level) {
  //   for(let i =0; i<arr.length; i++) {
  //     if(!arr.hasOwnProperty(i)) {
  //       continue;
  //     }
  //     if(Array.isArray(arr[i]) && level >= 0) {
  //       level -= 1;
  //       parser(arr[i], level);
  //     } else {
  //       result.push(arr[i]);
  //     }
  //   }
  // }

  // parser(arr, depth);
  return result;
}

// Tests
const arr = [1, [2], [3, [4]]];
console.log(flat(arr)); // [1, 2, 3, [4]]
console.log(flat(arr, 1)); // [1, 2, 3, [4]]
console.log(flat(arr, 2)); // [1, 2, 3, 4]

console.log(
  flat([1, 2, , , undefined, [3, 4, [5, 6, [7, 8, [9, 10]]]]], Infinity)
);
// [1, 2, undefined, 3, 4, 5, 6, 7, 8, 9, 10]
