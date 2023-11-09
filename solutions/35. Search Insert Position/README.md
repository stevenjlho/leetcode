# [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/description/)

## Intuition

By comparing the target with the midpoint of the current search interval in a sorted array, we effectively halve the search space with each iteration, which results in an efficient search process.

## Approach

1.  Initialize `low` and `high` pointers to define the search range as the start and end of the array, respectively.
2.  While `low` is not greater than `high`, perform the following:
    - Find the middle index between `low` and `high`.
    - If the target is found at the midpoint, return the middle index immediately as the target's position.
    - If the middle element is less than the target, narrow the search to the right half by moving `low` just past `middle`.
    - If the middle element is equal to or greater than the target, narrow the search to the left half by moving `high` just before `middle`.
3.  The loop terminates when `low` surpasses `high`, indicating that the target is not present and `low` represents the position where the target can be inserted to maintain the sorted order of the array.

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
    const middle = Math.floor((low + high) / 2); // Middle index

    // If the target is found, return the index
    if (nums[middle] === target) return middle;

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
