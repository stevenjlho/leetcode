# [39. Combination Sum](https://leetcode.com/problems/combination-sum/description/)

## Intuition

We explore each possibility and backtrack when we either find a solution or hit a dead end.

## Approach

1. Create a list `result` to store all valid combinations.
2. Define a recursive function that takes three parameters - `currComb`: The current combination being formed, `currSum`: The sum of the numbers in `currComb`, `currIndex`: The index in `candidates` to start adding numbers to `currComb`.
   - If `currSum` exceeds `target`, stop exploring this path (return).
   - If `currSum` equals `target`, add a copy of `currComb` to `result` and return.
   - Iterate through `candidates` starting from `currIndex`.
     - Add `candidates[i]` to `currComb` and update `currSum`.
     - Call `backtrack` recursively to continue exploring further with this candidate included.
     - Remove the last added candidate from `currComb` and update `currSum` to backtrack.
3. Call `backtrack([], 0, 0)` to start the process.
4. After backtracking is complete, return the `result`.

## Complexity

- Time Complexity: O(N^(T/M + 1)), where N is the number of candidates, T is the target value, and M is the minimal value among the candidates. This complexity comes from the fact that in the worst case, we explore each candidate up to `T/M` times.
- Space Complexity: O(T/M), for the recursion stack. The depth of recursion can go up to `T/M` in the worst case, where we pick the smallest number repeatedly to reach the target.

## Code

```javascript
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];

  // Backtracking function to explore combinations
  var backtrack = function (currComb, currSum, currIndex) {
    // If current sum exceeds target, backtrack
    if (currSum > target) return;
    // If current sum equals target, add the combination to result
    if (currSum === target) {
      result.push([...currComb]);
      return;
    }

    // Explore further with each candidate
    for (let i = currIndex; i < candidates.length; i++) {
      currComb.push(candidates[i]); // Add candidate to current combination
      currSum += candidates[i]; // Update current sum
      backtrack(currComb, currSum, i); // Recursively explore with this candidate
      // Backtrack: remove the candidate and try the next
      currComb.pop();
      currSum -= candidates[i];
    }
  };

  backtrack([], 0, 0); // Start backtracking
  return result; // Return all valid combinations
};
```
