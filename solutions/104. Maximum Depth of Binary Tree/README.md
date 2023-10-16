# [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/description/)

## Intuition

The maximum depth or height of a binary tree represents the length of the longest path from the root node to a leaf node. If the tree is empty, the depth is zero.

## Approach

1. Check if the `root` node is null. If it is, return 0, as there are no nodes to traverse.
2. If the `root` is not null, recursively find the maximum depth of the left and right subtrees:
3. Call `maxDepth` for the left subtree, which calculates the maximum depth of the left branch.
4. Call `maxDepth` for the right subtree, which calculates the maximum depth of the right branch.
5. Return the maximum depth of the current node by taking the maximum of the depths of the left and right subtrees and adding 1 (for the current level).

## Complexity

- Time complexity: O(n), where n is the number of nodes in the binary tree. We visit each node exactly once.
- Space complexity: O(h), where h is the height of the binary tree. In the worst case, the space complexity is O(n) for a skewed tree, but in a balanced tree, it is O(log n).

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
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }

  // Recursively calculate the maximum depth of the left and right subtrees.
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);

  // The depth of the current node is the maximum depth of its left and right subtrees, plus 1 for the current node.
  return Math.max(left, right) + 1;
};
```
