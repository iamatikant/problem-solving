console.log(add(2)(3)); // 5
console.log(add(2, 3)); //5

function add(...args) {
  if (args.length >= 2) {
    return args.reduce((prev, curr) => prev + curr, 0);
  }

  return (...arg) => add(...args, ...arg);
}
