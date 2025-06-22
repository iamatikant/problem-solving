/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const map = new Map();
  map.set(n, true);
  const findSum = (num) => {
    let sum = 0;
    while (num >= 1) {
      const digit = num % 10;
      num = Math.floor(num / 10);
      sum = sum + Math.pow(digit, 2);
    }

    return sum;
  };

  while (n > 9) {
    const sum = findSum(n);
    if (map.get(sum)) {
      return false;
    }
    map.set(sum, true);
    n = sum;
  }

  if (n === 1) {
    return true;
  }

  return false;
};

console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(1));
console.log(isHappy(2));
console.log(isHappy(4));
console.log(isHappy(6));
console.log(isHappy(7));

const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve("exec"), 100);
});

function withTimeout(promise, delay) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject("Timeout happened");
    }, delay);

    Promise.resolve(promise)
      .then((val) => {
        clearTimeout(timeoutId);
        resolve(val);
      })
      .catch((err) => {
        clearTimeout(timeoutId);
        reject(err);
      });
  });
}

// Proper usage
withTimeout(promise1, 50).then(console.log).catch(console.error); // => "Timeout happened"
