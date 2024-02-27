# [111. Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/description/)

## Intuition

This solution employs a recursive approach to traverse the tree, where at each node, we consider the depth of its left and right subtrees to determine the minimum depth incrementally.

## Approach

1. If the current node (`root`) is `null`, return 0. This accounts for the edge case of an empty tree or reaching the end of a branch.
2. Calculate the minimum depth of the left and right subtrees recursively.
3. If the current node has no left child, the minimum depth must be calculated from the right subtree. Therefore, return `1 + rightDepth`, including the current node's depth.
4. Conversely, if the right child doesn't exist, return `1 + leftDepth` to include the current node's depth alongside the left subtree's depth.
5. If both left and right children exist, the minimum depth of the current node is 1 (for the current node itself) plus the lesser of the two subtree depths.

## Complexity

- Time complexity: O(n), where n is the number of nodes in the binary tree. In the worst case, we would have to visit all nodes of the tree.
- Space complexity: O(h), where h is the height of the binary tree. In the worst case, the tree is completely unbalanced, and the recursion would go as deep as N, leading to a space complexity of O(N). But in the best case (the tree is completely balanced), the height of the tree would be log(N).

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
var minDepth = function (root) {
  // Base case: if the tree is empty, the minimum depth is 0.
  if (root === null) return 0;

  // Recursively calculate the depth of left and right subtrees.
  const leftDepth = minDepth(root.left);
  const rightDepth = minDepth(root.right);

  // If one of the subtrees is missing, the minimum depth is in the other subtree.
  // Add 1 to account for the depth of the current node.
  if (root.left === null) return 1 + rightDepth;
  if (root.right === null) return 1 + leftDepth;

  // If both subtrees exist, the minimum depth is 1 (for the current node) plus the minimum of the depths of the two subtrees.
  return 1 + Math.min(leftDepth, rightDepth);
};
```
