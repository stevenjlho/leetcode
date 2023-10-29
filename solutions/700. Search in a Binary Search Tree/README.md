# [700. Search in a Binary Search Tree](https://leetcode.com/problems/search-in-a-binary-search-tree/)

## Intuition

we can leverage the property of BSTs where the left subtree only contains nodes with values less than the parent node, and the right subtree only contains nodes with values greater than the parent node.

## Approach

1. If `root` is `null` or `root.val` equals `val`, return `root`; this node is either the target or indicates the target is not present.
2. If the current node's value is greater than the target `val`, search recursively in the left subtree.
3. If the current node's value is less than the target `val`, search recursively in the right subtree.
4. Return the result of the recursive search.

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
 * @param {TreeNode} root - The root node of the BST
 * @param {number} val - The value to search for in the BST
 * @return {TreeNode} - The node containing the value, if it exists; otherwise, null
 */
var searchBST = function (root, val) {
  // Base case: if the node is null or the node's value is the target value
  if (root === null || root.val === val) {
    return root;
  }

  // Recursive case: choose the appropriate subtree based on the node's value
  if (root.val > val) {
    return searchBST(root.left, val); // Search in the left subtree
  } else {
    return searchBST(root.right, val); // Search in the right subtree
  }
  // No need for a separate result variable, the return statement handles it
};
```
