# [110. Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/description/)

## Intuition

This solution is based on the principle of post-order traversal in a binary tree. We need to check the height of the left and right subtrees of every node, ensuring that the difference in heights is not more than one, which aligns with the definition of a balanced tree according to the problem statement.

## Approach

1. Define a helper function `checkHeight` that computes the height of a given node.
   - If the current node (`node`) is `null`, return `0`, indicating the height of an empty subtree is `0`.
   - Recursively calculate the height of the left subtree (`leftHeight`) and the height of the right subtree (`rightHeight`).
   - If either the left or right subtree is unbalanced (indicated by `-1`), or the absolute difference between `leftHeight` and `rightHeight` is greater than `1`, the current tree is unbalanced. Return `-1` to propagate the unbalanced state up the recursive calls.
   - If the current subtree is balanced, calculate its height as `1` plus the maximum of `leftHeight` and `rightHeight`.
2. If checkHeight returns -1, the tree is unbalanced, otherwise it's balanced

## Complexity

- Time complexity: O(n) where n is the number of nodes in the binary tree. We visit each node once.
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  // Helper function to check the height and balance of the tree
  const checkHeight = (node) => {
    if (node === null) return 0; // Base case: empty subtree has height 0

    const leftHeight = checkHeight(node.left); // Height of left subtree
    const rightHeight = checkHeight(node.right); // Height of right subtree

    // Check for unbalanced subtree or height difference more than 1
    if (
      leftHeight === -1 ||
      rightHeight === -1 ||
      Math.abs(leftHeight - rightHeight) > 1
    ) {
      return -1; // Indicate unbalanced tree
    }

    // Current node's height is max of left/right subtree heights plus 1
    return Math.max(leftHeight, rightHeight) + 1;
  };

  // If checkHeight returns -1, the tree is unbalanced, otherwise it's balanced
  return checkHeight(root) !== -1;
};
```
