const ip1 = [1, 2, 2, 2, 3, 3, 5, 6, 7, 1];
const ip2 = [1, 2, 2, 10, 1, 1];
// op: [1, 2, 2, 1]

function findUnion(nums1, nums2) {
  const map = new Map();
  const result = [];
  for (const element of nums1) {
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  }
  for (const element of nums2) {
    if (map.has(element) && map.get(element) >= 1) {
      result.push(element);
      map.set(element, map.get(element) - 1);
    }
  }
  return result;
}

console.log(findUnion(ip1, ip2));
