// DSA Problem: Kth Largest Element in a Stream
// Problem Statement:

// Design a class to find the kth largest element in a stream of numbers. Note that it is the kth largest element in sorted order, not the kth distinct element.

// Implement the KthLargest class:

// KthLargest(int k, int[] nums): Initializes the object with the integer k and the stream of integers nums.

// int add(int val): Appends the integer val to the stream and returns the element representing the kth largest element in the stream.

// Example 1:

// Input ["KthLargest", "add", "add", "add", "add", "add"] [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]

// Output [null, 4, 5, 5, 8, 8]

// Explanation:

// KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);

// The initial stream is [2, 4, 5, 8]. The 3rd largest is 4.

// kthLargest.add(3);

// The stream is now [2, 3, 4, 5, 8]. The 3rd largest is 4. Returns 4.

// kthLargest.add(5);

// The stream is now [2, 3, 4, 5, 5, 8]. The 3rd largest is 5. Returns 5.

// kthLargest.add(10);

// The stream is now [2, 3, 4, 5, 5, 8, 10]. The 3rd largest is 5. Returns 5.

// kthLargest.add(9);

// The stream is now [2, 3, 4, 5, 5, 8, 9, 10]. The 3rd largest is 8. Returns 8.

// kthLargest.add(4);

// The stream is now [2, 3, 4, 4, 5, 5, 8, 9, 10]. The 3rd largest is 5. Returns 5.

// Constraints:

// 1 <= k <= 10^4

// 0 <= nums.length <= 10^4

// -10^4 <= nums[i] <= 10^4

// -10^4 <= val <= 10^4

// At most 10^4 calls will be made to add.

class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.arr = [];
    nums.forEach((n) => this.add(n));
  }

  add(val) {
    // binary search for insert position
    let low = 0,
      high = this.arr.length;
    while (low < high) {
      let mid = Math.floor((low + high) / 2);
      if (this.arr[mid] < val) low = mid + 1;
      else high = mid;
    }
    this.arr.splice(low, 0, val);

    // trim to size k
    if (this.arr.length > this.k) this.arr.shift();

    return this.arr[0]; // kth largest = smallest in the heap
  }
}
