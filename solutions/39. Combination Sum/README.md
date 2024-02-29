# [39. Combination Sum](https://leetcode.com/problems/combination-sum/description/)

## Intuition

Backtracking systematically explores all possible combinations of the given candidates that sum up to the target value. It constructs candidates for the solution, abandons a candidate ("backtracks") as soon as it determines that the candidate cannot possibly lead to a final solution.

## Approach

1. Initialize a list `res` to store the combinations that sum up to the target.
2. If the input candidates array is empty, the function returns immediately as this path cannot lead to a solution.
3. A recursive function `backtrack` is defined to explore all combinations starting from a given index.
   - If the remaining target becomes negative, the function returns immediately as this path cannot lead to a solution.
   - If the remaining target equals `0`, the current combination is added to `res` as a valid combination is found.
   - Iterate through `candidates` starting from `start` to ensure that we do not consider candidates before the current starting point, thus avoiding duplicate combinations.
     - Add current candidate (`candidates[i]`) to `path`. This action tentatively includes the current candidate in the potential combination being explored.
     - Call `backtrack` recursively with updated remaining and start to allow the same candidate to be used again.
     - Remove the last added candidate from `path`. This step is crucial as it resets the `path` to its state before the current candidate was included, allowing the next iteration to explore combinations with the next candidate.
4. The backtracking process starts with the first candidate and an empty path.
5. Once all combinations are explored, the `res` list containing all valid combinations is returned.

## Complexity

- Time Complexity: O(N^(T/M + 1)), where N is the number of candidates, T is the target value, and M is the minimal value among the candidates. This is because the algorithm explores each candidate to varying depths (up to T/M times for the smallest candidate).
- Space Complexity: O(T/M) for the recursion stack, where T/M represents the maximum depth of the recursion tree. In the worst case, the algorithm might explore all candidates down to the maximum depth.

## Code

```javascript
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = []; // Store all valid combinations

  // Check for empty input
  if (candidates.length === 0) return res;

  // Backtracking function to explore all combinations
  const backtrack = function (start, remaining, path) {
    // Invalid path, remaining target became negative
    if (remaining < 0) return;

    // Valid combination found, add it to the res
    if (remaining === 0) {
      res.push([...path]);
      return;
    }

    // Try each candidate starting from 'start' index
    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]); // Include current candidate
      backtrack(i, remaining - candidates[i], path); // Explore further with reduced target
      path.pop(); // Remove current candidate and try next
    }
  };

  backtrack(0, target, []); // Start backtracking with an empty path
  return res; // Return all found combinations
};
```
