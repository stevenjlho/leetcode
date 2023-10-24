# [110. Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/description/)

## Intuition

To determine if a tree is height-balanced, we need to ensure that the difference in heights of the left and right subtrees of any node in the tree is not greater than 1.

## Approach

1. Define a helper function getHeight that computes the height of a given node.

   - Use a recursive method to obtain the heights for both left and right children.
   - If a subtree (either left or right) is found to be unbalanced, indicate this using a height value of `-1`.
   - If the absolute difference between the heights of the left and right subtrees is greater than `1`, return `-1` to signal imbalance.
   - If the subtree is balanced, determine its height by counting the current node (adding one) to the maximum height between its left and right subtrees.

2. valuate the tree's balance by computing the height of the root node using `getHeight`.
3. If the height is `-1`, it indicates the tree is unbalanced; otherwise, it's balanced.

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
  // If the computed height is -1, it means the tree is not balanced
  if (getHeight(root) === -1) {
    return false;
  }
  return true;
};

/**
 * Helper function to get the height of a node
 * @param {TreeNode} root
 * @return {number}
 */
const getHeight = (root) => {
  if (root == null) return 0; // Base case: If node is null, its height is 0

  let left = getHeight(root.left); // Compute height of left subtree
  let right = getHeight(root.right); // Compute height of right subtree

  // If any subtree (left or right) is unbalanced, return -1
  if (left === -1 || right === -1) return -1;

  // If the height difference between left and right subtree is more than 1, return -1 to indicate imbalance
  if (Math.abs(left - right) > 1) return -1;

  // Return height of current subtree rooted at the node
  return 1 + Math.max(left, right);
};
```
