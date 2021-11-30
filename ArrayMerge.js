let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let nums = [];
const merge = function (nums1, m, nums2, n) {
  if (m === 0 && n !== 0) {
    nums1 = nums2;
  } else if (m === 0 && n === 0) {
    nums1 = [];
  } else if (m !== 0 && n === 0) {
  } else {
    let i = 0,
      j = 0;
    nums1 = nums1.splice(0, m);
    console.log(nums1);
    while (i < m || j < n) {
      if (i !== m && j !== n) {
        if (nums1[0] < nums2[0]) {
          nums.push(nums1.shift());
          i++;
        } else if (nums1[0] > nums2[0]) {
          nums.push(nums2.shift());
          j++;
        } else if (nums1[0] === nums2[0]) {
          nums.push(nums1.shift());
          nums.push(nums2.shift());
          i++;
          j++;
        }
      } else if (i === m && j !== n) {
        nums = [].concat(nums, nums2);
        j = n;
      } else if (i !== m && j === n) {
        nums = [].concat(nums, nums1);
        i = m;
      }
    }
    nums1.length = 0;
    nums1 = nums;
  }
  console.log(nums1);
};

merge(nums1, 3, nums2, nums2.length);