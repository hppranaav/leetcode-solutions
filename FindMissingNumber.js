const missingNumber = function (nums) {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  if (n === 1) {
    if (nums[0] === 0) {
      return 1;
    } else return 0;
  }
  if (nums[0] !== 0) return 0;
  for (let i = 0; i < n - 1; i++) {
    if (nums[i + 1] - nums[i] !== 1) {
      return nums[i] + 1;
    }
  }
  return n;
};
