/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const map = new Map();
  map.set(0, 1);
  let sum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    sum += current;
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  sum = 0;
  for (let num of nums) {
    sum += num;
    let required = sum - k;
    if (map.get(required)) {
      count += map.get(required);
    }
  }

  return count;
};

// var subarraySum = function (nums, k) {
//   let sum = 0;
//   let count = 0;
//   let map = { 0: 1 };
//   for (let num of nums) {
//     sum += num;
//     if (map[sum - k] !== undefined) {
//       count += map[sum - k];
//     }
//     map[sum] = (map[sum] || 0) + 1;
//   }
//   return count;
// };

// console.log(subarraySum([1, 2, 3], 3));
// console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 1, 2, 1], 3));
