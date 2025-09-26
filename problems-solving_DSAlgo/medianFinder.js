// 295. Find Median from Data Stream
// Solved
// Hard
// Topics
// premium lock icon
// Companies
// The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
// Implement the MedianFinder class:

// MedianFinder() initializes the MedianFinder object.
// void addNum(int num) adds the integer num from the data stream to the data structure.
// double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.

// Example 1:

// Input
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
// [[], [1], [2], [], [3], []]
// Output
// [null, null, null, 1.5, null, 2.0]

// Explanation
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0

// Constraints:

// -105 <= num <= 105
// There will be at least one element in the data structure before calling findMedian.
// At most 5 * 104 calls will be made to addNum and findMedian.

// Follow up:

// If all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?
// If 99% of all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?

// Heapify helper class
var MedianFinder = function () {
  this.min = [];
  this.max = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  // 1. Add to the max-heap (which holds the smaller half of numbers).
  this.max.push(num);
  this.max.sort((a, b) => b - a); // Re-heapify

  // 2. Balance the values: Ensure everything in max-heap is <= everything in min-heap.
  // If the largest number in the "small half" is bigger than the smallest in the "large half", swap them.
  if (this.max.length > 0 && this.min.length > 0 && this.max[0] > this.min[0]) {
    const valToMove = this.max.shift(); // Pop from max-heap
    this.min.push(valToMove); // Push to min-heap
    this.min.sort((a, b) => a - b); // Re-heapify min-heap
  }

  // 3. Balance the sizes: The max-heap should never be smaller than the min-heap,
  //    and should not be more than 1 element larger.
  if (this.max.length > this.min.length + 1) {
    const valToMove = this.max.shift();
    this.min.push(valToMove);
    this.min.sort((a, b) => a - b);
  } else if (this.min.length > this.max.length) {
    const valToMove = this.min.shift();
    this.max.push(valToMove);
    this.max.sort((a, b) => b - a);
  }
};

MedianFinder.prototype.findMedian = function () {
  if (this.max.length > this.min.length) {
    // Odd number of elements, median is the top of the max-heap
    return this.max[0];
  } else {
    // Even number of elements, median is the average of the two middle values
    return (this.max[0] + this.min[0]) / 2;
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const leftLength = this.max.length;
  const rightLength = this.min.length;
  if ((leftLength + rightLength) % 2 === 0) {
    return (this.max[0] + this.min[0]) / 2;
  } else return this.max[0];
};
