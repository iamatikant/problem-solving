function sum(a, b, c, d) {
  return a + b + c + d;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3, 4, 5)); // 10
console.log(curriedSum(1)(2, 3)(4, 5)); // 10
console.log(curriedSum(1)(2)(3)(4)); // 10

function curry(fn) {
  let result = [];
  const helper = (...args1) => {
    result = [...result, ...args1];
    if (result.length >= fn.length) {
      let test = result;
      result = [];
      return fn(...test);
    } else {
      return helper;
    }
  };
  return helper;
}

// function curry(fn) {
//   return (...args1) => {
//     let result = [...args1];
//     let total = 0;
//     if (!result.length) {
//       return total;
//     } else {
//       total = result.reduce((prev, next) => prev + next, 0);
//     }
//     const helper = (...args2) => {
//       result = [...result, ...args2];
//       if (args2.length === 0 || !result.length) {
//         return total;
//       }
//       total = result.reduce((prev, next) => prev + next, 0);
//     };
//     if (result.length < 4) {
//       return helper;
//     } else return total;
//   };
// }

// function curry(fn) {
//   let helper = (...arg1) => {
//     let result = [...arg1];
//     if (result.length >= fn.length) {
//       return fn(...result);
//     }

//     let repeat = (...args2) => {
//       result = [...result, ...args2];
//       return result;
//     };
//     return repeat;
//   };
//   return helper;
// }

// Async programming

// function exec1(cb) {
//   console.log("x"); // api call
//   cb("done");
// }

// function callback() {
//   exec1((data) => {
//     console.log(data);
//     exec1((da) => {
//       console.log(da);
//       exec1((d) => {
//         console.log(d);
//       });
//     });
//   });
// }

// callback();

// callbacks
// settimeout
// promises
// async/await
