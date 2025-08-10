const longestSubstringWithoutRepeatingCharacter = (str) => {
  if (!str) {
    return 0;
  }

  let map = new Map();
  let maxLength = 0;
  let left = 0;
  let right = 0;

  while (right < str.length) {
    const current = str[right];
    if (map.has(current) && map.get(current) >= left) {
      left = map.get(current) + 1;
    }

    map.set(current, right);
    maxLength = Math.max(right - left + 1, maxLength);
    right++;
  }
  return maxLength;
};
