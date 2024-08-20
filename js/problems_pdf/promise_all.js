// Promise.all() polyfill According to MDN –
// After reading the definition of Promise.all() we can break down the problem in sub-problem and tackle it one by one.
// ● It will return a promise.
// ● The promise will resolve with the result of all the passed
// promises or reject with the error message of the first failed
// promise.
// ● The results are returned in the same order as the promises are in
// the given array.

const myPromiseAll = (allPromises) => {
  return new Promise((resolve, reject) => {
    const accumulatedResponse = [];
    for (let i = 0; i < allPromises.length; i++) {
      const currentPromise = allPromises[i];
      currentPromise
        .then((data) => {
          if (data) {
            accumulatedResponse.push(data);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
    resolve(accumulatedResponse);
  });
};

// Input:
function task(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}
const taskList = [task(1000), task(5000), task(3000)];
//run promise.all
myPromiseAll(taskList)
  .then((results) => {
    console.log("got results", results);
  })
  .catch(console.error);
// Output:
//"got results" [1000,5000,3000]
