// Promise.all() polyfill According to MDN –
// After reading the definition of Promise.all() we can break down the problem in sub-problem and tackle it one by one.
// ● It will return a promise.
// ● The promise will resolve with the result of all the passed
// promises or reject with the error message of the first failed
// promise.
// ● The results are returned in the same order as the promises are in
// the given array.

// const myPromiseAll = (allPromises) => {
//   return new Promise((resolve, reject) => {
//     const accumulatedResponse = [];
//     for (let i = 0; i < allPromises.length; i++) {
//       const currentPromise = allPromises[i];
//       currentPromise
//         .then((data) => {
//           if (data) {
//             accumulatedResponse.push(data);
//           }
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     }
//     resolve(accumulatedResponse);
//   });
// };

const myPromiseAll = function (taskList) {
  //to store results
  const results = [];
  //to track how many promises have completed
  let promisesCompleted = 0;
  // return new promise
  return new Promise((resolve, reject) => {
    taskList.forEach((promise, index) => {
      //if promise passes
      promise
        .then((val) => {
          //store its outcome and increment the count
          results[index] = val;
          promisesCompleted += 1;
          //if all the promises are completed,
          //resolve and return the result
          if (promisesCompleted === taskList.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};
//if any promise fails, reject.

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
