# [45. Jump Game II](tps://leetcode.com/problems/jump-game-ii/description/)

## Intuition

We keep track of the current maximum reach and update our jump count only when we've reached the end of our current jump range.

## Approach

1. Start by defining variables to keep track of the array's length (`n`), the current farthest position reachable within the current number of steps (`currentEnd`), the maximum position that can be reached from the current position (`maxReach`), and the count of jumps made so far (`jumps`).
2. Loop through each element of the array up to the second last element. This is because reaching the last element means you've already arrived at the destination.
   - Update `maxReach` to be the maximum of `maxReach` and the sum of the current index `i` and the jump length from that index (`nums[i]`). This represents the farthest you can reach from the current position.
   - If the current index `i` reaches the `currentEnd`, it means you've reached the farthest position with the current number of jumps. Increment `jumps` to signify making a jump, and update `currentEnd` to `maxReach` to represent the new farthest position you can reach with the next jump.
3. After the loop, return the total number of jumps required to reach the end of the array.

## Complexity

- Time Complexity: O(n), where n is the length of the input array. This is because the solution iterates through the array exactly once, updating the maximum reach and the number of jumps as it goes.
- Space Complexity: O(1), as the solution uses a constant amount of space regardless of the input array size.

## Code

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var jump = function (nums) {
  let n = nums.length; // Total number of elements in the array
  let currentEnd = 0; // The farthest position reachable within the current number of steps
  let maxReach = 0; // The maximum position that can be reached from the current position
  let jumps = 0; // Count of jumps made so far

  // Loop until the second last element
  for (let i = 0; i < n - 1; i++) {
    // Update the maxReach
    maxReach = Math.max(maxReach, i + nums[i]);

    // If we've reached the end of the current jump
    if (i == currentEnd) {
      jumps++; // Increment the jump count
      currentEnd = maxReach; // Update the end to the maxReach
    }
  }

  return jumps; // Return the total number of jumps required
};
```
