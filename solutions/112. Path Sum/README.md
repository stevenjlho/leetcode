# [112. Path Sum](https://leetcode.com/problems/path-sum/description/)

## Intuition

We can recursively subtract node values from the target sum and check if any leaf node matches the remaining sum.

## Approach

1. If `root` is `null`, return `false` because an empty tree cannot have the required path sum.
2. Check if the value of a leaf node(both children are `null`) matches the remaining target sum, correctly identifying if the path sum is achieved at this leaf node.
3. For non-leaf nodes, recursively check both left and right subtrees with the updated target sum.
4. Return `true` if either the left or right subtree contains a valid path sum. Otherwise, return `false`.


## Complexity

- Time complexity: O(n), we might have to visit all nodes in the worst case scenario.
- Space complexity: O(h), where `h` is the height of the tree. In the worst case (for a skewed tree), this becomes O(n), but for a balanced tree, it's O(log n).

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
  let leftPathExists = hasPathSum(root.left, targetSum - root.val);
  let rightPathExists = hasPathSum(root.right, targetSum - root.val);

  // If either left or right subtree has a valid path, the result is true
  return leftPathExists || rightPathExists;
};
```
