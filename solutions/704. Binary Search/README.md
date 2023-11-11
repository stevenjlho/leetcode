# [704. Binary Search](https://leetcode.com/problems/binary-search/description/)

## Intuition

Binary search efficiently locates an element in a sorted array by repeatedly halving the search interval, drastically reducing the number of comparisons needed compared to a linear search.

## Approach

1.  Start with two pointers representing the bounds (`low` and `high`) of the current search interval within the array.
2.  Enter a while loop which continues as long as `low` is less than or equal to `high`.
    - Calculate the middle index between `low` and `high`.
    - If the middle element is equal to `target`, return the `middle` index as the found location of `target`.
    - If the middle element is less than `target`, move the `low` pointer to `middle + 1` to search the right half.
    - If the middle element is greater than `target`, move the `high` pointer to `middle - 1` to search the left half.
3.  If the loop ends without finding the target, return `-1`.

## Complexity

- Time complexity: O(log n), where `n` is the number of elements in the input array. Each step of the binary search cuts the search space in half.
- Space complexity: O(1), as the algorithm uses a constant amount of extra space, regardless of the input array's size.

## Code

```javascript
/**
 * Implements binary search to find the index of a target value in a sorted array.
 * @param {number[]} nums - The sorted array to search within.
 * @param {number} target - The value to search for.
 * @return {number} - The index of the target if found; otherwise, -1.
 */
var search = function (nums, target) {
  let low = 0; // Starting index of the search range
  let high = nums.length - 1; // Ending index of the search range

  // While the search range is valid
  while (low <= high) {
    const middle = Math.floor((low + high) / 2); // Calculate the mid-point
    // Check if the mid-point is the target
    if (nums[middle] == target) return middle; // Target found, return index
    // Adjust the search range based on comparison
    if (nums[middle] < target) {
      low = middle + 1; // Search right half
    } else {
      high = middle - 1; // Search left half
    }
  }

  // Target not found
  return -1;
};
```
