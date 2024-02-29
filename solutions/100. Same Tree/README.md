# [100. Same Tree](https://leetcode.com/problems/same-tree/description/)

## Intuition

We should ensure every node and its value in one tree perfectly matches the corresponding node in the other tree.

## Approach

1. If both nodes are `null`, they are identical at this point. Return `true`.
2. If either of the nodes (but not both) is `null`, they differ at this point. Return `false`.
3. Compare the values of the current nodes. If they're different, return `false`.
4. Recursively compare the left subtrees and the right subtrees of the current nodes.
5. If both the left and right subtree comparisons return `true`, it indicates that both subtrees are identical, and hence, the entire trees are identical. Otherwise, they're not.

## Complexity

- Time complexity: O(n), where n is the number of nodes in the binary tree. We visit each node once.
- Space complexity: O(h), where h is the height of the binary tree. In the worst case, the space complexity is O(n) for a skewed tree, but for a balanced tree, it's O(log n).

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // Check if both nodes are null (base case for structural identity)
  if (p === null && q === null) {
    return true;
  }

  // Check for structural mismatch if one node is null but not the other
  if (p === null || q === null) {
    return false;
  }

  // Check for value mismatch at the current nodes
  if (p.val !== q.val) {
    return false;
  }

  // Recursively compare the left subtrees and the right subtrees
  let left = isSameTree(p.left, q.left);
  let right = isSameTree(p.right, q.right);

  // Return true only if both subtrees are identical
  return left && right;
};
```
