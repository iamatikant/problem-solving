function curry(func) {
  const len = func.length;
  let result = [];
  const helper = (...args) => {
    result = [...result, ...args];
    if (result.length >= len) {
      const result2 = func.call(this, ...result);
      result = [];
      return result2;
    } else {
      return helper;
    }
  };
  return helper;
}

function add(a, b) {
  return a + b;
}

const curriedAdd = curry(add);
console.log(curriedAdd(3)(4)); // 7

const alreadyAddedThree = curriedAdd(3);
console.log(alreadyAddedThree(4)); // 7
