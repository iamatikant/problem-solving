// Given a list of strings, implement a function listFormat that returns the items concatenated into a single string. A common use case would be in summarizing the reactions for social media posts.

// The function should support a few options as the second parameter:

// sorted: Sorts the items by alphabetical order.
// length: Show only the first length items, using "and X other(s)" for the remaining. Ignore invalid values (negative, 0, etc).
// unique: Remove duplicate items.
// Examples
// listFormat([]); // ''

// listFormat(['Bob']); // 'Bob'
// listFormat(['Bob', 'Alice']); // 'Bob and Alice'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John']);
// // 'Bob, Ben, Tim, Jane and John'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
//   length: 3,
// }); // 'Bob, Ben, Tim and 2 others'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
//   length: 4,
// }); // 'Bob, Ben, Tim, Jane and 1 other'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
//   length: 3,
//   sorted: true,
// }); // 'Ben, Bob, Jane and 2 others'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John', 'Bob'], {
//   length: 3,
//   unique: true,
// }); // 'Bob, Ben, Tim and 2 others'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
//   length: 3,
//   unique: true,
// }); // 'Bob, Ben, Tim and 2 others'

// listFormat(['Bob', 'Ben', '', '', 'John']); // 'Bob, Ben and John'

/**
 * @param {Array<string>} items
 * @param {{sorted?: boolean, length?: number, unique?: boolean}} [options]
 * @return {string}
 */
function listFormat(items, options) {
  let result = "";
  if (!items || !items.length) {
    return "";
  }
  items = items.filter(name => name !== "");
  if (items.length === 1) {
    return items[0];
  }
  let untilLength = items.length;
  let left = "";
  let right = "";
  if (options) {
    if (options["unique"]) {
      items = [...new Set(items)];
      untilLength = items.length - 1;
    }
    if (options.sorted) {
      items = items.sort();
    }
    if (options.length) {
      untilLength = options.length + 1;
      const remainingCount = items.length - options.length;
      right = remainingCount > 1 ? ` and ${remainingCount} others` : ` and ${remainingCount} other`;
    }
  }

  left = items.slice(0, untilLength - 1);
  right = right === "" ? ` and ${items[untilLength - 1]}` : right;

  result = left.join(", ").concat(right);
  return result;
}

console.log("this", listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], { length: 3 }));
