// 42. Trapping Rain Water
// Hard
// Topics
// premium lock icon
// Companies
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example 1:

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

// Constraints:

// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105

// Math.min(prevMax, nextMax) - height[i];

var trap = function (height) {
  const maxLeftHeight = [];
  const maxRightHeight = new Array({ length: height.length }).fill(0);
  let maxUntilNow = 0;
  let result = 0;

  for (const bar of height) {
    maxUntilNow = Math.max(maxUntilNow, bar);
    maxLeftHeight.push(maxUntilNow);
  }

  maxUntilNow = 0;

  for (let i = height.length - 1; i >= 0; i--) {
    maxUntilNow = Math.max(maxUntilNow, height[i]);
    maxRightHeight[i] = maxUntilNow;
  }

  for (let i = 0; i < height.length; i++) {
    const maxFromLeft = maxLeftHeight[i];
    const maxFromRight = maxRightHeight[i];
    const waterStored = Math.min(maxFromLeft, maxFromRight) - height[i];
    result = result + (waterStored > 0 ? waterStored : 0);
  }

  return result;
};

// const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const height = [4, 2, 0, 3, 2, 5];
console.log(trap(height));
