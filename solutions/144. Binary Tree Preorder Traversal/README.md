[144. Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/description/)

# Intuition

The goal is to perform a preorder traversal of a binary tree, which involves visiting the current node, then recursively traversing its left and right subtrees.

# Approach

1. Initialize an empty array `res` to store the nodes in the preorder traversal order.
2. Define a recursive function `traversal` that takes a `root` node as its parameter.
   - Check if the current node `root` is null. If it is, don't return anything as there's nothing to process.
   - Push the value of the current node `root.val` into the `res` array to record the visitation order.
   - Recursively call `traversal` for the left subtree(`root.left`) and right subtree (`root.right`) of the current node.
3. Call the `traversal` function, starting with the root of the binary tree.
4. After the recursive traversal, return the `res` array containing the nodes in the preorder traversal order.

# Complexity

- Time complexity: O(n), where n is the number of nodes in the binary tree. We visit each node once.
- Space complexity: O(n), as the `res` array stores the values of all nodes in the traversal.

# Code

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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let res = [];

  var traversal = (root) => {
    // If the current node is null, there's nothing to process
    if (root === null) {
      return;
    }

    // Push the value of the current node into the res array.
    res.push(root.val);

    traversal(root.left);
    traversal(root.right);
  };

  // Start the traversal with the root node.
  traversal(root);

  return res;
};
```
