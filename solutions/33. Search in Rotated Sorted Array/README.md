# [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/description/)

## Intuition

This is achieved by identifying which half is correctly sorted and then checking if the target falls within that sorted range.

## Approach

1.  Set `low` and `high` to the start and end of the array to define the search boundaries.
2.  Continue as long as `low` is less than or equal to `high`, ensuring the entire search range is covered.

    - Calculating `mid` divides the array into two halves, a crucial step in binary search.
    - If `nums[mid]` is equal to the target, the search can be immediately concluded.
    - Identify Sorted Half: If the left half is sorted (`nums[low] <= nums[mid]`):

      - If the target is within the left half's range, move `high` to `mid - 1`.
      - Otherwise, shift `low` to `mid + 1` to search in the right half.

    - If the right half is sorted:
      - If the target is within the right half's range, move `low` to `mid + 1`.
      - Otherwise, shift `high` to `mid - 1` to search in the left half.

3.  If the loop ends without finding the target, return -1, indicating that the target is not in the array.

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
  if (!nums || nums.length === 0) {
    return -1; // Early return for empty array edge case
  }
  let low = 0,
    high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2); // Calculate the middle index

    if (nums[mid] === target) {
      return mid; // Target found, return index
    }

    // Check if left half is sorted
    if (nums[low] <= nums[mid]) {
      // Target in the sorted left half
      if (target >= nums[low] && target <= nums[mid]) {
        high = mid - 1; // Narrow search to left half
      } else {
        low = mid + 1; // Target in the unsorted right half
      }
    }
    // Right half is sorted
    else {
      // Target in the sorted right half
      if (target >= nums[mid] && target <= nums[high]) {
        low = mid + 1; // Narrow search to right half
      } else {
        high = mid - 1; // Target in the unsorted left half
      }
    }
  }

  return -1; // Target not present in the array
};
```
