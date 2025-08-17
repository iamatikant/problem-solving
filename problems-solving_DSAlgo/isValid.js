// DSA "Boss Level" Challenge: Validate Expression
// Problem Statement:

// Write a function isValid(expression) that takes a string expression and returns true if it's a valid mathematical expression and false otherwise.

// Rules:

// The expression consists of function calls like add(...), sub(...), mul(...), and div(...).

// add and mul can take one or more arguments.

// sub and div must take exactly two arguments.

// Arguments can be positive integers or other nested function calls.

// The syntax must be perfect: correct function names, matching parentheses, and commas separating arguments.

// Examples:

// isValid("add(1, 2)") -> true

// isValid("mul(3, 4, 5)") -> true

// isValid("sub(10, 5)") -> true

// isValid("add(1, sub(4, 2))") -> true

// isValid("add(1, )") -> false (empty argument)

// isValid("add 1, 2)") -> false (missing opening parenthesis)

// isValid("sub(5)") -> false (wrong number of arguments)

// isValid("mod(5, 2)") -> false (invalid function name)

// isValid("add(1, 2,)") -> false (trailing comma)

// This is a complex parsing problem. Don't try to solve it all at once. How would you start breaking this down? What's the very first thing you would check for?

// function isValid(expression) {
//   let supportedOperations = { add: 4, sub: 2, mul: 2, div: 2 };
//   let isCharacter = /[a-zA-Z]/i;
//   let isDigit = /\d/;
//   let i = 0;
//   while (i < expression.length) {
//     let char = expression[i];
//     if (char.match(isCharacter)) {
//       let word = '';
//       while (i < expression.length && expression[i].match(isCharacter)) {
//         word += char;
//         i++;
//         char = expression[i];
//       }
//       console.log('word: ', word);
//     } else if (char.match(isDigit)) {
//       let number = '';
//       while (i < expression.length && expression[i].match(/[0-9]+/)) {
//         number += char;
//         i += 1;
//         char = expression[i];
//       }

//       console.log('number: ', number);
//     } else if (char === '(' || char === ')') {
//       console.log('brackets: ', char);
//       i++;
//       char = expression[i];
//     } else if (char === ')') {
//       console.log('brackets close: ', char);
//       i++;
//       char = expression[i];
//     } else if (char === ',') {
//       console.log('comma: ', char);
//       i++;
//       char = expression[i];
//     } else if (char === ' ') {
//       console.log('space found: ', char);
//       i++;
//       char = expression[i];
//     } else {
//       console.log('invalid character: ', expression[i]);
//       return false;
//     }
//   }
// }

// var isValid = function (expression) {
//   function isLetter(char) {
//     return char.toLowerCase() !== char.toUpperCase();
//   }

//   function isDigit(char) {
//     return char >= '0' && char <= '9';
//   }

//   const validFuncs = new Map([
//     ['add', { minArgs: 1, maxArgs: Infinity }],
//     ['sub', { minArgs: 2, maxArgs: 2 }],
//     ['mul', { minArgs: 1, maxArgs: Infinity }],
//     ['div', { minArgs: 2, maxArgs: 2 }],
//   ]);

//   let i = 0;

//   while (i < expression.length) {
//     const char = expression[i];

//     if (isLetter(char)) {
//       // TODO: Read the full word (e.g., "add")
//       // For now, just console.log("Found WORD") and advance 'i'
//       // to the end of the word.
//       let word = '';
//       while (i < expression.length && isLetter(expression[i])) {
//         word += expression[i];
//         i++;
//       }
//       console.log('TOKEN: WORD ->', word);
//     } else if (isDigit(char)) {
//       // TODO: Read the full number (e.g., "123")
//       let number = '';
//       while (i < expression.length && isDigit(expression[i])) {
//         number += expression[i];
//         i++;
//       }
//       console.log('TOKEN: NUMBER ->', number);
//     } else if (char === '(') {
//       console.log('TOKEN: LPAREN');
//       i++;
//     } else if (char === ')') {
//       console.log('TOKEN: RPAREN');
//       i++;
//     } else if (char === ',') {
//       console.log('TOKEN: COMMA');
//       i++;
//     } else if (char === ' ') {
//       i++;
//     } else {
//       console.log('TOKEN: INVALID CHARACTER');
//       return false; // Or handle error
//     }
//   }

//   // For now, just return true if we get through it all.
//   return true;
// };

var isValid = function (expression) {
  function isLetter(char) {
    return char.toLowerCase() !== char.toUpperCase();
  }

  function isDigit(char) {
    return char >= '0' && char <= '9';
  }

  const validFuncs = new Map([
    ['add', { minArgs: 1, maxArgs: Infinity }],
    ['sub', { minArgs: 2, maxArgs: 2 }],
    ['mul', { minArgs: 1, maxArgs: Infinity }],
    ['div', { minArgs: 2, maxArgs: 2 }],
  ]);

  let i = 0;
  const stack = []; // Stack for tracking functions & argument counts

  while (i < expression.length) {
    const char = expression[i];

    if (isLetter(char)) {
      // Read full word (function name)
      let word = '';
      while (i < expression.length && isLetter(expression[i])) {
        word += expression[i];
        i++;
      }

      if (!validFuncs.has(word)) {
        console.log(`Invalid function: ${word}`);
        return false;
      }

      // After a valid function name, we expect '('
      if (expression[i] !== '(') {
        console.log(`Expected '(' after function name: ${word}`);
        return false;
      }

      // Push function info to stack
      stack.push({ func: word, argCount: 0 });
      i++; // Skip '('
    } else if (isDigit(char)) {
      // Read full number
      let number = '';
      while (i < expression.length && isDigit(expression[i])) {
        number += expression[i];
        i++;
      }

      // Increment arg count for current function
      if (stack.length > 0) {
        stack[stack.length - 1].argCount++;
      }
    } else if (char === ',') {
      // Comma = separator between arguments
      if (stack.length === 0) return false; // No open function to take args
      i++;
    } else if (char === ')') {
      // End of function arguments
      if (stack.length === 0) return false;

      const { func, argCount } = stack.pop();
      const { minArgs, maxArgs } = validFuncs.get(func);

      if (argCount < minArgs || argCount > maxArgs) {
        console.log(`Function ${func} has invalid number of args: ${argCount}`);
        return false;
      }
      i++;
    } else if (char === ' ') {
      i++; // Ignore spaces
    } else {
      console.log(`Invalid character: ${char}`);
      return false;
    }
  }

  // If stack is not empty, parentheses were unbalanced
  return stack.length === 0;
};

console.log(isValid('add(10, sub(5, 2))'));
