// Squash Object
// Author
// Zhenghao He
// Engineering Manager, Robinhood
// Languages
// Difficulty
// Medium
// Recommended duration to spend during interviews
// 20mins
// Users completed
// 1.33k done
// Implement a function that returns a new object after squashing the input object into a single level of depth where nested keys are "squashed" together with a period delimiter (.).

// Examples
// const object = {
//   a: 5,
//   b: 6,
//   c: {
//     f: 9,
//     g: {
//       m: 17,
//       n: 3,
//     },
//   },
// };

// squashObject(object); // { a: 5, b: 6, 'c.f': 9, 'c.g.m': 17, 'c.g.n': 3 }
// Any keys with null-ish values (null and undefined) are still included in the returned object.

// const object = {
//   a: { b: null, c: undefined },
// };
// squashObject(object); // { 'a.b': null, 'a.c': undefined }
// It should also work with properties that have arrays as the value:

// const object = { a: { b: [1, 2, 3], c: ['foo'] } };
// squashObject(object); // { 'a.b.0': 1, 'a.b.1': 2, 'a.b.2': 3, 'a.c.0': 'foo' }
// Empty keys should be treated as if that "layer" doesn't exist.

// const object = {
//   foo: {
//     '': { '': 1, bar: 2 },
//   },
// };
// squashObject(object); // { foo: 1, 'foo.bar': 2 }

/**
 * @param {Object} obj
 * @return {Object}
 */
function squashObject(obj) {
  const newObj = {};

  const helper = (param, prefix = "") => {
    for (let key in param) {
      const value = param[key];
      let newKey = "";
      if (prefix) {
        if (!!key) {
          newKey = `${prefix}.${key}`;
        } else {
          newKey = prefix;
        }
      } else {
        newKey = key;
      }
      if (value && typeof value === "object" && !Array.isArray(value)) {
        helper(value, newKey);
      } else if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          helper({ [i]: value[i] }, newKey);
        }
      } else {
        newObj[newKey] = value;
      }
    }
  };

  helper(obj);
  return newObj;
}

const test = {
  foo: {
    "": {
      "": 1,
      bar: 2,
    },
    a: 1,
  },
};

const foo = {
  a: ["hi", "bye"],
};

const everything = {
  a: "hi",
  b: {
    a: null,
    b: ["foo", "", null, "bar"],
    d: "hello",
    e: {
      a: "yo",
      b: undefined,
      c: "sup",
      d: 0,
      f: [
        { foo: 123, bar: 123 },
        { foo: 465, bar: 456 },
      ],
    },
  },
  c: "world",
};

console.log(squashObject(test));
console.log(squashObject(foo));
console.log(squashObject(everything));
