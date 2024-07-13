/* fetchWithTimeout('https://jsonplaceholder.typicode.com/todos/1', 100).then((resp) => {
  console.log(resp);
}).catch((error) => {
  console.error(error);
}); */

// Aborted
// error

const fetchWithTimeout = (url, time) => {
  const timeNow = Date.now();
  return new Promise((response, reject) => {
    let currentTime = Date.now();
    const interval = setInterval(() => {
      currentTime = Date.now();
      if (currentTime - timeNow >= time) {
        clearInterval(interval);
        return reject();
      }
    }, 1);
    response(async () => {
      const data = fetch(url);
      return data;
    });
    reject(() => {
      return new Error();
    });
  });
};

fetchWithTimeout("https://jsonplaceholder.typicode.com/todos/1", 100)
  .then((resp) => {
    console.log(resp);
  })
  .catch((error) => {
    console.error(error);
  });
