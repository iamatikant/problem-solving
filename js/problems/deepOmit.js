// function deepOmit(val, keys) {
//   const result = JSON.parse(JSON.stringify(val));
//   const objectKeys = Object.keys(val);
//   const helper = (obj, keyArray) => {
//     for (const key of keyArray) {
//       if (keys.indexOf(key) !== -1) {
//         delete obj[key];
//       } else if (typeof obj[key] === "object") {
//         if (!Array.isArray(obj[key])) {
//           const keysArray = Object.keys(obj[key]);
//           helper(obj[key], keysArray);
//         } else {
//           const flatArray = obj[key].flat(Infinity);
//           for (let element of obj[key]) {
//             if (typeof element === "object") {
//               helper(element, Object.keys(element));
//             }
//           }
//         }
//       }
//     }
//   };
//   helper(result, objectKeys);

//   return result;
// }

function deepOmit(val, keys) {
  const result = JSON.parse(JSON.stringify(val));
  const helper = (obj) => {
    console.log("obj: ", obj);
    if (obj && typeof obj === "object" && !Array.isArray(obj)) {
      for (const key in obj) {
        if (keys.includes(key)) {
          delete obj[key];
        } else {
          helper(obj[key]); // Recursive on nested object
        }
      }
    } else if (Array.isArray(obj)) {
      for (const item of obj) {
        helper(item);
      }
    }
  };

  helper(result);
  return result;
}

const dataWithArray = {
  a: 1,
  b: [{ c: 2 }, [3]],
  c: [[{ a: 2, b: 3 }]],
};

console.log("datawitharray: ", dataWithArray);

const data = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: {
      f: 4,
      g: 5,
    },
  },
};

// console.log(deepOmit(data, ["b", "f"]));
console.log(deepOmit(dataWithArray, ["b", "e"]));
