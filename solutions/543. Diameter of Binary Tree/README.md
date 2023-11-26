# [543. Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/description/)

## Intuition

The diameter of a binary tree is the length of the longest path between any two nodes in the tree. The solution involves finding the maximum depth of left and right subtrees for each node and updating the diameter accordingly.

## Approach

1.  Initialize `max` to 0 to keep track of the maximum diameter of the Binary Tree.
2.  Define a helper function `maxDepth` to calculate the maximum depth of a subtree and update the diameter:
    - If the `root` node is null, indicating the end of a path, return 0.
    - Recursively calculate the depth of the left and right subtrees.
    - Update `max` to be the greater of its current value or the sum of the depths of the left and right subtrees. This represents the diameter passing through the current node.
    - Return the depth of the current node, which is 1 plus the maximum depth between its left and right subtrees.
3.  Start the recursive process with the root node.
4.  After executing `maxDepth`, return `max`, which represents the diameter of the Binary Tree.

## Complexity

- Time complexity: O(n), where n is the number of nodes in the binary tree. We visit each node exactly once.
- Space complexity: O(h), where h is the height of the binary tree. In the worst case, the space complexity is O(n) for a skewed tree, but in a balanced tree, it is O(log n).

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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let max = 0;

  function maxDepth(node) {
    if (node === null) return 0;

    let left = maxDepth(node.left);
    let right = maxDepth(node.right);

    // Update the maximum diameter
    max = Math.max(max, left + right);

    // Return the maximum depth
    return Math.max(left, right) + 1;
  }

  maxDepth(root);
  return max;
};
```
