function arrayReachableEnd(numbers) {
  let length = numbers.length - 1;
  let maxIndex = 0;
  let currentIndex = 0;
  for (let i = 0; i <= length; i++) {
    if (i > maxIndex) {
      return false;
    }
    currentIndex = i + numbers[i];
    maxIndex = currentIndex > maxIndex ? currentIndex : maxIndex;
    if (maxIndex >= length) {
      return true;
    }
  }
  return false;
}

console.log(arrayReachableEnd([3, 2, 1, 0, 4])); // false
console.log(arrayReachableEnd([2, 3, 1, 1, 4])); // true
console.log(arrayReachableEnd([2, 0, 0])); // true
console.log(arrayReachableEnd([0, 0, 0])); // false
console.log(arrayReachableEnd([1, 2, 3])); // true
console.log(arrayReachableEnd([1, 2, 3, 4])); // true
console.log(arrayReachableEnd([1, 2, 3, 4, 5])); // true
console.log(arrayReachableEnd([1, 2, 3, 4, 5, 6])); // true
