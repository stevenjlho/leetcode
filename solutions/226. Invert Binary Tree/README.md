# [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)

## Intuition
We can invert a binary tree using a pre-order traversal.

## Approach

1. First, we check if the root is null; if it is, we return null as there's no tree to invert.
2. Swap the left and right children of the current `root`.
3. We recursively call the invertTree function for both the left and right subtrees.
4. Finally, we return the node root, which represents the inverted binary tree.

## Complexity
- Time complexity: O(N)
- Space complexity: O(N) Recursive stack space

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

    // Swap the nodes
    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);
    return root;
};
```
