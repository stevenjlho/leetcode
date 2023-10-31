# [235. Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/)

## Intuition

The BST property allows us to find the LCA by comparing node values, since for any node `n`, the left descendants are less than `n`, and the right descendants are greater than `n`.

## Approach

1.  Start from the root of the BST and compare its value with those of `p` and `q`.
2.  If both `p` and `q` are smaller than the root, then the LCA must be in the left subtree.
3.  If both `p` and `q` are larger than the root, then the LCA must be in the right subtree.
4. If `p` and `q` are on opposite sides of the root, or if one of them equals the root, the current node is the LCA.
5.  Recursively apply the above logic until the LCA is found.

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
 * @param {TreeNode} root - The root of the binary search tree.
 * @param {TreeNode} p - One of the nodes we are finding the LCA for.
 * @param {TreeNode} q - The other node we are finding the LCA for.
 * @return {TreeNode} - The lowest common ancestor of nodes p and q.
 */
var lowestCommonAncestor = function (root, p, q) {
  // Check if both p and q are on the left side of the root.
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  // Check if both p and q are on the right side of the root.
  else if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  // Root is the LCA if p and q are on different sides or equal to root.
  else {
    return root;
  }
};
```
