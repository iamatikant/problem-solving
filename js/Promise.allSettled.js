// Promise.allSettled() takes an iterable of promises and returns a single promise that resolves when all input promises have settled (either fulfilled or rejected), regardless of their outcome.

// Key Characteristics:
// Never rejects - It always resolves with an array of results
// Waits for all promises - Unlike Promise.all(), it doesn't short-circuit on the first rejection
// Returns result objects - Each result has a status and either a value or reason
// Return Format:
// Each result object has:

// status: Either "fulfilled" or "rejected"
// value: The fulfilled value (if status is "fulfilled")
// reason: The rejection reason (if status is "rejected")
// Example:
// Use Cases:
// When you need results from all promises, even if some fail
// Batch operations where partial success is acceptable
// Collecting both successful and failed operations for reporting

// const promises = [
//   Promise.resolve(1),
//   Promise.reject('error'),
//   Promise.resolve(3)
// ];

// Promise.allSettled(promises).then(results => {
//   console.log(results);
//   // Output:
//   // [
//   //   { status: 'fulfilled', value: 1 },
//   //   { status: 'rejected', reason: 'error' },
//   //   { status: 'fulfilled', value: 3 }
//   // ]
// });

// const promises = [p1, p2, p3, 2, 5, 9]; || [] || without any arguments || [null, undefined] ||

function settledAllPromise(promises) {
  const result = [];

  return new Promise((resolve) => {
    if (!promises || promises.length === 0) {
      resolve({ value: 'No promise to resolve' });
    }
    let numberOfResolvedPromise = 0;
    for (let i = 0; i < promises.length; i++) {
      const currentPromise = promises[i];
      Promise.resolve(currentPromise)
        .then((data) => {
          result[i] = { value: data, status: 'fulfilled' };
          numberOfResolvedPromise += 1;
        })
        .catch((err) => {
          result[i] = { status: 'rejected', reason: err };
          numberOfResolvedPromise += 1;
        })
        .finally(() => {
          if (numberOfResolvedPromise === promises.length) {
            resolve(result);
          }
        });
    }
  });
}
