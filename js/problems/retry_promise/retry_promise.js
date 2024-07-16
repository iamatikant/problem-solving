// Implement a function in JavaScript that retries promises N number of times
// with a delay between each call.

//This question was asked in Google's frontend interview.

// theoretical example
// Input:
// retry(asyncFn, retries = 3, delay = 50, finalError = 'Failed');

// Output:
// ... attempt 1 -> failed
// ... attempt 2 -> retry after 50ms -> failed
// ... attempt 3 -> retry after 50ms -> failed
// ... Failed.

//Example
// Input:
// // Test function
const getTestFunc = () => {
  let callCounter = 0;
  return async () => {
    callCounter += 1;
    // if called less than 5 times
    // throw error
    if (callCounter < 5) {
      throw new Error("Not yet");
    }
  };
};

// // Test the code
const test = async () => {
  await retryWithDelay(getTestFunc(), 10);
  console.log("success");
  await retryWithDelay(getTestFunc(), 3);
  console.log("will fail before getting here");
};

// // Print the result
// test().catch(console.error);

// Output:
// "success" // 1st test
// "Retry failed" //2nd test

// function retry(asyncFn, retries, delay, finalError) {
//   let numberOfFunctionCalls = 0;
//   let success = false;
//   const timeOut = setInterval(() => {
//     if (success) {
//       clearInterval(timeOut);
//     }
//     if (numberOfFunctionCalls <= retries && !success) {
//       numberOfFunctionCalls += 1;
//       asyncFn()
//         .then((data) => {
//           success = true;
//           console.log(numberOfFunctionCalls, " attempt succeeded.");
//         })
//         .catch((err) => {
//           console.log(numberOfFunctionCalls, ": attempt failed");
//           console.log(err);
//         });
//     }
//     if (numberOfFunctionCalls === retries) {
//       return finalError;
//     }
//   }, delay);
// }

// async function retry(asyncFn, retries, delay, finalError) {
//   try {
//     const data = await asyncFn();
//     return Promise.resolve(data);
//   } catch (error) {
//     console.log(error);
//     retries -= 1;
//     if (retries === 0) {
//       return Promise.reject(finalError);
//     }
//     await wait(delay);
//     return await retry(asyncFn, retries, delay, finalError);
//   }
// }

// function wait(delay) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, delay);
//   });
// }

async function retry(asyncFn, retries, delay, finalError) {
  try {
    const data = await asyncFn();
    return data;
  } catch (err) {
    console.log(err);
    retries -= 1;
    if (retries === 0) {
      return finalError;
    }
    await wait(delay);
    return await retry(asyncFn, retries, delay, finalError);
  }
}

async function wait(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
