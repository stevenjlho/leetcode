# [283. Move Zeroes](https://leetcode.com/problems/move-zeroes/description)

## Intuition

We can use two pointers: `slow` to track the position for the next non-zero element and `fast` to find and move non-zero elements to the `slow` pointer's position.

## Approach

1.  Initialize `slow` to 0, marking the position where the next non-zero element should be placed.
2.  Iterate through the array using the `fast` pointer:
    - When `fast` encounters a non-zero element, swap it with the element at the `slow` index.
    - Increment `slow` after a swap, to mark the new position for the next non-zero element.
3.  Continue this process until `fast` has scanned the entire array, effectively pushing all zeros to the end.

## Complexity

- Time complexity: O(n), where n is the number of elements in the array. Each element is visited once by the `fast` pointer.
- Space complexity: O(1), as the rearrangement is performed in-place without any additional data structures.

## Code

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      // Swap non-zero element at 'fast' with element at 'slow'
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++; // Move 'slow' to the next position
    }
  }
};
```
