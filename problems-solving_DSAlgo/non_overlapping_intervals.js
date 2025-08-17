// DSA Problem: Non-overlapping Intervals
// Problem Statement:

// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

// Example 1:

// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]

// Output: 1

// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

// Example 2:

// Input: intervals = [[1,2],[1,2],[1,2]]

// Output: 2

// Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.

// Example 3:

// Input: intervals = [[1,2],[2,3]]

// Output: 0

// Explanation: They are already non-overlapping.

// Constraints:

// 1 <= intervals.length <= 10^5

// intervals[i].length == 2

// -5 * 10^4 <= starti < endi <= 5 * 10^4

// Thinking Prompt & Hints:

// Sorting: Just like with "Merge Intervals," this problem is very difficult without sorting first. What should you sort by? Start time? End time? Try thinking through a small example for both and see which one seems to give you more useful information.

// Greedy Choice: After sorting, you'll iterate through the intervals. You'll need to keep track of the "previous" or "last valid" interval. When you look at the current interval, you have a decision to make:

// If current does not overlap with previous: This is great! You can keep current and it now becomes your new previous.

// If current does overlap with previous: You must remove one of them. Which one is the "better" one to remove to maximize the chances of the remaining intervals not overlapping? Should you remove previous or current? (Hint: Think about their end times. Which choice leaves more "room" for future intervals?)

// This problem is all about making the right greedy choice when an overlap occurs.

var nonOverlapping = function (intervals) {
  if (intervals.length <= 1) {
    return 0;
  }

  let count = 0;
  let i = 1;
  let lastIntervalEnd = intervals[0][1];
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length; i++) {
    let currentStartInterval = intervals[i][0];
    let currentEndInterval = intervals[i][1];
    if (lastIntervalEnd > currentStartInterval) {
      count++;
      lastIntervalEnd = Math.min(lastIntervalEnd, currentEndInterval);
    } else {
      lastIntervalEnd = currentEndInterval;
    }
  }
  return count;
};

console.log(
  nonOverlapping([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
);
