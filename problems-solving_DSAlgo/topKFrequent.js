// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  if (nums.length <= 1) {
    return [nums[0]];
  }

  const frequency = new Map();
  const result = [];

  for (element of nums) {
    if (!frequency.has(element)) {
      frequency.set(element, 1);
    } else {
      const newOccurrence = frequency.get(element) + 1;
      frequency.set(element, newOccurrence);
    }
  }

  for (const element of frequency.keys()) {
    console.log('element: ', element);
    if (result.length < k) {
      result.push(element);
      e;
      continue;
    }
    const occurrence = frequency.get(element);
    const minElement =
      frequency.get(result[0]) < frequency.get(result[1])
        ? result[0]
        : result[1];
    if (frequency.get(minElement) < occurrence) {
      result.filter((item) => item !== minElement);
      result.push(element);
    }
  }
  return result;
};

// const nums = [1];
// const k = 1;
// console.log(topKFrequent(nums, k));

// const nums = [1, 1, 1, 2, 2, 3];
// const k = 2;
// console.log(topKFrequent(nums, k));

const nums = [3, 0, 1, 0];
const k = 1;
console.log(topKFrequent(nums, k));
