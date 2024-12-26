// 84. Largest Rectangle in Histogram
// Hard
// Topics
// Companies
// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

// Example 1:

// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.
// Example 2:

// Input: heights = [2,4]
// Output: 4

// Constraints:

// 1 <= heights.length <= 105
// 0 <= heights[i] <= 104

/**
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleArea(heights) {
  const stack = []; // Stack to store indexes
  let maxArea = 0; // Variable to track the maximum area

  // Add a sentinel value (0 height) at the end to flush remaining heights in the stack
  heights.push(0);
  for (let i = 0; i < heights.length; i++) {
    // Ensure the stack remains monotonic (increasing heights)
    while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
      const height = heights[stack.pop()]; // Height of the bar
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1; // Calculate width
      maxArea = Math.max(maxArea, height * width); // Update max area
    }
    stack.push(i); // Push the current index onto the stack
  }

  // Remove the sentinel value
  heights.pop();

  return maxArea;
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
