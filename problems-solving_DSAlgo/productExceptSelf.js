// var productExceptSelf = function (nums) {
//   const leftArr = [];
//   const rightArr = [];
//   let result = [];
//   let product = 1;
//   for (let i = 0; i < nums.length; i++) {
//     product = product * nums[i];
//     leftArr.push(product);
//   }
//   product = 1;
//   for (let i = nums.length - 1; i >= 0; i--) {
//     product = product * nums[i];
//     rightArr.push(product);
//   }

//   rightArr.reverse();

//   for (let i = 0; i < nums.length; i++) {
//     result[i] = (leftArr[i - 1] ?? 1) * (rightArr[i + 1] ?? 1);
//   }

//   return result;
// };

var productExceptSelf = function (nums) {
  let prefix = 1,
    suffix = 1;
  let res = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    res[i] *= prefix;
    prefix *= nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= suffix;
    suffix *= nums[i];
  }
  return res;
};

console.log(productExceptSelf([1, 2, 3, 4]));
