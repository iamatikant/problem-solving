// JS Problem 2: Promise.pool(functions, limit)
// Task:

// Implement a function promisePool(functions, n) that takes an array of functions functions (each returning a promise) and a concurrency limit, n. The function should execute the promises in parallel, but with a constraint that no more than n promises are ever pending at the same time.

// It should return a promise that resolves with an array of the results from all the functions' promises, maintaining the original order.

// Example Usage:

// JavaScript
// const sleep = (t) => new Promise(res => setTimeout(res, t));

// const functions = [
//   () => sleep(300).then(() => 1),
//   () => sleep(400).then(() => 2),
//   () => sleep(200).then(() => 3),
//   () => sleep(100).then(() => 4),
//   () => sleep(100).then(() => 5)
// ];

// const pool = promisePool(functions, 2); // Concurrency limit of 2

// pool.then(results => {
//   console.log(results); // Expected output: [1, 2, 3, 4, 5] (after ~600ms)
// });
// Explanation of the example:

// Function 1 (300ms) and Function 2 (400ms) start immediately.

// After 200ms, nothing has finished.

// After 300ms, Function 1 finishes. The pool now has space, so Function 3 (200ms) starts.

// At 400ms, Function 2 finishes. The pool has space, so Function 4 (100ms) starts.

// At 500ms (300+200), Function 3 finishes. The pool has space, so Function 5 (100ms) starts.

// At 500ms (400+100), Function 4 finishes.

// At 600ms (500+100), Function 5 finishes. All done.

// Thinking Prompt:

// You have an array of functions to execute.

// You need to keep track of how many are currently running.

// When one finishes, you need to start the next available one.

// This suggests a producer/consumer pattern. How can you manage this? Recursion is a very elegant way to solve this. Think about a function that "pulls" the next task from the array and runs it. When that task finishes, it calls itself again to pull the next one.

// const sleep = (t) => new Promise(res => setTimeout(res, t));

function promisePool(iterable, limit) {
  if (!iterable || iterable.length === 0) {
    return Promise.reject('No input params');
  }
  if (!limit || limit < 0) {
    return Promise.reject('invalid limit');
  }
  return new Promise((resolve, reject) => {
    let index = 0;
    let totalExecution = 0;
    const result = Array.from({ length: iterable.length }).fill(false);

    const runNext = (promiseItem, count) => {
      index++;
      promiseItem()
        .then((data) => {
          result[count] = data;
        })
        .catch((err) => {
          result[count] = err;
        })
        .finally(() => {
          totalExecution++;
          if (totalExecution === iterable.length) {
            resolve(result);
          }
          if (index < iterable.length) {
            runNext(iterable[index], index);
          }
        });
    };

    for (let i = 0; i < limit; i++) {
      runNext(iterable[i], i);
    }
  });
}

const sleep = (t) => new Promise((res) => setTimeout(res, t));
const functions = [
  () =>
    sleep(300).then(() => {
      console.log('1 executing: ');
      return 1;
    }),
  () =>
    sleep(4000).then(() => {
      console.log('2 executing: ');
      return 2;
    }),
  () => sleep(2000).then(() => 3),
  () => sleep(1000).then(() => 4),
  () =>
    sleep(1000).then(() => {
      console.log('5 executing: ');
      return 5;
    }),
];

const pool = promisePool(functions, 2); // Concurrency limit of 2

pool.then((results) => {
  console.log(results); // Expected output: [1, 2, 3, 4, 5] (after ~4000ms)
});
