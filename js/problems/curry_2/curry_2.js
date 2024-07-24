// Input:
const res = sum(1, 2, 3, 4)();
const res2 = sum(1)(2)(3)(4)();
const res3 = sum(1, 2)(3, 4)();
const res4 = sum(1, 2, 3)(4)();
const res5 = sum(1)(2, 3, 4)();
const res6 = sum();

console.log(res, res2, res3, res4, res5, res6);

// Output:
// 10 10 10 10 10 0

// function sum(...args) {
//   let result = [...args];
//   if (!result.length) {
//     return result.reduce((prev, curr) => prev + curr, 0);
//   }
//   const helper = (...args2) => {
//     result = [...result, ...args2];
//     if (!args2.length) {
//       return result.reduce((prev, curr) => prev + curr, 0);
//     }
//     return helper;
//   };
//   return helper;
// }

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

function sum(...args) {
  let result = [...args];
  if (!args.length) {
    return result.reduce((prev, curr) => prev + curr, 0);
  }
  const helper = (...args2) => {
    result = [...result, ...args2];
    if (args2.length === 0) {
      return result.reduce((prev, cur) => prev + cur, 0);
    } else {
      return helper;
    }
  };
  return helper;
}
