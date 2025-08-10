// DSA Problem #3: Maximum Depth of Binary Tree
// Problem Statement:

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]

// Tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7
// Output: 3 (The longest path is 3 -> 20 -> 15 or 3 -> 20 -> 7)

// Example 2:

// Input: root = [1,null,2]

// Tree:

//   1
//    \
//     2
// Output: 2

// Constraints:

// The number of nodes in the tree is in the range [0, 10^4].

// -100 <= Node.val <= 100

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }

  const left_max = maxDepth(root.left);
  const right_max = maxDepth(root.right);

  return 1 + Math.max(left_max, right_max);
};
