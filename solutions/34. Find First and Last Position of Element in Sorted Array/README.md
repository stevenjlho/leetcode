# [34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

## Intuition

The key principle is to use a modified binary search twice: first, to find the initial occurrence (lower bound) of the target, and second, to find the position just past the last occurrence of the target (by searching for target + 1 and subtracting one from the result).

## Approach

1. Call `lowerBound` to find the start position of the target.
   - Initialize `low` and `high` pointers to define the search range as the start and end of the array, respectively.
   - Continue as long as `low` is less than or equal to `high`.
     - Use `Math.floor(low + (high - low) / 2)` to calculate the middle index of the current range. Using `low + (high - low) / 2` instead of `(low + high) / 2` avoids potential integer overflow issues.
     - If `nums[mid] < target`, the target must be in the right half of the current range. Update `low` to `mid + 1`.
     - Otherwise, the target is in the left half, or `nums[mid]` is the target. Update `high` to `mid - 1`.
   - The loop exits when `low` is the smallest index greater than `target`, or the exact index where `target` matches. So, `return low` gives the correct insert position.
3. Use the `lowerBound` function with the `target` to find first Occurrence:. If the target is not found or the element at the returned index doesn't match the target, return `[-1, -1]`.
4. Use the `lowerBound` function with `target + 1` to find the insertion point for `target + 1`, which is just past the last occurrence of the target, and then subtract one to get the index of the last occurrence.
5. The first and last positions of the target in the array form the desired range.

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
var searchRange = function (nums, target) {
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

  // Find the first occurrence of the target
  const start = lowerBound(nums, target);
  // If target not found, return [-1, -1]
  if (start === nums.length || nums[start] !== target) return [-1, -1];

  // Find the position just after the last occurrence of the target
  const end = lowerBound(nums, target + 1) - 1;
  // Return the range [start, end] where the target is found
  return [start, end];
};
```
