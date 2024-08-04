// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

const nums = [2, 2, 1];
const nums2 = [1];

var singleNumber = function (nums) {
  const obj = {};
  for (const element of nums) {
    if (obj[element]) {
      obj[element] = obj[element] + 1;
    } else {
      obj[element] = 1;
    }
  }
  for (const element in obj) {
    if (obj[element] === 1) {
      return element;
    }
  }
};

console.log(singleNumber(nums));
console.log(singleNumber(nums2));
