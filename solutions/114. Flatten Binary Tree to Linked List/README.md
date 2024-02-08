# [114. Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/)

## Intuition

We can use a depth-first approach by setting each node's right child to the previously processed node and nullifying its left child.

## Approach

1. Start with a `prev` variable set to `null` to keep track of the previously processed node in the flattened tree.
2. Define a recursive function `flattenTree` that accepts a `node` as a parameter.
   - If the current node is `null`, return immediately as there's nothing to process.
   - Recursively flatten the right subtree first. This ensures that we process the rightmost nodes first and link them in reverse order.
   - Recursively flatten the left subtree. After the right subtree is processed and linked, we then process the left subtree.
   - After both subtrees are processed, rewire the current node:
     - Set the current node's right pointer to `prev`, which is the previously processed node in the flattened tree.
     - Set the current node's left pointer to `null` to adhere to the flattened tree's structure, where each node only has a right child.
     - Update `prev` to the current node, as it now becomes the last processed node in the flattened structure.
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

  const flattenTree = function(node) {
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
