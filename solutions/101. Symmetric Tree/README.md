# [101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree/description/)

## Intuition

The goal is to check if a given binary tree is symmetric, meaning the left and right subtrees of the root are mirror images of each other. If it is symmetric, the tree is a symmetric tree; otherwise, it's not.

## Approach

1. Define a helper function `compareNode` that takes two tree nodes, `left` and `right`.

   - 1.1 First, check if either `left` or `right` is `null` while the other is not. If this condition is met, it indicates an asymmetry, so return `false`.
   - 1.2 Next, check if both `left` and `right` are `null`. If they are, it means the subtrees at this level are symmetric, so return `true`.
   - 1.3 Finally, check if the values of `left` and `right` nodes are not equal. If they differ, it's not a symmetric pair, so return `false`.
   - 1.4 If none of the above conditions are met, recursively check the subtrees:
   - 1.5 Create a variable of `outside`, which corresponds to comparing the left subtree of `left` with the right subtree of `right`.
   - 1.6 Create a variable of `inside`, which corresponds to comparing the right subtree of `left` with the left subtree of `right`.
   - 1.7 The result for the current pair of nodes is `outside && inside`, which ensures both sides are symmetric.

2. In the main function, check if the root is `null`. If the tree is empty, it's symmetric by definition, so return `true`.
3. If the root is not `null`, return the result from calling the `compareNode` function to check if the left and right subtrees of the root are symmetric.

## Complexity

- Time complexity: O(n) where n is the number of nodes in the binary tree. We visit each node once.
- Space complexity: O(h), where h is the height of the binary tree. This is because the recursive calls made by the solution consume memory on the call stack equal to the height of the tree.

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

    // 'outside' and 'inside' variables compare two pairs of child nodes to check for symmetry.
    const outside = compareNode(left.left, right.right);
    const inside = compareNode(left.right, right.left);
    return outside && inside;
  };

  if (root === null) {
    return true;
  }

  return compareNode(root.left, root.right);
};
```
