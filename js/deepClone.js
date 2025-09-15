// S Problem: deepClone(obj)
// Task:

// Write a function deepClone(obj) that takes a JavaScript object and creates a true deep copy. The new object should not share any references to nested objects or arrays with the original.

// Core Requirements:

// It should correctly clone objects with nested objects and arrays.

// It should handle primitive values (strings, numbers, booleans, null, undefined).

// Crucially, it must correctly handle circular references without getting stuck in an infinite loop.

// Example Usage:

// JavaScript
// // Simple case
// const original = { a: 1, b: { c: [2, 3] } };
// const cloned = deepClone(original);

// cloned.b.c[0] = 99;
// console.log(original.b.c[0]); // Should still be 2

// // Circular reference case
// const circularObj = { name: 'A' };
// circularObj.itself = circularObj;

// const clonedCircular = deepClone(circularObj);

// console.log(clonedCircular.name); // Should be 'A'
// console.log(clonedCircular.itself === clonedCircular); // Should be true
// console.log(clonedCircular === circularObj); // Should be false
// (Interviewer mode)

// "This is a classic problem. What is your high-level strategy for implementing this? Specifically, how will you handle the different data types (primitives vs. objects/arrays), and what is your plan for detecting and managing the circular references?"

function deepClone(value) {
  if (typeof value !== 'object' || value === null) {
    return value;
  }

  const map = new Map();
  const parser = (original) => {
    if (map.has(original)) {
      return map.get(original);
    }
    const clone = Array.isArray(original) ? [] : {};
    map.set(original, clone);
    for (let key in original) {
      if (typeof original[key] === 'object') {
        clone[key] = parser(original[key]);
      } else {
        clone[key] = original[key];
      }
    }
    return clone;
  };
  return parser(value);
}
