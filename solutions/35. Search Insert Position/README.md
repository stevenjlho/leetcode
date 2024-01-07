# [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/description/)

## Intuition

Binary search algorithm narrows down the search range by comparing the target with the middle element of the current range, reducing the problem size by half in each step.

## Approach

1. Initialize `low` and `high` pointers to define the search range as the start and end of the array, respectively.
2. Continue as long as `low` is less than or equal to `high`.
    - Use `low + ((high - low) >> 1)` to the middle index of the current range. Using `low + ((high - low) >> 1)` instead of `(low + high) / 2` avoids potential integer overflow issues. The bitwise shift `>> 1` efficiently computes the division by 2.
    - If `nums[mid] < target`, the target must be in the right half of the current range. Update `low` to `mid + 1`.
    - Otherwise, the target is in the left half, or `nums[mid]` is the target. Update `high` to `mid - 1`.
3. The loop exits when `low` is the smallest index greater than `target`, or the exact index where `target` matches. So, `return low` gives the correct insert position.

## Complexity

- Time complexity: O(log n), where n is the number of elements in the array. The binary search halves the search space with each iteration.
- Space complexity: O(1), no extra data structures are used.

## Code

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let low = 0; // Start index of the search range
  let high = nums.length - 1; // End index of the search range

  while (low <= high) {
    const middle = Math.floor(low + ((high - low ) / 2)); // Middle index


    // If the target is greater than the middle element, search the right half
    if (nums[middle] < target) {
      low = middle + 1;
    }
    // If the target is less than the middle element, search the left half
    else {
      high = middle - 1;
    }
  }

  // If the target is not found, `low` will be the insert position
  return low;
};
```
