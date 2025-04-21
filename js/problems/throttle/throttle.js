// Throttling is a technique used to control how many times we allow a function to be executed over time. When a JavaScript function is said to be throttled with a wait time of X milliseconds, it can only be invoked at most once every X milliseconds. The callback is invoked immediately and cannot be invoked again for the rest of the wait duration.

// Implement a throttle function which accepts a callback function and a wait duration. Calling throttle() returns a function which throttled invocations of the callback function following the behavior described above.

// Examples
// let i = 0;
// function increment() {
//   i++;
// }
// const throttledIncrement = throttle(increment, 100);

// // t = 0: Call throttledIncrement(). i is now 1.
// throttledIncrement(); // i = 1

// // t = 50: Call throttledIncrement() again.
// //  i is still 1 because 100ms have not passed.
// throttledIncrement(); // i = 1

// // t = 101: Call throttledIncrement() again. i is now 2.
// //  i can be incremented because it has been more than 100ms
// //  since the last throttledIncrement() call at t = 0.
// throttledIncrement(); // i = 2
// Follow Up
// Throttle with cancel and leading/trailing options.

/**
 * @callback func
 * @param {number} wait
 * @return {Function}
 */
function throttle(func, wait) {
  let past = new Date().getTime();
  let count = true;
  return (...args) => {
    const now = new Date().getTime();
    console.log("now: ", now, "past: ", past);
    if (now - past >= wait) {
      past = now;
      func(...args);
      return;
    } else if (count) {
      count = false;
      func(...args);
      return;
    }
  };
}

let i = 0;
const increment = throttle(() => {
  i++;
}, 100);

console.log("i: ", i);
// expect(i).toBe(0);
increment();
console.log("i: ", i);
// expect(i).toBe(1);

setTimeout(() => {
  increment();
  console.log("i: ", i);
  // expect(i).toBe(1);
}, 25);

setTimeout(() => {
  increment();
  console.log("i: ", i);
  // expect(i).toBe(1);
  // done();
}, 50);
