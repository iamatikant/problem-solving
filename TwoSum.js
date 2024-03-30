var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++) {
      const current = nums[i];
      let required = target-current;
      const index = nums.lastIndexOf(required);
      if(index !== -1 && index !== i) {
        return [i, index];
      }
    }
    return 'NOT FOUND';
};


console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));