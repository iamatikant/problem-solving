// Ready for the next level? Let's apply this same thinking to a tree problem.

// Recursion Bootcamp: Problem #3 - Sum of a Binary Tree
// Problem: Given the root of a binary tree, write a recursive function sumTree(root) that returns the sum of all the node values in the tree.

// Example: Tree:

//     10
//    /  \
//   5    15
//  / \    \
// 3   7    18
// Output: 58 (10 + 5 + 15 + 3 + 7 + 18)

// Your Task:

// Again, no code yet. Just answer the three "Leap of Faith" questions.

// 1. The Goal:

// What is the goal of sumTree(node)?

// 2. The Base Case:

// What is the simplest possible tree (or part of a tree) you can be given? What is its sum?

// 3. The Recursive Step:

// How can you define the sum of the tree at node in terms of the sum of its left and right subtrees? (Remember the leap of faith: assume sumTree(node.left) and sumTree(node.right) work perfectly).

const sumTree = (node) => {
  if (node === null) {
    return 0;
  }
  return node.val + sumTree(node.left) + sumTree(node.right);
};
