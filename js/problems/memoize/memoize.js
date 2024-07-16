function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  return factorial(n - 1) * n;
}

function memoize(func) {
  const memory = new Map();
  return (num) => {
    if (!memory.get(num)) {
      const result = func(num);
      memory.set(num, result);
      return result;
    } else {
      return memory.get(num);
    }
  };
}

const memoizedFactorial = memoize(factorial);
let a = memoizedFactorial(150); // slow
console.log(a);

let b = memoizedFactorial(150); // faster
console.log(b);
