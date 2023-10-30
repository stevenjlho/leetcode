# [236. Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/)

## Intuition

The Lowest Common Ancestor (LCA) of two nodes in a binary tree is the deepest node that has both `p` and `q` as descendants (where we allow a node to be a descendant of itself). The binary tree's properties allow us to search for the LCA using a divide and conquer approach.

## Approach

1. If the current node is either `p`, `q`, or `null`, return it. This means we've either found one of the nodes we're looking for or reached the end of a branch.
2. Recursively search for `p` and `q` in the left and right subtrees.
3. If both sides return a node, which means `p` and `q` are found in different branches, then the current node is the LCA.
4. If only one of the recursive calls returns a non-null value, return that non-null value, indicating the LCA is higher in the tree.
5. If both sides are null, propagate null upwards, showing neither `p` nor `q` are found in this subtree.

## Complexity

- Time complexity: O(n) where n is the number of nodes in the binary tree. We visit each node once.
- Space complexity: O(h), where h is the height of the binary tree. In the worst case, the space complexity is O(n) for a skewed tree, but for a balanced tree, it's O(log n).

## Code

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root - The root of the binary tree.
 * @param {TreeNode} p - One of the nodes we are finding the LCA for.
 * @param {TreeNode} q - The other node we are finding the LCA for.
 * @return {TreeNode} - The lowest common ancestor of nodes p and q.
 */
var lowestCommonAncestor = function (root, p, q) {
  // If we've found one of the nodes or reached the end of a branch, return the node.
  if (root === p || root === q || root === null) return root;

  // Recursive search in the left and right subtrees
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  // If both left and right are non-null, root is the LCA
  if (left !== null && right !== null) {
    return root;
  }

  // If one side is null, return the non-null result.
  return left === null ? right : left;
};
```
