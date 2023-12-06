# [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/description/)

## Intuition

This is achieved by identifying which half is correctly sorted and then checking if the target falls within that sorted range.

## Approach

1.  Set `low` and `high` to the start and end of the array, respectively.
2.  Use a while loop to iterate while `low <= high`.

    - Calculate the middle index `mid`, which is used to divide the array into two halves.
    - If `nums[mid]` equals the target, return the index `mid`.
    - If the left half is sorted (`nums[low] <= nums[mid]`):
      - Check if the target is within this range (`nums[low]` to `nums[mid]`). If so, move `high` to `mid - 1`; otherwise, move `low` to `mid + 1`.
    - If the right half is sorted:
      - Check if the target is within this range (`nums[mid]` to `nums[high]`). If so, move `low` to `mid + 1`; otherwise, move `high` to `mid - 1`.

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
    return -1;
  }
  let low = 0,
    high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // Check if the left half is sorted
    if (nums[low] <= nums[mid]) {
      if (target >= nums[low] && target <= nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    // Right half is sorted
    else {
      if (target >= nums[mid] && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
};
```
