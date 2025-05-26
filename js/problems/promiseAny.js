// // Note: If you haven't completed the Promise.all question, you should attempt that first.

// // Promise.any() takes an iterable of elements (usually Promises). It returns a single promise that resolves as soon as any of the elements in the iterable fulfills, with the value of the fulfilled promise. If no promises in the iterable fulfill (if all of the given elements are rejected), then the returned promise is rejected with an AggregateError, a new subclass of Error that groups together individual errors.

// // If an empty iterable is passed, then the promise returned by this method is rejected synchronously. The rejected reason is an AggregateError object whose errors property is an empty array.

// // Source: Promise.any() - JavaScript | MDN

// // Let's implement our own version of Promise.any(), a promiseAny function, with the difference being the function takes in an array instead of an iterable and AggregateErrors returned just have to return an array of error reasons, the message doesn't have to be set. Refer to the AggregateError constructor examples on MDN.

// // Be sure to read the description carefully and implement accordingly!

// function promiseAny(iterable) {
//   if (!iterable.length) {
//     return new AggregateError();
//   }
//   let flag = false;
//   return new Promise((resolve, reject) => {
//     for (let i = 0; i < iterable.length; i++) {
//       const current = iterable[i];
//       current.then((data) => resolve(data));
//     }
//     reject(new AggregateError());
//   });
// }

export default function promiseAny(iterable) {
  let cachedException = [];
  let count = 0;
  if (iterable.length < 1) {
    return Promise.reject(new AggregateError([], "Empty array"));
  }
  return new Promise((resolve, reject) => {
    for (let i = 0; i < iterable.length; i++) {
      const currentPromise = iterable[i];
      Promise.resolve(currentPromise)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          cachedException[i] = err;
          count++;
          if (count === iterable.length) {
            reject(
              new AggregateError(cachedException, "All promises rejected")
            );
          }
        });
    }
  });
}
