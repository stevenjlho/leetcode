# [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/description/)

## Intuition

The idea is to randomly choose a pivot and partition the array into three parts: elements greater than the pivot, elements equal to the pivot, and elements less than the pivot.

## Approach

1. If the input array is null or empty, the function returns immediately, as no kth largest element can be found.
2. Choose a random element from `nums` as the pivot. Randomization helps improve the average time complexity by avoiding worst-case scenarios.
3. The array is partitioned into three subarrays:
   - `left`: Elements greater than the pivot.
   - `mid`: Elements equal to the pivot.
   - `right`: Elements less than the pivot.
4. If the length of `left` is at least `k`, recursively find the kth largest element within `left`.
5. If `k` is larger than the combined lengths of `left` and `mid`, subtract their lengths from `k` and recursively find the new kth largest element within `right`.
6. Otherwise, return the first element of `mid`, as the pivot itself is the kth largest element.

## Complexity

- Time complexity: O(n). The algorithm reduces the size of the problem by approximately half in each step (similar to Quick Sort). O(n^2). This occurs when the pivot ends up being the smallest or largest element repeatedly, similar to the worst case in Quick Sort.
- Space complexity: O(n) for the recursive calls stack. The space can be reduced by implementing the partitioning in place instead of using additional arrays for `left`, `mid`, and `right`.

## Code

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  if (!nums || nums.length === 0) return; // Base case: empty array

  // Select a random pivot from the array
  let pivot = nums[Math.floor(Math.random() * nums.length)];

  // Partition the array into three parts
  let left = nums.filter((x) => x > pivot); // Elements greater than pivot
  let mid = nums.filter((x) => x === pivot); // Elements equal to pivot
  let right = nums.filter((x) => x < pivot); // Elements less than pivot

  // Determine the sizes of the partitions
  let L = left.length,
    M = mid.length;

  // Recursive search in the correct partition
  if (k <= L) {
    // kth largest is in the left partition
    return findKthLargest(left, k);
  } else if (k > L + M) {
    // kth largest is in the right partition
    return findKthLargest(right, k - L - M);
  } else {
    // Pivot is the kth largest
    return mid[0];
  }
};
```
