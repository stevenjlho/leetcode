# [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/description/)

## Intuition

By comparing the target with the midpoint of the current search interval in a sorted array, we effectively halve the search space with each iteration, which results in an efficient search process.

## Approach

1.  Initialize `low` and `high` pointers to define the search range as the start and end of the array, respectively.
2.  Employ a while loop to conduct the search as long as `low` is less than or equal to `high`:
    - Find the middle index between `low` and `high`.
    - If the middle element is less than the target, adjust the `low` pointer to the index right after `mid` to search the upper half of the array.
    - If the middle element is equal to or greater than the target, adjust the `high` pointer to the index right before `mid` to search the lower half.
3.  The loop terminates when `low` surpasses `high`, indicating that the target is not present and `low` is the correct insertion index to maintain the array's order.

## Complexity

- Time complexity: O(log n), where n is the number of elements in the array. The binary search halves the search space with each iteration.
- Space complexity: O(1), no extra data structures are used.

## Code

```javascript
/**
 * Uses binary search to find the insert position for a target value in a sorted array.
 * @param {number[]} nums - The input sorted array.
 * @param {number} target - The target value to insert.
 * @return {number} - The index to insert the target value at.
 */
var searchInsert = function (nums, target) {
  let low = 0; // Start of the search interval.
  let high = nums.length - 1; // End of the search interval.

  // Perform binary search.
  while (low <= high) {
    // Calculate the mid-point.
    let mid = low + Math.floor((high - low) / 2);

    // Narrow down the search interval.
    if (nums[mid] < target) {
      low = mid + 1; // Target must be in the upper half.
    } else {
      high = mid - 1; // Target must be in the lower half or at mid.
    }
  }

  // Low is now the insert position for the target.
  return low;
};
```
