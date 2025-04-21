// Classnames
// Languages
// Difficulty
// Medium
// Recommended duration to spend during interviews
// 20mins
// Users completed
// 4.53k done
// classnames is a commonly-used utility in modern front end applications to conditionally join CSS class names together. If you've written React applications, you likely have used a similar library.

// Implement the classnames function.

// Examples
// classNames('foo', 'bar'); // 'foo bar'
// classNames('foo', { bar: true }); // 'foo bar'
// classNames({ 'foo-bar': true }); // 'foo-bar'
// classNames({ 'foo-bar': false }); // ''
// classNames({ foo: true }, { bar: true }); // 'foo bar'
// classNames({ foo: true, bar: true }); // 'foo bar'
// classNames({ foo: true, bar: false, qux: true }); // 'foo qux'
// Arrays will be recursively flattened as per the rules above.

// classNames('a', ['b', { c: true, d: false }]); // 'a b c'
// Values can be mixed.

// classNames(
//   'foo',
//   {
//     bar: true,
//     duck: false,
//   },
//   'baz',
//   { quux: true },
// ); // 'foo bar baz quux'
// Falsey values are ignored.

// classNames(null, false, 'bar', undefined, { baz: null }, ''); // 'bar'
// In addition, the returned string should not have any leading or trailing whitespace.

// Resources
// classnames library on GitHub
// clsx library on GitHub: A newer version which serves as a faster and smaller drop-in replacement for classnames.

/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
function classNames(...args) {
  let result = [];
  // args = [...args].flat(Infinity);
  let helper = (...args) => {
    for (let element of [...args]) {
      console.log("elemtn: ", element);
      if (typeof element === "object" && !Array.isArray(element)) {
        for (const item in element) {
          if (element[item]) {
            result.push(item);
          }
        }
      } else if (Array.isArray(element)) {
        helper(...element);
      } else {
        if (!!element) result.push(element);
      }
    }
    return;
  };
  helper(...args);
  return result.join(" ");
}
classNames("boo", true && "loo", false && "booz", {
  foo: true,
  bar: false,
  baz: 1,
});

// console.log(classNames({ a: true }, { b: false }));
// console.log(classNames("a", "b"));

// classNames("foo", "bar"); // 'foo bar'
// classNames("foo", { bar: true }); // 'foo bar'
// classNames({ "foo-bar": true }); // 'foo-bar'
// classNames({ "foo-bar": false }); // ''
// classNames({ foo: true }, { bar: true }); // 'foo bar'
// classNames({ foo: true, bar: true }); // 'foo bar'
// classNames({ foo: true, bar: false, qux: true }); // 'foo qux'
// classNames("a", ["b", { c: true, d: false }]); // 'a b c'
// classNames(
//   "foo",
//   {
//     bar: true,
//     duck: false,
//   },
//   "baz",
//   { quux: true }
// ); // 'foo bar baz quux'
