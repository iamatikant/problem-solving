// const call = cachedApiCall(1500);

// first call
// an API call will be made and its response will be cached
// call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
//   console.log(a)
// );
//"making new api call"
/*
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
*/

// cached response will be returned
// it will be quick
// setTimeout(() => {
//   call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log(a));
// }, 700);
/*
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
*/

// a fresh API call is made
// as time for cached entry is expired
// setTimeout(() => {
//   call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log(a));
// }, 2000);
//"making new api call"
/*
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
*/

const call = cachedApiCall(1500);

// first call
// an API call will be made and its response will be cached
call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
  console.log("this is first call: ", a)
);

setTimeout(() => {
  call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
    console.log(a)
  );
}, 700);

setTimeout(() => {
  call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
    console.log(a)
  );
}, 2000);

//"making new api call"
/*
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
*/

function cachedApiCall(time) {
  const cachedData = new Map();
  return (url, options) => {
    return new Promise((resolve, reject) => {
      const entry = cachedData.get(url);
      if (entry && Date.now() < entry.timeLimit) {
        resolve(entry.data);
      } else {
        fetch(url, { ...options })
          .then((data) => {
            data.json().then((data) => {
              cachedData.set(url, { data, timeLimit: Date.now() + time });
              resolve(data);
            });
          })
          .catch((error) => reject(error));
      }
    });
  };
}

// cachedData = {
//   url: {
//     data,
//     timeLimit: Date.now(),
//   },
// };
