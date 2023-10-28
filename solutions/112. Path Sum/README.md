# [112. Path Sum](https://leetcode.com/problems/path-sum/description/)

## Intuition
Determine if a tree has a root-to-leaf path such that the sum of its node values matches a given target.


## Approach

1. If `root` is `null`, return `false` because an empty tree cannot satisfy the path sum condition.
2. See if the value of a leaf node(both children are `null`) matches the remaining target sum. If so, we've found the required path.
3. For non-leaf nodes, recursively check:
   - The left child of the current node with the updated `targetSum - root.val`.
   - The right child with the same updated target sum.
4. If either subtree (left or right) has a valid path, return `true`.

## Complexity

- Time complexity: O(n), we might have to visit all nodes in the worst case scenario.
- Space complexity: O(h), recursion stack can go as deep as the height of the tree. In the worst case (when the tree is unbalanced), the recursion stack will be O(n). But for balanced trees, it would be O(log n).

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
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  // Base case: if tree is empty
  if (!root) {
    return false;
  }

  // If at a leaf node, check if the remaining targetSum equals the node's value
  if (!root.left && !root.right) {
    return targetSum === root.val;
  }

  // Recursively check the left and right subtrees with updated targetSum
  let leftSum = hasPathSum(root.left, targetSum - root.val);
  let rightSum = hasPathSum(root.right, targetSum - root.val);

  // If either left or right subtree has a valid path, the result is true
  return leftSum || rightSum;
};
```
