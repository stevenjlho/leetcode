# 226. Invert Binary Tree

## Intuition

We can invert a binary tree using a pre-order traversal.

## Explanation

1. Check if `root` is null; if yes, return null.
2. Swap the left and right children of the current `root`.
3. Recursively call `invertTree` for both the left and right subtrees.```Javascript

```Javascript
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    if(root === null) {
        return null ;
    }

    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);
    return root;
};
```
