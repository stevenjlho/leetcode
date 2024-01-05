# [739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures/description/)

## Intuition

Efficiently track the indices of days yet to find a warmer temperature using a stack, allowing us to find the next warmer day and calculate the waiting period efficiently.

## Approach

1. Initialize `stack` that will be used as a stack to hold indices of days.
2. `ans`: An array of the same length as `temperatures`, initialized with zeros. This array will store the number of days until each day's temperature is exceeded.
3. Use a for loop to iterate through each day's temperature.
   - As long as the stack is not empty and the current day's temperature is greater than the temperature on the day at the top of the stack, pop the top index from the stack, representing a day with a lower temperature.
   - Calculate the difference between the current day and the popped index. Store this value in `ans[cur]`.
   - After processing the stack, push the current day's index onto the stack. This is done for each day.
4. After all days have been processed, return the `ans` array, which now contains the number of days to wait for a warmer temperature for each day.

## Complexity

- Time complexity: O(N), where N is the number of days. Each day's index is pushed and popped from the stack at most once.
- Space complexity: O(N) in the worst case, when all days' indices are pushed onto the stack (e.g., a decreasing temperature sequence).

## Code

```javascript
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

var dailyTemperatures = function (temperatures) {
  let stack = []; // Stack to keep track of indices for which we need warmer temperature
  let ans = new Array(temperatures.length).fill(0); // Array to store results

  for (let i = 0; i < temperatures.length; i++) {
    // While current temperature is greater than temperature of top index in stack
    while (
      stack.length !== 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      let cur = stack.pop(); // Pop the index
      ans[cur] = i - cur; // Calculate the number of days waited
    }
    stack.push(i); // Push current index onto the stack
  }

  return ans; // Return the days to wait for a warmer temperature
};
```
