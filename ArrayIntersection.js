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

/**
 * The indexOf() function returns the first index value
 * of the first occurance of the value in the array;
 *
 * Here we filter the array once to include all common items
 * This array will include duplicate items if they are present
 * in any of the arrays
 * We apply a second filter to remove the duplicates by
 * checking if the first occurance of the value is of
 * the same index it is on.
 */

// Using filter function
// const intersect = function (nums1, nums2) {
//   let result = [];
//   if (nums1.length < nums2.length) {
//     result = nums1.filter(value => {
//       return nums2.includes(value);
//     });
//   } else {
//     result = nums2.filter(value => {
//       return nums1.includes(value);
//     });
//   }
//   // .filter(function (value, i, arr) {
//   //   return arr.indexOf(value) === i;
//   // })
//   console.log(result);
// };

// brute force
// const intersect = function (nums1, nums2) {
//   let inters = [];
//   for (let i = 0; i < nums1.length; i++) {
//     for (let j = 0; j < nums2.length; j++) {
//       if (inters.includes(nums2[j])) continue;
//       if (nums1[i] === nums2[j]) {
//         inters.push(nums1[i]);
//       }
//     }
//   }
//   console.log(inters);
// };

intersect(nums1, nums2);
