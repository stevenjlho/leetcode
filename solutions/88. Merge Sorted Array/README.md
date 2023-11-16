# [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/description/)

## Intuition

We can use two pointers `i` and `j` to merge the two arrays and iterate through `nums2` from the end.

## Approach

1. Initialize `i` to `m - 1` to point at the last valid index of `nums1`.
   Initialize `j` to `n - 1` to point at the last index of `nums2`.
   Initialize `last` to `m + n - 1`, indicating the last position in the merged `nums1` array.
2. Iterate while `j` is non-negative (indicating elements in `nums2` are yet to be merged). Since `nums1` already contains its elements in place, we only need to focus on merging elements from `nums2`.

   - Compare elements at `i` and `j`. If `nums1[i]` is larger (and `i` is in bounds), place `nums1[i]` at `last` and decrement `i`.
   - Otherwise, place `nums2[j]` at `last` and decrement `j`.
   - Decrement `last` after each placement.

3. The loop continues until all elements from `nums2` are positioned correctly in `nums1`.

## Complexity

- Time complexity: O(m+n), as each element from `nums1` and `nums2` is looked at exactly once.
- Space complexity: O(1), as the merge is performed in-place with no additional data structures used.

## Code

```javascript
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1; // Pointer for the end of the first part of nums1
  let j = n - 1; // Pointer for the end of nums2
  let last = m + n - 1; // Pointer for the last position in nums1

  // Iterate and merge elements from nums2 into nums1
  while (j >= 0) {
    // Choose the larger element from nums1 or nums2
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[last] = nums1[i];
      i--;
    } else {
      nums1[last] = nums2[j];
      j--;
    }
    last--;
  }
};
```
