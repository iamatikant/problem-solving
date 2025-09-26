var findMedianSortedArrays = function (nums1, nums2) {
  const isEvenLength = (nums1.length + nums2.length) % 2 === 0 ? true : false;
  let medianIndex = Math.floor((nums1.length + nums2.length) / 2) + 1;
  let counter = 0;
  let i = 0,
    j = 0;
  let result = [];
  while (counter < medianIndex) {
    if (i >= nums1.length || j >= nums2.length) {
      result.push(nums1[i] ? nums1[i] : nums2[j]);
      i++;
      j++;
      counter++;
      continue;
    }
    if (nums1[i] < nums2[j]) {
      result.push(nums1[i]);
      i++;
    } else if (nums2[j] < nums1[i]) {
      result.push(nums2[j]);
      j++;
    } else {
      result.push(nums1[i], nums2[j]);
      i++;
      j++;
    }
    counter++;
  }

  return isEvenLength
    ? (result[result.length - 1] + result[result.length - 2]) / 2 || 0
    : result[result.length - 1] || 0;
};

// console.log(findMedianSortedArrays([1, 2], [3, 4]));
// console.log(findMedianSortedArrays([1, 2], [2]));
console.log(findMedianSortedArrays([-1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1]));
