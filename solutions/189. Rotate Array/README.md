# [189. Rotate Array](https://leetcode.com/problems/rotate-array/description/)

## Intuition

The fundamental strategy here is to achieve the array rotation through a series of reversals.

## Approach

1. The rotation count `k` is adjusted to be within the array's length. This normalization ensures the rotation is within bounds and effective.
2. If `k` is negative, it is converted to an equivalent positive rotation. This standardization simplifies the logic for rotation direction.
3. A helper function `reverse` is defined to reverse a portion of the array between two indices, `start` and `end`.
   - The function uses a two-pointer approach: elements at `start` and `end` are swapped, and both pointers move towards the center.
4. The array is reversed from the start to the `nums.length - k - 1` index, aligning the final `k` elements near their target positions but in reversed order.
5. The segment from `nums.length - k` to the end of the array is then reversed. This places these elements in the correct order for the final rotated state.
6. Reversing the entire array adjusts the positions of the initial elements, completing the rotation process.

## Complexity

- Time complexity: O(n), where n is the length of the array.
- Space complexity: O(1), as the reversal is done in place and no additional space proportional to the input size is used.

## Code

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // Adjust k to be within the bounds of the array length
  k = k % nums.length;
  if (k < 0) {
    k += nums.length; // Convert negative rotation to equivalent positive rotation
  }

  // Helper function to reverse a segment of the array
  var reverse = function (nums, start, end) {
    while (start < end) {
      // Swap elements at start and end, then move towards the middle
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  };

  // Reverse the first segment of the array
  reverse(nums, 0, nums.length - k - 1);
  // Reverse the second segment of the array
  reverse(nums, nums.length - k, nums.length - 1);
  // Reverse the entire array to achieve the final rotated state
  reverse(nums, 0, nums.length - 1);
};
```
