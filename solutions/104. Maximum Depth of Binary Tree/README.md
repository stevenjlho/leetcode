# [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/description/)

## Intuition

We'll recursively explore each branch to its deepest point, keeping track of the depth as we go.

## Approach

1. If the current `root` node is null (indicating a leaf node has been surpassed), return a depth of 0.
2. Using recursive calls, compute the depth for the left subtree and the right subtree.
3. The depth of the current node will be 1 (representing the node itself) plus the maximum depth between its left and right subtrees.

## Complexity

- Time complexity: O(n), where n is the number of nodes in the binary tree. We visit each node exactly once.
- Space complexity: O(h), where h is the height of the binary tree. In the worst case, the space complexity is O(n) for a skewed tree, but in a balanced tree, it is O(log n).

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
var maxDepth = function (root) {
  if (root === null) return 0; // Base case: If the node is null, its depth is 0
  let left = maxDepth(root.left); // Calculate the depth of the left subtree
  let right = maxDepth(root.right); // Calculate the depth of the right subtree
  return Math.max(left, right) + 1; // Determine the node's depth as 1 + max of left and right depths
};
```