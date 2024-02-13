# [98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/description/)

## Intuition

We need to ensure that the inorder traversal of the tree results is a strictly increasing sequence.

## Approach

1. Initialize an empty array `res` to store the inorder traversal sequence.
2. Define a helper function `traversal` to perform inorder traversal:
   - Return immediately if the current node (`root`) is null.
   - Recursively traverse the left subtree of the current node.
   - Append the value of the current node to `res`.
   - Recursively traverse the right subtree of the current node.
3. Call the `traversal` function starting from the root of the tree.
4. Verify that `res` forms a strictly increasing sequence:
   - Iterate through `res` and check if each element is greater than its predecessor. If any element is not, the tree is not a valid BST. Return `false` in this case.
5. Return `true` if the entire sequence is strictly increasing, confirming the tree is a valid BST.

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
  var res = []; // This will hold the inorder traversal result

  // Helper function to perform inorder traversal
  const traversal = (root) => {
    if (root === null) {
      // Base case: if node is null, just return
      return;
    }

    traversal(root.left); // Recursively traverse the left subtree
    res.push(root.val); // Record the node's value in the result
    traversal(root.right); // Recursively traverse the right subtree
  };

  // Start the inorder traversal from the root
  traversal(root);

  // Check if the recorded values in res are in strictly increasing order
  for (let i = 1; i < res.length; i++) {
    if (res[i] <= res[i - 1]) {
      // If not, it's not a BST
      return false;
    }
  }

  // If all checks passed, it's a BST
  return true;
};
```
