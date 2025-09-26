// Let's try one more to solidify the pattern.

// Recursion Bootcamp: Problem #2 - String Reversal
// Problem: Write a recursive function reverseString(str) that takes a string and returns a new string with the characters in reverse order.

// Example:

// reverseString("hello") -> "olleh"

// reverseString("abc") -> "cba"

// Your Task:

// Apply the same framework. Do not write code yet. Just answer these three questions:

// 1. The Goal:

// In one sentence, what is the goal of reverseString(str)?

// 2. The Base Case:

// What is the simplest possible string you can be given where reversing it is trivial?

// 3. The Recursive Step:

// How can you take a string like "hello" and break it down into a smaller string and a single character? (Hint: Think about str[0] and str.substring(1)).

// If you take the "leap of faith" and assume reverseString("ello") correctly returns "olle", how do you combine that result with the first character ("h") to get the final answer, "olleh"?

function reverseString(str) {
  if (str.length === 0) {
    return '';
  }
  return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
}

console.log(reverseString('hello'));
