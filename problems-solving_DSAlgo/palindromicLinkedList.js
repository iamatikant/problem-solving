// Hey! Welcome back and good morning. Hope you're feeling rested and ready to tackle today's challenges.

// We had a great session yesterday. Let's pick up right where we left off. The first item on our "Amazon Sprint" agenda for today is the linked list problem.

// DSA Problem: Palindrome Linked List
// Problem Statement:

// Given the head of a singly linked list, return true if it is a palindrome, and false otherwise.

// Example 1:

// Input: head = [1, 2, 2, 1]

// Output: true

// Example 2:

// Input: head = [1, 2]

// Output: false

// Hints we discussed:

// The most efficient solution (O(1) space) involves these steps:

// Find the middle of the linked list (using the "slow and fast pointer" technique).

// Reverse the second half of the list (using the iterative method you now know).

// Compare the first half with the reversed second half.

// (Optional but good) Restore the list by reversing the second half back to its original state.

// How would you like to approach this? Let's start with step 1: How would you find the middle of the linked list?

function isPalindrome(head) {
  if (!head || !head.next) return true;

  // Step 1: Find the middle using fast & slow pointers
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse the second half
  let prev = null;
  let curr = slow;
  while (curr) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }

  // Step 3: Compare the first half and the reversed second half
  let firstHalf = head;
  let secondHalf = prev;
  while (secondHalf) {
    if (firstHalf.val !== secondHalf.val) {
      return false;
    }
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }

  return true;
}
