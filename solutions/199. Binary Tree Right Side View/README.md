# [199. Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/description/)

## Intuition

This solution leverages depth-first search (DFS) to traverse the tree, prioritizing the right subtree to ensure that the rightmost node at each level is visited first.

## Approach

1. Create an array `result` to store the rightmost node at each depth level.
2. Implement a recursive helper function `rightView` that takes a node and its depth in the tree as arguments.  
   - If the node is null, return immediately. This handles the case of empty trees or leaf nodes.
   - If the current depth equals the length of the `result` list, it means this node is the first node being visited at this depth(hence, the rightmost), so its value is added to result.
   - The function first recurses on the right child, then on the left child. This order ensures rightmost nodes are processed first.
3. Call `rightView` with the root node and an initial depth of 0.
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
