# [153. Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/)

## Intuition

By comparing the middle element with the rightmost element, we can determine which half of the array contains the minimum element and adjust our search space accordingly.

## Approach

1. Initialize two pointers, `low` and `high`, to the start and end of the array, respectively.
2. Use a `while` loop to continue the search as long as `low` is less than `high`.
3. Calculate the middle index `mid` using `low` and `high`.
4. Compare the element at the middle index (`nums[mid]`) with the element at the `high` index:
   - If `nums[mid]` is less than `nums[high]`, this implies that the minimum element is in the left half of the array (including `mid`). Therefore, move the `high` pointer to `mid`.
   - If `nums[mid]` is greater than `nums[high]`, the minimum element must be in the right half of the array. Therefore, move the `low` pointer to `mid + 1`.
5. The loop continues until `low` and `high` converge. The element at the `low` index is the minimum element.

## Complexity

- Time complexity: O(log n), where n is the number of elements in the array. The solution uses a binary search approach, which divides the search space in half with each iteration.
- Space complexity: O(1), as the solution uses constant extra space.

## Code

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let low = 0,
    high = nums.length - 1;

  // Continue searching while the search space has more than one element
  while (low < high) {
    let mid = Math.floor(low + (high - low) / 2); // Calculate mid index

    if (nums[mid] < nums[high]) {
      // Minimum is in the left half, including mid
      high = mid; // Move high to mid
    } else if (nums[mid] > nums[high]) {
      // Minimum is in the right half, excluding mid
      low = mid + 1; // Move low to mid + 1
    }
  }

  // When low equals high, we have found the minimum
  return nums[low];
};
```
