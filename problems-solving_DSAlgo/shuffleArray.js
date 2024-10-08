/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
  this.initialNumber = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.initialNumber;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
