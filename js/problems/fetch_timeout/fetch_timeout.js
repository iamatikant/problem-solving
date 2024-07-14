/* fetchWithTimeout('https://jsonplaceholder.typicode.com/todos/1', 100).then((resp) => {
  console.log(resp);
}).catch((error) => {
  console.error(error);
}); */

// Aborted
// error

// <------ fist attempt ---->

// const fetchWithTimeout = (url, time) => {
//   const timeNow = Date.now();
//   return new Promise((resolve, reject) => {
//     let currentTime = Date.now();
//     const interval = setInterval(() => {
//       currentTime = Date.now();
//       if (currentTime - timeNow >= time) {
//         clearInterval(interval);
//         return reject();
//       }
//     }, 1);
//     resolve(async () => {
//       const data = await fetch(url);
//       clearInterval(interval);
//       return data;
//     });
//     reject(() => {
//       clearInterval(interval);
//       return new Error();
//     });
//   });
// };

// Working version 1

// const fetchWithTimeout = (url, time) => {
//   const timeNow = Date.now();
//   return new Promise((resolve, reject) => {
//     const responseData = fetch(url)
//       .then((data) => resolve(data))
//       .catch((error) => reject(error));

//     const interval = setInterval(() => {
//       const currentTime = Date.now();
//       if (currentTime - timeNow >= time) {
//         clearInterval(interval);
//         console.log("this is being rejected");
//         reject(new Error("Request time out"));
//       }
//     }, 1);

//     responseData.finally(() => clearInterval(interval));
//   });
// };

// Working version 2 best code

// const fetchWithTimeout = (url, time) => {
//   return new Promise((resolve, reject) => {
//     const timeOut = setTimeout(() => {
//       console.log("this is being timeout");
//       reject(new Error("Req time out"));
//     }, time);

//     fetch(url)
//       .then((data) => {
//         clearTimeout(timeOut);
//         resolve(data);
//       })
//       .catch((error) => {
//         clearTimeout(timeOut);
//         reject(error);
//       });
//   });
// };

// using AbortController class

const fetchWithTimeout = (url, duration) => {
  return new Promise((resolve, reject) => {
    const controller = new AbortController();
    const signal = controller.signal;
    let timerid = null;

    fetch(url, { signal })
      .then((resp) => {
        resp
          .json()
          .then((e) => {
            clearTimeout(timerid);
            resolve(e);
          })
          .catch((error) => {
            reject(error);
          });
      })
      .catch((error) => {
        reject(error);
      });

    timerid = setTimeout(() => {
      console.log("Aborted");
      controller.abort();
    }, duration);
  });
};

fetchWithTimeout("https://jsonplaceholder.typicode.com/todos/1", 100)
  .then((resp) => {
    console.log(resp);
  })
  .catch((error) => {
    console.error(error);
  });
