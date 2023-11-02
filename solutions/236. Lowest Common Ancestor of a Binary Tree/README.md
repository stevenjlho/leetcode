# [236. Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/)

## Intuition

The Lowest Common Ancestor (LCA) of two nodes `p` and `q` in a binary tree is the deepest (i.e., farthest from the root) node that has both `p` and `q` as descendants. We find the LCA by recursively traversing the tree and identifying the node where the paths to `p` and `q` from the root converge."

## Approach

1. Return the current node if it is `null`, indicating it reached end of a branch. Or if it is either `p` or `q`, indicating we've found one of the target nodes.
2. Recursively search for `p` and `q` starting from the left and right children of the current node.
3. If both sides return a node, which means `p` and `q` are found in different branches, then the current node is the LCA.
4. If only one recursive call returns a non-null node, that node is the LCA. If both calls return null, propagate the null upward, indicating the absence of both `p` and `q` in this part of the tree.

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
  // Base case: if root is null or matches either p or q, return root.
  if (root === null || root === p || root === q) return root;

  // Recurse on left and right subtrees.
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  // If both left and right are non-null, we have found the LCA.
  // It's the point where paths to p and q converge.
  if (left !== null && right !== null) return root;

  // If one subtree returns null, the LCA must be in the other subtree.
  return left !== null ? left : right;
};
```
