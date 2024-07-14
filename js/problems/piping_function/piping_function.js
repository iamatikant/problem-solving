const pipe =
  (test) =>
  (...args) => {
    const recursion = (obj) => {
      for (const key in obj) {
        const value = obj[key];
        if (typeof value === "function") {
          obj[key] = value(...args);
        } else if (typeof value === "object" && !Array.isArray(value)) {
          recursion(value);
        }
      }
    };
    recursion(test);
    return test;
  };

let test = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  d: (a, b, c) => a - b - c,
  e: 1,
  f: true,
};

console.log(pipe(test)(1, 1, 1));

// Output:
// {
//   "a": {
//     "b": 3,
//     "c": 1
//   },
//   "d": -1,
//   "e": 1,
//   "f": true
// }

// function pipe(test) {
//   return function(...args) {

//   }
// }
