function sum(a, b, c, d) {
  return a + b + c + d;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3, 4, 5)); // 10
console.log(curriedSum(1)(2, 3)(4, 5)); // 10
console.log(curriedSum(1)(2)(3)(4)); // 10

function curry() {
  return (...args1) => {
    let result = [...args1];
    let total = 0;
    if (!result.length) {
      total = result.reduce((prev, next) => prev + next, 0);
    }
    const helper = (...args2) => {
      result = [...result, ...args2];
      if (!result.length) {
        return total;
      }
      total = result.reduce((prev, next) => prev + next, 0);
    };
    return helper;
  };
}
