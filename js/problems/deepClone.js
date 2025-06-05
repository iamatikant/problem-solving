function deepClone(value) {
  if (typeof value !== "object" || value === null) {
    return value;
  }

  const helper = (myObject) => {
    const result = {};
    for (let key in myObject) {
      let current = myObject[key];
      if (current && typeof current !== "object") {
        result[key] = current;
      } else if (Array.isArray(current)) {
        const currentArray = [];
        for (let element of current) {
          if (typeof element === "object") {
            currentArray.push(helper(element));
          } else {
            currentArray.push(element);
          }
        }
        result[key] = currentArray;
      } else {
        for (let item in current) {
          result[key] = helper(item);
        }
      }
    }
    return result;
  };

  return helper(value);
}

const test = {
  user: { role: "admin", id: "123" },
};

console.log("test me: ", deepClone(test));
