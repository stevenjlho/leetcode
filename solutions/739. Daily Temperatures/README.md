# [739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures/description/)

## Intuition

The core concept revolves around storing indices of days with temperatures for which we are yet to find a warmer future day. By iterating through the array and using a stack, we can efficiently find the next day with a higher temperature for each day in the array.

## Approach

1. Initialize a `stack` to keep track of indices of days.
2. Initialize an array `ans` of the same length as `temperatures`, filled with zeros. This array will store the number of days until a warmer temperature for each day.
3. Iterate through the temperatures array day by day.
   - As long as the stack is not empty and the current day's temperature is greater than the temperature of the day indexed at the top of the stack, pop the stack and update the answer array for the popped index.
   - If no warmer day is found yet for the current day, push its index onto the stack.
4. After iterating through all temperatures, return the `ans` array which contains the number of days one has to wait for a warmer temperature for each day.

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
  let stack = []; // Stack to keep track of day indices
  let ans = new Array(temperatures.length).fill(0); // Array to store results

  for (let i = 0; i < temperatures.length; i++) {
    // Process each day for warmer temperature
    while (
      stack.length !== 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      // Current day's temperature is higher than the day at stack's top
      let curIndex = stack.pop(); // Pop the index of the cooler day
      ans[curIndex] = i - curIndex; // Calculate the number of days waited for warmer temperature
    }
    stack.push(i); // Push current day's index onto the stack
  }

  return ans; // Resultant array with days to wait for a warmer temperature};
};
```
