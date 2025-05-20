// Implement a function deepEqual that performs a deep comparison between two values. It returns true if two input values are deemed equal, and returns false if not.

// You can assume there are only JSON-serializable values (numbers, strings, boolean, null, objects, arrays).
// There wouldn't be cyclic objects, i.e. objects with circular references.
// Examples
// deepEqual('foo', 'foo'); // true
// deepEqual({ id: 1 }, { id: 1 }); // true
// deepEqual([1, 2, 3], [1, 2, 3]); // true
// deepEqual([{ id: '1' }], [{ id: '2' }]); // false

/**
 * @param {*} valueA
 * @param {*} valueB
 * @return {boolean}
 */
/**
 * @param {*} valueA
 * @param {*} valueB
 * @return {boolean}
 */
/**
 * @param {*} valueA
 * @param {*} valueB
 * @return {boolean}
 */
function deepEqual(valueA, valueB) {
  let flag = true;

  const nullCheck = (param1, param2) => {
    if (
      (param1 === null && param2 !== null) ||
      (param1 === null && param2 !== null)
    ) {
      flag = false;
    }
  };

  nullCheck(valueA, valueB);
  if (!flag) {
    return false;
  }

  if (valueA === null) {
    return true;
  }

  if (typeof valueA !== typeof valueB) {
    return false;
  }

  if (
    (Array.isArray(valueA) && !Array.isArray(valueB)) ||
    (Array.isArray(valueB) && !Array.isArray(valueA))
  ) {
    return false;
  }

  function objectHelper(obj1, obj2) {
    nullCheck(obj1, obj2);
    if (!flag) {
      return flag;
    }
    if (obj1 === null) {
      return;
    }
    let keys1 = Object.keys(obj1);
    if (keys1.length !== Object.keys(obj2).length) {
      flag = false;
      return;
    }
    for (let key of keys) {
      if (Array.isArray(obj1[key])) {
        arrayHelper(obj1[key], obj2[key]);
      } else if (typeof obj1[key] === "object") {
        objectHelper(obj1[key], obj2[key]);
      } else if (obj1[key] !== obj2[key]) {
        flag = false;
      }
    }
  }

  function arrayHelper(numbers1, numbers2) {
    nullCheck(numbers1, numbers2);
    if (!flag) {
      return flag;
    }
    if (numbers1 === null) {
      return;
    }
    for (let i = 0; i < numbers1.length; i++) {
      const item = numbers1[i];
      if (typeof item === "object" && !Array.isArray(item)) {
        objectHelper(item, numbers2[i]);
      } else if (Array.isArray(item)) {
        arrayHelper(item, numbers2[i]);
      } else if (item !== numbers2[i]) {
        flag = false;
      }
    }
  }

  if (typeof valueA !== "object") {
    if (valueA !== valueB) {
      return false;
    }
  }

  if (Array.isArray(valueA)) {
    if (!Array.isArray(valueB)) {
      return false;
    }
    arrayHelper(valueA, valueB);
    if (!flag) {
      return flag;
    }
  }

  if (typeof valueA === "object" && !Array.isArray(valueA)) {
    if (typeof valueB !== "object" || Array.isArray(valueB)) {
      return false;
    }
    objectHelper(valueA, valueB);
    if (!flag) {
      return false;
    }
  }

  return true;
}

// console.log(deepEqual({ foo: "bar" }, { foo: "bar" }));
console.log(
  deepEqual(
    { foo: "bar", item: [1, 2, { baz: "baz" }] },
    { foo: "bar", item: [1, 2, { baz: "baz" }], id: 1 }
  )
);

const test1 = [1, 2, 3];
const test2 = [1, 2, 3];
