# [101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree/description/)

## Intuition

To determine if a tree is symmetric, the left subtree of the root must be a mirror reflection of the right subtree of the root, and vice versa.

## Approach

1. Create a helper function, `isMirror`, that checks if two given trees, `left` and `right`, are mirrors of each other.

   - If both subtrees are `null`, they're symmetric.
   - If only one of them is `null`, they aren't symmetric.
   - If the values of the `left` and `right` nodes aren't the same, they aren't symmetric.
   - Recursively check if the left subtree of the `left` tree mirrors the right subtree of the `right` tree, and vice versa.
   - If both conditions are true, return true. Otherwise, return false.

2. If the `root` is `null`, the tree is symmetric.
3. Check if the left and right subtrees of the root are mirror reflections of each other using the `isMirror` function.

## Complexity

- Time complexity: O(n), where n is the number of nodes in the binary tree. We visit each node once.
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
var isSymmetric = function (root) {
  const isMirror = function (left, right) {
    // Both trees are empty, so they're symmetric.
    if (!left && !right) return true;

    // One tree is empty, and the other isn't, so they're not symmetric.
    if (!left || !right) return false;

    // If the values differ, the trees aren't symmetric.
    if (left.val !== right.val) return false;

    // Recursively check outer (left-left vs right-right) and inner (left-right vs right-left) subtrees.
    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
  };

  if (!root) return true;

  // Check if left and right subtrees are mirrors of each other.
  return isMirror(root.left, root.right);
};
```
