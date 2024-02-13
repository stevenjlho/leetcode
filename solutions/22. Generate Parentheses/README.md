# [22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses/description/)

## Intuition

The solution uses Depth-First Search (DFS) to explore all possible placements of opening and closing brackets while maintaining the balance of the parentheses.

## Approach

1. Create an empty array `res` to store the valid combinations.
2. Define a helper function `dfs`.
   - When the constructed string `s` reaches the length of `n * 2`, it means we've added `n` pairs of parentheses. We add `s` to the res set and return.
   - As long as the count of left parentheses `'('` added so far is less than `n`, we can add another `'('` to the string. We do this by calling the `dfs` function recursively, increasing the count of left parentheses by 1.
   - We can add a right parenthesis `')'` only if its count is less than the count of left parentheses to ensure the string remains valid. We call the `dfs` function recursively, increasing the count of right parentheses by 1.
3. Call `dfs` with `0`, `0`, and empty string to start the process.
4. After all recursive calls complete, return the `res` array containing all valid combinations.

## Complexity

- Time Complexity: O(4^n / sqrt(n)), which is derived from the nth Catalan number. This is because the number of valid parentheses combinations is the nth Catalan number, and the time complexity for generating each combination is proportional to its length.
- Space Complexity: O(n), due to the recursion stack. The maximum depth of recursion is 2n when generating a valid sequence, but since we're only interested in the space used besides the output array, the space complexity is O(n).

## Code

```javascript
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = []; // Array to store valid combinations
  // Helper function to recursively build combinations
  var dfs = function (left, right, s) {
    // If the current string reaches the maximum length, add to the res
    if (s.length === n * 2) {
      res.push(s);
      return;
    }

    if (left < n) {
      // If more left parentheses can be added
      dfs(left + 1, right, s + "("); // Add a left parenthesis and recurse
    }

    if (right < left) {
      // If more right parentheses can be added
      dfs(left, right + 1, s + ")"); // Add a right parenthesis and recurse
    }
  };

  // Initialize the recursion with no parentheses added yet
  dfs(0, 0, "");
  return res; // Return all found combinations};
};
```
