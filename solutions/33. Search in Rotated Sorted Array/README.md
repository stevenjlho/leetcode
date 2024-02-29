# [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/description/)

## Intuition

The key principle is to identify which half of the array is in sorted order and then determine if the target value lies within that sorted half.

## Approach

1. Return `-1` if `nums` is empty or null, indicating that the target is not present.
2. Set `low` and `high` to the start and end of the array to define the search boundaries.
3. Continuously narrow down the search interval based on comparisons with the middle element until the target is found or the interval becomes invalid (i.e., low > high).
   - Determine the mid-point of the current interval using low and high to avoid potential overflow.
   - If the middle element is the target, return its index.
   - Determine the sorted Half. Identifying this sorted half allows us to apply binary search principles.
   - If `nums[low] <= nums[mid]`, the left half is sorted.
     - Check if `target` is in the range `nums[low]` to `nums[mid]`. If yes, narrow the search to the left half by setting `high = mid - 1`. Else, search the right half (`low = mid + 1`).
   - Otherwise, the right half is sorted.
     - Check if `target` is in the range `nums[mid]` to `nums[high]`. If yes, narrow the search to the right half (`low = mid + 1`). Else, search the left half (`high = mid - 1`).
4. If the loop ends without finding the target, return -1, indicating that the target is not in the array.

## Complexity

- Time complexity: O(log n), as the algorithm divides the search space in half with each step, which is characteristic of binary search algorithms.
- Space complexity: O(1), as the solution uses constant extra space.

## Code

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (!nums || nums.length === 0) return -1; // Edge case: empty array

  let low = 0,
    high = nums.length - 1; // Initialize pointers

  while (low <= high) {
    let mid = Math.floor((low + high) / 2); // Calculate mid to avoid overflow

    if (nums[mid] === target) return mid; // Target found

    // Check if the left half is sorted
    if (nums[low] <= nums[mid]) {
      // Target is in the sorted left half
      if (target >= nums[low] && target < nums[mid]) {
        high = mid - 1; // Narrow search to left half
      } else {
        low = mid + 1; // Narrow search to right half
      }
    } else {
      // Target is in the sorted right half
      if (target > nums[mid] && target <= nums[high]) {
        low = mid + 1; // Narrow search to right half
      } else {
        high = mid - 1; // Narrow search to left half
      }
    }
  }

  return -1; // Target not within array
};
```
