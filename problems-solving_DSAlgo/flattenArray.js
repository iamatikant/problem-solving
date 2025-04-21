// let result = [];
// const flattenArray = (nums) => {
//   for (let i = 0; i < nums.length; i++) {
//     if (!Array.isArray(nums[i])) {
//       result.push(nums[i]);
//     } else {
//       flattenArray(nums[i]);
//     }
//   }
//   return result;
// };

// const nums = [1, 2, 3, [4, 5], [6, 7, [8, 9], 10], 11];
// console.log(flattenArray(nums));

// const flattenArray = (array) => {
//   let result = [];
//   const helper = (args) => {
//     for (let element of args) {
//       if (Array.isArray(element)) {
//         helper(element);
//       } else {
//         result.push(element);
//       }
//     }
//   };
//   helper(array);
//   return result;
// };

// console.log(
//   flattenArray([
//     [[1, [1.1]], 2, 3],
//     [4, 5],
//   ])
// );

function flatten(value) {
  return value.reduce((acc, curr) => {
    console.log("acc: ", acc, " current : ", curr);
    if (Array.isArray(curr)) {
      return [...acc, ...curr];
    } else {
      return [...acc, curr];
    }
  }, []);
}

console.log(flatten([1, [2, 3, [4, 5]]]));
