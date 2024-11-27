// 11. Container With Most Water
// Medium
// Topics
// Companies
// Hint
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let length = height.length - 1;
  let result = 0;
  let currContent = 0;
  while (left < right) {
    const minValue = Math.min(height[left], height[right]);
    currContent = minValue * length;
    result = Math.max(result, currContent);
    if (height[right] > height[left]) {
      left += 1;
      length -= 1;
    } else if (height[left] > height[right]) {
      right -= 1;
      length--;
    } else {
      length -= 2;
      right -= 1;
      left += 1;
    }
  }
  return result;
};

let height = [1, 8, 6, 2, 100, 100, 5, 4, 8, 3, 7];
let hei = [1, 1];

console.log(maxArea(hei));
