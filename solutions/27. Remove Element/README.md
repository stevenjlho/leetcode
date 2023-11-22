[27. Remove Element](https://leetcode.com/problems/remove-element/description/)

# Intuition

We can remove elements equal to a target value `val` from an array `nums` by maintaining two pointers: `index` for tracking the position to place the next non-target element and `i` for iterating through the array.

# Approach

1.  Initialize `index` to 0, marking the position for the next non-target element in `nums`.
2.  Iterate through `nums` using pointer `i`. For each element, check if it equals `val`.
3.  If `nums[i]` is not equal to `val`, it's a non-target element. Copy `nums[i]` to `nums[index]`, and increment `index`.
4.  Increment `index` after each non-target element to prepare for the next potential placement.
5.  After the iteration, `index` represents the new length of the array with target elements removed.

# Complexity

- Time complexity: O(n), where n is the length of the input array nums.
- Space complexity: O(1), as we use a constant amount of extra space for the index variable.

# Code

```javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let index = 0; // Initialize index for placement of non-target elements

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Check if the current element is not the target
    if (nums[i] !== val) {
      nums[index] = nums[i]; // Place non-target element at index
      index++; // Increment index for next non-target element
    }
  }

  return index; // The new length of the array
};
```
