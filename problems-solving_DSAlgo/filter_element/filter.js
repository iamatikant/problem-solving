const test = [1, 2, 2, 3, 3, 4, 5, 6];
// const test = [1, 1, 2];

// op: [1,2,3,4,5,6,0,0], 6

var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const next = nums[i + 1];
    if (next === curr) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
  return nums;
};
// function filter(arr) {

// }

console.log(removeDuplicates(test));
