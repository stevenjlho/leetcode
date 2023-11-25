# [111. Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/description/)

## Intuition

The minimum depth of a binary tree is measured by the shortest path from the root node down to the nearest leaf node.

## Approach

1. If the current `root` node is null, return a depth of 0. This indicates that we have surpassed a leaf node.
2. Calculate the minimum depth of the left and right subtrees recursively.
3. If the left subtree is absent (i.e., `root.left` is null) but the right subtree exists, return the depth of the right subtree plus one.
4. Conversely, if the right subtree is absent (i.e., `root.right` is null) but the left subtree exists, return the depth of the left subtree plus one.
5. If both left and right subtrees are present, the minimum depth is the lesser of the two depths plus one (to account for the current node).



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
  if (root === null) return 0;

  // Recursively find the depth of the left and right subtrees.
  const leftDepth = minDepth(root.left);
  const rightDepth = minDepth(root.right);

  // If one subtree is missing, ignore its depth.
  if (root.left === null) return 1 + rightDepth;
  if (root.right === null) return 1 + leftDepth;

  // Choose the lesser depth of the two subtrees and add one for the current node.
  return 1 + Math.min(leftDepth, rightDepth);
};
```
