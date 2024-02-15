# [46. Permutations](https://leetcode.com/problems/permutations/description/)

## Intuition

The solution leverages backtracking to explore every possible combination of the given numbers. Backtracking ensures that once a number is used in the current sequence (path), it's not reused until we backtrack, ensuring uniqueness in the permutation.

## Approach

1. Initialize an empty list `res` to store all the unique permutations generated from `nums`.
2. Define the `backtrack` function that builds permutations by adding one number at a time to the current path.
   - If the length of the current path equals the length of `nums`, it means a complete permutation has been formed, so it's added to `res`.
   - Loop through each number in `nums`.
     - If the current number is already in the path, skip it to avoid duplicates.
     - Add the current number to the path.
     - Call `backtrack` with the updated path to continue building the permutation.
     - Remove the last added number from the path to explore a new branch of the decision tree.
3. Call `backtrack` with an empty path to start the permutation process.
4. After exploring all possible combinations, return the list of permutations.

## Complexity

- Time Complexity: O(N!), factorial of N, where N is the number of elements in `nums`. This is because there are N! permutations for N elements.
- Space Complexity: O(N), primarily due to the recursion call stack and the storage for the current path. In the worst case, the call stack depth and path length can go up to N.

## Code

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = []; // Stores all permutations

  // Recursive function to generate permutations
  var backtrack = function (path) {
    // Check if the current path is a complete permutation
    if (path.length === nums.length) {
      res.push([...path]); // Add a deep copy of path to res
      return; // Backtrack
    }

    // Iterate through nums to build permutations
    for (let i = 0; i < nums.length; i++) {
      if (path.includes(nums[i])) continue; // Skip used numbers

      path.push(nums[i]); // Add current number to the path
      backtrack(path); // Continue building the permutation
      path.pop(); // Remove the last number to backtrack
    }
  };

  backtrack([]); // Start backtracking with an empty path
  return res; // Return all generated permutations
};
```
