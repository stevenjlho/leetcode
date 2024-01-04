# [283. Move Zeroes](https://leetcode.com/problems/move-zeroes/description)

## Intuition

We can use two pointers: a fast pointer (`fast`) that explores the array and a slow pointer (`slow`) that marks the position where the next non-zero element should be placed.

## Approach

1. Initialize `slow` to 0, marking the position where the next non-zero element should be placed.
2. A for loop is used to iterate through the array with the fast pointer. The fast pointer scans each element in the array.
   - If a non-zero element is found, it is swapped with the element at the `slow` pointer's position. This is done using a temporary variable (`temp`) to hold one of the values during the swap.
   - Increment `slow` after a swap, to mark the new position for the next non-zero element.
3. Continue this process until `fast` has scanned the entire array, effectively pushing all zeros to the end.

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
  let slow = 0; // Initialize 'slow' pointer to track the position for non-zero elements

  // Iterate over the array with 'fast' pointer
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      // If the current element is non-zero, swap it with the element at 'slow'
      let temp = nums[slow];
      nums[slow] = nums[fast];
      nums[fast] = temp;
      slow++; // Increment 'slow' after the swap
    }
  }
};
```
