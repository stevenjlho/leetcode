# [55. Jump Game](https://leetcode.com/problems/jump-game/description/)

## Intuition

The intuition is to work backward from the last index, checking if each preceding index can reach the "last reachable" position.

## Approach

1. Start with `lastPosition` by assuming the last index of the array as the initially last reachable position.
2. Loop through the array from right to left, starting from the second-to-last element. For each element, check if the sum of its index and its value (the maximum distance it can jump) is greater than or equal to the last reachable position.
   - If true, it means this position can reach the last reachable position, so update the last reachable position to the current index.
3. After the loop, if the last reachable position is at the start of the array (or before), it indicates that the end is reachable from the start.

## Complexity

- Time Complexity: O(n), where `n` is the number of elements in the array. The algorithm iterates backward through the array once.
- Space Complexity: O(1), as the solution uses a fixed amount of space regardless of the input size.

## Code

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // Initialize the last position to the last index of the array.
  let lastPosition = nums.length - 1;

  // Iterate backward from the second-to-last element to the start.
  for (let i = nums.length - 2; i >= 0; i--) {
    // Check if the current index can reach or surpass the last reachable position.
    if (i + nums[i] >= lastPosition) {
      // If so, update the last reachable position to the current index.
      lastPosition = i;
    }
  }

  // If the last reachable position is 0 or less, the end is reachable from the start.
  return lastPosition <= 0;
};
```
