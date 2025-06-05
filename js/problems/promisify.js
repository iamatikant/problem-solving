export default function promisify(func) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      const callback = (err, value) => {
        if (err) {
          reject(err);
        } else {
          resolve(value);
        }
      };
      func(this, ...args, callback);
    });
  };
}
