# [530. Minimum Absolute Difference in BST](https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/)

## Intuition

Utilize in-order traversal to generate a sorted list of values from the BST, enabling the calculation of the minimum absolute difference by comparing only adjacent elements.

## Approach

1. Begin with an in-order traversal to collect node values since they will be in ascending order for a BST.
2. Initialize a variable `minValue` to `Number.MAX_SAFE_INTEGER`, guaranteeing that any real difference found will be smaller and ensuring correct initialization.
3. If the BST contains fewer than 2 nodes, return `0` because no pair exists to compare.
4. Iterate through the array, comparing each element with its predecessor to find the smallest difference.
5. Each time a smaller difference is found, update `minValue`.
6. Return `minValue`, which represents the smallest absolute difference after examining all pairs.

## Complexity

- Time complexity: Time complexity: O(N), where `N` is the number of nodes in the tree. Each node is visited once during the in-order traversal.
- Space complexity: O(N), as we store all node values in an array. The recursive stack also takes space, but it's O(H), where `H` is the height of the tree, which is less than N.

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
 * @param {TreeNode} root - Root of the binary search tree.
 * @return {number} - Minimum absolute difference between values of any two nodes.
 */
var getMinimumDifference = function (root) {
  // Array to store the values of nodes in sorted order.
  let inorderArray = [];

  // Helper function to perform in-order traversal.
  const traversal = (root) => {
    if (root === null) return;
    traversal(root.left); // Visit left subtree
    inorderArray.push(root.val); // Visit node
    traversal(root.right); // Visit right subtree
  };

  // Start the in-order traversal from root.
  traversal(root);

  // If the tree has less than 2 nodes, the minimum difference is 0.
  if (inorderArray.length < 2) {
    return 0;
  }

  // Variable to store the minimum difference found.
  let minValue = Number.MAX_SAFE_INTEGER;

  // Iterate through the sorted values to find the minimum difference.
  for (let i = 1; i < inorderArray.length; i++) {
    // Update the minValue if a smaller difference is found.
    minValue = Math.min(minValue, inorderArray[i] - inorderArray[i - 1]);
  }

  // Return the smallest difference found.
  return minValue;
};
```
