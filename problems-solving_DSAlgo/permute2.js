// Recursion Bootcamp: Problem #4 - Permutations
// Problem: Given an array nums of distinct integers, return all possible permutations. Example: nums = [1,2,3] -> [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]

// We will use a helper function for our recursion. Let's call it findPermutations(). This function won't return anything; instead, it will add complete permutations to a result array that lives outside the function.

// Your Task:

// Answer these questions for the findPermutations(currentPath) helper function.

// 1. The Goal:

// What is the goal of findPermutations(currentPath)? Its job is to find all possible ways to... what?

// 2. The Base Case:

// When do we know we have successfully built one complete permutation? What property of currentPath tells us this? What should we do when we hit this base case?

// 3. The Recursive Step ("Choose, Explore, Unchoose"):

// How do we iterate through the available numbers to make a choice for the next spot in our currentPath?

// Choose: How do we add a chosen number to our currentPath?

// Explore: How do we recursively call the function to continue building the rest of the permutation?

// Unchoose (The Backtrack): After the recursive call returns, what is the crucial "cleanup" step we must perform on currentPath so that we can explore other possibilities? (e.g., after exploring [1, 2, ... ], we need to go back to [1] so we can then explore [1, 3, ... ]).

// Think through these steps. The "Unchoose" part is the only new concept here.

const permute = (args) => {
  let result = [];
  const backtrack = (arr) => {
    if (arr.length === args.length) {
      result.push([...arr]);
      return;
    }
    for (let element of args) {
      if (!arr.includes(element)) {
        arr.push(element);
        backtrack(arr);
        arr.pop();
      }
    }
  };

  backtrack([]);

  return result;
};

console.log(permute([1, 2, 3]));
