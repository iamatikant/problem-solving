// Input: arr = [1,2,2,6,6,6,6,7,10]
// Output: 6

// Input: arr = [1,1]
// Output: 1


// const findSpecialInteger = (arr) => {
//   let result = 0;
//   // if(arr.length === 1) {
//   //   return arr[0];
//   // }
//     const occurrence = {};
//     for(const element of arr) {
//       if(occurrence[element]) {
//         occurrence[element]++;
//         if(occurrence[element] >= Math.floor(0.25 * arr.length)) {
//           result = element;
//           result = element > result ? element : result;
//         }
//       } else {
//         occurrence[element] = 1;
//         result = element;
//       }
//     };
//     return result;
// };


// console.log(findSpecialInteger([1,2,2,1,1,1,1,7,10]));
// console.log(findSpecialInteger([1]));


var findSpecialInteger = function(arr) {
  let curNum = arr[0]
  for(let i = 1, curCount = 1, threshold = arr.length/4; i < arr.length; i++){
      if(arr[i] === curNum){
          curCount++;
          if(curCount > threshold) break;
      }else{
          curCount=1;
          curNum = arr[i];
      }
  }
  return curNum
};

// console.log(findSpecialInteger([1,2,2,1,1,1,1,7,10]));
console.log(findSpecialInteger([1,1,1,2,2,2,2,3]));