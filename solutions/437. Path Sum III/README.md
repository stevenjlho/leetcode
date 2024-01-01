# [437. Path Sum III](https://leetcode.com/problems/path-sum-iii/description/)

## Intuition

The idea is to find the number of paths that sum up to a given target by checking the difference between the current cumulative sum and the target against the hashmap.

## Approach

1. If the root node is `null`, there are no paths, so return `0`.
2. Create a `Map` named `cache` to store the cumulative sums and their frequencies. Initialize it with `0` set to `1` to handle cases where the path sum equals the target from the root.
3. `findPathSum` is a recursive function to perform DFS. It takes the current node (`cur`), the current cumulative sum (`curSum`), the target sum (`target`), and the cache.
   - If the current node is `null`, return `0` as there are no further paths.
   - Add the current node's value to `curSum` to update current sum.
   - Find the number of paths that end at `cur` and sum to `target` using `cache.get(curSum - target)`.
   - Add the count of `curSum` in the cache or increment its count to identify whether a path ending at the current node contributes to a valid path sum.
   - Recursively call `findPathSum` for the left and right children, adding `numPathToCur` to their results. This accumulates the total number of paths that sum to `target`.
   - After exploring both children, decrement the count of `curSum` in the cache. This step is crucial for not carrying the count of a path sum from one branch of the tree to another.
   - Return the total number of paths found.
4. Begin the DFS process with `root`, an initial sum of 0, the target sum, and the cache.

## Complexity

- Time complexity: O(n) where n is the number of nodes in the binary tree. We visit each node once.
- Space complexity: O(n), primarily due to the recursion stack and the additional space for the cache. The cache could potentially have an entry for each node in the worst case.

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
  if (root === null) {
    return 0; // No paths in an empty tree
  }
  let cache = new Map();
  cache.set(0, 1); // Base case for sum equal to target from the root

  // Helper function for DFS traversal
  var findPathSum = function (cur, curSum, target, cache) {
    if (cur === null) {
      return 0; // No path from null node
    }

    curSum += cur.val; // Update the cumulative sum up to the current node
    let numPathToCur = cache.get(curSum - target) || 0; // Paths ending at cur that sum to target
    cache.set(curSum, (cache.get(curSum) || 0) + 1); // Update the cache with the current sum

    // Recursively find paths in left and right subtree and add paths to cur
    let result =
      numPathToCur +
      findPathSum(cur.left, curSum, target, cache) +
      findPathSum(cur.right, curSum, target, cache);

    cache.set(curSum, cache.get(curSum) - 1); // Decrement cache count for backtracking

    return result; // Total paths that sum to target up to cur
  };

  return findPathSum(root, 0, sum, cache); // Start DFS from root
};
```
