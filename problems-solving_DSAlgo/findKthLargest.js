// 215. Kth Largest Element in an Array
// Medium
// Topics
// Companies
// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

// Constraints:

// 1 <= k <= nums.length <= 105
// -104 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const heap = nums.slice(0, k);
  let min = Math.min(...heap);
  for (let i = k; i < nums.length; i++) {
    if (nums[i] > min) {
      let index = heap.indexOf(min);
      heap[index] = nums[i];
      min = Math.min(...heap);
    }
  }
  return Math.min(...heap);
};

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
let k = 4;

const nums1 = [3, 2, 1, 5, 6, 4];
let k1 = 2;
console.log(findKthLargest(nums1, k1));
