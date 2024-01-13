# [236. Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/)

## Intuition

The LCA is defined as the lowest node in the tree that has both `p` and `q` as descendants. This problem can be solved by recursively traversing the tree and checking if either of the nodes `p` or `q` is present in a subtree.

## Approach

1. If the `root` is `null` or matches either `p` or `q`, return `root`. This means we've either reached the end of a branch or found one of the nodes we're looking for.
2. Recursively search for `p` and `q` starting from the left and right children of the current node.
3. If both `left` and `right` recursive calls return a non-null value, it means both `p` and `q` were found in different subtrees of `root`. Hence, `root` is the LCA.
4. If only one of the recursive calls returns a non-null value, then this is the LCA. If both are null, `p` and `q` are not found in the current subtree. 

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

  // If both left and right are not null, root is the LCA
  if (left !== null && right !== null) return root;

  // Otherwise, return the non-null value (one of left or right)
  return left !== null ? left : right;
};
```
