# [437. Path Sum III](https://leetcode.com/problems/path-sum-iii/description/)

## Intuition

The fundamental concept here is using a depth-first search (DFS) approach with a hash map (cache) to keep track of the sum of the path up to each node. The cache is used to quickly retrieve the number of paths that sum up to the target sum at each node.

## Approach

1. If the root node is `null`, there are no paths, so return `0`.
2. Create a `Map` named `cache` to store the cumulative sums and their frequencies. Initialize it with `0` set to `1` to handle cases where the path sum equals the target from the root.
3. `findPathSum` is a recursive function to perform DFS. It takes the current node (`curr`), the current cumulative sum (`currSum`), the target sum (`target`), and the cache.
   - If the current node is `null`, return `0` as there are no further paths.
   - Add the current node's value to `currSum` to update current sum.
   -  Calculate `numPathToCurr`, which is the number of paths ending at the current node that add up to `target`. This is done by checking if `currSum - target` is in the cache.
   - Add the count of `currSum` in the cache or increment its count.
   - Recursively call `findPathSum` for the left and right children, adding `numPathToCurr` to their results. This accumulates the total number of paths that sum to `target`.
   - After exploring both children, decrement the count of `currSum` in the cache. It ensures the cache correctly represents the state of the current path being explored in the DFS.
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
  var findPathSum = function (curr, currSum, target, cache) {
    if (curr === null) {
      return 0; // No path from null node
    }

    currSum += curr.val; // Update the cumulative sum up to the current node
    let numPathToCurr = cache.get(currSum - target) || 0; // Paths ending at curr that sum to target
    cache.set(currSum, (cache.get(currSum) || 0) + 1); // Update the cache with the current sum

    // Recursively find paths in left and right subtree and add paths to curr
    let result =
      numPathToCurr +
      findPathSum(curr.left, currSum, target, cache) +
      findPathSum(curr.right, currSum, target, cache);

    cache.set(currSum, cache.get(currSum) - 1); // Decrement cache count for backtracking

    return result; // Total paths that sum to target up to curr
  };

  return findPathSum(root, 0, sum, cache); // Start DFS from root
};

```
