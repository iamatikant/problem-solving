// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// var levelOrder = function (root) {
//   // 1. Handle the edge case: If the tree is empty, return an empty array.
//   if (!root) {
//     return [];
//   }

//   // 2. Initialize the result array and the queue.
//   // The queue will hold the nodes we need to visit.
//   // We start by adding the root node.
//   const result = [];
//   const queue = [root]; // Our queue starts with the very first node.

//   // 3. Loop as long as there are nodes to process.
//   // If the queue is empty, it means we've visited every node.
//   while (queue.length > 0) {
//     // 4. Get the number of nodes at the current level. This is a key step.
//     // It tells us how many times we need to dequeue to process exactly one level.
//     const levelSize = queue.length;
//     const currentLevel = [];

//     // 5. Process all nodes for the current level.
//     for (let i = 0; i < levelSize; i++) {
//       // 6. Dequeue the node from the front of the queue.
//       const currentNode = queue.shift();

//       // 7. Add its value to our list for the current level.
//       currentLevel.push(currentNode.val);

//       // 8. Enqueue its children (if they exist) for the next level.
//       // These will be processed in the next iteration of the outer `while` loop.
//       if (currentNode.left) {
//         queue.push(currentNode.left);
//       }
//       if (currentNode.right) {
//         queue.push(currentNode.right);
//       }
//     }

//     // 9. After the for loop finishes, we have processed the entire level.
//     // Add the `currentLevel` array to our final `result`.
//     result.push(currentLevel);
//   }

//   // 10. Once the queue is empty, the loop ends. Return the final result.
//   return result;
// };

// console.log(levelOrder([3, 9, 20, null, null, 15, 7]));

// 1. Define the TreeNode class (as it would be on LeetCode)
// class TreeNode {
//   constructor(val, left = null, right = null) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
//   }
// }

// // 2. Helper function to build a tree from an array (for testing)
// function buildTree(nodes) {
//   if (!nodes || nodes.length === 0 || nodes[0] === null) {
//     return null;
//   }

//   const root = new TreeNode(nodes[0]);
//   const queue = [root];
//   let i = 1;

//   while (i < nodes.length) {
//     const current = queue.shift();

//     if (nodes[i] !== null) {
//       current.left = new TreeNode(nodes[i]);
//       queue.push(current.left);
//     }
//     i++;

//     if (i < nodes.length && nodes[i] !== null) {
//       current.right = new TreeNode(nodes[i]);
//       queue.push(current.right);
//     }
//     i++;
//   }
//   return root;
// }

// 3. Your levelOrder function (I've just copied it from our previous discussion)
// var levelOrder = function (root) {
//   if (!root) {
//     return [];
//   }
//   const result = [];
//   const queue = [root];
//   while (queue.length > 0) {
//     const levelSize = queue.length;
//     const currentLevel = [];
//     for (let i = 0; i < levelSize; i++) {
//       const currentNode = queue.shift();
//       currentLevel.push(currentNode.val);
//       if (currentNode.left) {
//         queue.push(currentNode.left);
//       }
//       if (currentNode.right) {
//         queue.push(currentNode.right);
//       }
//     }
//     result.push(currentLevel);
//   }
//   return result;
// };

// console.log(levelOrder(rootNode)); // Pass the root node, not the array
// Expected Output: [[3], [9, 20], [15, 7]]

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

const levelOrderTraversal = (root) => {
  if (!root) {
    return null;
  }

  const queue = [root];
  const result = [];
  while (queue.length > 0) {
    const currentLevelLength = queue.length;
    const currentLevelQueue = [];

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

    result.push(currentLevelQueue);
  }

  return result;
};

const treeArray = [3, 9, 20, null, null, 15, 7];
const rootNode = buildMeTheTree(treeArray); // First, create the tree object

console.log(levelOrderTraversal(rootNode));
