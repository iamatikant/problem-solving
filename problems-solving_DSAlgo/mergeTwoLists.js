// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let list3;
  let node1 = list1;
  let node2 = list2;
  let node3 = list3;

  while (node1.next !== null || node2.next !== null) {
    if (node1.val < node2.val) {
      node3.val = node1.val;
      node1 = node1.next;
    }
    if (node1.val > node2.val) {
      node3.val = node2.val;
      node2 = node2.next;
    }
    if (node1.val === node2.val) {
      node3.val = node1.val;
      node1 = node1.next;
      node2 = node2.next;
    }
  }
};
