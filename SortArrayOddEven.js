const getSortedNumbers = (nums) => {
  nums = nums.sort((a, b) => a - b);
  for(let i = 0; i<nums.length-1; i+=2) {
    let a = nums[i];
    let b = nums[i+1];
    nums[i+1] = a;
    nums[i] = b;
  }
  return nums;
}

var sortArrayByParityII = function(nums) {
  let minNumber = Math.min(...nums);
  return minNumber % 2 === 0 ? nums.sort((a, b) => a - b) : getSortedNumbers(nums);
};

console.log(sortArrayByParityII([4,3,8,7,6,9,10,5]))

console.log(sortArrayByParityII([4,3]))

// Input: nums = [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.


// Input: nums = [2,3]
// Output: [2,3]