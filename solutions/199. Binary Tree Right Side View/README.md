# [199. Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/description/)

## Intuition

Using a depth-first search (DFS) approach that prioritizes the right subtree, It ensures that the rightmost node at each depth level is visited first.

## Approach

1. Create an array `result` to store the rightmost node at each depth level.
2. Implement a recursive helper function `rightView` that traverses the tree. 
   - If the current node is null, return, as there's nothing to process.
   - Check if the current depth is equal to the length of the result array. If true, it indicates this depth level hasn't been processed yet, so add the current node's value to `result`.
   - Recursively traverses first the right subtree and then the left subtree, ensuring that rightmost nodes are processed first.

3. Call collect starting from the root node (`root`) with an initial depth of 0.
4. After the traversal, return the `result` array, which now contains the rightmost view of the binary tree.

## Complexity

- Time complexity: O(n), where n is the number of nodes in the binary tree. Each node is visited once.
- Space complexity: O(h), where h is the height of the tree. This space is used by the call stack during the recursive traversal. In the worst case, the tree could be skewed, leading to a space complexity of O(n).

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
 * @return {number[]}
 */
var rightSideView = function (root) {
  let result = [];

  function rightView(node, depth) {
    if (node === null) {
      return;
    }

    if (depth === result.length) {
      // If this depth hasn't been encountered, add the node's value
      result.push(node.val);
    }
    // Prioritize right subtree to ensure rightmost nodes are seen first
    rightView(node.right, depth + 1);
    // Then process the left subtree
    rightView(node.left, depth + 1);
  }

  // Start collecting from root
  rightView(root, 0);
  return result;
};
```
