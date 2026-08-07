/*
LeetCode 88 - Merge Sorted Array

Question:

You are given two sorted integer arrays nums1 and nums2.

- nums1 has a length of m + n.
- The first m elements are valid.
- The last n elements are 0 and are only extra space.
- nums2 has n valid elements.

Merge nums2 into nums1 so that nums1 becomes one sorted array.

Do not return anything.
Modify nums1 in-place.
*/

// Example 1
// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6], n = 3

// Output:
// [1,2,2,3,5,6]

// Example 2
// Input:
// nums1 = [1], m = 1
// nums2 = [], n = 0

// Output:
// [1]

// Example 3
// Input:
// nums1 = [0], m = 0
// nums2 = [1], n = 1

// Output:
// [1]

function merge(nums1, m, nums2, n) {

for (i = 0; i<nums1.length; i++){
  for(j=0; j<nums2.length;j++){
console.log(nums1[i])
  }
}




}



// -------------------- Test Cases --------------------

// let nums1 = [1,2,3,0,0,0];
// merge(nums1, 3, [2,5,6], 3);
console.log(nums1); // [1,2,2,3,5,6]

// nums1 = [1];
// merge(nums1, 1, [], 0);
console.log(nums1); // [1]

// nums1 = [0];
// merge(nums1, 0, [1], 1);
console.log(nums1); // [1]