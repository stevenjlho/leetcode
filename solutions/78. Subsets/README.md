# [78. Subsets](https://leetcode.com/problems/subsets/description/)

## Intuition

By exploring each number's inclusion and exclusion in the subset, we construct all possible subsets of the given set of numbers.

## Approach

1. Start with an empty list `result` to store all the subsets.
2. Create a function `backtrack(path, start)` where `path` represents the current subset being explored, and `start` is the index in `nums` from which to start considering elements for inclusion in `path`.
   - Add a copy of the current `path` to `result` because every path at any stage of recursion is a valid subset.
   - Iterate through the `nums` array starting from `start`, to ensure each element is considered only once in a specific recursive path, thus avoiding duplicates and maintaining subset uniqueness.
     - For each number, add it to `path` and recursively call `backtrack(path, i + 1)` to explore further with the next elements.
     - After exploring with the current number included, remove it from `path` (backtrack) to explore the next possibilities without it.
3. Invoke `backtrack([], 0)` with an empty path and starting index 0 to generate all subsets.
4. After fully exploring all combinations, return the `result` containing all subsets.

## Complexity

- Time Complexity: O(2^N \* N), where N is the length of the input array. For each element, there are two choices (include or exclude), leading to 2^N subsets, and each subset requires O(N) time to copy into the result array.
- Space Complexity: O(N), considering the space used by the recursion stack and the tempList. In the worst case, the depth of the recursion tree can go up to N.

## Code

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];

  // Backtracking function to explore all subsets
  var backtrack = function (path, start) {
    // Add the current subset to the result
    result.push([...path]);

    // Explore further elements to include in the subset
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]); // Include the current element
      backtrack(path, i + 1); // Explore further with the element included
      path.pop(); // Exclude the current element and move to the next
    }
  };

  // Start the backtracking with an empty path
  backtrack([], 0);

  // Return all the subsets generated
  return result;
};
```
