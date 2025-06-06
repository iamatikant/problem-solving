// function sum(a, b, c, d) {
//     return a + b + c + d;
//   }

//   let curriedSum = curry(sum);

//   console.log(curriedSum(1,2,3,4,5)); // 10
//   console.log(curriedSum(1)(2,3)(4,5)); // 10
//   console.log(curriedSum(1)(2)(3)(4)); // 10

function curry(fn) {
  let result = 0;
  return (...args) => {
    result += fn(...args);

    return result;
  };
}
