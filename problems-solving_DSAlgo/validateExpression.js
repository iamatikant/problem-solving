//Validate expressions like: const exp = 'add(2, 3, sub(5, 4))';
// Do not expect any other special characters apart from the above example

const exp = 'add(2, 35, subs(5, 4))';

// const validate = (expression) => {
//   const brackets = { ')': '(' };
//   const supportedOperations = ['add', 'sub'];
//   let i = 0;
//   if (!expression[0].match(/[A-Za-z]/)) {
//     return 'not valid';
//   }
//   let word = '';
//   const stack = [];
//   while (i < expression.length) {
//     if (expression[i].match(/[a-zA-Z]/)) {
//       word += expression[i];
//       i++;
//       continue;
//     } else if (word !== '') {
//       if (supportedOperations.includes(word)) {
//         word = '';
//       } else {
//         console.log('1', expression[i], i, 'word: ', word);
//         return 'not valid';
//       }
//     }
//     if (expression[i] === '(') {
//       stack.push('(');
//     } else if (expression[i] === ',' && !expression[i + 1].match(/[\d\s]+/)) {
//       console.log('2', expression[i]);
//       return 'not valid';
//     } else if (expression[i] === ')') {
//       if (stack[stack.length - 1] === brackets[')']) {
//         i++;
//         stack.pop();
//         continue;
//       } else {
//         console.log('3', expression[i], 'i: ', i);
//         return 'not valid';
//       }
//     }
//     i++;
//   }
//   if (stack.length !== 0) {
//     return 'not valid';
//   }
//   return 'valid';
// };

function validate(expression) {
  const tokens = expression.match(/\w+|[(),]/g);
  const supported = ['add', 'sub'];
  let i = 0;

  function parse() {
    if (!supported.includes(tokens[i])) return false;
    i++;
    if (tokens[i++] !== '(') return false;

    while (true) {
      if (/\d+/.test(tokens[i])) {
        i++;
      } else if (supported.includes(tokens[i])) {
        if (!parse()) return false;
      } else {
        return false;
      }

      if (tokens[i] === ',') {
        i++;
        continue;
      } else if (tokens[i] === ')') {
        i++;
        break;
      } else {
        return false;
      }
    }

    return true;
  }

  const valid = parse();
  return valid && i === tokens.length ? 'valid' : 'not valid';
}

console.log(validate(exp));
// console.log(exp.match(/\w+|[(),]|\d/g));
// console.log(exp.match(/\w+|[(),]|/g));
