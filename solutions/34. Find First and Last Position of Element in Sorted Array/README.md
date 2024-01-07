# [34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

## Intuition

The key concept is to efficiently narrow down the search space to locate the target's occurrences.

## Approach

1. Call `lowerBound` to find the start position of the target.
   - Initialize `low` and `high` pointers to define the search range as the start and end of the array, respectively.
   - Continue as long as `low` is less than or equal to `high`.
     - Use `low + ((high - low) >> 1)` to the middle index of the current range. Using `low + ((high - low) >> 1)` instead of `(low + high) / 2` avoids potential integer overflow issues. The bitwise shift `>> 1` efficiently computes the division by 2.
     - If `nums[mid] < target`, the target must be in the right half of the current range. Update `low` to `mid + 1`.
     - Otherwise, the target is in the left half, or `nums[mid]` is the target. Update `high` to `mid - 1`.
   - The loop exits when `low` is the smallest index greater than `target`, or the exact index where `target` matches. So, `return low` gives the correct insert position.
2. If the start position is at the end of the array or the element at the start position is not the target, return `[-1, -1]` (target not found).
3. Otherwise, call `lowerBound` with `target + 1` to find the start position of the `target - 1`, then just subtract 1(`-1`) to get the actual index of the last occurrence of target.
4. Return the range [start, end] where the target is found

## Complexity

- Time complexity: O(log n). Both calls to `lowerBound` are binary searches, each taking O(log n) time.
- Space complexity: O(1). The solution uses constant extra space.

## Code

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // Find the first occurrence of the target
  const start = lowerBound(nums, target);
  // If target not found, return [-1, -1]
  if (start === nums.length || nums[start] !== target) return [-1, -1];

  // Find the position just after the last occurrence of the target
  const end = lowerBound(nums, target + 1) - 1;
  // Return the range [start, end] where the target is found
  return [start, end];
};

// Helper function to find the lower bound
var lowerBound = function (nums, target) {
  let low = 0; // Start index of the search range
  let high = nums.length - 1; // End index of the search range

  while (low <= high) {
    const middle = Math.floor(low + (high - low) / 2); // Middle index

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
