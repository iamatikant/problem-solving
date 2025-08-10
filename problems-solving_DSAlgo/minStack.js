// 📜 Problem Statement
// Design a stack that supports all the usual operations (push, pop, top) and an additional operation getMin — which returns the minimum element in constant time.

// Implement the MinStack class:

// js
// Copy
// Edit
// MinStack()           // Initializes the stack object.
// void push(val)       // Pushes the element val onto the stack.
// void pop()           // Removes the element on the top of the stack.
// int top()            // Gets the top element of the stack.
// int getMin()         // Retrieves the minimum element in the stack.
// You must implement all operations in O(1) time.

// 🧪 Example
// js
// Copy
// Edit
// const minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   // returns -3
// minStack.pop();
// minStack.top();      // returns 0
// minStack.getMin();   // returns -2
// ✅ Constraints
// You cannot use Math.min over the whole stack every time — getMin() must be constant time.

// Use only JavaScript (no built-in min APIs or libraries that would trivialize the problem).

var MinStack = function () {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  const min =
    this.stack.length === 0
      ? val
      : Math.min(val, this.stack[this.stack.length - 1].min);
  this.stack.push({ value: val, min });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1].min;
};
