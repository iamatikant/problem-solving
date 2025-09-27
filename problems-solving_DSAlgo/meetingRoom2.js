// DSA Problem: Meeting Rooms II
// Problem Statement:

// Given an array of meeting time intervals intervals where intervals[i] = [start_i, end_i], return the minimum number of conference rooms required.

// Example 1:

// Input: intervals = [[0, 30],[5, 10],[15, 20]]

// Output: 2

// Explanation:

// One room for [0, 30].

// [5, 10] starts, needs a second room.

// [5, 10] ends.

// [15, 20] starts, can reuse the second room.

// Example 2:

// Input: intervals = [[7,10],[2,4]]

// Output: 1

// Constraints:

// 1 <= intervals.length <= 10^4

// 0 <= start_i < end_i <= 10^6

// "Precisely. A min-heap is the perfect data structure for this.

// Let's refine the algorithm using a min-heap:

// Sort the intervals by their start time.

// Initialize a min-heap and add the end time of the first meeting to it. The size of the heap will represent the number of rooms currently in use.

// Loop through the rest of the meetings from the second one onwards. For each currentMeeting:

// Look at the root of the min-heap. This is the earliestEndTime of all meetings currently in progress.

// If currentMeeting.start >= earliestEndTime: This means a room has freed up. We can reuse it. So, we pop the earliest end time from the heap and push the currentMeeting.end time. The size of the heap doesn't change.

// If currentMeeting.start < earliestEndTime: No rooms are free yet. We need a new room. So, we just push the currentMeeting.end time onto the heap. The size of the heap increases by one.

// The answer is not the final size of the heap. It's the maximum size the heap ever reached during this process. So you'll need a variable to keep track of that.

// This is the optimal O(N log N) solution (dominated by the initial sort). The heap operations are O(log K) where K is the number of rooms, and we do this N times.

// You have correctly identified the sorting strategy, the greedy choice, and the optimal data structure. This is a complete solution.

// You're ready to code it."

var minMeetingRoom = function (intervals) {
  const heap = [];
  let roomsNeeded = 0;
  intervals.sort((a, b) => a[0] - b[0]); // N logN

  for (let i = 0; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (heap.length && heap[heap.length - 1] <= start) {
      heap.pop();
      heap.push(end);
    } else {
      heap.push(end);
      roomsNeeded++;
    }
    heap.sort((a, b) => b - a);
  }

  return roomsNeeded;
};

const intervals = [
  [0, 30],
  [5, 10],
  [15, 20],
];
const intervals2 = [
  [7, 10],
  [2, 4],
];
console.log(minMeetingRoom(intervals));
console.log(minMeetingRoom(intervals2));

console.log(
  minMeetingRoom([
    [0, 30],
    [5, 20],
    [10, 20],
    [15, 30],
    [20, 40],
  ])
);
