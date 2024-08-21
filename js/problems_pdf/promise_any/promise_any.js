// Promise.any() Polyfill According to MDN –
// In simple terms Promise.any() is just opposite of Promise.all().
// Reading the definition we can break the problem statement into multiple sub-problems and then tackle them individually to implement the polyfill.
// ● Function takes an array of promises as input and returns a new promise.
// ● The returned promise is resolved as soon as any of the input promises resolves.
// ● Else if all of the input promises are rejected then the returned promise is rejected with the array of all the input promises reasons.
// Implementation
// Definition
// Promise.any() takes an iterable of Promise objects. It returns a single
// promise that fulfills as soon as any of the promises in the iterable
// fulfills, with the value of the fulfilled promise. If no promises in the
// iterable fulfill (if all of the given promises are rejected), then the
// returned promise is rejected with an AggregateError, a new subclass of
// Error that groups together individual errors.

// const any = function(promisesArray) {
//   const promiseErrors = new Array(promisesArray.length);
//   let counter = 0;
//   //return a new promise
//   return new Promise((resolve, reject) => {
//       promisesArray.forEach((promise) => {
//       Promise.resolve(promise)
//       .then(resolve) // resolve, when any of the input promise resolves
// © JavaScript Interview Guide | learnersbucket.com 43
