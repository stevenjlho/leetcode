# [114. Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/)

## Intuition
We rearrange the nodes of a given binary tree into a linked list following a depth-first approach by setting each node's right child to the previously processed node and nullifying its left child.


## Approach

1. Initialize `prev` to track the last processed node
2. Use a recursive function to flatten the tree.
   - If the current node (`node`) is `null`, return, as there's nothing to process.
   - Flatten the right subtree first, then the left subtree. This reverse postorder traversal ensures that when a node is processed, its right subtree is already in a flattened form.
   - Set `node.right` to `prev`, effectively linking the current node to the previously processed node in the flattened structure.
   - Set `node.left` to `null`, as required in a "linked list" format.
   - Update `prev` to the current node for the next recursive.

3. Begin the flattening process from the tree's root.

## Complexity

- Time complexity: O(n), where n is the number of nodes in the tree. Each node is visited exactly once.
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  // Initialize prev to track the last processed node
  let prev = null;

  function flattenTree(node) {
    if (node === null) return;

    // Recursively flatten the right and left subtrees
    flattenTree(node.right);
    flattenTree(node.left);

    // Set right child to the last processed node
    node.right = prev;
    // Set left child to null
    node.left = null;
    // Update prev to the current node
    prev = node;
  }

  flattenTree(root);
};
```
