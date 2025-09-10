// const  join = (a, b, c) => {
//    return `${a}_${b}_${c}`
// }
// const curriedJoin = curry(join)
// const _ = curry.placeholder
// curriedJoin(1, 2, 3) // '1_2_3'
// curriedJoin(_, 2)(1, 3) // '1_2_3'
// curriedJoin(_, _, _)(1)(_, 3)(2) // '1_2_3'

// This is a JavaScript coding problem from BFE.dev

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  // your code here
  const curried = (...args) => {
    const params = args
      .filter((arg) => arg !== curry.placeholder)
      .sort((a, b) => a - b);
    if (params.length >= fn.length) {
      return fn(...params);
    }

    return (...arg) => {
      // const params = args.filter((arg) => arg !== curry.placeholder);
      return curried(...args, ...arg);
    };
  };

  return curried;
}

curry.placeholder = Symbol();

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};
const curriedJoin = curry(join);
const _ = curry.placeholder;
// console.log(curriedJoin(1, 2, 3)) // '1_2_3'
// console.log(curriedJoin(_, 2)(1, 3)) // '1_2_3'
// console.log(curriedJoin(_, _, _)(1)(_, 3)(2)) // '1_2_3'
console.log(curriedJoin(_, _, 3, 4)(1, _)(2, 5)); // '1_2_3'
