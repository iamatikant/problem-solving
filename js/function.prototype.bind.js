Function.prototype.myBind = function (context, ...args) {
  // 'this' refers to the original function (e.g., 'greet' or 'Person')
  const originalFunction = this;

  // 1. Create a temporary function (or constructor) whose prototype can be manipulated
  //    This is crucial for handling the 'new' operator correctly.
  const Noop = function () {};

  // 2. The function that myBind returns
  const boundFunction = function (...internalArgs) {
    // 'this' inside here refers to the context of the *invocation* of 'boundFunction'.

    // Check if 'boundFunction' was called with the 'new' operator.
    // If 'new boundFunction()' was used, then 'this' will be an instance of 'boundFunction'.
    // In that case, 'this' should be the newly created instance.
    // Otherwise, 'this' should be the 'context' provided to myBind.
    const isCalledWithNew = this instanceof boundFunction;

    // Apply the original function with the correct 'this' context and arguments
    return originalFunction.apply(
      isCalledWithNew ? this : context, // If 'new' was used, use 'this' (the new instance). Otherwise, use the bound 'context'.
      [...args, ...internalArgs] // Combine arguments from bind time and call time
    );
  };

  // 3. Set up the prototype chain to handle 'new' operator correctly.
  //    This ensures that: (new BoundPerson()) instanceof Person === true
  //    It effectively says: if the original function had a prototype, then the bound function's
  //    prototype should inherit from it.
  if (originalFunction.prototype) {
    // Check if originalFunction has a prototype (arrow functions don't)
    Noop.prototype = originalFunction.prototype;
    boundFunction.prototype = new Noop(); // boundFunction.prototype now inherits from originalFunction.prototype
  }

  // Return the newly created bound function
  return boundFunction;
};

function greet(greeting, punctuation) {
  return greeting + ' ' + this.name + punctuation;
}

const person = { name: 'Alice' };

// Your custom bind method should behave like the native one
const boundGreet = greet.myBind(person, 'Hello');
console.log(boundGreet('!')); // Expected: "Hello Alice!"

// Test with arguments provided at both bind time and call time
const boundGreet2 = greet.myBind(person, 'Hi', 'there');
console.log(boundGreet2('?')); // Expected: "Hi Alice there?"

// Test with new operator (optional, but good for completeness)
function Person(name) {
  this.name = name;
}
const BoundPerson = Person.myBind(null, 'Bob'); // myBind should ignore null 'this' for 'new'
const bob = new BoundPerson();
console.log(bob.name); // Expected: "Bob"
