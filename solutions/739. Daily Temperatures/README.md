# [739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures/description/)

## Intuition

 As the temperatures are traversed, the stack helps in quickly identifying and updating the number of days one would have to wait for a warmer temperature.

## Approach

1. Initialize a `stack` to keep track of indices of days.
2. Initialize an array `ans` of the same length as `temperatures`, filled with zeros. This array will store the number of days until a warmer temperature for each day.
3. Iterate over the `temperatures` array using an index `i`.
   - While the stack is not empty and the current temperature (`temperatures[i]`) is greater than the temperature at the top index of the stack:
     - Pop the top index (`cur`) from the stack. This index represents a day with a lower temperature.
     - Calculate the number of days until a warmer temperature (`i - cur`) and store it in `ans[cur]`.
   - Push the current index `i` onto the stack. This index is now waiting for a day with a warmer temperature.
4. After iterating through all temperatures, return the `ans` array.

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
      let cur = stack.pop(); // Pop the index of the cooler day
      ans[cur] = i - cur; // Calculate the number of days waited for warmer temperature
    }
    stack.push(i); // Push current day's index onto the stack
  }

  return ans; // Resultant array with days to wait for a warmer temperature};
};
```
