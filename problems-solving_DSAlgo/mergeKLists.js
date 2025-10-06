// DSA Problem: Merge K Sorted Lists
// Problem Statement:

// You are given an array of k linked lists, lists, where each linked list is sorted in ascending order.

// Merge all the linked lists into one sorted linked list and return it.

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]

// Output: [1,1,2,3,4,4,5,6]

// Explanation: The linked lists are:

// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// Merging them into one sorted list gives: 1->1->2->3->4->4->5->6

// Example 2:

// Input: lists = []

// Output: []

// Example 3:

// Input: lists = [[]]

// Output: []

// Constraints:

// k == lists.length

// 0 <= k <= 10^4

// 0 <= lists[i].length <= 500

// -10^4 <= lists[i][j] <= 10^4

// lists[i] is sorted in ascending order.

// The sum of lists[i].length will not exceed 10^4.

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// var mergeKLists = function (lists) {
//   const minHeap = [];
//   let dummyHead = new ListNode(0);
//   let tail = dummyHead;
//   for (let head of lists) {
//     minHeap.push(head);
//   }
//   minHeap.sort((n1, n2) => n2.val - n1.val);
//   while (minHeap.length > 0) {
//     const root = minHeap.pop();
//     if (root.next) {
//       minHeap.push(root.next);
//       minHeap.sort((n1, n2) => n2.val - n1.val);
//     }
//     tail.next = root;
//     tail = tail.next;
//   }

//   return dummyHead.next;
// };

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dict = new Set(wordDict);
  const memo = new Map();

  const canBreak = (word) => {
    if (word.length === 0) {
      return true;
    }

    if (memo.has(word)) {
      return memo.get(word);
    }
    for (let i = 1; i <= word.length; i++) {
      const prefix = word.substring(0, i);
      if (dict.has(prefix)) {
        const suffix = word.substring(i);
        if (canBreak(suffix)) {
          memo.set(word, true);
          return true;
        }
      }
    }
    memo.set(word, false);
    return false;
  };

  return canBreak(s);
};

console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']));
console.log(wordBreak('catsanddog', ['cats', 'dog', 'sand', 'and', 'cat']));

var mergeKLists = function (lists) {
  if (!lists || lists.length === 0) {
    return null;
  }

  // Using a sorted array to SIMULATE a min-heap.
  const minHeap = [];

  // 1. Initialization: Add the head of each NON-EMPTY list.
  for (const headNode of lists) {
    if (headNode) {
      // <-- FIX 1: Check if the list is not empty
      minHeap.push(headNode);
    }
  }

  // Sort descending so the min element is at the end, making pop() O(1).
  minHeap.sort((a, b) => b.val - a.val);

  const dummyHead = new ListNode(0);
  let tail = dummyHead;

  while (minHeap.length > 0) {
    // 2. Extract Min: Get the node with the smallest value.
    const minNode = minHeap.pop(); // <-- Using pop() is more efficient than shift()

    // 3. Append to Result
    tail.next = minNode;
    tail = tail.next;

    // 4. Add Next Node: If the node we just added has a next element...
    if (minNode.next) {
      minHeap.push(minNode.next);
      // ...re-sort the array to find the new minimum.
      // A real heap would do this in O(log k). Sorting is O(k log k).
      minHeap.sort((a, b) => b.val - a.val);
    }
  }

  return dummyHead.next;
};
