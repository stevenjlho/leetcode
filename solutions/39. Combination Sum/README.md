# [39. Combination Sum](https://leetcode.com/problems/combination-sum/description/)

## Intuition

We explore each possibility and backtrack when we either find a solution or hit a dead end.

## Approach

1. Create a list `result` to store all valid combinations.
2. Define a recursive function that takes three parameters - `currentCombination`: The current combination being formed, `currentSum`: The sum of the numbers in `currentCombination`, `currentIndex`: The index in `candidates` to start adding numbers to `currentCombination`.
   - If `currentSum` exceeds `target`, the function returns immediately as this path cannot lead to a solution.
   - If `currentSum` equals `target`, the current combination is added to result, and the function returns.
   - Iterate through `candidates` starting from `currentIndex`, adding each candidate to the current combination, and calling itself recursively to explore further.
     - Add `candidates[i]` to `currentCombination` and update `currentSum`.
     - Call `backtrack` recursively to continue exploring further with this candidate included.
     - Remove the last added candidate from `currentCombination` and update `currentSum` to backtrack.
3. Call `backtrack([], 0, 0)` to start the process.
4. Once all possibilities are explored, the `result` list is returned.

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
  var backtrack = function (currentCombination, currentSum, currentIndex) {
    // If current sum exceeds target, backtrack
    if (currentSum > target) return;
    // If current sum equals target, add the combination to result
    if (currentSum === target) {
      result.push([...currentCombination]);
      return;
    }

    // Explore further with each candidate
    for (let i = currentIndex; i < candidates.length; i++) {
      currentCombination.push(candidates[i]); // Add candidate to current combination
      currentSum += candidates[i]; // Update current sum
      backtrack(currentCombination, currentSum, i); // Recursively explore with this candidate
      // Backtrack: remove the candidate and try the next
      currentCombination.pop();
      currentSum -= candidates[i];
    }
  };

  backtrack([], 0, 0); // Start backtracking
  return result; // Return all valid combinations
};
```
