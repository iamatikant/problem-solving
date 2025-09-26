// 658. Find K Closest Elements
// Medium
// Topics
// premium lock icon
// Companies
// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

// An integer a is closer to x than an integer b if:

// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b

// Example 1:

// Input: arr = [1,2,3,4,5], k = 4, x = 3

// Output: [1,2,3,4]

// Example 2:

// Input: arr = [1,1,2,3,4,5], k = 4, x = -1

// Output: [1,1,2,3]

// Constraints:

// 1 <= k <= arr.length
// 1 <= arr.length <= 104
// arr is sorted in ascending order.
// -104 <= arr[i], x <= 104

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

function findLowerBound(arr, x) {
  let left = 0,
    right = arr.length - 1;
  let ans = arr.length; // Default if x is larger than all elements
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] >= x) {
      ans = mid; // This is a potential answer, try to find a better one to the left
      right = mid - 1;
    } else {
      left = mid + 1; // Need to look right
    }
  }
  return ans;
}

var findClosestElements = function (arr, k, x) {
  let left = findLowerBound(arr, x);
  let right = left + 1;
  const result = [];
  while (result.length < k) {
    const distLeft = left >= 0 ? x - arr[left] : Infinity;
    const distRight = right < arr.length ? arr[right] - x : Infinity;

    if (distLeft <= distRight) {
      result.unshift(arr[left]);
      left--;
    } else {
      result.push(arr[right]);
      right++;
    }
  }

  return result;
};

const arr = [1, 1, 2, 3, 4, 5],
  k = 4,
  x = -1;

console.log(findClosestElements(arr, k, x));
