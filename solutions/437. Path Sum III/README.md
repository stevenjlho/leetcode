# [437. Path Sum III](https://leetcode.com/problems/path-sum-iii/description/)

## Intuition

The fundamental concept here is using a depth-first search (DFS) approach with a hash map (cache) to keep track of the sum of the path up to each node. The cache is used to quickly retrieve the number of paths that sum up to the target sum at each node.

## Approach

1. If the root node is `null`, there are no paths, so return `0`.
2. A cache (hash map) is initialized to store the cumulative sum up to each node. Initially, it's set with a `0: 1` pair to handle the case where the path sum equals the target sum exactly at a node.
3. `findPathSum` takes the current node, the cumulative sum up to that node, the target sum, and the cache. It returns the total number of paths that sum up to the target sum from that node downwards.

   - If the current node is `null`, return `0` as there are no further paths.
   - Add the current node's value to `currSum` to update current sum.
   - Retrieve the number of paths that have reached the required sum so far (`currSum - target`) from the cache.
   - Add the current sum to the cache or increment its count.
   - Recursively call `findPathSum` for the left and right children, adding their path counts to the current path count.
   - After the recursive calls, decrement the count of the current sum in the cache to revert the state.

## Complexity

- Time complexity: O(n) where n is the number of nodes in the binary tree. We visit each node once.
- Space complexity: O(h + k), where h is the height of the tree (for the recursion stack) and k is the number of entries in the cache. In the worst case, both are O(n).

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
    return 0; // Base case: no tree
  }
  let cache = new Map(); // Cache to store path sum frequencies
  cache.set(0, 1); // Initialize with 0 sum having one count

  // Helper function for DFS
  var findPathSum = function (curr, currSum, target, cache) {
    if (curr === null) {
      return 0; // Base case: no path from null node
    }

    currSum += curr.val; // Add current node's value to running sum
    let numPathToCurr = cache.get(currSum - target) || 0; // Get paths that reach the target sum
    cache.set(currSum, (cache.get(currSum) || 0) + 1); // Update cache with current sum

    // Recursive calls for left and right subtree
    let result =
      numPathToCurr +
      findPathSum(curr.left, currSum, target, cache) +
      findPathSum(curr.right, currSum, target, cache);

    cache.set(currSum, cache.get(currSum) - 1); // Revert cache state

    return result; // Return total paths for this subtree
  };

  return findPathSum(root, 0, sum, cache); // Start DFS from the root
};
```
