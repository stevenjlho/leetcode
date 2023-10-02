# [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/description/)


## Intuition
We can use two pointers `i` and `j` to merge the two arrays and iterate through `nums2` from the end.
If we were to place the element of `nums2` from the beginning of `nums1`, we would occasionally miss out the element of `nums1`.


## Approach

1. Initialize i=m-1 to point at the m-1 index of the `nums2` array. 
   Initialize j=n-1 to point at the n-1 index of the nums2 array.
2. Initialize `k` to `m + n - 1`, indicating the last position in the merged `nums1` array.
3. Iterate through the `nums2` array from the end, starting with pointers `i` and `j`. Compare the elements at these positions.
4. If `i` is greater than or equal to 0, and the element at index `i` in `nums1` is greater than the element at index `j` in `nums2`, it means the element at `i` in `nums1` is larger and should be placed in position k in `nums1`. Afterward, decrement i to compare the next element in `nums1`.
5. If the condition in the previous step is not met, it has the opposite meaning of last step but do the similar thing, we place the element at index `j` in `nums2` into position `k` in `nums1` and decrement `j` to compare the next element in `nums2`.
6. Decrease `k` after placing an element in `nums1`.
7. Continue step3 to step 6 until all elements from `nums2` are merged into `nums1`.


## Complexity
- Time complexity: O(m+n) as we are inserting m+n elements in the nums1 array.
- Space complexity: O(1) We are not using any extra space.

```Javascript
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var mergeSortedArray = function(nums1, m, nums2, n) {
    var i = m - 1;
    var j = n - 1;
    var k = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};``
