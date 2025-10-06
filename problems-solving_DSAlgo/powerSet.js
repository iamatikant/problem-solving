// Recursion Bootcamp: Problem #5 - Subsets
// Problem Statement:

// Given an integer array nums of unique elements, return all possible subsets (also known as the power set).

// The solution set must not contain duplicate subsets. You can return the solution in any order.

// Example:

// Input: nums = [1,2,3]

// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Let's Apply the Framework
// We'll use a recursive helper function findSubsets(startIndex, currentSubset).

// startIndex: This will be the index in the nums array from where we are allowed to start picking numbers. This is a common trick to prevent generating duplicate subsets like [1,2] and [2,1].

// currentSubset: This is the subset we are building in the current recursive path.

// 1. The Goal:

// The goal of findSubsets(startIndex, currentSubset) is to find all valid subsets that can be formed by adding numbers from nums (starting from startIndex) to the currentSubset.

// 2. The Base Case (A little different here!):

// In this problem, every valid path is a solution. [1], [1, 2], and [1, 2, 3] are all valid subsets.

// So, the first thing we do when we enter the function is to add a copy of the currentSubset to our final results array. There's no "failure" base case.

// 3. The Recursive Step ("Choose, Explore, Unchoose"):

// We will loop through the nums array, but importantly, we'll start our loop from startIndex.

// Let's say our nums is [1,2,3], and we are in the call findSubsets(0, []).

// The loop starts at i = 0.

// Choose: We choose nums[0], which is 1. We add it to our currentSubset. The path is now [1].

// Explore: We make a recursive call to find all subsets that start with [1]. Crucially, to avoid re-using 1, the next call will start its search from the next index. So we call findSubsets(i + 1, currentPath), which is findSubsets(1, [1]).

// Unchoose (Backtrack): After that entire recursive call (for all subsets starting with [1]) is finished, we must undo our choice. We pop() the 1 from currentPath so it becomes [] again. Now the loop can continue to i = 1, where it will choose 2 and start exploring the [2] path.

// This startIndex parameter is the key to preventing duplicate combinations.

// Does this logic make sense? Can you see how it's similar to the "Permutations" problem, but the startIndex changes how we explore?

const subSet = (arr) => {
  let result = [];
  const backTrack = (startIndex, currentPath) => {
    result.push([...currentPath]);
    for (let i = startIndex; i < arr.length; i++) {
      currentPath.push(arr[i]);
      backTrack(i + 1, currentPath);
      currentPath.pop();
    }
  };

  backTrack(0, []);

  return result;
};

console.log(subSet([1, 2, 3]));
