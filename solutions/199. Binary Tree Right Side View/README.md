[199. Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/description/)

# Intuition

We need to ensure that for each depth level of the tree, the rightmost node is visible. This can be achieved by a modified depth-first search that prioritizes the right subtree.

# Approach

1. Create an array `result` to store the rightmost node's value at each depth level of the tree.
2. Implement a recursive helper function `collect` that traverses the tree. The function takes two parameters: `node` (the current node) and `depth` (the current depth level in the tree).

   - If the current node is null, return, as there's nothing to process.
   - Check if the current depth is equal to the length of the result array. If true, it indicates this depth level hasn't been processed yet, so add the current node's value to `result`.
   - Recursively traverses first the right subtree and then the left subtree, ensuring that rightmost nodes are processed first.

3. Call collect starting from the root node (`root`) with an initial depth of 0.
4. After the traversal, return the `result` array, which now contains the rightmost view of the binary tree.

# Complexity

- Time complexity: O(n), where n is the number of nodes in the binary tree. Each node is visited once.
- Space complexity: O(h), where h is the height of the tree. This space is used by the call stack during the recursive traversal. In the worst case, the tree could be skewed, leading to a space complexity of O(n).

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
var rightSideView = function (root) {
  let result = [];

  function collect(node, depth) {
    if (node === null) {
      return;
    }

    if (depth === result.length) {
      // If this depth hasn't been encountered, add the node's value
      result.push(node.val);
    }
    // Prioritize right subtree to ensure rightmost nodes are seen first
    collect(node.right, depth + 1);
    // Then process the left subtree
    collect(node.left, depth + 1);
  }

  // Start collecting from root
  collect(root, 0);
  return result; // Return the array containing the right side view
};
```
