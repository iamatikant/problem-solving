let obj = {
  i: 0,
};

const handler = {
  get: (obj, i) => {
    obj[i] = obj[i] + 1;
    return obj[i];
  },
};

obj = new Proxy(obj, handler);

console.log(obj.i);
console.log(obj.i);
console.log(obj.i);
console.log(obj.i);
