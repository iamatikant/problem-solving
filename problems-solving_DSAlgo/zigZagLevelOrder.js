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
 * @return {number[][]}
 */

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.right = right;
    this.left = left;
  }
}

const buildMeTheTree = (treeArray) => {
  if (!treeArray || treeArray.length === 0 || treeArray[0] === null) {
    return null;
  }
  const rootNode = new TreeNode(treeArray[0]);
  let i = 1;
  const queue = [rootNode];

  while (i < treeArray.length) {
    const currentNode = queue.shift();
    if (i < treeArray.length) {
      if (treeArray[i] !== null) {
        currentNode.left = new TreeNode(treeArray[i]);
        queue.push(currentNode.left);
      }
      i++;
    }

    if (i < treeArray.length) {
      if (treeArray[i] !== null) {
        currentNode.right = new TreeNode(treeArray[i]);
        queue.push(currentNode.right);
      }
      i++;
    }
  }

  return rootNode;
};

var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [root];
  let leftToRight = true;

  while (queue.length > 0) {
    const currentLevelQueue = [];
    const currentLevelLength = queue.length;
    for (let i = 0; i < currentLevelLength; i++) {
      const currentNode = queue.shift();
      currentLevelQueue.push(currentNode.val);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    if (!leftToRight) {
      currentLevelQueue.reverse();
    }
    result.push(currentLevelQueue);
    leftToRight = !leftToRight;
  }

  return result;
};

const treeArray = [3, 9, 20, null, null, 15, 7];
const rootNode = buildMeTheTree(treeArray); // First, create the tree object

console.log(zigzagLevelOrder(rootNode));
