/**
 * 
 * 
 * Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

Follow-up: Could you solve the problem in linear time and in O(1) space?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  //My code
    // const targetOccurrence = nums.length / 2;
    // if(nums.length <= 1) {
    //   return nums[0];
    // }
    // const dummy = {};
    // for(let num of nums) {
    //   if(dummy[num] === undefined) {
    //     dummy[num] = 1;
    //   } else {
    //     dummy[num] = dummy[num] + 1;
    //     if(dummy[num] > targetOccurrence) {
    //       return num;
    //     }
    //   }
    // }
    // Sample
    debugger;
    let candidate = nums[0]
    let counter = 1
    for(let i = 1 ; i < nums.length ; i++) {
        if(nums[i] === candidate) {
            counter += 1
        } else {
            counter -= 1
            if(counter === 0) {
                candidate = nums[i]
                counter = 1
            }
        }
    }
    return candidate
};


console.log(majorityElement([2,2,1,1,1,2,2]));