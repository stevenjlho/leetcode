# [98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/description/)

## Intuition

We need to ensure that the inorder traversal of the tree results is a strictly increasing sequence.

## Approach

1. Initialize an empty array `result` to record the inorder traversal sequence of the tree.
2. Define a helper function `traversal` to perform inorder traversal:
   - If the current node (`root`) is `null`, simply return (base case).
   - Recursively traverse the left subtree of the current node.
   - Record the value of the current node in the `result` array.
   - Recursively traverse the right subtree of the current node.
3. Call the `traversal` function starting from the root of the tree.
4. Iterate through the `result` array:
   - Compare adjacent values. If any value at index `i` is less than or equal to the value at index `i - 1`, the tree is not a BST. In this case, return `false`.
5. If the tree is a BST, return `true`.

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
var isValidBST = function (root) {
  var result = []; // This will hold the inorder traversal result

  // Helper function to perform inorder traversal
  const traversal = (root) => {
    if (root === null) {
      // Base case: if node is null, just return
      return;
    }

    traversal(root.left); // Recursively traverse the left subtree
    result.push(root.val); // Record the node's value in the result
    traversal(root.right); // Recursively traverse the right subtree
  };

  // Start the inorder traversal from the root
  traversal(root);

  // Check if the recorded values in result are in strictly increasing order
  for (let i = 1; i < result.length; i++) {
    if (result[i] <= result[i - 1]) {
      // If not, it's not a BST
      return false;
    }
  }

  // If all checks passed, it's a BST
  return true;
};
```
