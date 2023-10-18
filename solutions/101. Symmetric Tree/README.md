# [101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree/description/)

## Intuition

To determine if a tree is symmetric, the left subtree of the root must be a mirror reflection of the right subtree of the root, and vice versa.

## Approach

1. **Base Checks**: If the root is null, the tree is symmetric.
2. Define a helper function `compareNode` to check if two nodes are symmetric.
   - If one of the two nodes is null while the other is not, they aren't symmetric.
   - If both nodes are null, they are symmetric.
   - If the values of the two nodes differ, they aren't symmetric.
   - For a tree to be symmetric around its center, its left subtree must be a mirror reflection of its right subtree. This means:
   - The left child of the left node should be symmetric with the right child of the right node (outside symmetry).
   - The right child of the left node should be symmetric with the left child of the right node (inside symmetry).
   - If both `outside` and `inside` conditions hold true, then the nodes are symmetric.
3. Invoke the compareNode function on the root's left and right subtrees to determine if the tree is symmetric.

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
  const compareNode = function (left, right) {
    // Check if either 'left' or 'right' is 'null' while the other is not.
    if (
      (left === null && right !== null) ||
      (left !== null && right === null)
    ) {
      return false;
    }

    // Check if both 'left' and 'right' are 'null', indicating symmetry.
    if (left === null && right === null) {
      return true;
    }

    // Check if the values of 'left' and 'right' nodes differ.
    if (left.val !== right.val) {
      return false;
    }

    const outside = compareNode(left.left, right.right);
    const inside = compareNode(left.right, right.left);

    // If both "outside" and "inside" checks are symmetric, return true. Otherwise, return false.
    return outside && inside;
  };

  // If the tree is empty, it's symmetric.
  if (root === null) {
    return true;
  }

  return compareNode(root.left, root.right);
};
```
