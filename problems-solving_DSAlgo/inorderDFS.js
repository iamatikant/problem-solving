// // function inorderTraversal(node):
// //   if node is null:
// //     return

// //   inorderTraversal(node.left)  // Go left
// //   // Visit the current node (this is where we'd do our counting)
// //   inorderTraversal(node.right) // Go right

// function findKSmallestInBST(root) {
//   let result = -1;
//   let visit = 0;
//   if (!root) {
//     return result;
//   }

//   const inOrderDFS = (node) => {
//     if (node === null || result !== -1) {
//       return;
//     }

//     inOrderDFS(node.left);

//     if (result !== -1) {
//       return;
//     }

//     visit += 1;
//     if (visit === k) {
//       result = node.value;
//       return;
//     }

//     inOrderDFS(node.right);
//   };

//   inOrderDFS(root);

//   return result;
// }

function inOrderTraversal(root, k) {
  if (!root || !k) {
    return -1;
  }
  let count = 0;
  let result = -1;
  const traverse = (node) => {
    if (node === null || result !== -1) {
      return;
    }
    traverse(node.left);
    if (result !== -1) {
      return;
    }
    count += 1;
    if (count === k) {
      result = node.value;
    }
    if (result !== -1) {
      return;
    }
    traverse(node.right);
  };

  traverse(root);

  return result;
}
