let nums1 = [1, 3, 3, 1],
  nums2 = [1, 2];

const intersect = function (nums1, nums2) {
  let i = 0,
    j = 0,
    result = [];
  nums1.sort(function compareNumbers(a, b) {
    return a - b;
  });
  nums2.sort(function compareNumbers(a, b) {
    return a - b;
  });
  while (i !== nums1.length && j !== nums2.length) {
    if (nums1[i] > nums2[j]) j++;
    else if (nums1[i] < nums2[j]) i++;
    else if (nums1[i] === nums2[j]) {
      result.push(nums1[i]);
      i++;
      j++;
    }
  }
};
