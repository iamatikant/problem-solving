/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // Step 1: Calculate the length of the linked list
  let length = 0;
  let current = head;
  while (current !== null) {
    length++;
    current = current.next;
  }

  // Step 2: Calculate the position to remove from the start (1-based index)
  let positionToRemove = length - n;

  // Edge case: If the head is to be removed
  if (positionToRemove === 0) {
    return head.next;
  }

  // Step 3: Find the node just before the one to be removed
  current = head;
  for (let i = 1; i < positionToRemove; i++) {
    current = current.next;
  }

  // Step 4: Remove the nth node from the end
  current.next = current.next.next;

  // Return the modified list
  return head;
};

console.log(removeNthFromEnd([1], 1));
