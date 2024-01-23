# [22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses/description/)

## Intuition

The solution uses Depth-First Search (DFS) to explore all possible placements of opening and closing brackets while maintaining the balance of the parentheses.

## Approach

1. Create an empty array `result` to store the valid combinations, and a variable `currentString` to keep track of the current state of the string being formed.
2. Define a helper function `dfs` that takes three parameters - the current string `currentString`, the number of left parentheses `leftCount`, and the number of right parentheses `rightCount`.
   - If both `leftCount` and `rightCount` are zero, it means a valid combination is formed, and it is added to the `result`.
   - If `rightCount` is less than `leftCount`, it indicates an invalid state (more closing than opening brackets), so the function returns without further action.
   - If `leftCount` is greater than zero, call `dfs` recursively with an added opening bracket and decrement `leftCount`.
   - If `rightCount` is greater than zero, call `dfs` recursively with an added closing bracket and decrement `rightCount`.
3. Call `dfs` with `currentString`, `n`, and `n` to start the process.
4. After all recursive calls complete, return the `result` array containing all valid combinations.## Complexity

- Time Complexity: O(4^n / sqrt(n)) - The number of valid sequences for n pairs of parentheses is the n-th Catalan number, which is bounded asymptotically by 4^n / sqrt(n).
- Space Complexity: O(4^n / sqrt(n)) - The space required to store the valid sequences, plus additional space for the recursion stack.

## Code

```javascript
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = []; // Array to store valid combinations
  let currentString = ""; // Current state of string

  function dfs(currentString, leftCount, rightCount) {
    // Base case: valid combination formed
    if (leftCount === 0 && rightCount === 0) {
      result.push(currentString);
      return;
    }
    // Invalid state: more closing than opening brackets
    if (rightCount < leftCount) return;

    // Recursive call with an added opening bracket
    if (leftCount > 0) {
      dfs(currentString + "(", leftCount - 1, rightCount);
    }
    // Recursive call with an added closing bracket
    if (rightCount > 0) {
      dfs(currentString + ")", leftCount, rightCount - 1);
    }
  }

  // Start the DFS process
  dfs(currentString, n, n);
  return result; // Return all valid combinations
};
```
