// DSA Problem: Merge Intervals
// Problem Statement:

// Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example:

// Input: intervals = [[1,3],[8,10],[2,6],[15,18]] (Note: they are not sorted)

// Output: [[1,6],[8,10],[15,18]]

// Hint from yesterday: The first and most crucial step is to sort the intervals. How should you sort them? By start time or end time? Once they are sorted, how do you iterate through them to perform the merge?

// var mergeInterval = function (intervals) {
//   const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
//   let result = [];

//   for (let i = 0; i < sortedIntervals.length; i++) {
//     let j = i;
//     let current = sortedIntervals[j]; //[1, 3]
//     let next = sortedIntervals[j + 1] ?? [];

//     if (current[1] >= next[0]) {
//       let startInterval = current[0];
//       let endInterval = current[1];

//       while (j < sortedIntervals.length && endInterval >= next[0]) {
//         j += 1;
//         current = next;
//         next = sortedIntervals[j];

//         endInterval = Math.max(current[1], endInterval);
//       }
//       i = j - 1;
//       result.push([startInterval, endInterval]);
//     } else {
//       result.push(current);
//     }
//   }

//   return result;
// };

var mergeInterval = function (intervals) {
  if (!intervals || intervals.length === 0) {
    return [];
  }
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  let result = [sortedIntervals[0]];

  for (let i = 1; i < sortedIntervals.length; i++) {
    let current = sortedIntervals[i]; //[1, 3]
    const latestResultInterval = result[result.length - 1];

    if (latestResultInterval[1] >= current[0]) {
      latestResultInterval[1] = Math.max(current[1], latestResultInterval[1]);
    } else {
      result.push(current);
    }
  }
  return result;
};

console.log(
  mergeInterval([
    [1, 3],
    [8, 10],
    [2, 6],
    [15, 18],
    [6, 9],
    [16, 20],
    [17, 19],
    [21, 44],
  ])
);
console.log(
  mergeInterval([
    [2, 3],
    [4, 5],
    [6, 18],
    [8, 9],
    [1, 10],
  ])
);

var merge = function (intervals) {
  if (!intervals || intervals.length === 0) {
    return [];
  }

  // 1. Sort intervals based on the start time. O(N log N)
  intervals.sort((a, b) => a[0] - b[0]);

  // 2. Initialize the result with the first interval.
  const mergedIntervals = [intervals[0]];

  // 3. Iterate from the second interval onwards.
  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

    // 4. Check for overlap.
    if (currentInterval[0] <= lastMergedInterval[1]) {
      // There is an overlap, so merge them by updating the end time
      // of the last interval in our result array.
      lastMergedInterval[1] = Math.max(
        lastMergedInterval[1],
        currentInterval[1]
      );
    } else {
      // No overlap, so just add the current interval to the result.
      mergedIntervals.push(currentInterval);
    }
  }

  return mergedIntervals;
};
