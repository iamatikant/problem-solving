/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let count = 0;
  let result = null;
  const used = Array(n + 1).fill(false);

  const backtrack = (path) => {
    if (result) return; // early stop if found

    if (path.length === n) {
      count++;
      if (count === k) result = path.join('');
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (used[i]) continue;

      used[i] = true;
      path.push(i);
      backtrack(path);
      path.pop();
      used[i] = false;
    }
  };

  backtrack([]);
  return result;
};

console.log(getPermutation(3, 3));
