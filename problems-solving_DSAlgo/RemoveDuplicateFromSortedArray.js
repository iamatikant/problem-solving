var removeDuplicates = function(nums) {
  // return [...new Set(nums)];
  return nums.filter((a, b) => {
    if(a !== b) {
      return a, b;
    }
  });
}


console.log(removeDuplicates([1,1,2]));
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));