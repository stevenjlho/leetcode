# [437. Path Sum III](https://leetcode.com/problems/path-sum-iii/description/)

## Intuition

The intuition here is to track the cumulative sum of values from the root to each node and utilize this information to quickly find the number of paths that sum up to the given target.

## Approach

1. Initialize a Prefix Sum Map (`preSum`)

   - To keep track of the cumulative sums and their frequencies. Initialize with `0` mapped to `1`, to handle paths that start from the root.

2. DFS Function (`dfs`)

   - Return `0` if the current node is `null`.
   - Add the current node's value to `currSum`.
   - Get the number of paths found so far that meet the target sum.
   - Increase the frequency/count of the current sum in `preSum`.
   - Recursively call `dfs` for left and right children, adding their results to `res`.
   - Decrement the frequency of the current sum in `preSum` before backtracking.

3. The total number of paths that sum up to the target is returned from `dfs`.

## Complexity

- Time complexity: O(n) where n is the number of nodes in the binary tree. We visit each node once.
- Space complexity: O(n) in the worst case, which occurs in a skewed tree. The space complexity is due to the recursion stack and the storage of cumulative sums in `preSum`.

## Code

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, sum) {
  let preSum = new Map();
  preSum.set(0, 1); // Initialize to handle sum starting from root
  return dfs(root, 0, sum, preSum);
};

function dfs(root, currSum, target, preSum) {
  if (root === null) {
    return 0; // Base case: no path if the node is null
  }

  currSum += root.val; // Update the current sum with the value of the node
  let res = preSum.get(currSum - target) || 0; // Check if there's a prefix sum that meets the target

  preSum.set(currSum, (preSum.get(currSum) || 0) + 1); // Update the map with the new current sum

  // Recursively calculate the paths for left and right children and add to result
  res +=
    dfs(root.left, currSum, target, preSum) +
    dfs(root.right, currSum, target, preSum);

  preSum.set(currSum, preSum.get(currSum) - 1); // Backtrack to remove the current sum before returning to the parent

  return res; // Return the total count of paths found
}
```
