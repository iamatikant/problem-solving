// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
//this is nothing. I could not get much time today.

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

var rotate = function (nums, k) {
  const resultArray = [];
  for (let i = 0; i < nums.length; i++) {
    let index = i + k;
    if (i + k > nums.length - 1) {
      index = (i + k) % nums.length;
    }
    resultArray[index] = nums[i];
  }
  return resultArray;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1, -100, 3, 99], 2));
