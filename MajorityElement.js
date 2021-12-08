const findMajority = function (nums) {
  let nos = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (nos.has(nums[i])) {
      nos.set(nums[i], nos.get(nums[i]) + 1);
    } else {
      nos.set(nums[i], 1);
    }
  }
  for (const [key, values] of nos.entries()) {
    if (values > Math.floor(nums.length / 2)) {
      return key;
    }
  }
};
