# [55. Jump Game](https://leetcode.com/problems/jump-game/description/)

## Intuition

The intuition is to work backward from the last index, checking if each preceding index can reach the "last reachable" position.

## Approach

1. Start by setting the `lastPosition` variable to the index of the final element in the array (`nums.length - 1`), signifying the initial target to reach.
2. Loop through the array in reverse, beginning from the penultimate element (i = nums.length - 2) and progressing towards the first element.
   - For each position `i`, determine if the end (or the current `lastPosition`) is reachable by adding `i` to `nums[i]` (the jump length from position `i`). If reachable, update `lastPosition` to `i`.
3. After the loop concludes, verify if `lastPosition` has been updated to `0`. If so, it indicates that the start of the array can reach the end, making the return value `true`.

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
  // Initialize lastPosition with the last index of the array
  let lastPosition = nums.length - 1;

  // Iterate backwards from the second last element to the start of the array
  for (let i = nums.length - 2; i >= 0; i--) {
    // Check if the current position can jump to or beyond the last reachable position
    if (i + nums[i] >= lastPosition) {
      // Update lastPosition to the current index if it's reachable
      lastPosition = i;
    }
  }

  // If lastPosition has reached the start of the array, the end is reachable
  return lastPosition === 0;
};
```
