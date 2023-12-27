# [114. Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/)

## Intuition

We can use a depth-first approach by setting each node's right child to the previously processed node and nullifying its left child.

## Approach

1. Declare a variable `prev` to keep track of the last processed node. This variable will help in connecting each node's right child to its predecessor in the flattened structure.

2. Define a recursive function `flattenTree` that accepts a `node` as a parameter.

   - If the current node (`node`) is `null`, return, as there's nothing to process.
   - The function first recursively calls itself for `node.right` and then for `node.left`. This reverse postorder traversal ensures that each node's right subtree is already flattened when the node is processed.
   - The current `node`'s right child is set to `prev`, which is the last processed node in the flattened tree.
   - The left child of `node` is set to null, as per the requirements of a linked list.
   - Update `prev` to the current node for the next recursive.

3. Invoke `flattenTree` with `root` as the initial argument to begin the flattening process.

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
