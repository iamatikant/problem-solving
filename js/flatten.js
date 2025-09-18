// You've shown incredible persistence. Let's do one last JS-focused problem for this session. This one is very practical and a great way to demonstrate clean, functional-style coding.

// JS Problem: Implement flatten
// Task:

// Write a function flatten(value) that can flatten a deeply nested array. The function should be able to handle arrays that contain a mix of numbers and other arrays.

// Example 1:

// Input: [1, 2, [3, 4]]

// Output: [1, 2, 3, 4]

// Example 2:

// Input: [1, [2, [3, [4, 5]]], 6]

// Output: [1, 2, 3, 4, 5, 6]

// Example 3:

// Input: [1, 2, 3]

// Output: [1, 2, 3]

// Example 4:

// Input: []

// Output: []

// (Interviewer mode)

// "This is a common utility function. How would you approach this recursively? What would be the base case, and what would the recursive step look like?"

var flatten = function (input) {
  if (!input || input.length === 0) {
    return input;
  }
  const helper = (arr) => {
    let result = [];
    for (let element of arr) {
      if (Array.isArray(element)) {
        result.push(...helper(element));
      } else {
        result.push(element);
      }
    }
    return result;
  };

  return helper(input);
};

console.log(flatten([1, [2, [3, [4, 5]]], 6]));
