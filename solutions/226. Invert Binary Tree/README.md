# [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)

## Intuition

We can invert a binary tree by swapping the left and right children of each node, which can be done efficiently using a recursive pre-order traversal.

## Approach

1. If `root` is `null`, return `null` as there's no tree to invert.
2. Temporarily store the left child in `temp`, then set the left child to the right child and vice versa.
3. Recursively invert the left subtree (`root.left`) and the right subtree (`root.right`).
4. After inverting both subtrees, return the `root` node which now represents the inverted binary tree.

## Complexity

- Time complexity: O(n), where `n` is the number of nodes in the binary tree. Each node is visited exactly once.
- Space complexity: O(h), where `h` is the height of the binary tree. This space is used by the recursion stack. In the worst case, when the tree is skewed, the space complexity would be O(n).

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
 * Inverts a binary tree.
 * @param {TreeNode} root - Root of the binary tree.
 * @return {TreeNode} - The root of the inverted binary tree.
 */
var invertTree = function(root) {
    if (root === null) {
        return null; // Return null if the tree is empty.
    }

    // Swap the nodes
    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    // Recursively invert the left and right subtrees.
    invertTree(root.left);
    invertTree(root.right);

    return root; // Return the root of the inverted tree.
};
```
