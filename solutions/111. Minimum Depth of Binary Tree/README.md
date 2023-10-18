# [111. Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/description/)

## Intuition

The minimum depth of a binary tree is measured by the shortest path from the root node down to the nearest leaf node.

## Approach

1. Define the `getDepth` function to calculate the minimum the depth of binary tree.
   - **Base Case**: If the subtree is empty, return depth as 0.
   - For every node, recursively calculate the depth of its left and right subtrees.
   - If the left subtree is absent but the right subtree exists, return the depth of the right subtree + 1.
   - If the right subtree is absent but the left subtree exists, return the depth of the left subtree + 1.
   - If both subtrees exist, return the smaller depth of the two subtrees + 1.
2. Return the calculated depth using the `getDepth` function.

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
  const getDepth = (node) => {
    // Base Case: If the subtree is empty, return depth as 0.
    if (node === null) return 0;

    const leftDepth = getDepth(node.left);
    const rightDepth = getDepth(node.right);

    // Left subtree is absent, consider only right subtree
    if (node.left === null && node.right !== null) {
      return 1 + rightDepth;
    }

    // Right subtree is absent, consider only left subtree
    if (node.left !== null && node.right === null) {
      return 1 + leftDepth;
    }

    // If both children exist, consider the minimum of their depths
    return 1 + Math.min(leftDepth, rightDepth);
  };

  return getDepth(root);
};
```
