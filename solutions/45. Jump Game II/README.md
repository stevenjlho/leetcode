# [45.Jump Game II](https://leetcode.com/problems/jump-game-ii/description/)

## Intuition

The algorithm is based on the "greedy" approach, where at each step, it jumps to the farthest reachable point.

## Approach

1. Set `currentEnd` to track the end of the current jump range, `maxReach` tracks the maximum position that can be reached from the current position, and `jumps` counts the jumps made.
2. Loop through each element of the array up to the second-to-last element, as reaching the last element signifies the end of the journey.
   - For each position, calculate the furthest position that can be reached (`i + nums[i]`) and update `maxReach` if this is greater than the current `maxReach`.
   - If the current index `i` reaches the `currentEnd`, it means it's time to make a jump to continue. Increment `jumps` by `1` and update `currentEnd` to `maxReach` to start a new jump range. This ensures that the number of jumps is minimized because you're making the most of each jump.
3. Once the loop completes, `jumps` contains the minimum number of jumps required to reach the end, which is returned as the final result.

## Complexity

- Time Complexity: O(n), where n is the length of the input array. This is because the solution iterates through the array exactly once, updating the maximum reach and the number of jumps as it goes.
- Space Complexity: O(1), as the solution uses a constant amount of space regardless of the input array size.

## Code

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length <= 1) return 0; // No jumps needed for empty or single-element arrays
  let currentEnd = 0; // Track the farthest position reachable within the current number of steps.
  let maxReach = 0; // Track the maximum position that can be reached.
  let jumps = 0; // Count the jumps made so far.

  // Loop through the array up to the second-to-last element.
  for (let i = 0; i < nums.length - 1; i++) {
    // Update maxReach to be the farthest we can reach from the current position.
    maxReach = Math.max(maxReach, i + nums[i]);

    // If the current position is the end of the current jump range
    if (i === currentEnd) {
      // Increment the jump counter and update the current jump range end to the maximum reach
      jumps++;
      currentEnd = maxReach;
    }
  }

  // Return the total number of jumps needed to reach the end of the array
  return jumps;
};
```
