# [45. Jump Game II](tps://leetcode.com/problems/jump-game-ii/description/)

## Intuition

The algorithm is based on the "greedy" approach, where at each step, it jumps to the farthest reachable point.

## Approach

1. Set `currentEnd` to `0` to track the farthest position reachable with the current number of steps, `maxReach` to `0` for the maximum position that can be reached, and `jumps` to `0` for the count of jumps made.
2. Loop through each element of the array up to the second last element. This is because reaching the last element means you've already arrived at the destination.
   - For each element, update `maxReach` with the maximum between the current `maxReach` and the sum of the current index `i` and the jump length `nums[i]`. This can keep track of the farthest index that can be reached (`maxReach`) by any of the indices within the current jump range (`currentEnd`). 
   - If the current index `i` reaches the `currentEnd`, it means it's time to make a jump to continue. Increment `jumps` by `1` to signify making a jump. Update `currentEnd` to `maxReach` to represent the new farthest position you can reach with the next jump. This ensures that the number of jumps is minimized because you're making the most of each jump.
3. After the loop, return the total number of jumps required to reach the end of the array.

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
  let currentEnd = 0; // Track the farthest position reachable within the current number of steps.
  let maxReach = 0; // Track the maximum position that can be reached.
  let jumps = 0; // Count the jumps made so far.

  // Loop through the array up to the second-to-last element.
  for (let i = 0; i < nums.length - 1; i++) {
    // Update maxReach to be the farthest we can reach from the current position.
    maxReach = Math.max(maxReach, i + nums[i]);

    // If we've reached the end of the current jump range...
    if (i == currentEnd) {
      jumps++; // Make a jump.
      currentEnd = maxReach; // Update the currentEnd to the new farthest reachable position.
    }
  }

  return jumps; // Return the minimum number of jumps required to reach the end of the array.
};
```
