const test = [1, 2, 2, 3, 3, 4, 5, 6];

// op: [1,2,3,4,5,6,0,0], 6

function filter_elements(arr) {
  let length = 0;

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    const next = arr[i + 1];
    if (next !== curr) {
      length++;
    } else {
      arr.splice(i + 1, 1);
      arr.push(0);
    }
  }

  return arr;
}

console.log(filter_elements(test));
